import React, { useState } from "react";
import carouselData from "../carouselData";
import ImgCarouselComp from "./imgCarouselComp";
import CarouselBanner from "./carouselBanner";
import "./carousel.scss";

export default function Carousel() {
  const [x, setX] = useState(0);
  function handelRight() {
    
    x === -100 * (carouselData.length - 1) ? setX(0) : setX(x - 100);
  }
  function handelLeft() {
    x === 0 ? setX(-100 * (carouselData.length - 1)) : setX(x + 100);
  }
  //setTimeout(handelRight, 4000);

  // function handleMouseOver() {
  //   return clearTimeout(setTimeout(handelRight, 4000));
  // }

  return (
    <div className="carouselMain">
      <div className="carouselSlider">
        {carouselData.map((item, index) => {
          return (
            <div
              className="carouselSlide"
              key={index}
              style={{ transform: `translateX(${x}%)` }}
            >
              <CarouselBanner banner={item.banner} />
              <ImgCarouselComp src={item.imgURL} />
            </div>
          );
        })}

        <button id="btnLeft" onClick={handelLeft}>
        &lt;
        </button>
        <button id="btnRight" onClick={handelRight}>
          &gt;
        </button>
        <button id="btnLearn">Learn..</button>
      </div>
    </div>
  );
}
