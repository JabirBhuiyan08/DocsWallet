import React from "react";
import logo from "../../assets/logo-2.png";
import { Link } from "react-router-dom";

const MiddelBar = () => {
  return (
    <div className="mb-14 lg:mb-32 flex flex-col items-center">
      <div className="">
        <img
          className="w-96 mx-auto -mb-20 -mt-4 lg:-mt-14 lg:-mb-20"
          src={logo}
          alt=""
        />
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Like A Document Wallet,{" "}
          <span className="text-purple-600">100% Secure site.</span>
        </h2>
        <h2 className="text-xl font-bold">Your Trust Our Responsibility</h2>
      </div>
      <div>
        <Link to={"/signup"}>
          <button className="btn border-6 border-blue-600 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full sm:btn-sm md:btn-md lg:btn-lg mt-8 hover:from-violet-600 hover:to-blue-600">
            Sign Up Now!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MiddelBar;
