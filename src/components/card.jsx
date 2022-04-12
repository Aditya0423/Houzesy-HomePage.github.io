import React from "react";
import "./card.scss";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt=" gallary_img" className="topImg" />
      <p className="name">{props.name}</p>
      <p className="info">{props.area}</p>
      <p className="rating">{props.ratings}</p>
      <button className="btnSave">SAVE</button>
    </div>
  );
}
