import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import SolutionItem from "../commons/solutionItem";

const Header = () => {
  const [select, setSelect] = useState(false);
  const motto = "آتروان انتخاب  راهکار هوشمندانه";
  const solutions = [
    {
      label: "آترومتر",
      imageUrl: `${process.env.PUBLIC_URL + "/Atrometer.svg"}`,
      tooltipText:
        "قرائت از مرحله ی انتخاب قرایت سازمانی برق بر اساس استانداردIEC6205621 قابل اطلاعات قابل قرائت از کنتور های",
      style: "",
    },
    {
      label: "ناوگون",
      imageUrl: `${process.env.PUBLIC_URL + "/navgon.png"}`,
      tooltipText:
        "قرائت از مرحله ی انتخاب قرایت سازمانی برق بر اساس استانداردIEC6205621 قابل اطلاعات قابل قرائت از کنتور های",
      style: "w-4/5",
    },
    {
      label: "آتروسل",
      imageUrl: `${process.env.PUBLIC_URL + "/Atrocell.svg"}`,
      tooltipText:
        "قرائت از مرحله ی انتخاب قرایت سازمانی برق بر اساس استانداردIEC6205621 قابل اطلاعات قابل قرائت از کنتور های",
      style: "",
    },
  ];
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
          <p className="motto ">
            آتروان انتخاب
            <br /> راهکار هوشمندانه
          </p>
        </div>
        <div className="relative">
          <a href="/products">
            <IoIosArrowDropdownCircle className="absolute bottom-10 w-14 h-14  font-primary" />
          </a>
        </div>

        <div className="flex-1 relative">
          <FaBars className=" bars " />
          <div className="solutions flex-1">
            {solutions.map((solution) => (
              <SolutionItem
                label={solution.label}
                imageUrl={solution.imageUrl}
                tooltipText={solution.tooltipText}
                tooltipStyle={tooltipStyle}
                solutionsStyle={solutionsStyle}
                imageStyle={solution.style}
              />
            ))}

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
    </div>
  );
};

export default Header;
