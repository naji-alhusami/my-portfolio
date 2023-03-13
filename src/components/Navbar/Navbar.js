import React, { useState } from "react";
import Logo from "../Images/Logo.svg";
// import Resume from "../assets/resume.pdf";
import {
  FaBars,
  FaTimes,
  //  FaGithub, FaLinkedin
} from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className=" w-screen h-[60px] flex justify-between items-center px-4">
        <motion.div
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
            <img src={Logo} alt="logo" className="w-[80px]" />
          </Link>
        </motion.div>
        {/* menu */}
        <motion.ul
          className="hidden md:flex text-xl"
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
            <li className="mx-2 p-3 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300 font-bold">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="mx-2 p-3 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300 font-bold">
              About
            </li>
          </Link>
          <Link to="/skills">
            <li className="mx-2 p-3 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300 font-bold">
              Skills
            </li>
          </Link>
          <Link to="/projects">
            <li className="mx-2 p-3 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300 font-bold">
              Projects
            </li>
          </Link>
          <Link to="/courses">
            <li className="mx-2 p-3 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300 font-bold">
              Courses
            </li>
          </Link>
          <Link to="/contact">
            <li className="mx-2 p-3 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-100 font-bold">
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
        {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
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
              href={Resume}
              download
              className="flex justify-between items-center w-full"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
      </nav>
    </>
  );
};

export default Navbar;
