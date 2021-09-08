import React, { useEffect, useState, useRef } from "react";
import CarouselCard from "./carouselCard";
import Tooltip from "./tooltip";
const divideScale = 3;
const delay = 100000;
const itemsPerSlide = 4;

const Carousel = ({ carouselItems }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

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
      <div className="slideshow">
        <div
          className="slideshowSlider "
          style={{ transform: `translate3d(${index * 100}%, 0, 0)` }}
        >
          {carouselItems.map((card, index) => (
            <Tooltip
              tooltipStyle="tooltip visible"
              tooltipTextStyle="tooltiptext bg-tooltip-gray text-tooltip-carousel top-80 right-1/3 carousel-after"
              tooltipText={
                <div class="grid grid-cols-3 grid-row-1 gap-4">
                  <div class="col-span-2 relative">
                    <h3>
                      10 روز انتخاب این گزینه رایگان است انتخاب
                      <br /> آپارتمان به مدت
                    </h3>
                    <button className="text-base text-white float-left bg-light-green rounded-3xl w-36 h-12 py-1 px-6 absolute  bottom-0 left-0">
                      ادامه
                    </button>
                  </div>
                  <div class="col-span-1 ...">
                    <img
                      src={process.env.PUBLIC_URL + "/apartment.png"}
                      className=" float-left w-28 "
                    />
                  </div>
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

export default Carousel;
