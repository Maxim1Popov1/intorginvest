import React from "react";
import { useMediaQuery } from "react-responsive";

import arrowR from "../../icons/icon/arrowCircleR.png";
import arrowL from "../../icons/icon/arrowCircleL.png";
import "./style.css";

export function NextButton() {
  const isMobile = useMediaQuery({
    query: "(max-width: 820px)",
  });

  return (
    <button className="btNext" type="button" value="Input">
      {!isMobile && <div className="btViewText">Siguiente</div>}
      <img className="arrowCircleNextIcon" src={arrowR} alt="arrow" />
    </button>
  );
}
export function PrevButton() {
  const isMobile = useMediaQuery({
    query: "(max-width: 820px)",
  });
  return (
    <button className="btPrev" type="button" value="Input">
      <img className="arrowCirclePrevIcon" src={arrowL} alt="arrow" />
      {!isMobile && <div className="btViewText">Anterior</div>}
    </button>
  );
}
