import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

import { serviceItems, productItems, resourcesItems } from "../../data.js";

import logo from "../../icons/logoBlack.png";
import arrow from "../../icons/icon/Arrow-Down.png";
import close from "../../icons/icon/Close.png";
import "./style.css";

function ContextAwareToggle({ children, eventKey, callback }) {
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );
  return (
    <>
      <button type="button" className="toggleButton" onClick={decoratedOnClick}>
        {children}
      </button>
      <img className="toggleArrow" alt="arrow" src={arrow} />
    </>
  );
}

function Menu({closeMenu}) {
  return (
    <div className="menuContainer">
      <div className="mobileHead">
        <img className="menuLogo" alt="logo" src={logo} />
        <div onClick={closeMenu}>
          <img className="menuClose" alt="close" src={close} />
        </div>
      </div>
      <Accordion>
        <Card>
          <Card.Header>
            <ContextAwareToggle className="menuToggle" eventKey="0">
              Servicios
            </ContextAwareToggle>
          </Card.Header>

          {serviceItems.map((item) => {
            return (
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <img className="cardIcon" alt={item.icon} src={item.icon} />
                  <div className="cardText"> {item.title}</div>
                </Card.Body>
              </Accordion.Collapse>
            );
          })}
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle className="menuToggle" eventKey="1">
              Productos
            </ContextAwareToggle>
          </Card.Header>

          {productItems.map((item) => {
            return (
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <img className="cardIcon" alt={item.icon} src={item.icon} />
                  <div className="cardText"> {item.title}</div>
                </Card.Body>
              </Accordion.Collapse>
            );
          })}
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle className="menuToggle" eventKey="2">
              Recursos
            </ContextAwareToggle>
          </Card.Header>

          {resourcesItems.map((item) => {
            return (
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <img className="cardIcon" alt={item.icon} src={item.icon} />
                  <div className="cardText"> {item.title}</div>
                </Card.Body>
              </Accordion.Collapse>
            );
          })}
        </Card>
      </Accordion>
      <div className="menuButtons">
        <Button className="menuBtn" type="button" value="Input">
          Casos de éxito
        </Button>
        <Button className="menuBtn" type="button" value="Input">
          Blog
        </Button>
      </div>
    </div>
  );
}

export default Menu;
