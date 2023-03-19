import React from "react";

import { motion } from "framer-motion";

const CoursesCard = (props) => {
  const variants = {
    hidden: {
      x: props.course.id % 2 ? -500 : 500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`bg-white bg-opacity-95 w-9/12 mx-auto my-4 border-4 border-emerald-500 relative ${
        props.course.id % 2 ? " border-l-0 float-left" : "border-r-0 float-right"
      }`}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {props.children}
    </motion.div>
  );
};

export default CoursesCard;
