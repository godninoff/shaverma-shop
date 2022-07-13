import React from "react";
import "./Footer.css";
import vk from "../../../images/vk.jpg";
import { BsInstagram } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer-container">
      <nav className="footer-wrap">
        <p>© {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <img src={vk} alt="vk" className="footer__link"></img>
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <BsInstagram className="footer-icon" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <ImYoutube2 className="footer-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
