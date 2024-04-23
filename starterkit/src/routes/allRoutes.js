import React from "react";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";

//Utility
import Pages404 from "../pages/Utility/pages-404";
import Pages500 from "../pages/Utility/pages-500";

// Dashboard
import Dashboard from "../pages/Dashboard/index";


const userRoutes = [
  { path: "/dashboard", component: <Dashboard /> },

  // //profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  { path: "/", component: <Dashboard /> },
];

const authRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/pages-404", component: <Pages404 /> },
  { path: "/pages-500", component: <Pages500 /> },
];

export { userRoutes, authRoutes };
