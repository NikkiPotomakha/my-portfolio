import React from 'react'
import './Qualification.css'

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personel journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active qualification--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>
                    <div className="qualification__sections">
                        <div className="qualification__content">
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Frontend Developer</h3>
                                    <span className="qualification__subtitle">Course</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        July 2023 - Desember 2023
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
                                        <i className="uil uil-calendar-alt"></i>
                                        Desember 2023 - January 2024
                                    </div>
                                </div>
                                <div className="qualification__data">
                                    <div></div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification__title">SQL and PostgreSQL</h3>
                                        <span className="qualification__subtitle">Course</span>
                                        <div className="qualification__calendar">
                                            <i className="uil uil-calendar-alt"></i>
                                            April 2023 - May 2024
                                        </div>
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

export default Qualification
