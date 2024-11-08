import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa6";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service_list">
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service_list">
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li className="service_list-icon">
              <FaCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
