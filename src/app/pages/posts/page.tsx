'use client';
import { getPosts } from "@/app/services/postActions";
import { useEffect, useState } from "react";

interface postApi {
    id: number;
    title: string;
    body: string;
}

const page = () => {
    const [posts, setPosts] = useState<postApi[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await getPosts();
                setPosts(res);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center bg-pink-100 py-10">
            <h1 className="text-4xl font-bold text-purple-700 mb-8">Posts List</h1>
            <div className="w-full max-w-3xl space-y-6">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="p-6 bg-purple-50 border-l-4 border-purple-600 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                        <h2 className="text-2xl font-semibold text-pink-600 mb-2">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;
