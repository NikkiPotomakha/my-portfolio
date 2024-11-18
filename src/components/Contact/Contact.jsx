import "./Contact.css"
import React from 'react'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
          <span className="section_subtitle">Contact Me</span>
          
          <div className="contact_container container grid">
              <div className="contact-content">
                  <h3 className="conatct-title">
                      Talk to me
                  </h3>
                  <div className="contact-info">
                      <div className="contact-card">
                          <i className="contact-card-icon"></i>
                          <h3 className="contact-card-title"></h3>
                      </div>
                  </div>
              </div>

              <div className="contact-content">
                  <h3 className="contact_title">Write me your project</h3>
              </div>
          </div>
    </section>
  );
}

export default Contact
