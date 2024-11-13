import React from 'react'
import Book from "../../images/Book.jpg";
import {
  faGithub,
  faHtml5,
  faCss3,
  faReact,
  faJs,
} from "@fortawesome/free-brands-svg-icons";


const About = () => {
  return (
    <div className="about_section">
      <div className="about_container">
        <h3 className="about_title">About Me</h3>
        <p className="about_text">
          Learn more about who I am, what I do and what inspires me
        </p>
      </div>
      <div className="card current_read">
        <h4>My reads</h4>
        <p>Taming Tigers - Jim Lawless</p>
        <div className="book_image">
          <img src={Book} alt="Taming Tigers" />
        </div>
      </div>

      {/* My Tech Stacks Section */}
      <div className="card tech_stack">
        <h4>My Tech Stacks</h4>
        <p>
          Designed key features for embedding in-platform data widgets, charts
        </p>
        <div className="tech_stack_icons">
          <img src={faGithub} alt="Tech Stack Icon" />
          <img src={faHtml5} alt="Tech Stack Icon" />
          <img src={faCss3} alt="Tech Stack Icon" />
          <img src={faReact} alt="Tech Stack Icon" />
          <img src={faJs} alt="Tech Stack Icon" />
        </div>
      </div>

      {/* My Persona Section */}
      <div className="card persona">
        <h4>My Persona</h4>
        <p>Know me as a person</p>
        <div className="persona_tags">
          <span>Night-Owl 🦉</span>
          <span>Traveller ✈️</span>
          <span>Social-animal 😍</span>
        </div>
      </div>
    </div>
  );
}

export default About;
