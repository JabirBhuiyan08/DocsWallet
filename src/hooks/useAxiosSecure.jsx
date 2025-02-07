import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://server-six-sigma-80.vercel.app',
})
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOut} = useAuth();

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      if (!token) {
        console.error("No token found in localStorage");
        return Promise.reject(new Error("Unauthorized"));
      }
      console.log("Attaching token:", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;
    console.error("Response error status:", status);

    if (status === 401 || status === 403) {
      console.warn("Unauthorized or forbidden, logging out...");
      await logOut();
      navigate("/login");
    }
    return Promise.reject(error);
  }
);


  return axiosSecure;
}

export default useAxiosSecure;