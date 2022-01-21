import React from "react";

import { services } from "../../data.js";
import Servicio from "../servicio/Servicio.jsx";
import "./servicios.css"

const Servicios = () => {
  return (
    <section class="servicios section bd-container" id="servicios">
      <span class="section-subtitulo">Servicios</span>
      <h2 class="section-titulo">Nuestros increíbles servicios</h2>

      <div class="servicios__container  bd-grid">
        {services.map((service) => (
          <Servicio service={service} key={service.id}/>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
