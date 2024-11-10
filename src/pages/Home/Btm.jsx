import React from "react";
import logo2 from "../../assets/logo-2.png";
import logo1 from "../../assets/logo-1.png";
const Btm = () => {
  return (
    <div>
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-purple-400 text-primary-content grid place-content-center text-9xl font-black">
          <img className="w-40 lg:w-80" src={logo2} alt="" />
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 grid place-content-center text-9xl font-black">
            <img src={logo1} alt="" />
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default Btm;
