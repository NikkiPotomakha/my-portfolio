import React from "react";
import Navbar from "../src/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from './components/Skills/Skills';
import "./components/styles.css/App.css"
import Qualification from "./components/Qualification/Qualification";
import About from "./components/About/About"
import Projects from "./components/Projects/Projects";

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
      </div>
    </>
  );
}

export default App;
