import React from "react";
import PersonalPhoto from "../Images/PersonalPhoto.jpg";
import Card1 from "../Reusable/Card1";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="h-full w-screen flex justify-center items-center">
      <Card1>
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
            <motion.h3 className="text-lg mb-4">
              Front-End Development
            </motion.h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={itemVariants} className="text-lg mb-4">
                I'm a Front-End Developer, specializing in building responsive
                web applications.
              </motion.li>
              <motion.li variants={itemVariants} className="text-lg mb-4">
                I'm a Front-End Developer, specializing in building responsive
                web applications.
              </motion.li>
              <motion.li variants={itemVariants} className="text-lg mb-4">
                I'm a Front-End Developer, specializing in building responsive
                web applications.
              </motion.li>
              <motion.li variants={itemVariants} className="text-lg mb-4">
                I'm a Front-End Developer, specializing in building responsive
                web applications.
              </motion.li>
            </motion.ul>
          </div>
          <div className="w-full lg:w-1/3">
            <img src={PersonalPhoto} alt="my-pict" className="w-full h-11/12" />
          </div>
        </div>
      </Card1>
    </div>
  );
};

export default About;
