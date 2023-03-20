import React from "react";
import { motion } from "framer-motion";

import AboutProjectsCard from "../Cards/AboutProjectsCard";
import PersonalPhoto from "../assets/Images/PersonalPhoto.jpg";

const About = () => {
  const AboutData = [
    "- I'm a Front-End Development living in Istanbul with a Bachelor Degree in Information Systems Engineering from Eastern Mediterranean University (Northern Cyprus) and Master Degree in Computer Engineering from Bahçeşehir University (Istanbul, Turkey).",
    "- During my university life, I gained the theoretical part in many programming languages.",
    "- To start improving myself in Front-End field, I took many courses in Udemy Platform during my Master Degree.",
    "- After I hold my Master Degree, I joined Re-Coded which helped me applying my theoretical knowledge through many projects that improved my ability in programming. Re-Coded made us dive deeper in (HTML, CSS, BOOTSTRAP, TAILWIND, JAVASCRIPT, REACTJS, REDUX TOOLKIT).",
    "- The most important part of my experience when I joined UNDP (SDG AI LAB) in Istanbul, They were building Radar Digital Technology web application using TypeScript. I helped them during the last part of building the project and then in deploying their website.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="relative flex flex-col justify-center items-center z-0">
      <h1 className="text-emerald-700 text-bold text-6xl my-3 p-4 border-b-4 border-amber-700">
        ABOUT ME
      </h1>
      <AboutProjectsCard>
        <div className="flex text-green-700 text-center w-full xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col p-4 ">
          <div className="text-green-700 text-center p-4 xl:ml-6">
            <motion.h1
              className="text-4xl font-bold mb-4 inline-block p-4 border-4 border-amber-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              NAJI ALHUSAMI
            </motion.h1>
            <motion.h3 className="text-2xl font-bold mb-4">
              Front-End Development
            </motion.h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={itemVariants} className="text-lg mb-4">
                HI, My name is <b>NAJI ALHUSAMI</b> I am passionate about
                building excellent websites that improves the lives of those
                around me.
              </motion.li>
              {AboutData.map((data) => {
                return (
                  <motion.li
                    variants={itemVariants}
                    className="text-lg text-black text-left mb-1"
                  >
                    {data}
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
          <div className="flex items-center justify-center relative order-first w-full">
            <img
              src={PersonalPhoto}
              alt="my-pict"
              className="rounded-full xl:ml-2 lg:h-[28rem] lg:w-[30rem] lg:mt-[1rem] md:h-[30rem] md:mt-5 sm:h-[30rem] sm:mt-5"
            />
          </div>
        </div>
      </AboutProjectsCard>
    </div>
  );
};

export default About;
