import React, { Component, useState } from "react";

const Header = () => {
  const [select, setSelect] = useState(false);
  let solutionsStyle = !select ? "solutions-item button-hidden" : "solutions-item button-visible";
  let backgroundChoice = !select
    ? "header bg-header1-image"
    : "header bg-header2-image";
  return (
    <div className={backgroundChoice}>
      <div className="filter flex">
        <div className="flex-1">
          <p className="motto ">
            آتروان انتخاب
            <br /> راهکار هوشمندانه
          </p>
        </div>
        <div className="solutions flex-1">
          <button className={solutionsStyle}>
            <img
              src={process.env.PUBLIC_URL + "/Atrometer.svg"}
              alt="آترومتر"
              className="m-auto"
            />
          </button>
          <button className={solutionsStyle}>
            <img
              src={process.env.PUBLIC_URL + "/navgon.png"}
              alt="ناوگون"
              className="m-auto w-4/5"
            />
          </button>
          <button className={solutionsStyle}>
            <img
              src={process.env.PUBLIC_URL + "/Atrocell.svg"}
              alt="آتروسل"
              className="m-auto "
            />
          </button>
          <button
            className="solutions-button"
            onClick={() => {
              setSelect(!select);
            }}
          >
            راهکارها
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
