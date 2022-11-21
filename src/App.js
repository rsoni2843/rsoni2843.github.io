import React, { Suspense } from "react";

// import components
import Hero from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BackTopBtn from "./components/BackTopBtn";
import Navbar from "./components/Navbar";

const App = () => {
  const CircleCursor = React.lazy(() =>
    import("react-cursors").then((module) => ({ default: module.CircleCursor }))
  );
  return (
    <div className="bg-white relative">
      <Suspense fallback={<div>Loading ... </div>}>
        <CircleCursor
          initial={{ circleSize: "30px", dotSize: "6px", color: "black" }}
          hover={{ circleSize: "50px", dotSize: "0px", color: "black" }}
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
