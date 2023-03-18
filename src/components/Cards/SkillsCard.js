import React from "react";
import '../Home/Home3.css'

import { motion } from "framer-motion";

const SkillsCard = (props) => {
  return (
    <motion.div
    className="shadow-md shadow-[#040c16] border-4 border-emerald-500 text-green-800 mb-4 lg:mt-8 w-11/12  lg:max-w-lg  rounded-lg shadow-lg bg-white"
      initial={{
        opacity: 0,
        y: 0,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
};

export default SkillsCard;
