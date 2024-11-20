import React from "react";
import Navbar from "../src/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from './components/Skills/Skills';
import "./components/styles.css/App.css"
import Qualification from "./components/Qualification/Qualification";
import About from "./components/About/About"
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
