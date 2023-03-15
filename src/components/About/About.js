import React from "react";
import PersonalPhoto from "../Images/PersonalPhoto.jpg";
import AboutCard from "../Cards/AboutCard";
import { motion } from "framer-motion";

const About = () => {
  const AboutData = [
    "- I'm a Front-End Development living in Istanbul with a Bachelor Degree in Information Systems Engineering from Eastern Mediterranean University (Northern Cyprus) and Master Degree in Computer Engineering from Bahçeşehir University (Istanbul, Turkey).",
    "- During my university life, I gained the theoretical part in many programming languages.",
    "- To start improving myself in Front-End field, I took many courses in Udemy Platform during my Master Degree.",
    "- Joining Re-Coded after I hold my Master Degree helped me to apply my theoretical knowledge through many projects which improved my ability in programming. Re-Coded made us dive deeper in (HTML, CSS, BOOTSTRAP, TAILWIND, VANILLA JAVASCRIPT, REACTJS, REDUX).",
    "- The most important part of my experience when I joined UNDP (SDG AI LAB) in Istanbul, They were building Radar Digital Technology using TypeScript. I helped them during the last part of building the project and then in deploying their website.",
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
    <div className=" w-screen  flex justify-center items-center">
      <AboutCard>
        <div className="flex flex-wrap lg:flex-nowrap h-auto">
          <div className="w-full lg:w-2/3 p-4 text-green-700">
            <motion.h1
              className="text-4xl font-bold mb-4 border-4 inline-block p-4 border-amber-700"
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
          <div className="w-full lg:w-1/3">
            <img src={PersonalPhoto} alt="my-pict" className="w-full h-full" />
          </div>
        </div>
      </AboutCard>
    </div>
  );
};

export default About;
