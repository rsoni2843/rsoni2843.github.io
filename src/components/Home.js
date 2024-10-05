import React from "react";
import "./common.css";
// import AOS from 'aos';
import "aos/dist/aos.css";
import profile from "./Profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-20">
          <div className="flex-1 flex flex-col items-center lg:items-start scale-up-center">
            <p className="text-accent text-4xl  mb-[18px]">
              Hey, I'm Nipendra Soni! 👋
            </p>
            <h1 className="text-4xl leading-[44px]  md:text-5xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:tracking-[10px] text-black">
              I'm a Full-Stack <br /> Web Developer.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left"></p>
            <a
              target="__blank"
              href="https://drive.google.com/file/d/1wOHthJlffp8QNzpe01T55SppZQqTTBKT/view?usp=drive_link"
            >
              <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
                Resume
              </button>
            </a>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full ">
            <img
              className="slide-up-center h-full object-cover bg-transparent overflow-visible imageNipendra"
              // src={"https://i.stack.imgur.com/xPFf4.png"}
              // src={"https://i.stack.imgur.com/07m9c.jpg"}
              src={
                "https://ik.imagekit.io/rqsoynsuq/DSC_9666%20Background%20Removed.png?updatedAt=1722054243615"
              }
              // src={profile}
              alt="Nipendra"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
