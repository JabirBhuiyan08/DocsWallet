import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTheme } from "../../components/ThemeContext/ThemeContext";
import PunchGuy from "../../components/Lottie/PunchGuy";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useContext, useState } from "react";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { isDarkTheme, toggleTheme } = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const result = await createUser(data.email, data.password);
      const loggedUser = result.user;

      const userInfo = { name: data.name, email: data.email };
      const res = await axiosPublic.post("/users", userInfo);

      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to create user. Please try again!",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up - Docs Wallet</title>
      </Helmet>
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

          <form onSubmit={handleSubmit(onSubmit)} aria-label="Sign Up Form">
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
                {...register("name", { required: "Name is required" })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isDarkTheme
                    ? "bg-gray-700 text-white focus:ring-purple-500"
                    : "focus:ring-purple-500"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
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
                {...register("email", { required: "Email is required" })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isDarkTheme
                    ? "bg-gray-700 text-white focus:ring-purple-500"
                    : "focus:ring-purple-500"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-4">
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
                {...register("password", { required: "Password is required" })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isDarkTheme
                    ? "bg-gray-700 text-white focus:ring-purple-500"
                    : "focus:ring-purple-500"
                }`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            {/* Sign-Up Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Sign Up Button"
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
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
            className="mt-4 text-sm text-gray-500 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Toggle Theme Button"
          >
            {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
