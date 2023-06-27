import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://github.com">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://instagram.com">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://linkedin.com">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="blur blur-f"></div>
      <div className="blur blur-f"></div>
    </div>
  );
};

export default Footer;
