import React, { useEffect, useState, useRef } from "react";
import CarouselCard from "./carouselCard";
import Tooltip from "./tooltip";
const divideScale = 3;
const delay = 100000;
const itemsPerSlide = 4;

const Carousel = ({ carouselItems, toolTipType }) => {
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
            <CarouselCard
              title={card.title}
              caption={card.caption}
              image={card.image}
              icon={card.icon}
              color={card.color}
              scale={itemsPerSlide}
              key={index}
              tooltipText={
                toolTipType === "org" ? (
                  <div class="grid grid-cols-3 grid-row-1 gap-4">
                    <div class="col-span-2 relative">
                      <h3>{card.tooltipCaption}</h3>
                      <button className="text-base text-white float-left bg-light-green rounded-3xl w-36 h-12 py-1 px-6 absolute  bottom-0 left-0">
                        ادامه
                      </button>
                    </div>
                    <div class="col-span-1 ...">
                      <img
                        src={process.env.PUBLIC_URL + card.image + ".png"}
                        className=" float-left w-32 h-32 rounded-3xl"
                      />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )
              }
            />
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
