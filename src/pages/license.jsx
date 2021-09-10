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
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },

    {
      title: "1 ماهه",
      caption: "200 هزار تومان",
      image: "",
      icon: "dollar-sign-icon.svg",
      color: "white",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },

    {
      title: "2 ماهه",
      caption: "562 هزار تومان",
      image: "",
      icon: "dollar-coin-icon.svg",
      color: "white",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },

    {
      title: "3 ماهه",
      caption: "300 هزار تومان",
      image: "",
      icon: "coin-icon.svg",
      color: "white",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },
    {
      title: "10 روز",
      caption: "رایگان",
      image: "",
      icon: "free-icon.svg",
      color: "white",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },

    {
      title: "1 ماهه",
      caption: "200 هزار تومان",
      image: "",
      icon: "dollar-sign-icon.svg",
      color: "white",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },

    {
      title: "2 ماهه",
      caption: "562 هزار تومان",
      image: "",
      icon: "dollar-coin-icon.svg",
      color: "white",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },

    {
      title: "3 ماهه",
      caption: "300 هزار تومان",
      image: "",
      icon: "coin-icon.svg",
      color: "white",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
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
        showCarouselChooseButton={false}
      />
    </React.Fragment>
  );
};

export default License;
