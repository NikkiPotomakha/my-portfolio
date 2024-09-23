import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import "./components/styles.css/App.css"


const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
    </>
  );
}

export default App;
