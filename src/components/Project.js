import React from "react";
import { FiExternalLink, FiGithub, FiLink } from "react-icons/fi";
import "./common.css";

const Project = ({ item }) => {
  console.log(item);
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-6">
        <img className="rounded-2xl" src={item.image} alt={item.name} />
      </div>
      <div className="projectDescDiv">
        <p className="capitalize text-accent text-sm mb-1 text-center ">
          {item.category}
        </p>
        <h3 className="text-2xl font-semibold capitalize mb-3 projectDiv">
          {item.name}
        </h3>
        <p className="text-sm max-w-md">{item.description}</p>
      </div>
      <div className="flex gap-12 text-xl">
        <a href="https://github.com/rsoni2843" target={"blank"}>
          <p class=" projectGitIcon">
            <FiGithub />
          </p>
        </a>
        <a href={item.link} target={"blank"}>
          <p class=" projectGitIcon">
            <FiExternalLink />
          </p>
        </a>
      </div>
    </div>
  );
};

export default Project;
