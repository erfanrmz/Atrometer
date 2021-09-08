import React, { Component } from "react";
import Tooltip from "./tooltip";

const CarouselCard = ({
  title,
  caption,
  image,
  icon,
  color,
  scale,
  tooltipText,
}) => {
  const cardClass = " slide card bg-" + image;
  const cardFilterClass =
    "card-filter from-" + color + " to-" + color + "-fade";
  const width = 100 / scale + "%";
  // console.log(width);
  return (
    <Tooltip
      tooltipStyle="tooltip visible"
      tooltipTextStyle="tooltiptext bg-tooltip-gray text-tooltip-carousel top-80 right-1/3 carousel-after"
      tooltipText={tooltipText}
    >
      <div className={cardClass} style={{ width }}>
        <div className={cardFilterClass}>
          <div className="card-body">
            <img src={process.env.PUBLIC_URL + "/" + icon} alt={icon} />
            <p className="card-title">{title}</p>
            <p className="card-caption">{caption}</p>

            <button>انتخاب</button>
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default CarouselCard;
