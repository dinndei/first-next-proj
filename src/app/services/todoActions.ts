import axios from "axios";

export const getToDos = async (): Promise<todo[]> => {
    try {
        let res = await axios.get<{ todos: todo[] }>('https://dummyjson.com/todos',
            {
                headers: { 'Cache-control': 'no-cache' }
            });
        return res.data.todos;
    }
    catch (error) {
        console.error(error)
        return [];
    }

}

export const getToDoByID = async (id: string): Promise<todo> => {
    try {
        let res = await axios.get(`https://dummyjson.com/todos/${id}`,
            {
                headers: { 'Cache-control': 'no-cache' }
            });
        return res.data;
    }
    catch (error) {
        console.error(error)
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            console.error(`Todo with ID ${id} not found`);
           throw error;
        }
        throw error;
    }

}