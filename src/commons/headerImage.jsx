import React from "react";
import { FaBars } from "react-icons/fa";
const HeaderImage = ({ imageUrl, label }) => {
  return (
    <div className="atormeter-image">
      <FaBars className=" bars " />
      <img src={process.env.PUBLIC_URL + imageUrl} alt={label} />
    </div>
  );
};

export default HeaderImage;
