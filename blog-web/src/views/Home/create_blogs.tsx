import React from "react";
import { createBlog } from "../../apiServices/blogs/createBlog";

export default function CreateBlogs() {
  const [blogInput, setBlogInput] = React.useState <any>("");

  const handleSubmit = () => {
  
    if(blogInput.length===0)
      alert("Please enter some text!");
    
  };

  return (
    <div className="bg-gray-800 w-full rounded-lg">
      <div className="bg-gray-800 flex items-start gap-2 p-1 rounded-lg shadow-lg max-w-5xl ">
        {/* Logo */}
        <span className="text-white text-2xl font-semibold">Logo</span>

        {/* Textarea for blog input */}
        <textarea
          placeholder="What's happening?"
          value={blogInput}
          onChange={(e) => setBlogInput(e.target.value)}
          className="bg-transparent w-full h-20 p-1 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end p-3">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none"
        >
         Create
        </button>
      </div>
    </div>
  );
}