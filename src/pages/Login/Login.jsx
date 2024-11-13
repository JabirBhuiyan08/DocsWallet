import { useContext} from "react";
import logo from "../../assets/logo-2.png";
import { useTheme } from "../../components/ThemeContext/ThemeContext";
// import Footer from "../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const {signIn}= useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form =event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    })
  }

  return (
    <>
    <Helmet><title>Login - Docs Wallet</title></Helmet>
    <div
      className={`min-h-screen flex items-center justify-center flex-col ${
        isDarkTheme ? "bg-slate-850 text-white" : "bg-purple-50 text-black"
      }`}
    >
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold">
            Login{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-900">
              now!
            </span>
          </h1>
          <p className="py-6 font-bold">
            Welcome Back!{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-900">
              Your Trust Our Responsibility
            </span>
          </p>
        </div>
        <div>
          <img className="w-60" src={logo} alt="Logo" />
        </div>
        <div
          className={`w-full rounded-lg p-6 ${
            isDarkTheme ? "bg-gray-800" : "bg-white"
          }`}
        >
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span
                  className={`label-text font-medium ${
                    isDarkTheme ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={`input input-bordered ${
                  isDarkTheme
                    ? "bg-gray-700 text-white border-gray-600 focus:border-purple-500"
                    : "border-blue-300 focus:border-violet-500"
                } focus:outline-none`}
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control mt-4">
              <label className="label">
                <span
                  className={`label-text font-medium ${
                    isDarkTheme ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className={`input input-bordered ${
                  isDarkTheme
                    ? "bg-gray-700 text-white border-gray-600 focus:border-purple-500"
                    : "border-blue-300 focus:border-violet-500"
                } focus:outline-none`}
                required
              />
              <label className="label">
                <a
                  href="#"
                  className={`label-text-alt link link-hover ${
                    isDarkTheme ? "text-purple-400" : "text-violet-500"
                  }`}
                >
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Login Button */}
            <div className="form-control mt-6">
              <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-transparent border-2 border-blue-600 rounded-lg hover:bg-gradient-to-r from-blue-600 to-violet-600 group">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 transform scale-110 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg group-hover:scale-125 opacity-75" />
                <span className="relative">Login</span>
              </button>
            </div>
            <p className="text-center mt-4">
              <span
                className={`${isDarkTheme ? "text-gray-400" : "text-gray-600"}`}
              >
                Don’t have an Account?{" "}
              </span>
              <a
                href="/signup"
                className={`${
                  isDarkTheme ? "text-purple-400" : "text-violet-600"
                } font-semibold hover:underline`}
              >
                Create New Account
              </a>
            </p>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`mt-6 text-sm font-semibold ${
                isDarkTheme
                  ? "text-gray-400 hover:text-purple-300"
                  : "text-gray-500 hover:text-purple-500"
              }`}
            >
              {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
            </button>
          </form>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm">
            <span
              className={`font-semibold ${
                isDarkTheme ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Users:
            </span>{" "}
            4k&nbsp;|&nbsp;
            <span
              className={`font-semibold ${
                isDarkTheme ? "text-purple-400" : "text-violet-600"
              }`}
            >
              Review:
            </span>{" "}
            4/5 ⭐️
          </p>
        </div>
      </div>
    </div>
         </>     
  );
};

export default Login;
