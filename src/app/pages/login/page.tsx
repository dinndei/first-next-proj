import React from "react";

const page: React.FC = () => {
    return (
        <div className="border border-gray-500 w-100 h-250 gap-5  p-4 flex flex-col items-center justify-center h-screen bg-gray-100 shadow-xl">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.svg"
                alt="img"
                className="w-32 h-32 border rounded-full shadow-l"
            />
            <h3 className="flex items-center justify-center text-blue-600 text-xl font-bold font-mono">gosh borowol</h3>
            <h4 className="font-mono">software engineere</h4>
            <nav className="flex flex-row gap-1">
                <a href="http://www.instagram.com"
                >
                    <img
                        src="https://cdn.pixabay.com/photo/2022/04/01/05/40/app-7104075_640.png"
                        className="w-10 h-10"
                    />
                </a>
                <a href="http://www.facebook.com"
                >
                    <img
                        src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc"
                        className="w-10 h-10"
                    />
                </a>
                <a href="http://www.github.com"
                >
                    <img
                        src="https://avatars.githubusercontent.com/u/59704711?s=200&v=4"
                        className="w-10 h-10"
                    />
                </a>
            </nav>
            <button className="px-4 py-2 bg-black text-white font-bold rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">call me</button>
        </div>
    );
}

export default page;