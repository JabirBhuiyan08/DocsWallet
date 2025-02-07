import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useTheme } from "../../../components/ThemeContext/ThemeContext"; // Import the theme context

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const { isDarkTheme, toggleTheme } = useTheme();

  // Declare state for managing mobile menu toggle
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  // Toggle the mobile menu when clicking the hamburger icon
  const toggleNavMenu = () => setNavMenuOpen(!navMenuOpen);

  const navOptions = (
    <>
      {/* Main navigation links */}
      <ul
        className={`lg:flex lg:space-x-4 ${navMenuOpen ? "block" : "hidden"} lg:block`}
      >
        <li>
          <Link to="/" className="block py-2 px-4">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="block py-2 px-4">
            About
          </Link>
        </li>
        <li>
          <Link to="/help-center" className="block py-2 px-4">
            Help Center
          </Link>
        </li>

        {/* Blog Dropdown for small devices */}
        <li className="lg:hidden">
          <details className="dropdown">
            <summary className="block py-2 px-4 cursor-pointer">Blog Container</summary>
            <ul className="menu menu-sm dropdown-content bg-gray-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/blogs" className="block py-2 px-4">
                  Blogs
                </Link>
              </li>
              {user ? (
                <li>
                  <Link to={"/blog-post"} className="block py-2 px-4">
                    Blog Post
                  </Link>
                </li>
              ) : null}
            </ul>
          </details>
        </li>

        {/* Blog Dropdown for large screens */}
        <div className="navbar-center hidden lg:flex -mt-2">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Blog Container</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/blogs" className="block py-2 px-4">
                      Blogs
                    </Link>
                  </li>
                  {user ? (
                    <li>
                      <Link to={"/blog-post"} className="block py-2 px-4">
                        Blog Post
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <li>
          <Link to="/work-details" className="block py-2 px-2">
            Work Details
          </Link>
        </li>

        {/* Conditional profile or signup link */}
        {user ? (
          <li>
            {/* Admin link is commented out for now */}
            {/* <Link to="/admin" className="block py-2 px-4">Admin</Link> */}
          </li>
        ) : (
          <li>
            <Link to="/signup" className="block py-2 px-4">
              Sign Up
            </Link>
          </li>
        )}

        {/* Theme Toggle */}
        <li className="-mt-2 ml-6">
          <input
            type="checkbox"
            checked={isDarkTheme}
            onChange={toggleTheme}
            className="toggle theme-controller mt-2 border-sky-400 bg-amber-300"
          />
        </li>
      </ul>
    </>
  );

  return (
    <div
      className={`navbar fixed top-0 left-0 right-0 z-50 bg-opacity-50 max-w-screen-xl mx-auto ${
        isDarkTheme ? "bg-purple-950 text-white" : "bg-purple-50 text-black"
      }`}
    >
      {/* Navbar for small screens */}
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleNavMenu} // Toggle mobile menu when clicked
          >
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
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow ${
              isDarkTheme ? "bg-gray-800 text-white" : "bg-slate-600 text-white"
            } rounded-box w-52`}
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Docs Wallet
        </Link>
      </div>

      {/* Navbar for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      {/* "Get Started" button */}
      {user ? (
        <Link to="/profile" className="navbar-end mr-10">
          <a className="btn">Profile</a>
        </Link>
      ) : (
        <Link to="/login" className="navbar-end mr-10">
          <a className="btn">Login</a>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
