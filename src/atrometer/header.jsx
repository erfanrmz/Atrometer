import React, { Component } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <div className="atrometer-logo">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/atrometerLogo.svg"}
            alt="Atrometer logo"
          />
          <p>
            سامانه هوشمند قرائت <span className="text-orange">آب،برق،گاز</span>
          </p>
        </div>
      </div>
      <div className="atormeter-image">
        <FaBars className=" bars " />
        <img src={process.env.PUBLIC_URL + "/organization.svg"} alt="" />
      </div>
    </div>
  );
};

export default Header;
