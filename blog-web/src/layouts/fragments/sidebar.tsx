import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-evenly w-1/6 max-h-[90vh] bg-blue-600 text-white p-4 ">
      <NavLink to="/" className="px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200" >
        Home
      </NavLink>
      <NavLink to="/profile" className="px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200" >
        Profile
      </NavLink>
      <NavLink to="/myPost" className="px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200" >
        My-Blogs
      </NavLink>
     
      <button className="px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
        Logout
      </button>
      <button className="px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
        Logout from All
      </button>
    </div>
  );
}
