import React from 'react'
import laptop from "../../images/laptop.png";
import Book from "../../images/Book.jpg";

const About = () => {
    return (
      <div className="about_section">
        <div className="about_container">
          <h3 className="about_title">About Me</h3>
          <span className="about_subtitle">My World</span>
          <p className="about_text">
            Learn more about who I am, what I do and what inspires me
          </p>
          <div className='about_img'>
            <img src={laptop} alt="Veronika" />
          </div>
        </div>
        <div className="about_card">
          <h4>My reads</h4>
                <p>Explore the books shaping my perspectives.</p>
                <img src={Book} alt="Taming Tigers" />
        </div>
      </div>
    );
}

export default About
