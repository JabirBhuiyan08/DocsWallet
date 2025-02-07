import { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useTheme } from "../../components/ThemeContext/ThemeContext";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import md5 from "md5";
import Swal from "sweetalert2";

const UserDetails = () => {
  const { logOut } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isDarkTheme } = useTheme();

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("access-token");
      if (token) {
        const response = await axios.get("https://server-six-sigma-80.vercel.app/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const getGravatarUrl = useMemo(
    () => (email) => `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}?d=identicon`,
    []
  );

  const handleLogOut = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to Log Out?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log Out",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        await logOut();
        console.log("Logged out successfully");
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
  };

  const themeClass = isDarkTheme ? "bg-slate-850 text-white" : "bg-purple-50 text-black";
  const cardClass = isDarkTheme ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800";

  if (loading) {
    return (
      <div className={`flex justify-center items-center min-h-screen ${themeClass}`}>
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className={`flex justify-center items-center min-h-screen ${themeClass}`}>
        <div className="text-lg font-semibold">No profile data available</div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center p-4 mt-16 ${themeClass}`}>
      {/* Avatar Section */}
      <div className="avatar mb-6">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img
              src={profile.photoURL || getGravatarUrl(profile.email)}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className={`text-center shadow-md rounded-lg p-6 w-full max-w-lg ${cardClass}`}>
        <h2 className="text-2xl font-semibold text-center mb-4 uppercase">{profile.name}</h2>
        <div className="text-lg mb-2">
          <strong>Name:</strong> <span className="uppercase">{profile.name || "Not Provided"}</span>
        </div>
        <div className="text-lg mb-2">
          <strong>Email:</strong> {profile.email}
        </div>
        <div className="flex justify-center flex-col gap-4 mt-6">
          <Link
            to="/work-details"
            className="btn bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-md px-6 py-2 hover:from-violet-600 hover:to-blue-600 transition duration-200"
          >
            Upload Work Details
          </Link>
          <button
            onClick={handleLogOut}
            className="btn bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-md px-6 py-2 hover:from-violet-600 hover:to-blue-600 transition duration-200"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
