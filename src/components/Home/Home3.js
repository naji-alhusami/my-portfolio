import React from "react";
import { Link } from "react-router-dom";
import Cover from "../Images/Cover.png";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home3.css";

const Home = () => {
  return (
    <header className=" relative">
      {/* <div className="relative flex flex-col md:flex-row md:items-center lg:ml-16 mt-2"> */}
      <div className="relative flex xl:flex-row xl:mt-2 lg:flex-row lg:mt-2 md:flex-row md:mt-10 md:items-center lg:ml-16 mt-2 image-styles-s">
        <motion.div
          initial={{ x: -600 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 flex flex-col justify-center text-left md:mb-8 md:ml-20 sm:mt-20 sm:ml-24 div-styles-xs"
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
            Font-End Development
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
          // className="flex mr-20 lg:mt-20 lg:mr-56 md:mr-32 md:mt-20 hidden sm:block "
          className="flex xl:mr-56 xl:mt-20 xl:block lg:mr-16 lg:mt-20 lg:block md:mr-10 md:mt-10 md:block image-styles-s sm:hidden hidden"
        >
          <img
            src={Cover}
            alt="portfolio"
            className="object-cover h-full w-full"
            placeholder="blurred"
          />
        </motion.div>
      </div>
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/omar-bassatni-40a762188/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/OmarBassatni97"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto:omarbassatni@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="www.google.com"
              download
              className="flex justify-between items-center w-full"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </header>
  );
};

export default Home;
