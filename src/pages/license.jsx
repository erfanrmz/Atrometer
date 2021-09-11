import React, { Component } from "react";
import Header from "../atrometer/header";
import Main from "../atrometer/main";
import NavBar from "../commons/navbar";

const License = () => {
  const toolTipType = "license";
  const carouselItems = [
    {
      title: "10 روز",
      caption: "رایگان",
      image: "",
      icon: "free-icon.svg",
      color: "white",
      tooltipCaption: " این گزینه رایگان است به مدت 10 روز",
    },

    {
      title: "1 ماهه",
      caption: "200 هزار تومان",
      image: "",
      icon: "dollar-sign-icon.svg",
      color: "white",
      tooltipCaption: " این گزینه رایگان است به مدت 10 روز",
    },

    {
      title: "2 ماهه",
      caption: "562 هزار تومان",
      image: "",
      icon: "dollar-coin-icon.svg",
      color: "white",
      tooltipCaption: " این گزینه رایگان است به مدت 10 روز",
    },

    {
      title: "3 ماهه",
      caption: "300 هزار تومان",
      image: "",
      icon: "dollar-coin-icon.svg",
      color: "white",
      tooltipCaption: " این گزینه رایگان است به مدت 10 روز",
    },
    {
      title: "10 روز",
      caption: "رایگان",
      image: "",
      icon: "free-icon.svg",
      color: "white",
      tooltipCaption: " این گزینه رایگان است به مدت 10 روز",
    },

    {
      title: "1 ماهه",
      caption: "200 هزار تومان",
      image: "",
      icon: "dollar-sign-icon.svg",
      color: "white",
      tooltipCaption: " این گزینه رایگان است به مدت 10 روز",
    },

    {
      title: "2 ماهه",
      caption: "562 هزار تومان",
      image: "",
      icon: "dollar-coin-icon.svg",
      color: "white",
      tooltipCaption: " این گزینه رایگان است به مدت 10 روز",
    },

    {
      title: "3 ماهه",
      caption: "300 هزار تومان",
      image: "",
      icon: "dollar-coin-icon.svg",
      color: "white",
      tooltipCaption: " این گزینه رایگان است به مدت 10 روز",
    },
  ];
  return (
    <React.Fragment>
      <NavBar color="orange" />
      <Header
        imageUrl="/license.svg"
        label="license"
        headerImageStyles="my-20"
      />
      <Main
        toolTipType={toolTipType}
        carouselItems={carouselItems}
        current={3}
        color="bg-light-gray"
        cardTextColor="black"
        buttonColor="#00D896"
        showCarouselChooseButton={true}
        tooltipColor="blue-tooltip"
      />
    </React.Fragment>
  );
};

export default License;
