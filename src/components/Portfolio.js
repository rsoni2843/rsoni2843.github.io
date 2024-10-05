import React from "react";
import { Carousel } from "react-responsive-carousel";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "./common.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Projects from "./Projects";
import { liveProjects } from "../data";

const Portfolio = () => {
  return (
    <section id="services" className="section bg-primary min-h-[700px]">
      <div className="container min-h-28  mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title text-accent text-accent">
            Live Projects
          </h2>
          <p className="subtitle mb-10">
            Some live projects that I've worked on!
          </p>
        </div>

        <Carousel
          // showArrows={false} // Removes arrows
          autoPlay={true} // Auto-play enabled
          interval={5000} // Set interval to 5 seconds
          infiniteLoop={true} // Loop the slides infinitely
          showStatus={false} // Removes status indicator
          showIndicators={false}
        >
          {liveProjects.map((project, index) => (
            <div key={index} className="p-4">
              <h3 className="text-2xl underline font-black text-black">
                {project.title}
              </h3>
              <p className="text-lg text-white mt-6 w-2/3 m-auto">
                {project.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title text-accent text-accent">
            Personal Projects
          </h2>
          <p className="subtitle mb-10">
            Some individual and collaborative personal projects that I've worked
            on!
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
