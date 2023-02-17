import React from "react";
import arrowR from "../../icons/icon/arrowCircleR.png";
import arrowL from "../../icons/icon/arrowCircleL.png";
import "./style.css";

export function NextButton() {
  return (
    <button className="btNext" type="button" value="Input">
      <div className="btViewText">Siguiente</div>
      <img className="arrowCircleNextIcon" src={arrowR} alt="arrow" />
    </button>
  );
}
export function PrevButton() {
  return (
    <button className="btPrev" type="button" value="Input">
      <img className="arrowCirclePrevIcon" src={arrowL} alt="arrow" />
      <div className="btViewText">Anterior</div>
    </button>
  );
}


