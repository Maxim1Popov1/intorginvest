import React from "react";
import arrow from "../../icons/icon/Vector.png";
import "./style.css";

function BoxButton() {
  return (
    <button className="btBox" type="button" value="Input">
      <div className="btBoxText">Ver soluciones</div>
      <img className="arrowIcon" src={arrow} alt="arrow" />
    </button>
  );
}

export default BoxButton;
