import React from "react";
import {
  //   AiTwotoneHeart,
  AiOutlineArrowUp,
  //   AiFillLinkedin,
  //   AiFillGithub,
} from "react-icons/ai";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/Logo.svg";
import Button from "react-bootstrap/Button";

// import "./style.css";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="shadow-xl bg-red-500 w-full h-[60px] flex justify-between items-center lg:px-0 px-[5rem]  z-2 ">
      <div className="lg:px-[5rem] md:px-12 sm:pl-4">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[60px]" />
        </Link>
      </div>
      <p className="text-bold">NAJI ALHUSAMI:</p>
      <Button
        onClick={scrollTop}
        className="p-2 rounded-md bg-emerald-500 border-3 border-red-400 mr-16 hover:bg-emerald-700"
        variant="outline-danger"
        size="sm"
      >
        <AiOutlineArrowUp />
      </Button>
    </footer>
  );
};

export default Footer;
