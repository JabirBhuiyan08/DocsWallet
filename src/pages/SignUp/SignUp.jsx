import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../components/ThemeContext/ThemeContext";
import PunchGuy from "../../components/Lottie/PunchGuy";

const SignUp = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div
      className={`flex flex-col md:flex-row-reverse md:justify-between lg:justify-between lg:mr-0 items-center justify-center min-h-screen p-4 md:p-8 lg:p-16 ${
        isDarkTheme ? "bg-slate-850 text-white" : "bg-white text-black"
      }`}
    >
      {/* Left Section with Animation and Slogan */}
      <div className="flex flex-col items-center md:flex-row md:ml-16 md:items-center -mb-10 mr-0 md:mr-8 mb-8 md:mb-0 w-1/2 md:w-full lg:w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-right md:text-left text-violet-800 -mb-8 md:ml-0">
          Just Do It
        </h1>
        <PunchGuy />
      </div>

      {/* Sign-Up Form Section */}
      <div
        className={`w-full max-w-md rounded-lg shadow-md p-6 ${
          isDarkTheme ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent mb-8">
          Create Your Account
        </h1>

        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label
              className={`block font-semibold mb-1 ${
                isDarkTheme ? "text-purple-300" : "text-purple-600"
              }`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                isDarkTheme
                  ? "bg-gray-700 text-white focus:ring-purple-500"
                  : "focus:ring-purple-500"
              }`}
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className={`block font-semibold mb-1 ${
                isDarkTheme ? "text-purple-300" : "text-purple-600"
              }`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                isDarkTheme
                  ? "bg-gray-700 text-white focus:ring-purple-500"
                  : "focus:ring-purple-500"
              }`}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              className={`block font-semibold mb-1 ${
                isDarkTheme ? "text-purple-300" : "text-purple-600"
              }`}
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                isDarkTheme
                  ? "bg-gray-700 text-white focus:ring-purple-500"
                  : "focus:ring-purple-500"
              }`}
              placeholder="Enter your password"
            />
          </div>

          {/* Sign-Up Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link to="/login">
            <span
              className={`font-semibold hover:underline ${
                isDarkTheme ? "text-purple-300" : "text-purple-600"
              }`}
            >
              Log In
            </span>
          </Link>
        </p>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="mt-4 text-sm text-gray-500 hover:text-purple-500"
        >
          {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
        </button>
      </div>
    </div>
  );
};

export default SignUp;
