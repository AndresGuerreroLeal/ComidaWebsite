import React from "react";
import hero from "../../assets/img/home.png";
import "./hero.css"

const Hero = () => {
  return (
    <section class="hero section" id="inicio">
      <div class="hero__container bd-container bd-grid">
        <div class="hero__data">
          <h1 class="hero__titulo">Ecolombia.</h1>
          <h2 class="hero__subtitulo">
            Pide los mejores alimentos orgánicos y  saludables.
          </h2>
          <a href="#productos" class="boton">
            Ver productos
          </a>
        </div>

        <img
          src="https://media.istockphoto.com/photos/plate-of-grilled-chicken-with-vegetables-on-wite-background-top-view-picture-id1055015208?k=20&m=1055015208&s=612x612&w=0&h=cgoCUIdwpXEHTvHmkS5Qcn2NRsQyhlhM2s65iIyKEKg="
          alt=""
          class="hero__img"
        />
      </div>
    </section>
  );
};

export default Hero;
