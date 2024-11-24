import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/home";
import Profile from "../views/Profile/Profile";

import MainLayout from "../layouts/MainLayout";
import { SingUp } from "../views/Auth/SignUp";
import SignIn from "../views/Auth/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
  {
    // Authantication
    path:'/signUp',
    element:<SingUp/>
  },
  {
    path:'/signIn',
    element:<SignIn/>
  }
]);
export default router;
