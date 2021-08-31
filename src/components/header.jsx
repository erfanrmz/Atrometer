import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [select, setSelect] = useState(false);
  let solutionsStyle = !select
    ? "solutions-item item-hidden"
    : "solutions-item item-visible";
  let tooltipStyle = !select ? "tooltip item-hidden" : "tooltip item-visible";
  let backgroundChoice = !select
    ? "header bg-header1-image"
    : "header bg-header2-image";
  return (
    <div className={backgroundChoice}>
      <div className="filter flex">
        <div className="flex-1">
          <FaBars />
          <p className="motto ">
            آتروان انتخاب
            <br /> راهکار هوشمندانه
          </p>
        </div>
        <div className="solutions flex-1">
          <div className={tooltipStyle}>
            <button className={solutionsStyle}>
              <img
                src={process.env.PUBLIC_URL + "/Atrometer.svg"}
                alt="آترومتر"
                className="m-auto"
              />
            </button>
            <span class="tooltiptext">
              قرائت از مرحله ی انتخاب قرایت سازمانی برق بر اساس استاندارد
              IEC6205621 قابل اطلاعات قابل قرائت از کنتور های
            </span>
          </div>
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
