import React, { useEffect, useState } from "react";
// import "./common.module.css" ;
// import components
import Logo from "../assets/img/Logo.png";
// import Logo from '../assets/img/logo.png';
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Socials from "./Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className=" scale-up-hor-center container mx-auto h-full flex items-center justify-between ">
        {/* logo */}
        <a className="w-20" href="#">
          <img  src={Logo} alt="Logo" />
        </a>

        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
