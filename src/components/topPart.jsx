import React from "react";
import Carousel from "./carousel";
import RegisterAndLogin from "./registerAndLogin";
import DetailsInfo from "./detailsInfo";
import UpperPhoto from "./UpperPhoto";
import "./topPart.scss";


export default function TopPart() {
  return (
    <div className="mainBody">
       <UpperPhoto />
      <Carousel />
      {/* <RegisterAndLogin /> */}
      <DetailsInfo />
    </div>
  );
}
