import React from "react";
import "./Header.css";
import { GiDonerKebab } from "react-icons/gi";

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="App-header">
      <h1 className="header-title">Shaverma shop</h1>
      <div className="header-nav" onClick={toggleSidebar}>
        <p className="header-subtitle">Меню</p>
        <GiDonerKebab className="header-icon" />
      </div>
    </nav>
  );
};

export default Header;
