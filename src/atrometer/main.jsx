import React, { useEffect, useState, useRef } from "react";
import BreadCrumps from "../commons/breadCrumps";
import Carousel from "../commons/carousel";

const Main = ({
  toolTipType,
  carouselItems,
  current,
  color,
  cardTextColor,
  buttonColor,
  showCarouselChooseButton,
}) => {
  return (
    <div className={color}>
      <BreadCrumps current={current} />
      <Carousel
        carouselItems={carouselItems}
        toolTipType={toolTipType}
        textColor={cardTextColor}
        buttonColor={buttonColor}
        showChooseButton={showCarouselChooseButton}
      />
    </div>
  );
};

export default Main;
