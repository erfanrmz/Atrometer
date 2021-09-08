import React, { useEffect, useState, useRef } from "react";
import BreadCrumps from "../commons/breadCrumps";
import Carousel from "../commons/carousel";
import CarouselCard from "../commons/carouselCard";
import Tooltip from "../commons/tooltip";
const divideScale = 3;
const delay = 100000;
const itemsPerSlide = 4;

const Main = () => {
  const carouselItems = [
    {
      title: "آپارتمان",
      caption: "10 روز رایگان",
      image: "apartment-image",
      icon: "apartment-icon.svg",
      color: "green-apartment",
    },

    {
      title: "برج",
      caption: "200 هزار تومان",
      image: "tower-image",
      icon: "apartment-icon.svg",
      color: "blue-tower",
    },

    {
      title: "مجتمع",
      caption: "10 روز رایگان",
      image: "complex-image",
      icon: "apartment-icon.svg",
      color: "red-complex ",
    },

    {
      title: "شهرک",
      caption: "10 روز رایگان",
      image: "town-image",
      icon: "apartment-icon.svg",
      color: "blue-town",
    },
    {
      title: "آپارتمان",
      caption: "10 روز رایگان",
      image: "apartment-image",
      icon: "apartment-icon.svg",
      color: "green-apartment",
    },

    {
      title: "برج",
      caption: "200 هزار تومان",
      image: "tower-image",
      icon: "apartment-icon.svg",
      color: "blue-tower",
    },

    {
      title: "مجتمع",
      caption: "10 روز رایگان",
      image: "complex-image",
      icon: "apartment-icon.svg",
      color: "red-complex ",
    },

    {
      title: "شهرک",
      caption: "10 روز رایگان",
      image: "town-image",
      icon: "apartment-icon.svg",
      color: "blue-town",
    },
  ];

  return (
    <React.Fragment>
      <BreadCrumps current={1} />
      <Carousel carouselItems={carouselItems} />
    </React.Fragment>
  );
};

export default Main;
