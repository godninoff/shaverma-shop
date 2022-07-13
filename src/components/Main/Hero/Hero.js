import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Hero.css";

const Hero = () => {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

  const toggleSidebar = () => setIsOpenSidebar(!isOpenSidebar);

  return (
    <div className="main-container">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isOpenSidebar={isOpenSidebar} />
      <div className="main-text-container">
        <div className="main-hero-text">
          <h2 className="main-text">Сочная, хрустящая,</h2>
          <h2 className="main-text">Вкуснейшая шаурма</h2>
        </div>

        <p style={{ paddingTop: "10px" }}>У Вас дома через 30 минут</p>
        <button className="order-btn">Заказать</button>
      </div>
    </div>
  );
};

export default Hero;
