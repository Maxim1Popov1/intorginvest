import React from "react";
import BoxButton from '../Button/BoxButton'
import "./style.css";

function Box({ icon, title, description}) {
   
  return (
    <div className="boxComponent">
      <div className="boxTitle">
         <img className="boxIcon" alt={icon} src={icon}/>
         <div className="title">{title}</div>
      </div>
      <div className="boxText">{description}</div>
      <BoxButton/>
    </div>
  );
}

export default Box;
