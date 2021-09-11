import React, { Component } from "react";
import Header from "../atrometer/header";
import Main from "../atrometer/main";
import NavBar from "../commons/navbar";

const OrgDimensions = () => {
  const toolTipType = "org";
  const carouselItems = [
    {
      title: "آپارتمان",
      caption: "10 روز رایگان",
      image: "apartment-image",
      icon: "apartment-icon.svg",
      color: "green-apartment",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },

    {
      title: "برج",
      caption: "200 هزار تومان",
      image: "tower-image",
      icon: "apartment-icon.svg",
      color: "blue-tower",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },

    {
      title: "مجتمع",
      caption: "10 روز رایگان",
      image: "complex-image",
      icon: "apartment-icon.svg",
      color: "red-complex ",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },

    {
      title: "شهرک",
      caption: "10 روز رایگان",
      image: "town-image",
      icon: "apartment-icon.svg",
      color: "blue-town",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },
    {
      title: "آپارتمان",
      caption: "10 روز رایگان",
      image: "apartment-image",
      icon: "apartment-icon.svg",
      color: "green-apartment",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },

    {
      title: "برج",
      caption: "200 هزار تومان",
      image: "tower-image",
      icon: "apartment-icon.svg",
      color: "blue-tower",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },

    {
      title: "مجتمع",
      caption: "10 روز رایگان",
      image: "complex-image",
      icon: "apartment-icon.svg",
      color: "red-complex ",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },

    {
      title: "شهرک",
      caption: "10 روز رایگان",
      image: "town-image",
      icon: "apartment-icon.svg",
      color: "blue-town",
      tooltipCaption:
        " 10 روز انتخاب این گزینه رایگان است انتخاب  آپارتمان به مدت",
    },
  ];
  return (
    <React.Fragment>
      <NavBar color="orange" />
      <Header imageUrl="/organization.svg" label="organization" />
      <Main
        toolTipType={toolTipType}
        carouselItems={carouselItems}
        current={1}
        cardTextColor="white"
        showCarouselChooseButton={true}
        tooltipColor="tooltip-gray"
      />
    </React.Fragment>
  );
};

export default OrgDimensions;
