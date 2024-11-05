import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AboutUs from "../pages/About/AboutUs";
import HelpCenter from "../pages/HelpCenter/HelpCenter";
import ContactUs from "../pages/HelpCenter/ContactUs";


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
        }
        
      ],
    },
  ]);