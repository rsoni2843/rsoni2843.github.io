import React from "react";
import "./common.css";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="services" className="section bg-primary min-h-[700px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">Project</h2>
          <p className="subtitle mb-10">
            Some individual and collaborative projects that I've worked on!
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
