import React from "react";

import AboutCard from "../Cards/AboutCard";
import ProjectsData from "./ProjectsData";
import PersonalPhoto from "../Images/PersonalPhoto.jpg";

const Projects = () => {
  return (
    <>
      {ProjectsData.map((project) => (
        <div className="h-full w-screen flex justify-center items-center">
          <AboutCard>
            <div className="flex flex-wrap lg:flex-nowrap h-auto">
              <div className="w-full lg:w-2/3 p-4 text-green-700">
                <h1 className="text-4xl font-bold mb-4 border-4 inline-block p-4 border-amber-700">
                  {project.name}
                </h1>
                <h3 className="text-lg mb-4">tech: {project.technologies}</h3>
                <p className="text-lg mb-4">desc: {project.description}</p>
                <p className="text-lg mb-4">desc: {project.description}</p>
                <p className="text-lg mb-4">desc: {project.description}</p>
                <p className="text-lg mb-4">desc: {project.description}</p>

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
      ))}
    </>
  );
};

export default Projects;
