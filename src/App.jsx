import React from "react";
import { Button } from "react-bootstrap";
import logo from "./icons/Logo.png";
import DropdownComponent from "./components/Dropdown";
import { serviceItems, productItems, resourcesItems } from "./data.js";
import ArrowViewButton from "./components/Button/ArrowViewButton.jsx";
import business from "../src/icons/business.png";
import carousel from "../src/icons/carousel.png";
import { NextButton, PrevButton } from "./components/Button/NextButton.jsx";
import Box from "./components/Box";
import AWS from '../src/icons/icon/footer/AWS.png'
import hubspot from '../src/icons/icon/footer/hubspot.png'
import image27 from '../src/icons/icon/footer/image27.png'
import image29 from '../src/icons/icon/footer/image29.png'
import image33 from '../src/icons/icon/footer/image33.png'
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="header">
        <img className="logoIm" src={logo} alt="Logo" />
        <div className="navbar">
          <DropdownComponent title="Servicios" listItems={serviceItems} />
          <DropdownComponent title="Productos" listItems={productItems} />
          <DropdownComponent title="Recursos" listItems={resourcesItems} />
          <Button className="bt-nav" type="button" value="Input">
            Casos de éxito
          </Button>
          <Button className="bt-nav" type="button" value="Input">
            Blog
          </Button>
        </div>
        <Button className="bt-con" type="button" value="Input">
          Contáctanos
        </Button>
      </div>

      <div className="headerPanel">
        <img className="imgBusiness" alt="business" src={business} />
        <div className="headerCenterBlock">
          <div className="headerCenterText">
            Unimos la data y el diseño centrado en el usuario para obtener
            resultados de negocio
          </div>
          <div className="headerCenterButtons">
            <Button className="bt-con2" type="button" value="Input">
              Contáctanos
            </Button>
            <ArrowViewButton />
          </div>
          <div className="headerCenterAchievements">
            <div className="achievBlock">
              <div className="achievNum">21</div>
              <div className="achievText">años de experiencia</div>
            </div>
            <div className="achievBlock">
              <div className="achievNum">+100</div>
              <div className="achievText">
                empresas en más de 15 sectores distintos
              </div>
            </div>
            <div className="achievBlock">
              <div className="achievNum">+800</div>
              <div className="achievText">
                proyectos ejecutados en los últimos 5 años
              </div>
            </div>
          </div>
          <div className="footCenterBlock">
            <PrevButton />
            <div className="carousel">
              <img className="imgcarousel" alt="carousel" src={carousel} />
            </div>
            <NextButton />
          </div>
        </div>
      </div>
      <div className="solutionsPanel">
        <div className="solutionTitle">Contamos con soluciones en</div>
        <div className="solutions">
          {serviceItems.map((item, index) => {
            return (
              <Box
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
      <div className="footerBox">
        <div className="footerTitel">Somos Partners</div>
        <div className="footerIcon">

        <img className="imgimage29" alt="image29" src={image29} />
        <img className="imgimage27" alt="image27" src={image27} />
        <img className="imgimage33" alt="image33" src={image33} />
        <img className="imghubspot" alt="hubspot" src={hubspot} />
        <img className="imgAWS" alt="AWS" src={AWS} />
        </div>
      </div>
    </div>
  );
}

export default App;
