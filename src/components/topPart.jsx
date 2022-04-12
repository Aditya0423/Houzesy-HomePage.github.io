import React from "react";
import Carousel from "./carousel";
import RegisterAndLogin from "./registerAndLogin";
import DetailsInfo from "./detailsInfo";
import "./topPart.scss";

export default function TopPart() {
  return (
    <div className="mainBody">
      <Carousel />
      <RegisterAndLogin />
      <DetailsInfo />
    </div>
  );
}
