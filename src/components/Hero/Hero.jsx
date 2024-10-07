import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-img-container">
          <img src="/src/images/Me.png" alt="" />
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
