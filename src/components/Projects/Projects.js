import React from "react";

import { motion, AnimatePresence } from "framer-motion";

import AboutProjectsCard from "../Cards/AboutProjectsCard";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  return (
    <div className="relative h-full text-center z-0">
      <div>
        <h1 className="inline-block text-emerald-700 text-bold text-center text-6xl my-3 p-4 border-b-4 border-amber-700">
          PROJECTS
        </h1>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        {/* <div className="flex flex-col justify-center"> */}
        {ProjectsData.map((project) => {
          const projectDescription = project.info.split("||");
          console.log(projectDescription);

          return (
            <AnimatePresence>
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <AboutProjectsCard>
                  <div className="flex flex-col h-auto">
                    <div className="w-full p-4 ">
                      <h1 className="text-4xl font-bold mb-4 border-b-4 inline-block p-4 border-amber-700 text-green-700">
                        {project.name}
                      </h1>

                      <p className="p-4 border-2 border-green-900 text-green-900 bg-white text-lg mb-4">
                        {project.description}
                      </p>
                      <h2 className="text-xl text-left mb-4">
                        <span className="font-bold inline-block mr-1">
                          Technologies Used:
                        </span>
                        <span className="ml-2">{project.technologies}</span>
                      </h2>
                      <h2 className="text-xl xs:text-md text-left mb-4">
                        <span className="font-bold inline-block mr-1">
                          Important Information:
                        </span>
                        <ul className="ml-2">
                          {projectDescription.map((project) => (
                            <li key={project.id}>{project}</li>
                          ))}
                        </ul>
                      </h2>
                      <div className="block">
                        <a href={project.code} target="_blank" rel="noreferrer">
                          <button className="px-4 py-3 m-2 text-black text-center font-bold text-lg rounded-lg  bg-emerald-500  hover:bg-emerald-700  hover:text-white duration-300">
                            CODE
                          </button>
                        </a>
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <button className="px-4 py-3 m-2 text-black text-center font-bold text-lg rounded-lg bg-emerald-500  hover:bg-emerald-700  hover:text-white duration-300">
                            DEMO
                          </button>
                        </a>
                      </div>
                    </div>
                    {/* <div className="w-full h-[20rem] relative bg-gray-300 "> */}
                      {/* <img
                        src={project.image}
                        alt="my-pict"
                        className="w-full h-[20rem]"
                      /> */}
                      {/* <div className="flex justify-center items-center opacity-0 hover:opacity-100 absolute inset-0 bg-blue-800 transform opacity-0 transition duration-500">
                        <div className="text-center">
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg duration-300 hover:opacity-70">
                              CODE
                            </button>
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg duration-300 hover:opacity-70">
                              DEMO
                            </button>
                          </a>
                        </div>
                      </div> */}
                    {/* </div> */}
                  </div>
                </AboutProjectsCard>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
