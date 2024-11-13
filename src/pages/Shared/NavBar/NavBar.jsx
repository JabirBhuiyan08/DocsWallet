import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useTheme } from "../../../components/ThemeContext/ThemeContext"; // Import the theme context

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { isDarkTheme, toggleTheme } = useTheme(); // Access theme context

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link>{user?.email}</Link>
          </li>
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      )}
      <li>
        {/* Theme Toggle */}
        <input
          type="checkbox"
          checked={isDarkTheme}
          onChange={toggleTheme}
          className="toggle theme-controller border-sky-400 bg-amber-300 ml-4"
        />
      </li>
    </>
  );

  return (
    <div
      className={`navbar fixed z-10  bg-opacity-50 max-w-screen-xl mx-auto ${
        isDarkTheme ? "bg-purple-950 text-white" : "bg-purple-50 text-black"
      }`}
    >
      {/* Navbar for small screens */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>

      {/* Navbar for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      {/* "Get Started" button */}
      <Link to="/login" className="navbar-end mr-10">
        <a className="btn">Login</a>
      </Link>
    </div>
  );
};

export default NavBar;
