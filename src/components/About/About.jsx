import React from "react";
import "./About.css";
import Book from "../../images/Book.jpg";
import laptop from "../../images/laptop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHtml5,
  faCss3,
  faReact,
  faJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="about_section" id="about">
      <div className="about_container" >
        <h3 className="about_title">About Me</h3>
        <h4 className="about_subtitle">Let's dive into my world</h4>
        <p className="about_text">
          Learn more about who I am, what I do, and what inspires me.
        </p>
      </div>

      <div className="card_section">
        {/* Current Read Card */}
        <div className="card current_read">
          <h4>My Favourite Book</h4>
          <p>Taming Tigers - Jim Lawless</p>
          <div className="book_image">
            <img src={Book} alt="Taming Tigers" />
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="card tech_stack">
          <h4>My Tech Stacks</h4>
          <p>
            Designed key features for embedding in-platform data widgets, charts
          </p>
          <div className="tech_stack_icons">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faFigma} />
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="laptop_image">
            <img src={laptop} alt="laptop" />
          </div>
        </div>

        {/* Persona Card */}
        <div className="card persona">
          <h4>My Hobbies</h4>
          <p>Know me as a person</p>
          <div className="persona_tags">
            <span>Traveller ✈️</span>
            <span>Social-animal 😍</span>
            <span>Cooking lover 👩‍🍳</span>
            <span>Fitness Enthusiast 💪</span>
            <span>Yoga 🧘</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
