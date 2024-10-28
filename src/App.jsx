import React from "react";
import Navbar from "../src/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from './components/Skills/Skills';
import "./components/styles.css/App.css"
import Qualification from "./components/Qualification/Qualification";



const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Qualification />
      </div>
    </>
  );
}

export default App;
