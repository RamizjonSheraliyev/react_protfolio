import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get IN Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_option-icon" />
            <h4>Email</h4>
            <h5>ramizsheraliyev2@gmail.com</h5>
            <a href="mailto:ramizsheraliyev2@gmail.com">Send a Message</a>
          </article>
          <article className="contact_option">
            <RiMessengerFill className="contact_option-icon" />
            <h4>Meesamger</h4>
            <h5> Telegram</h5>
            <a href="https://t.me/Ramiz_kbr">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>ramizsheraliyev2@gmail.com</h5>
            <a href="">Send a Message</a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="namme"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            id=""
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
