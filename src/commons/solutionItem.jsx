import React, { Component } from "react";
import Tooltip from "../commons/tooltip";
const SolutionItem = ({
  label,
  imageUrl,
  tooltipText,
  tooltipStyle,
  solutionsStyle,
  imageStyle,
}) => {
  return (
    <Tooltip tooltipText={tooltipText} tooltipStyle={tooltipStyle}>
      <button className={solutionsStyle}>
        <img src={imageUrl} alt={label} className={"m-auto " + imageStyle} />
      </button>
    </Tooltip>
  );
};

export default SolutionItem;
