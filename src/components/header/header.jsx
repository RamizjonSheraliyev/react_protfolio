import React from "react";
import "../header/header.css";
import Cta from "./cta";
import ME from "../../assets/me.png";
import HeaderSocial from "./headerSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'M</h5>
        <h1>Hajia Bintu</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <Cta />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Dwon
        </a>
      </div>
    </header>
  );
};

export default Header;
