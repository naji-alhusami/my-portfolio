import React from "react";

import AboutCard from "../Cards/AboutCard";
import ProjectsData from "./ProjectsData";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  return (
    <div className="h-full text-center ">
      <div>
        <h1 className="inline-block text-emerald-700 text-bold text-center text-6xl my-3 p-4 border-b-4 border-amber-700">
          MY PROJECTS
        </h1>
      </div>
      <div className="flex flex-col justify-center">
        {ProjectsData.map((project) => {
          const projectDescription = project.description.split("||");

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
                <AboutCard>
                  <div className="flex flex-wrap lg:flex-nowrap h-auto">
                    <div className="w-full lg:w-2/3 p-4 ">
                      <h1 className="text-4xl font-bold mb-4 border-b-4 inline-block p-4 border-amber-700 text-green-700">
                        {project.name}
                      </h1>

                      <p className="p-4 border-2 border-green-900 text-green-900 bg-white text-lg mb-4">
                        {projectDescription}
                      </p>
                      <h2 className="text-xl text-left mb-4">
                        <span className="font-bold inline-block mr-1">
                          Technologies Used:
                        </span>
                        <span className="ml-2">{project.technologies}</span>
                      </h2>
                      <h2 className="text-xl text-left mb-4">
                        <span className="font-bold inline-block mr-1">
                          Important Information:
                        </span>
                        <span className="ml-2">{project.info}</span>
                      </h2>
                      <div className="lg:hidden block">
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
                    <div className="w-full lg:w-1/3 relative">
                      <img
                        src={project.image}
                        alt="my-pict"
                        className="w-full h-full"
                      />
                      <div className="opacity-0 hover:opacity-100 absolute inset-0 bg-gray-900 flex justify-center items-center">
                        <div className="text-center">
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:opacity-70 duration-300">
                              CODE
                            </button>
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:opacity-70 duration-300">
                              DEMO
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </AboutCard>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
