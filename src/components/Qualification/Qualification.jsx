import React from "react";
import "./Qualification.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCalendarDays } from "@fortawesome/free-solid-svg-icons"; // Виправлено шлях до іконки

const Qualification = () => {
  return (
    <section className="qualification_section" id="education">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>
      <div className="qualification__container container">
        <div className="qualification__button button--flex">
          <div className="qualification-icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>{" "}
          Education
        </div>
        <div className="qualification__tabs">
          <div className="qualification__sections">
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Frontend Developer</h3>
                  <span className="qualification__subtitle">Course</span>
                  <div className="qualification__calendar">
                    <FontAwesomeIcon icon={faCalendarDays} /> July 2023 -
                    Desember 2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">React&TypeScript</h3>
                  <span className="qualification__subtitle">Course</span>
                  <div className="qualification__calendar">
                    <FontAwesomeIcon icon={faCalendarDays} /> Desember 2023 -
                    January 2024
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">SQL and PostgreSQL</h3>
                    <span className="qualification__subtitle">Course</span>
                    <div className="qualification__calendar">
                      <FontAwesomeIcon icon={faCalendarDays} /> April 2023 - May
                      2024
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
