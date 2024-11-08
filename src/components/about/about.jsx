import React from "react";
import "../about/about.css";
import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { TiFolderOpen } from "react-icons/ti";
const About = () => {
  return (
    <section id="aboout">
      <h5>Get To Know</h5>
      <h2>About ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" className="about__me-1" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Yeras Working</small>
            </article>
            <article className="about_card">
              <HiOutlineUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about_card">
              <TiFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>80+ compelete</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            excepturi impedit, tenetur totam veniam modi ratione inventore. Sit,
            inventore mollitia, natus sed facere blanditiis reiciendis
            voluptatem doloribus quibusdam molestias rem?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
