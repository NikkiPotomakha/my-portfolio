import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleMenu(); // Закриваємо меню після натискання
    }
  };

  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`} // Додаємо клас active, якщо меню відкрите
      onClick={toggleMenu} // Закриваємо меню при натисканні на фон
    >
      <div
        className="mobile-menu-container"
        onClick={(e) => e.stopPropagation()} // Зупиняємо поширення події, щоб не закрити меню при натисканні на елементи
      >
        <a className="logo link" href="/">
          V<span className="logo link">P</span>
        </a>

        <ul>
          <li>
            <a
              className="menu-item"
              href="#hero"
              onClick={() => scrollToSection("home")}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              className="menu-item"
              href="#about"
              onClick={() => scrollToSection("about")}
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a
              className="menu-item"
              href="#skills"
              onClick={() => scrollToSection("skills")}
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              className="menu-item"
              href="#education"
              onClick={() => scrollToSection("education")}
            >
              EDUCATION
            </a>
          </li>
          <li>
            <a
              className="menu-item"
              href="#projects"
              onClick={() => scrollToSection("projects")}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              className="menu-item"
              href="#contact"
              onClick={() => scrollToSection("contact")}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
