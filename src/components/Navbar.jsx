import React from 'react';
import './styles.css/Navbar.css';


const Navbar = () => {
    return (
      <>
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
                Hire Me
              </button>
            </ul>
            <button className="menu-btn" onClick={() => {}}>
              <span
                className={"material-symbols-outlined"}
                style={{ fontSize: "1.8rem" }}
              >
                =
              </span>
            </button>
          </div>
        </nav>
      </>
    );
};

export default Navbar;