import React, { useEffect, useState, useRef } from "react";
import CarouselCard from "../commons/carouselCard";
import Tooltip from "../commons/tooltip";
const divideScale = 3;
const delay = 100000;
const itemsPerSlide = 4;

const Main = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
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

  const pageCount = [
    ...Array(Math.ceil(carouselItems.length / divideScale)).keys(),
  ];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === pageCount.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <React.Fragment>
      <nav className="breadCrumb-container">
        <ul class="breadcrumb">
          <li>
            <a href="#">راهکارها</a>
          </li>
          <li>
            <a href="#">انتخاب ابعاد سازمانی</a>
          </li>
        </ul>
      </nav>

      <p className="stage-title">مرحله انتخاب ابعاد سازمانی</p>
      <div className="slideshow">
        <div
          className="slideshowSlider "
          style={{ transform: `translate3d(${index * 100}%, 0, 0)` }}
        >
          {carouselItems.map((card, index) => (
            <Tooltip
              tooltipStyle="tooltip visible"
              tooltipTextStyle="tooltiptext bg-tooltip-gray text-tooltip-carousel -bottom-96 right-1/3 carousel-after"
              tooltipText={
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p>
                        10 روز انتخاب این گزینه رایگان
                        <br /> است انتخاب آپارتمان به مدت
                      </p>
                    </div>
                    <div className="flex-1">
                      <img
                        src={process.env.PUBLIC_URL + "/apartment.png"}
                        className="w-24 h-24 float-left"
                      />
                    </div>
                  </div>
                  <button className="text-base text-white float-left bg-light-green rounded-3xl w-36 h-12 py-1 px-6">
                    ادامه
                  </button>
                </div>
              }
            >
              <CarouselCard
                title={card.title}
                caption={card.caption}
                image={card.image}
                icon={card.icon}
                color={card.color}
                scale={itemsPerSlide}
                key={index}
              />
            </Tooltip>
          ))}
        </div>

        <div className="slideshowDots">
          {pageCount.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
