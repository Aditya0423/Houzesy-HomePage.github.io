import React from "react";

export default function ImgCarouselComp(props) {
  return (
    <img
      src={props.src}
      alt="carousel_img"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
