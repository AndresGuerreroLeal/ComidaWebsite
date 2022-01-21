import React from "react";

//Components
import Hero from "../hero/Hero";
import About from "../about/About";
import Servicios from "../servicios/Servicios";

import Productos from "../productos/Productos";
import AppSection from "../appsection/AppSection";

const Main = () => {
  return (
    <>
      <main className="l-main">
        <Hero />

        <About />

        <Servicios />

        <Productos />

        <AppSection />
      </main>
    </>
  );
};

export default Main;
