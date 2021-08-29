import React, { Component, useState } from "react";

const Header = () => {
  const [select, setSelect] = useState(false);
  const handleSolutionsClick = () => {
    select = true;
  };

  return (
    <div className="header bg-header1-image">
      <div className="filter flex">
        <div className="flex-1">
          <p className="text-heading text-white font-extrabold mt-36 mr-36 ">
            آتروان انتخاب
            <br /> راهکار هوشمندانه
          </p>
        </div>
        <div className="flex-1 flex flex-col absolute left-52 top-64 ">
          <button className="font-extrabold bg-dark-blue justify-center  text-5xl rounded-full text-blue-700 text-base mb-6  w-64 h-24 ">
            <img
              src={process.env.PUBLIC_URL + "/Atrometer.svg"}
              alt="آترومتر"
              className="m-auto"
            />
          </button>
          <button className="font-extrabold bg-gray  text-5xl rounded-full text-blue-700 text-base mb-6 w-64 h-24  ">
            <img
              src={process.env.PUBLIC_URL + "/navgon.png"}
              alt="ناوگون"
              className="m-auto w-4/5"
            />
          </button>
          <button className="font-extrabold bg-gray  text-5xl rounded-full text-blue-700 text-base mb-6 w-64 h-24  ">
            <img
              src={process.env.PUBLIC_URL + "/Atrocell.svg"}
              alt="آتروسل"
              className="m-auto "
            />
          </button>
          <button className="font-extrabold bg-white  text-5xl rounded-full text-blue-700 text-base mt-16 bottom-48 w-64 h-24 ">
            راهکارها
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
