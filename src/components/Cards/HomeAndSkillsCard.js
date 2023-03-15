import React from "react";

import { motion } from "framer-motion";

const HomeAndSkillsCard = (props) => {
  return (
    <motion.div
      className="shadow-md shadow-[#040c16]   border-4 border-emerald-500 text-green-800 my-2 lg:mt-12 w-11/12  lg:max-w-lg  rounded-lg shadow-lg bg-white"
      // whileHover={{ scale: 1.1, duration: 0.1 }}
      initial={{
        opacity: 0,
        y: 0,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 2 }}
    >
      {props.children}
    </motion.div>
  );
};

export default HomeAndSkillsCard;
