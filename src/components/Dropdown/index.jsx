import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "./DropdovnItem";

import "./style.css";

function DropdownComponent({ title, listItems }) {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      className="toggle"
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <i className="fa fa-angle-down" aria-hidden="true"></i>
    </a>
  ));
  return (
    <Dropdown>
      <Dropdown.Toggle
        className="dropdown"
        as={CustomToggle}
        id="dropdown-custom-components"
      >
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {listItems.map((item, index) => {
          return (
            <DropdownItem key={index} title={item.title} icon={item.icon} />
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownComponent;
