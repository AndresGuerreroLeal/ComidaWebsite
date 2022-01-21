import React from "react";
import "./about.css";

const About = () => {
  return (
    <section class="about section bd-container" id="about">
      <div class="about__container  bd-grid">
        <div class="about__data">
          <span class="section-subtitulo about__initial ">Sobre nosotros</span>
          <h2 class="section-titulo about__initial">
            Somos un grupo de emprendedores <br /> amantes de la cocina
            organica.
          </h2>
          <p class="about__descripcion ">
            Por lo cual nos decidimos a compartir y transmitir nuestro mensaje
            con productos seleccionas, 100% naturales y para mejorar tu
            experiencia te llevamos tu comida desde el campo hasta la puerta de
            tu casa totalmente gratis.
          </p>
          <a href="#" class="boton">
            Conoce más
          </a>
        </div>

        <img
          src="https://img.freepik.com/foto-gratis/marco-comida-vista-superior-sobre-fondo-madera_23-2148716358.jpg?size=626&ext=jpg"
          alt=""
          class="about__img"
        />
      </div>
    </section>
  );
};

export default About;
