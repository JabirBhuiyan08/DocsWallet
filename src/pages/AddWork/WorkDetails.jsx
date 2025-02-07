import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import md5 from "md5";

const WorkDetails = ({ refetch }) => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [profile, setProfile] = useState({}); // State for user profile

  // Fetch user profile from backend
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosSecure.get("/user");
        setProfile(response.data); // Assuming the response contains { name, email, photoURL }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [axiosSecure]);

  const getGravatarUrl = (email) => {
    const hash = md5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
  };

  const onSubmit = async (data) => {
    try {
      const workData = {
        ...data,
        email: user.email,
        createdAt: new Date(),
      };

      const response = await axiosSecure.post("/works", workData);
      if (response.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Work Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          if (refetch) refetch(); // Trigger a refetch if provided
        });
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to add work. Please try again!",
        });
      }
    } catch (error) {
      console.error("Error adding work:", error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to add work. Please try again!",
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-16 mb-4 items-center gap-6">
      {/* Avatar and user details section */}
      <div className="flex flex-col md:flex-col gap-6 items-center ">
        <div className="avatar online">
          <div className="w-20 md:w-24 rounded-full">
            <img
              src={profile.photoURL || getGravatarUrl(user.email)}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold uppercase">
            {profile.name || "Your Name"}
          </h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Input section for hours and date */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row items-center gap-4"
      >
        <input
          id="jobTitle"
          {...register("jobTitle", { required: "Job title is required" })}
          type="text"
          placeholder="Job Title / Description"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          id="hours"
          {...register("hours", { required: "Hours is required" })}
          type="number"
          placeholder="Hours"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          id="PerHourRate"
          {...register("PerHourRate", {
            required: "Per Hour Rate is required",
          })}
          type="number"
          placeholder="Per Hour Rate"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          id="date"
          {...register("date", { required: "Date is required" })}
          type="date"
          placeholder="Date"
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkDetails;
