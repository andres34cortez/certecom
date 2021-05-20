import React, { useEffect, useState } from "react";
import logo from "./assets/icons/logo.svg";
import menu from "./assets/icons/menu.svg";
import right_arrow from "./assets/icons/right_arrow.svg";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Header = () => {
  const [visibleMenu, setvisibleMenu] = useState(false);

  const handleToggle = () => {
    setvisibleMenu(!visibleMenu);
    console.log(visibleMenu);
  };
  const closeMenu = () => {
    setvisibleMenu(false);
  };
  useEffect(() => {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("scroll__header");
      } else {
        header.classList.remove("scroll__header");
      }
    });
  }, []);
  return (
    <header className="header" id="header">
      <nav className="nav">
        <img src={logo} className="head__logo" />
        <ul className={`nav__menu ${visibleMenu ? "show__menu" : ""}`}>
          <div
            className={`back__button ${visibleMenu ? "show__back" : ""}`}
            onClick={handleToggle}
          >
            <img className="right__arrow" src={right_arrow} />
          </div>
          <li className="nav__item">
            <a className="nav__link active" href="/#home">
              Inicio
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/#nosotros">
              Nosotros
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/#beneficios">
              Beneficios
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/#servicios">
              Servicios
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/#testimonios">
              Clientes
            </a>
          </li>
          <img src={logo} className="menu__logo" />
        </ul>
      </nav>
      <div className="menu__button">
        <img
          id="menu__icon"
          className="menu__icon"
          src={menu}
          onClick={handleToggle}
        />
      </div>
    </header>
  );
};

export default Header;
