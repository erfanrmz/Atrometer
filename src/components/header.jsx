import React, { Component, useState } from "react";

const Header = () => {
  const [select, setSelect] = useState(false);
  let style = !select ? "font-extrabold bg-gray hover:bg-dark-blue  text-5xl rounded-full text-blue-700 text-base mb-6 w-64 h-24 button-hidden duration-500" : "font-extrabold bg-gray hover:bg-dark-blue  text-5xl rounded-full text-blue-700 text-base mb-6 w-64 h-24 button-visible duration-500";
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
          <button className={style}>
            <img
              src={process.env.PUBLIC_URL + "/Atrometer.svg"}
              alt="آترومتر"
              className="m-auto"
            />
          </button>
          <button className={style}>
            <img
              src={process.env.PUBLIC_URL + "/navgon.png"}
              alt="ناوگون"
              className="m-auto w-4/5"
            />
          </button>
          <button className={style}>
            <img
              src={process.env.PUBLIC_URL + "/Atrocell.svg"}
              alt="آتروسل"
              className="m-auto "
            />
          </button>
          <button className="font-extrabold bg-white hover:bg-dark-blue text-primary hover:text-white  text-5xl rounded-full  text-base mt-16 bottom-48 w-64 h-24 " onClick={() => setSelect(true)}>
            راهکارها
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
