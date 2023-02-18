import React from "react";
import { useMediaQuery } from "react-responsive";

import BoxButton from "../Button/BoxButton";
import "./style.css";

function Box({ icon, title, description }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 820px)",
  });

  return isMobile ? (
    <div className="boxComponent">
      <img className="boxIcon" alt={icon} src={icon} />
      <div className="title">{title}</div>
      <BoxButton />
    </div>
  ) : (
    <div className="boxComponent">
      <div className="boxTitle">
        <img className="boxIcon" alt={icon} src={icon} />
        <div className="title">{title}</div>
      </div>
      <div className="boxText">{description}</div>
      <BoxButton />
    </div>
  );
}

export default Box;
