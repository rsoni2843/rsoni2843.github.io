import React from "react";
import { TailwindNavbar } from "tailwind-navbar-react";
import { social } from "../data";
import "./navbar.css";
import { navigation } from "../data";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <TailwindNavbar
        brand={<img src={Logo} width="70" alt="NS Logo" />}
        className="py-1 capitalize"
      >
        <div className="lg:flex items-center gap-56">
          <nav>
            <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
              {navigation?.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      className="block px-0 py-3 cursor-pointer border-b-2 border-transparent lg:p-4 hover:border-indigo-100 transition-all duration-200"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                      // offset={-70}

                      to={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div>
            <ul className="flex space-x-6 lg:ml-16">
              {social.map((item, i) => {
                return (
                  <li
                    className="flex justify-center items-center text-accent"
                    key={i}
                  >
                    <a
                      className="flex gap-2 items-center text-base"
                      href={item.href}
                      target={"blank"}
                    >
                      {item.icon}
                      {item.description ? item.description : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </TailwindNavbar>
    </>
  );
};

export default Navbar;
