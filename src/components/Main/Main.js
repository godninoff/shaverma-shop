import React from "react";

import { desecrts, menu } from "../../utils/data";
import DayOffer from "./DayOffer/DayOffer";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Menu from "./Menu/Menu";

const Main = () => {
  return (
    <>
      <Hero />
      <Menu products={menu} heading="Основное меню" />
      <DayOffer />
      <Menu products={desecrts} heading="Десерты" />
      <Footer />
    </>
  );
};

export default Main;
