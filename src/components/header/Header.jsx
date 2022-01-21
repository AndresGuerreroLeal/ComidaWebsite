import React, { useState } from "react";
import "./header.css";

import hero from "../../assets/img/home.png";

const Header = () => {
  const [navToggle, setNavToggle] = useState("");

  return (
    <>
      <header class="l-header" id="header">
        <nav class="nav bd-container">
          <a href="#inicio" class="nav__logo">
            Ecolombia.
          </a>

          <div className={`nav__menu ${navToggle}`} id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item">
                <a
                  href="#inicio"
                  class="nav__link active-link"
                  onClick={() => setNavToggle("")}
                >
                  Inicio
                </a>
              </li>
              <li class="nav__item">
                <a
                  href="#about"
                  class="nav__link"
                  onClick={() => setNavToggle("")}
                >
                  Sobre Nosotros
                </a>
              </li>
              <li class="nav__item">
                <a
                  href="#servicios"
                  class="nav__link"
                  onClick={() => setNavToggle("")}
                >
                  Servicios
                </a>
              </li>
              <li class="nav__item">
                <a
                  href="#productos"
                  class="nav__link"
                  onClick={() => setNavToggle("")}
                >
                  Productos
                </a>
              </li>
              <li class="nav__item">
                <a
                  href="#footer"
                  class="nav__link"
                  onClick={() => setNavToggle("")}
                >
                  Contacto
                </a>
              </li>

              <li>
                <i
                  class="bx bx-x change-theme"
                  id="theme-button "
                  onClick={() => setNavToggle("")}
                ></i>
              </li>
            </ul>
          </div>

          <div
            class="nav__toggle"
            id="nav-toggle"
            onClick={() => setNavToggle("show-menu")}
          >
            <i class="bx bx-menu"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
