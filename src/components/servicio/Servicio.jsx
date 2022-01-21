import React from "react";
import "./servicio.css"

const Servicio = ({ service }) => {

  return (
    <div class="servicios__content" >
      {service.image}
      <h3 class="servicios__titulo">{service.textTitle}</h3>
      <p class="servicios__descripcion">{service.description}</p>
    </div>
  );
};

export default Servicio;
