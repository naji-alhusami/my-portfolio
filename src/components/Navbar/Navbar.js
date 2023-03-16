import React, { useState } from "react";
import Logo from "../Images/Logo.svg";
// import Resume from "../assets/resume.pdf";
import {
  FaBars,
  FaTimes,
  //  FaGithub, FaLinkedin
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="relative w-full h-[60px] flex justify-between items-center lg:px-0 px-[5rem]  z-2 ">
      <motion.div
      className="lg:px-[5rem] md:px-12 sm:pl-4"
        initial={{
          opacity: 0,
          x: -500,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 2 }}
      >
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[60px]" />
        </Link>
      </motion.div>
      {/* menu */}
      <motion.ul
        className="hidden md:flex text-lg"
        initial={{
          opacity: 0,
          x: 500,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 2 }}
      >
        <Link to="/">
          <li className="mx-1 p-3 hover:bg-emerald-500 hover:rounded-md hover:text-white transition duration-300 font-bold">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="mx-1 p-3 hover:bg-emerald-500 hover:rounded-md hover:text-white transition duration-300 font-bold">
            About
          </li>
        </Link>
        <Link to="/skills">
          <li className="mx-1 p-3 hover:bg-emerald-500 hover:rounded-md hover:text-white transition duration-300 font-bold">
            Skills
          </li>
        </Link>
        <Link to="/projects">
          <li className="mx-1 p-3 hover:bg-emerald-500 hover:rounded-md hover:text-white transition duration-300 font-bold">
            Projects
          </li>
        </Link>
        <Link to="/courses">
          <li className="mx-1 p-3 hover:bg-emerald-500 hover:rounded-md hover:text-white transition duration-300 font-bold">
            Courses
          </li>
        </Link>
        <Link to="/contact">
          <li className="mx-1 p-3 hover:bg-emerald-500 hover:rounded-md hover:text-white transition duration-100 font-bold">
            Contact
          </li>
        </Link>
      </motion.ul>
      <div
        className="md:hidden z-10"
        onClick={() => {
          setNav(!nav);
        }}
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/* mobile menu */}
      <motion.ul
        className={`${
          nav ? "absolute" : "hidden"
        }  top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-white `}
        initial={{
          opacity: 0,
          x: 0,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 2 }}
      >
        <Link
          onClick={() => {
            setNav(!nav);
          }}
          to="/"
        >
          <li className="p-3 text-4xl transition duration-300 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300">
            Home
          </li>
        </Link>
        <Link
          onClick={() => {
            setNav(!nav);
          }}
          to="/about"
        >
          <li className="my-3 p-3 text-4xl transition duration-300 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300">
            About
          </li>
        </Link>
        <Link
          onClick={() => {
            setNav(!nav);
          }}
          to="/skills"
        >
          <li className="my-3 p-3 text-4xl transition duration-300 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300">
            Skills
          </li>
        </Link>
        <Link
          onClick={() => {
            setNav(!nav);
          }}
          to="/projects"
        >
          <li className="my-3 p-3 text-4xl transition duration-300 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300">
            Projects
          </li>
        </Link>
        <Link
          onClick={() => {
            setNav(!nav);
          }}
          to="/courses"
        >
          <li className="my-3 p-3 text-4xl transition duration-300 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300">
            Courses
          </li>
        </Link>
        <Link
          onClick={() => {
            setNav(!nav);
          }}
          to="/contact"
        >
          <li className="my-3 p-3 text-4xl transition duration-300 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300">
            Contact
          </li>
        </Link>
      </motion.ul>
      
    </nav>
  );
};

export default Navbar;
