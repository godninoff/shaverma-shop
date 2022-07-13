import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ toggleSidebar, isOpenSidebar }) => {
  return (
    <div
      className={
        isOpenSidebar ? "sidebar-container active" : "sidebar-container"
      }
      isOpenSidebar={isOpenSidebar}
      onClick={toggleSidebar}
    >
      <div className="sidebar-icon">
        <MdClose className="sidebar-close" onClick={toggleSidebar} />
      </div>
      <div className="sidebar-menu">
        <Link to="/" className="sidebar-link">
          Основное меню
        </Link>
        <Link to="/" className="sidebar-link">
          Блюдо дня
        </Link>
        <Link to="/" className="sidebar-link">
          Десерты
        </Link>
      </div>
      <div className="sidebar-wrap">
        <button className="sidebar-btn">Сделать заказ</button>
      </div>
    </div>
  );
};

export default Sidebar;
