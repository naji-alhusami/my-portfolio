import React from "react";
import { motion } from "framer-motion";

import AboutProjectsCard from "../Cards/AboutProjectsCard";
import PersonalPhoto from "../assets/Images/PersonalPhoto.jpg";

const About = () => {
  const AboutData = [
    "- I am a Frontend Developer based in Germany. I hold a Bachelor's Degree in Information Systems Engineering from Eastern Mediterranean University in Northern Cyprus and a Master's Degree in Computer Engineering from Bahçeşehir University in Istanbul, Turkey.",
    "- During my university studies, I gained theoretical knowledge in multiple programming languages.",
    "- To enhance my skills in the Front-End field, I pursued various courses on Udemy during my Master's Degree.",
    "- Following the completion of my Master's Degree, I joined Re-Coded, where I applied my theoretical knowledge through numerous projects. This experience significantly improved my programming abilities, specifically in (HTML, CSS, Bootstrap, TailwindCSS, JavaScript, TypeScript, React.js, Redux Toolkit, Next.js 14).",
    "- A significant milestone in my career was joining UNDP (SDG AI LAB) in Istanbul. I contributed to the development and deployment of the Radar Digital Technology web application using React.js & TypeScript.",
    "- I attended MERN course to become Full-Stack Developers.",
    "- I stay up-to-date with the latest technologies, ensuring that I can consistently deliver innovative and cutting-edge solutions.",
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
              Full-Stack Developer
            </motion.h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={itemVariants} className="text-lg mb-4">
                Hi, My name is <b>NAJI ALHUSAMI</b> I am passionate about
                building excellent web applications that improves the lives of those
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
