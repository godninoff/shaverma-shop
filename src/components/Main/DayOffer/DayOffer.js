import React from "react";
import "./DayOffer.css";

const DayOffer = () => {
  return (
    <div className="day-offer-container">
      <h2 className="day-offer-heading">Шаурма дня</h2>
      <p className="day-offer-description">
        Черный лаваш, приготовленный из полностью натуральных добавок.
      </p>
      <button className="day-offer-btn">Заказать</button>
    </div>
  );
};

export default DayOffer;
