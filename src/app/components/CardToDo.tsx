
const CardToDo: React.FC<CardToDoProps> = ({ item }) => {

    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white transition duration-200 hover:shadow-lg mb-4">
            <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-semibold text-gray-800">{item.todo}</div>
                <input
                    type="checkbox"
                    checked={item.completed}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
            </div>
            <div className="flex justify-end">
                <button
                    type="button"
                    className="px-4 py-2 bg-black text-white font-bold rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Show More
                </button>
            </div>
        </div>

    );
}

export default CardToDo;