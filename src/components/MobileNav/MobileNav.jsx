import React from 'react'
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <a className="logo link" href="/src/App.jsx">
                V<span className="logo link">P</span>
          </a>
           
          <ul>
              <li>
                <a className="menu-item">
                  HOME
                </a>
              </li>
              <li>
                <a className="menu-item">
                  ABOUT ME
                </a>
              </li>
              <li>
                <a className="menu-item">
                  EDUCATION
                </a>
              </li>
              <li>
                <a className="menu-item">
                  PROJECTS
                </a>
              </li>
              <li>
                <a className="menu-item">
                  CONTACT
                </a>
            </li>

             <button className="contact-btn" onClick={() => {}}>
                Hire Me
              </button>
            </ul>
        </div>
      </div>
      </>
  );
};

export default MobileNav
