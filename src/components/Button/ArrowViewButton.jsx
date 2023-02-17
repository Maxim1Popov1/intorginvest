import React from "react";
import arrow from "../../icons/icon/VectorWhite.png";
import "./style.css";

function ArrowViewButton() {
  return (
    <button className="btView" type="button" value="Input">
      <div className="btViewText">Ver soluciones</div>
      <img className="arrowIcon" src={arrow} alt="arrow" />
    </button>
  );
}

export default ArrowViewButton;
