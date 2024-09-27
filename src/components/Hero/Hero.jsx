import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-title">
          <h1>HI, I'M VERONIKA</h1>
        </div>
        <div className="hero-img-container">
          <img src="/src/images/Frame 2.png" alt="" />
        </div>
        <div className="hero-content">
          <h2>A Junior Frontend Developer based in Warsaw, Poland.</h2>
          <p>
            I have a keen eye for design and a knack for bringing web
            applications to life. With a solid foundation in HTML, CSS, and
            JavaScript, I specialize in creating responsive, user-friendly
            interfaces that provide seamless experiences across all devices.
          </p>
        </div>
      </div>
      <div className="icon-title">Tech skills</div>

      <div className="hero-icon">
        <img src="/src/icons/css3.svg" alt="" />
      </div>
      <div className="hero-icon">
        <img src="/src/icons/figma.svg" alt="" />
      </div>
      <div className="hero-icon">
        <img src="/src/icons/html5.svg" alt="" />
      </div>
      <div className="hero-icon">
        <img src="/src/icons/js.svg" alt="" />
      </div>
      <div className="hero-icon">
        <img src="/src/icons/react.svg" alt="" />
      </div>
      <div className="hero-icon">
        <img src="/src/icons/sql.svg" alt="" />
      </div>
    </section>
  );
}

export default Hero
