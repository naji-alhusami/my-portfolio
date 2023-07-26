import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SocialLinks from "./SocialLinks";
import Cover from "../assets/Images/Cover.png";

const Home = () => {
  return (
    <header className="relative min-h-screen z-0">
      <div className=" flex xl:flex-row lg:flex-row md:flex-row md:mt-10 md:items-center sm:flex sm:flex-col sm:mt-24 sm:ml-28 xs:flex xs:flex-col">
        <motion.div
          initial={{ x: -600 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 flex flex-col justify-center text-left xl:mt-2 xl:ml-[5rem] lg:ml-[5rem] lg:mt-2 md:mb-8 md:ml-6  xs:ml-[1rem] xs:mt-[5rem]"
        >
          <div className="bg-emerald-500 h-1 w-28 mb-6" alt="A line" />
          <motion.h1
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-7xl font-bold text-teal-900 mb-4"
          >
            I'm Naji
          </motion.h1>
          <motion.h3
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-bold mb-6"
          >
            Font-End Developer & IT Help Desk
          </motion.h3>
          <motion.div
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl font-bold mb-8"
          >
            <Link to="/about">
              <button
                type="button"
                className="text-xl bg-emerald-500 p-3 rounded-md mr-3 hover:text-white hover:bg-emerald-700"
              >
                About Me
              </button>
            </Link>
            OR
            <Link to="/contact">
              <button
                type="button"
                className="text-xl bg-emerald-500 p-3 rounded-md m-3 hover:text-white hover:bg-emerald-700"
              >
                Contact Me
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ delay: 1 }}
            className="flex"
          >
            <SocialLinks showName={true} />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex xl:mr-56 xl:mt-20 xl:block lg:mr-16 lg:mt-20 lg:block md:mt-10 md:block sm:block sm:w-[20rem] sm:h-[20rem] sm:m-20 xs:block xs:w-[15rem] xs:h-[15rem] xs:ml-12 xs:my-12"
        >
          <img
            src={Cover}
            alt="portfolio"
            className="object-cover h-full w-full"
            placeholder="blurred"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Home;
