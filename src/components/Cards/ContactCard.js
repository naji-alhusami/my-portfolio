import React from "react";

import { motion } from "framer-motion";

const ContactCard = (props) => {
  return (
    <motion.div
      className="shadow-md shadow-[#040c16] border-4 border-emerald-500 text-green-800 rounded-lg shadow-lg bg-white xl:w-[120%] lg:w-11/12 lg:m-10 md:w-[40rem] md:m-8 sm:w-[30rem] sm:m-4 xs:w-[20rem] xs:m-[2rem]"
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

export default ContactCard;
