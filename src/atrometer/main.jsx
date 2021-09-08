import React, { useEffect, useState, useRef } from "react";
import BreadCrumps from "../commons/breadCrumps";
import Carousel from "../commons/carousel";

const Main = ({ toolTipType, carouselItems, current }) => {
  return (
    <React.Fragment>
      <BreadCrumps current={current} />
      <Carousel carouselItems={carouselItems} toolTipType={toolTipType} />
    </React.Fragment>
  );
};

export default Main;
