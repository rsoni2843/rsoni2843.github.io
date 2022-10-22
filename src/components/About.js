import React from "react";
import "./common.css";
// import img
import Image from "../assets/img/About/Image.gif";
import { Link } from "react-scroll";
import Nipendra from "../assets/img/Nipendra.png"
const bs = {
  border:"1px solid #35B4E2",
  borderRadius:"7%",
  margin:"auto"
}
// import Image from '../assets/img/about.webp';
// const Image = 'https://images.squarespace-cdn.com/content/v1/5769fc401b631bab1addb2ab/1541580611624-TE64QGKRJG8SWAIUS7NS/coding-freak.gif'
const About = () => {
  return (
    <section className="section bg-tertiary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img style={bs} className="lg:hidden h-full w-[370px]" src={Nipendra} alt={'Nipendra'}/>
          <img
            className=" hidden lg:block object-cover h-full w-[450px] md:mx-auto lg:mx-0 rounded-2xl coderImage"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 ">
                Nipendra Soni
              </h2>
              <p className="mb-4 text-accent">Full-Stack Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                A passionate Full-Stack Web Developer from Masai School who's
                always willing to learn and work across technology and domain. I
                love to explore new technologies and leverage them to solve
                real-life problems. <br />
                <br />
                I'm deep into the Web Development & looking forward to upgrade
                my skills in a challenging work environment.
              </p>
            </div>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-300"
              to={"contact"}
            >
              <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
