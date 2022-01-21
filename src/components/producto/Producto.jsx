import React from "react";

import plato1 from "../../assets/img/plate1.png";

import "./producto.css";

const Producto = ({ food }) => {
  return (
    <div class="producto__content">
      <img src={food.imagen} alt="" class="producto__img" />
      <h3 class="producto__nombre">{food.name}</h3>
      <span class="producto__precio">Precio: {food.price}</span>
      <span className="producto__detall">
        Valoración: 5.0
        <i class="bx bxs-star"></i>
      </span>

      <a href="#" class="boton producto__button">
        Agregar a<i class="bx bx-cart-alt"></i>
      </a>
    </div>
  );
};

export default Producto;
