import React, { Component } from "react";

const Header = () => {
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
          <button className="font-extrabold bg-white  text-5xl rounded-full text-blue-700 text-base mb-6  w-64 h-24 ">
            راهکارها
          </button>
          <button className="font-extrabold bg-white  text-5xl rounded-full text-blue-700 text-base mb-6 w-64 h-24 ">
            راهکارها
          </button>
          <button className="font-extrabold bg-white  text-5xl rounded-full text-blue-700 text-base mb-6 w-64 h-24 ">
            راهکارها
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
