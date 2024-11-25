import React from "react";
import "./Projects.css";
import mywork_data from "../../project_data";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="mywork container">
        <div className="mywork_title">
          <h1>My Latest Projects</h1>
        </div>
        <div className="mywork_container">
          {mywork_data.map((work, index) => {
            return (
              <a
                key={index}
                href={work.w_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={work.w_img} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
