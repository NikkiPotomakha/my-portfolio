import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Potomakha</h1>
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
            <a href="#qualification" className="footer_link">Education</a>
          </li>
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
        </ul>
        <div className='footer_social'>
          
        </div>
      </div>
    </div>
  );
}

export default Footer
