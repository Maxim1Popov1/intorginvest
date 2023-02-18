import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function DropdownItem({ title, icon }) {
  return (
    <Dropdown.Item href="#/action-1">
      <img className="listIcon" src={icon} alt="Laptop" />
      {title}
    </Dropdown.Item>
  );
}

export default DropdownItem;
