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
  tooltipColor,
  tooltipTextCols,
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
        tooltipColor={tooltipColor}
        tooltipTextCols={tooltipTextCols}
      />
    </div>
  );
};

export default Main;
