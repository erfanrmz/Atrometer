import React, { Component } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex ">
      <div className="flex-1 m-auto ">
        <div className="">
          <img
            src={process.env.PUBLIC_URL + "/atrometerLogo.svg"}
            alt=""
            className="m-auto "
          />
          <p className="font-extrabold text-xl text-center ">
            سامانه هوشمند قرائت <span className="text-orange">آب،برق،گاز</span>
          </p>
        </div>
      </div>
      <div className="flex-1 m-auto mt-12 mr-5">
        <FaBars className=" bars " />
        <img src={process.env.PUBLIC_URL + "/organization.svg"} alt="" />
      </div>
    </div>
  );
};

export default Header;
