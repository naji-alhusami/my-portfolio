import React from "react";

import AboutCard from "../Cards/AboutCard";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  return ProjectsData.map((project) => {
    const projectDescription = project.description.split("||");

    return (
      <div className="h-full w-screen flex justify-center ">
        <AboutCard>
          <div className="flex flex-wrap lg:flex-nowrap h-auto">
            <div className="w-full lg:w-2/3 p-4 ">
              <h1 className="text-4xl font-bold mb-4 border-4 inline-block p-4 border-amber-700 text-green-700">
                {project.name}
              </h1>
              <h2 class="text-xl text-left mb-4">
                <span class="font-bold inline-block mr-1">
                  Technologies Used:
                </span>
                <span class="ml-2">{project.technologies}</span>
              </h2>
              <p className="p-4 border-2 border-green-900 text-green-900 bg-white text-lg">
                {projectDescription}
              </p>
            </div>
            <div className="w-full lg:w-1/3">
              <img
                src={project.image}
                alt="my-pict"
                className="w-full h-11/12"
              />
            </div>
          </div>
        </AboutCard>
      </div>
    );
  });
};

export default Projects;
