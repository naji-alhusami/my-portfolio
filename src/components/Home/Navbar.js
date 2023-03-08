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
      <nav className="fixed w-screen h-[60px] drop-shadow-xl flex justify-between items-center px-4 mt-2">
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
          <img src={Logo} alt="logo" className="w-[80px]" />
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
          <li className="mx-4 p-4 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300 font-bold">
            <Link to="/home">Home</Link>
          </li>
          <li className="mx-4 p-4 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300 font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4 p-4 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300 font-bold">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="mx-4 p-4 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300 font-bold">
            <Link to="/work">Work</Link>
          </li>
          <li className="mx-4 p-4 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-100 font-bold">
            <Link to="/contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
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
          <li className="p-3 text-4xl transition duration-300 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300">
            <Link
              onClick={() => {
                setNav(!nav);
              }}
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="my-3 p-3 text-4xl transition duration-300 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300">
            <Link
              onClick={() => {
                setNav(!nav);
              }}
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="my-3 p-3 text-4xl transition duration-300 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300">
            <Link
              onClick={() => {
                setNav(!nav);
              }}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="my-3 p-3 text-4xl transition duration-300 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300">
            <Link
              onClick={() => {
                setNav(!nav);
              }}
              to="work"
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li className="my-3 p-3 text-4xl transition duration-300 hover:bg-green-700 hover:rounded-md hover:text-white transition duration-300">
            <Link
              onClick={() => {
                setNav(!nav);
              }}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
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
