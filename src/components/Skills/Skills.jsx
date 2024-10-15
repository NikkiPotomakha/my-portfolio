import React from 'react'
import './Skills.css'
import Skillcard from './Skillcard/Skillcard';

const Skills = () => {
  return (
    <section className="skills-container">
      <h5>Technical proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <Skillcard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
            />
          ))}
        </div>

        <div className="skills-info"></div>
      </div>
    </section>
  );
}

export default Skills
