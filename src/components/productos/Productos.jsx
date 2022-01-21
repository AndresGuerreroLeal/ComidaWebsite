import React from "react";

import { foods } from "../../data";
import Producto from "../producto/Producto";
import Food from "../producto/Producto";

import "./productos.css";

const Productos = () => {
  return (
    <section class="productos section bd-container" id="productos">
      <span class="section-subtitulo">Productos</span>
      <h2 class="section-titulo">¡Las mejores ofertas de la semana!</h2>
      <div class="productos__container bd-grid">
        {foods.map((food) => (
          <Producto food={food} />
        ))}
      </div>
    </section>
  );
};

export default Productos;
