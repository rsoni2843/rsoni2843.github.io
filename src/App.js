import React, { Suspense } from "react";

// import components
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BackTopBtn from "./components/BackTopBtn";
import Navbar from "./components/Navbar";
import { CircleCursor } from "react-cursors";

const App = () => {
  const CircleCursor = React.lazy(() =>
    import("react-cursors").then((module) => ({ default: module.CircleCursor }))
  );
  return (
    <div className="bg-white relative">
      <Suspense fallback={<div>Loading ... </div>}>
        <CircleCursor
          initial={{ circleSize: "30px", dotSize: "6px", color: "#35B4E2" }}
          hover={{ circleSize: "50px", dotSize: "0px", color: "white" }}
        />
      </Suspense>
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
