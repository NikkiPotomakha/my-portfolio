import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFigma,
  faHtml5,
  faCss3,
  faReact,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import Me from "../../images/Me.webp";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-img-container">
          <img src={Me} alt="Veronika" />
        </div>
        <div className="hero-content">
          <h1>Hi, I'm Veronika</h1>
          <h2>Frontend Developer based in Warsaw, Poland.</h2>
          <p>
            I have a keen eye for design and a knack for bringing web
            applications to life. With a solid foundation in HTML, CSS, and
            JavaScript, I specialize in creating responsive, user-friendly
            interfaces that provide seamless experiences across all devices.
          </p>
        </div>
      </div>
      <div className="tech-icon">
        <div className="icon-title">Tech skills</div>
        <div className="hero-icon">
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="hero-icon">
          <FontAwesomeIcon icon={faFigma} />
        </div>
        <div className="hero-icon">
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className="hero-icon">
          <FontAwesomeIcon icon={faCss3} />
        </div>
        <div className="hero-icon">
          <FontAwesomeIcon icon={faJs} />
        </div>
        <div className="hero-icon">
          <FontAwesomeIcon icon={faReact} />
        </div>
      </div>
    </section>
  );
}

export default Hero
