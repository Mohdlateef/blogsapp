import React from "react";
import Navbar from "./fragments/navbar";
import Sidebar from "./fragments/sidebar";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
      <div className="flex flex-col  ">
        <Navbar />
        <div className="flex  h-[90vh]">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
