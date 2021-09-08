import React, { Component } from "react";
import AtrometerLogo from "../commons/atrometerLogo";
import HeaderImage from "../commons/headerImage";

const Header = ({ imageUrl, label }) => {
  return (
    <div className="header-container">
      <AtrometerLogo />
      <HeaderImage imageUrl={imageUrl} label={label} />
    </div>
  );
};

export default Header;
