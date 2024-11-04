import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-1.png";

const NavBar = () => {
  // State to manage theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  // Apply theme on mount and on theme change
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <div className={`navbar bg-base-100 w-full ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/data-policy">Data Policy</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/help-center">Help Center</Link></li>
            <li><Link to="/logout">Log Out</Link></li>
            <li>
              <input
                type="checkbox"
                checked={isDarkTheme}
                onChange={toggleTheme}
                className="toggle theme-controller border-sky-400 bg-amber-300"
              />
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="w-40" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={`navbar-center hidden lg:flex`}>
        <ul className={`menu menu-horizontal px-1 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/data-policy">Data Policy</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/help-center">Help Center</Link></li>
          <li><Link to="/logout">Log Out</Link></li>
          <li>
            <input
              type="checkbox"
              checked={isDarkTheme}
              onChange={toggleTheme}
              className="toggle theme-controller border-sky-400 bg-amber-300"
            />
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
