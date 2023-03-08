import React from "react";

import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <motion.div
      className="p-4 text-green-800 mt-16 flex flex-wrap lg:flex-nowrap h-full w-2/3  lg:max-w-lg  rounded-lg shadow-lg bg-white"
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

export default Card;
