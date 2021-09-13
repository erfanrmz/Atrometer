import React, { useEffect, useState, useRef } from "react";
import CarouselCard from "./carouselCard";
import Tooltip from "./tooltip";
const divideScale = 3;
const delay = 100000;
const itemsPerSlide = 4;

const Carousel = ({
  carouselItems,
  toolTipType,
  textColor,
  buttonColor,
  showChooseButton,
  tooltipColor,
  tooltipTextCols,
}) => {
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
              textColor={textColor}
              buttonColor={buttonColor}
              showButton={showChooseButton}
              tooltipColor={tooltipColor}
              tooltipTextCols={tooltipTextCols}
              tooltipText={
                toolTipType === "org" ? (
                  <div class="grid grid-cols-3 grid-row-1 gap-4 ">
                    <div class="col-span-2 relative">
                      <h3 className="whitespace-pre-line">
                        {card.tooltipCaption}
                      </h3>
                      <button className="text-base text-white float-left bg-light-green rounded-3xl w-36 h-12 py-1 px-6 absolute  bottom-0 left-0">
                        ادامه
                      </button>
                    </div>
                    <div class="col-span-1 ...">
                      <img
                        src={process.env.PUBLIC_URL + card.image + ".png"}
                        className=" object-cover float-left w-32 h-32 rounded-3xl"
                      />
                    </div>
                  </div>
                ) : (
                  <div class="grid grid-cols-5 grid-row-1 gap-4 m-auto">
                    <div class="col-span-1 m-auto">
                      <h3 className="whitespace-pre-line text-white text-center">
                        {card.tooltipCaption}
                      </h3>
                    </div>
                    <div class="col-span-1 m-auto">
                      <p className="whitespace-pre-line text-white text-center text-5xl">
                        تقریب 1 ماهه
                      </p>
                      <p className="whitespace-pre-line text-white text-center">
                        بدون احتساب مالیات
                      </p>
                    </div>
                    <div class="col-span-1 m-auto">
                      <p className="whitespace-pre-line text-white text-center text-5xl">
                        تقریب 1 ماهه
                      </p>
                      <p className="whitespace-pre-line text-white text-center">
                        بدون احتساب مالیات
                      </p>
                    </div>

                    <div class="col-span-1 m-auto">
                      <p className="whitespace-pre-line text-white text-center text-5xl">
                        200 هزار تومان
                      </p>
                    </div>
                    <div class="col-span-1 m-auto">
                      <button className=" text-base text-white float-left bg-orange rounded-3xl w-36 h-12 py-1 px-6   bottom-0 left-0 align-middle">
                        خرید
                      </button>
                    </div>
                  </div>
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
