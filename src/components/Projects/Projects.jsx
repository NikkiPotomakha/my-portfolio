import React from 'react'
import "./Projects.css"
import mywork_data from '../../project_data';

const Projects = () => {
    return (
      <section className="projects section" id="projects">
        <div className="mywork container">
          <div className="mywork_title">
            <h1>My Latest Projects</h1>
          </div>
          <div className="mywork_container">
            {mywork_data.map((work, index) => {
              return <img key={index} src={work.w_img} alt="" />;
            })}
          </div>
        </div>
      </section>
    );
}

export default Projects
