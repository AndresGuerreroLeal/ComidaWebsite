import React from "react";
import app1 from "../../assets/img/app1.png";
import app2 from "../../assets/img/app2.png";
import app from "../../assets/img/movil-app.png";

import "./appsection.css";

const AppSection = () => {
  return (
    <section class="app section bd-container">
      <div class="app__container bd-grid">
        <div class="app__data">
          <span class="section-subtitulo">Nueva App</span>
          <h2 class="section-titulo">App Disponible</h2>
          <p class="app__descripcion">
            Busca nuestra aplicaciín y descargala, puedes pedir tu comida,ver
            tus entregas, seguiendo de tu omida y mucho mas.
          </p>
          <div class="app__stores">
            <a href="#">
              <img src={app1} alt="" class="app__store" />
            </a>
            <a href="#">
              <img src={app2} alt="" class="app__store" />
            </a>
          </div>
        </div>

        <img src={app} alt="" class="app__img" />
      </div>
    </section>
  );
};

export default AppSection;
