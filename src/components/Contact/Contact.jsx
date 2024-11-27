import "./Contact.css"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o83hjfo",
        "template_13qbq4g",
        form.current, 
        "JQCxV0xllJqu2FztB",
      )
      e.target.reset()
  };
  return (
    <section className="contact_section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Me</span>

      <div className="contact_container">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3>
          <div className="contact-info">
            <div className="contact-card">
              <i className="contact-card-icon">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </i>

              <h3 className="contact_card_title">Email</h3>
              <span className="contact-card-data">
                veronikapotomakha@gmail.com
              </span>

              <a
                href="mailto:veronikapotomakha@gmail.com"
                className="contact-button"
              >
                Write me{" "}
                <i className="contact-button-icon">
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </i>
              </a>
            </div>

            <div className="contact-card">
              <i className="contact-card-icon">
                {" "}
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </i>

              <h3 className="contact_card_title">Phone</h3>
              <span className="contact-card-data">+48793579169</span>

              <a href="tel:+48793579169" className="contact-button">
                Call me{" "}
                <i className="contact-button-icon">
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button className="button_contact" onClick={() => {}}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact
