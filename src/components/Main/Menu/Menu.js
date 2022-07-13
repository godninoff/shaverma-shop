import React from "react";
import "./Menu.css";

const Menu = ({ products, heading }) => {
  return (
    <div className="menu-container">
      <h2 className="menu-heading">{heading}</h2>
      <div className="menu-wrapper">
        {products.map((menu, i) => {
          return (
            <div className="menu-card" key={i}>
              <img className="menu-image" src={menu.image} alt={menu.alt}></img>
              <div className="menu-card">
                <h2 className="menu-title">{menu.name}</h2>
                <p className="menu-description">{menu.description}</p>
                <p className="menu-price">{menu.price}</p>
                <button className="order-btn">{menu.button}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
