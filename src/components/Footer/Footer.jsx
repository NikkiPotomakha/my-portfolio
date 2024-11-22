import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">VP</h1>
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
            <a href="#education" className="footer_link">
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
            <i className="icon_facebook">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </i>
          </a>

          <a
            href="https://www.linkedin.com/feed/"
            className="footer-social_link"
            target="_blank"
          >
            <i className="icon_linkedIn">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </i>
          </a>

          <a
            href="https://github.com/"
            className="footer-social_link"
            target="_blank"
          >
            <i className="icon_github">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Veronika Potomakha. All rights reserved
        </span>
      </div>
    </div>
  );
}

export default Footer
