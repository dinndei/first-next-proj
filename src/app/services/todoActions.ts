import axios from "axios";

export const getToDos = async (): Promise<todo[]> => {
    try {
        let res = await axios.get<{todos:todo[]}>('https://dummyjson.com/todos',
        {
            headers:{'Cache-control':'no-cache'}
        });
        return res.data.todos;
    }
    catch (error) {
        console.error(error)
        return [];
    }

}