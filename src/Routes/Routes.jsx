import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AboutUs from "../pages/About/AboutUs";
import HelpCenter from "../pages/HelpCenter/HelpCenter";
import ContactUs from "../pages/HelpCenter/ContactUs";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import BlogPost from "../pages/Blog/BlogPost";
import Blog from "../pages/Blog/Blogs";
import BlogDetails from "../pages/Blog/BlogDetails";
import AddWork from "../pages/AddWork/Work";
import AdminPage from "../pages/Profile/AdminPage";


  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
            path: "signup",
            element: <SignUp></SignUp>,
        },
        {
          path: "about-us",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "help-center",
          element:<HelpCenter></HelpCenter>
        },
        {
          path: "contact-us",
          element:<ContactUs></ContactUs>
        },
        {
          path: "profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
        path: "blog-post",
        element: <PrivateRoute><BlogPost></BlogPost></PrivateRoute>
        },
        {
          path: "blogs",
          element: <Blog></Blog>
        },
        {
          path: "blog/:title",
          element: <BlogDetails></BlogDetails>
        },
        {
          path: "work-details",
          element:<PrivateRoute><AddWork></AddWork></PrivateRoute>
        },
        {
          path: "admin",
          element:<PrivateRoute><AdminPage></AdminPage></PrivateRoute>
        },

      ],
    },
  ]);