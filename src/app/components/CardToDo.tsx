'use client'
import { useState } from "react";
import { useTodoStore } from "../store/toDoListStore";


const CardToDo: React.FC<CardToDoProps> = ({ item, displayButton }) => {

    const { toggleTodo, deleteTodo, editTodo } = useTodoStore();
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(item.todo);


    const handleEdit = () => {
        editTodo(item.id, { id: item.id, todo: editedText, completed: item.completed, userId: item.userId });
        setIsEditing(false);
    };

    return (
        <div className="w-2/3 border border-gray-300 rounded-lg p-4 shadow-md bg-white transition duration-200 hover:shadow-lg mb-4">
            <div className="flex items-center justify-between mb-2">
                {isEditing ? (
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 w-100%"
                    />
                ) : (
                    <div className="text-lg font-semibold text-gray-800">{item.todo}</div>
                )}
                <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => {
                        console.log("Checkbox clicked for ID:", item.id);
                        toggleTodo(item.id);
                    }}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
            </div>
            <div className="flex justify-end">
                {displayButton && <button
                    type="button"
                    className="px-4 py-2 bg-black text-white font-bold rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2"
                    onClick={() => window.location.href = `./${item.id}`}
                >
                    Show More
                </button>}
                <button
                    type="button"
                    className="px-4 py-2 bg-black text-white font-bold rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2"
                    onClick={() => deleteTodo(item.id)}
                >
                    delete
                </button>
                {isEditing ? (
                    <button
                        type="button"
                        className="px-4 py-2 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                        onClick={handleEdit}
                    >
                        Save
                    </button>
                ) : (
                    <button
                        type="button"
                        className="px-4 py-2 bg-black text-white font-bold rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        onClick={() => setIsEditing(true)}
                    >
                        edit
                    </button>
                )}
            </div>
        </div>

    );
}

export default CardToDo;