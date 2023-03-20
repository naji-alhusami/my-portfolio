import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../assets/Images/Logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="relative bg-emerald-500 w-full h-[60px] flex justify-between items-center xl:px-0 lg:px-0 md:px-0 sm:px-20 xs:px-[1rem] z-10">
      <motion.div
        className="xl:px-[5rem] lg:px-[5rem] md:px-6 sm:pl-4"
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
        // className="hidden md:flex text-lg"
        className="sm:hidden xs:hidden flex text-lg"
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
          <li
            className={`mx-1 p-3 hover:text-white transition duration-300 font-bold ${
              activeLink === "Home" ? "text-white active" : "text-black"
            } `}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </li>
        </Link>
        <Link to="/about">
          <li
            className={`mx-1 p-3 hover:text-white transition duration-300 font-bold ${
              activeLink === "About" ? "text-white active" : "text-black"
            } `}
            onClick={() => handleLinkClick("About")}
          >
            About
          </li>
        </Link>
        <Link to="/skills">
          <li
            className={`mx-1 p-3 hover:text-white transition duration-300 font-bold ${
              activeLink === "Skills" ? "text-white active" : "text-black"
            } `}
            onClick={() => handleLinkClick("Skills")}
          >
            Skills
          </li>
        </Link>
        <Link to="/projects">
          <li
            className={`mx-1 p-3 hover:text-white transition duration-300 font-bold ${
              activeLink === "Projects" ? "text-white active" : "text-black"
            } `}
            onClick={() => handleLinkClick("Projects")}
          >
            Projects
          </li>
        </Link>
        <Link to="/courses">
          <li
            className={`mx-1 p-3 hover:text-white transition duration-300 font-bold ${
              activeLink === "Courses" ? "text-white active" : "text-black"
            } `}
            onClick={() => handleLinkClick("Courses")}
          >
            Courses
          </li>
        </Link>
        <Link to="/contact" className="border-white">
          <li
            className={`mx-1 p-3 hover:text-white transition duration-300 font-bold ${
              activeLink === "Contact" ? "text-white active" : "text-black"
            } `}
            onClick={() => handleLinkClick("Contact")}
          >
            Contact
          </li>
        </Link>
      </motion.ul>
      <div
        className="lg:hidden md:hidden xl:hidden z-10"
        onClick={() => {
          setNav(!nav);
        }}
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>
       {/* mobile menu  */}
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
