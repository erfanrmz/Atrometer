import React, { Component } from "react";
import Tooltip from "../commons/tooltip";
const SolutionItem = ({
  label,
  imageUrl,
  tooltipText,
  tooltipStyle,
  tooltipTextStyle,
  solutionsStyle,
  imageStyle,
  endPoint,
}) => {
  return (
    <Tooltip
      tooltipText={tooltipText}
      tooltipStyle={tooltipStyle}
      tooltipTextStyle={tooltipTextStyle}
    >
      <a href={endPoint}>
        <button className={solutionsStyle}>
          <img src={imageUrl} alt={label} className={"m-auto " + imageStyle} />
        </button>
      </a>
    </Tooltip>
  );
};

export default SolutionItem;
