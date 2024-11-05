'use client'

import CardToDo from "@/app/components/CardToDo";
import { getToDos } from "@/app/services/todoActions";
import { useTodoStore } from "@/app/store/toDoListStore";
import { useEffect, useState } from "react";

const page = () => {

    const { todos, loadTodos, addTodo } = useTodoStore();
    const [newTodoText, setNewTodoText] = useState<string>("");


    useEffect(() => {
        loadTodos();
    }, []);

    const handleAddTodo = () => {
        if (newTodoText.trim()) {
            addTodo({ todo: newTodoText, completed: false, userId: 1, id: Date.now() });
            setNewTodoText("");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">To Do List</h1>
            <div className="flex mb-4">
                <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodoText(e.target.value)}
                    placeholder="enter task to do here"
                    className="border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button
                    type="button"
                    onClick={handleAddTodo}
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg hover:bg-blue-700 transition duration-200"
                >add task</button>
            </div>
            <div className="flex flex-col items-center mt-4 w-full ">
                {todos.map((item: todo, index: number) => {
                    return <CardToDo key={index} item={item} displayButton={true} />
                })}
            </div>
        </div>
    );
}

export default page;