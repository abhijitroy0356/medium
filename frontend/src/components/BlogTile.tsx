import AppBar from "./AppBar";
import Avatar from "./Avatar";

interface Blog {
    title: string;
    content: string;
    author: {
        name: string;
    };
}

function BlogTile({ title, content, author }: Blog) {
    return (
        <div>
            <AppBar/>
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 max-w-2xl mx-auto">
    
            {/* Title Section */}
            <div className="mb-4 border-b pb-2">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            </div>

            {/* Content Section */}
            <div className="text-gray-700 space-y-4">
                <p className="text-sm text-gray-500">📅 Date: 02/02/2013</p>
                <p className="text-lg">{content}</p>
            </div>

            {/* Author Info */}
            <div className="mt-6 flex items-center gap-4 border-t pt-4">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 "><Avatar Name={author.name ? author.name:"idsk"} size={20}/> Author:</span>
                    <span className="text-md font-semibold text-gray-800">{author.name}</span>
                </div>
                <div className="text-sm text-gray-600">
                    <p>Jokester</p>
                    <p>Master of Node.js in a couple of days</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default BlogTile;
