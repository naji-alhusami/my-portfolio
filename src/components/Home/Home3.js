import React from "react";
import { Link } from "react-router-dom";
import Cover from "../Images/Cover.png";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import "./Home3.css";

const Home = () => {
  return (
    <header className="relative">
      <div className="relative flex flex-col md:flex-row md:items-center lg:ml-20 lg:mt-4">
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 flex flex-col justify-center text-left md:pl-8 custom-mobile-styles"
        >
          <div className="bg-emerald-500 h-1 w-28 mb-6" alt="A line" />
          <motion.h1
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-7xl font-bold text-teal-900 mb-4"
          >
            I'm Naji
          </motion.h1>
          <motion.h3
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-bold mb-6"
          >
            Font-End Development
          </motion.h3>
          <motion.div
            initial={{ x: -400 }}
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
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ delay: 1 }}
            className="flex"
          >
            {SocialLinks.map((link) => {
              return (
                <a
                  href={link.url}
                  key={link.id}
                  className="text-4xl text-gray-500 transition duration-500"
                >
                  {link.image}
                </a>
              );
            })}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex lg:mt-20 lg:mr-56 md:mr-32 md:mt-20 hidden sm:block"
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
