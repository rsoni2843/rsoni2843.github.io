import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./common.css";

const Project = ({ item }) => {
  return (
    <div
      data-aos="zoom-in"
      key={item.id}
      className="flex flex-col items-center text-center bg-white border-solid border-2 border-white rounded-2xl p-2"
    >
      <div className="mb-6">
        <img
          className="rounded-2xl border-2 border-stone-300 h-48"
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="">
        <p className="capitalize text-sm mb-1 text-left ">{item.category}</p>
        <h3 className="text-2xl text-accent font-bold capitalize mb-3  text-left">
          {item.name}
        </h3>
        <p className="text-sm text-left max-w-md">• {item.description}</p>
        <p className=" mt-2 text-accent text-sm mb-5 text-left">
          <span className="font-bold">• Tech Stacks -</span> {item.stack}
        </p>
      </div>

      <div className="flex  mt-2 gap-12 text-xl">
        <a href={item.github} target={"blank"}>
          <p class=" projectGitIcon">
            <FiGithub className="text-accent" />
          </p>
        </a>
        <a href={item.link} target={"blank"}>
          <p className=" projectGitIcon">
            <FiExternalLink className="text-accent" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default Project;
