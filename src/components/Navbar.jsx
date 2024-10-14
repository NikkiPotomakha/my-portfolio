import React, { useState } from 'react';
import './styles.css/Navbar.css';
import MobileNav from './MobileNav/MobileNav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

    return (
      <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className="nav-wrapper">
          <div className="nav-content">
            <div className="logo-icon">
              <a className="logo link" href="/src/App.jsx">
                V<span className="logo link">P</span>
              </a>
            </div>
            <ul>
              <li>
                <a href="" className="menu-item">
                  HOME
                </a>
              </li>
              <li>
                <a href="" className="menu-item">
                  ABOUT ME
                </a>
              </li>
              <li>
                <a href="" className="menu-item">
                  EDUCATION
                </a>
              </li>
              <li>
                <a href="" className="menu-item">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="" className="menu-item">
                  CONTACT
                </a>
              </li>
              <button className="contact-btn" onClick={() => {}}>
                Hire me
              </button>
            </ul>
            <button className="menu-btn" onClick={toggleMenu}>
              <div className="menu-btnn">
                <FontAwesomeIcon icon={openMenu ? faXmark : faBars} />
              </div>
            </button>
          </div>
        </nav>
      </>
    );
};

export default Navbar;