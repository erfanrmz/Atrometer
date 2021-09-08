import React, { Component } from "react";

const CarouselCard = ({ title, caption, image, icon, color, scale }) => {
  const cardClass = " slide card bg-" + image;
  const cardFilterClass =
    "card-filter from-" + color + " to-" + color + "-fade";
  const width = 100 / scale + "%";
  // console.log(width);
  return (
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
  );
};

export default CarouselCard;
