import React from "react";

// import components
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BackTopBtn from "./components/BackTopBtn";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-white relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <BackTopBtn />
    </div>
  );
};

export default App;
