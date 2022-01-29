import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer section bd-container" id="footer">
        <div class="footer__container bd-grid">
          <div class="footer__content">
            <a href="#" class="footer__logo">
              Ecolombia
            </a>
            <span class="footer__descripcion">Tu comida desde el campo.</span>
            <div>
              <a href="#" class="footer__social">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="#" class="footer__social">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="#" class="footer__social">
                <i class="bx bxl-twitter"></i>
              </a>
            </div>
          </div>

          <div class="footer__content">
            <h3 class="footer__titulo">Información</h3>
            <ul>
              <li>
                <a href="#" class="footer__link">
                  Contacta con nosotros
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Terminos de servicios
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__content">
            <h3 class="footer__titulo">Dirección</h3>
            <ul>
              <li>Bogotá - Colombia</li>
              <li>Cra 99 bis 67 -99</li>
              <li>333 - 111 - 777 - 444</li>
              <li>ecolombia@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
