import axios from "axios";

export const getPosts = async (): Promise<postApi[]> => {
    try {
        let res = await axios.get<{ posts: postApi[] }>('http://localhost:3000/api/get',
            {
                headers: { 'Cache-control': 'no-cache' }
            });
        return res.data.posts;
    }
    catch (error) {
        console.error(error)
        return [];
    }

}

