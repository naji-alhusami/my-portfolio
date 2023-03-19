import React from "react";

import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Logo from "../assets/Images/Logo.svg";
import SocialLinks from "../Home/SocialLinks";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className=" shadow-xl bg-red-500 w-full h-[60px] flex justify-between items-center lg:px-0  z-2 ">
      <div className="lg:px-[5rem] md:px-12 sm:pl-4">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[60px]" />
        </Link>
      </div>
      <div className="flex flex-row">
        <p className="text-bold mr-8">NAJI ALHUSAMI:</p>
        <SocialLinks />
      </div>
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
