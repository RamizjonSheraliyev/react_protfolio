import React from "react";
import "../experience/experience.css";
import { BsPatchCheck } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I HAve</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content"></div>
          <article className="experience_details">
            <BsPatchCheck className="expreienced_details-icon" />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Ecperienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheck className="expreienced_details-icon" />
            <div>
              <h4>CSS</h4>
              <small className="text-light">Entermeid</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheck className="expreienced_details-icon" />
            <div>
              <h4>JAVAscript</h4>
              <small className="text-light">Ecperienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheck className="expreienced_details-icon" />
            <div>
              <h4>Booststarp</h4>
              <small className="text-light">Ecperienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheck className="expreienced_details-icon" />
            <div>
              <h4>Taiwand</h4>
              <small className="text-light">Ecperienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheck className="expreienced_details-icon" />
            <div>
              <h4>React</h4>
              <small className="text-light">Ecperienced</small>
            </div>
          </article>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience_content"></div>
          <article className="experience_details">
            <BsPatchCheck className="expreienced_details-icon" />
            <div>
              <h4>Node JS</h4>
              <small className="text-light">Ecperienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheck className="expreienced_details-icon" />
            <div>
              <h4>Mongo Db</h4>
              <small className="text-light">Entermeid</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheck className="expreienced_details-icon" />
            <div>
              <h4>PHP</h4>
              <small className="text-light">Ecperienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheck className="expreienced_details-icon" />
            <div>
              <h4>Pyhton</h4>
              <small className="text-light">Ecperienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheck className="expreienced_details-icon" />
            <div>
              <h4>MSQl</h4>
              <small className="text-light">Ecperienced</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
