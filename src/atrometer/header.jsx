import React, { Component } from "react";
import AtrometerLogo from "../commons/atrometerLogo";
import HeaderImage from "../commons/headerImage";

const Header = ({ imageUrl, label, headerImageStyles }) => {
  return (
    <div className="header-container mt-8">
      <AtrometerLogo />
      <HeaderImage
        imageUrl={imageUrl}
        label={label}
        headerImageStyles={headerImageStyles}
      />
    </div>
  );
};

export default Header;
