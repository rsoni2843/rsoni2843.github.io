import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "./common.css";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="services" className="section bg-primary min-h-[700px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title text-accent text-accent">Project</h2>
          <p className="subtitle mb-10">
            Some individual and collaborative projects that I've worked on!
          </p>
        </div>

        <Projects />
      </div>
      <div className="flex mt-14 flex-col mx-auto items-center px-4 lg:flex">
        <h2 className="section-title text-center text-accent">Github Stats</h2>
        <div className="flex gap-10">
          <p align="left" className="w-100">
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=rsoni2843&show_icons=true&locale=en"
              alt="rsoni2843"
            />
          </p>
          <p className="w-100" align="left">
            <img
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=rsoni2843"
              alt="rsoni2843"
            />
          </p>
        </div>
        <div id="githubCalender" className="mt-10">
          <GitHubCalendar color="black" username="rsoni2843">
            <ReactTooltip data-effect="float" delayShow={20} html />
          </GitHubCalendar>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
