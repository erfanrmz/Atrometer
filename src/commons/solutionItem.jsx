import React, { Component } from "react";

const SolutionItem = ({
  label,
  imageUrl,
  tooltipText,
  tooltipStyle,
  solutionsStyle,
  imageStyle,
}) => {
  return (
    <div className={tooltipStyle}>
      <button className={solutionsStyle}>
        <img src={imageUrl} alt={label} className={"m-auto " + imageStyle} />
      </button>
      <span class="tooltiptext">{tooltipText}</span>
    </div>
  );
};

export default SolutionItem;
