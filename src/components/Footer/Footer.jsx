import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Potomakha</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer_link">
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.facebook.com/"
            className="footer-social_link"
            target="_blank"
          >
            <i className="icon_facebook"></i>
          </a>

          <a
            href="https://www.linkedin.com/feed/"
            className="footer-social_link"
            target="_blank"
          >
            <i className="icon_linkedIn"></i>
          </a>

          <a
            href="https://github.com/"
            className="footer-social_link"
            target="_blank"
          >
            <i className="icon_github"></i>
          </a>
        </div>

        <span className='footer_copy'>&#169; Crypticalcoder. All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer
