import React from "react";
import "../header/header.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <FaDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;
