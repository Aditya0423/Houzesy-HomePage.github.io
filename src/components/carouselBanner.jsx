import React from "react";
const styles = {
  color: "#FDEFF4"
};

export default function CarouselBanner(props) {
  return (
    <p className="caroselBnr" style={styles}>
      {props.banner}
    </p>
  );
}
