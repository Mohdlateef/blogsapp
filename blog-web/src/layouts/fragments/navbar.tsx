import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center bg-gradient-to-r from-teal-400 to-blue-500 p-4 sticky top-0 shadow-lg">
        {/* Logo Section */}
        <span className="text-white text-2xl font-semibold">Logo</span>

        {/* User Info Section */}
        <div className="flex items-center space-x-4">
          <span className="px-4 py-2 bg-white text-teal-500 rounded-full hover:bg-teal-100 transition-colors duration-300">
            profile
          </span>
        </div>
      </div>
    </div>
  );
}
