import React from "react";
import { Link } from "react-router-dom";
import Cover from "../Images/Cover.png";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <header className="relative">
      <div className="relative flex">
        <div className="flex-1 flex flex-col justify-center text-left pl-32 ">
          <div className="bg-emerald-500 h-1 w-28 mb-10" alt="A line" />
          <h1 className="text-7xl font-bold text-teal-900 mb-4">I'm Naji</h1>
          <h3 className="text-2xl font-bold mb-6">Font-End Development</h3>
          <div className="text-xl font-bold mb-8">
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
          </div>
          <div className="flex">
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
          </div>
        </div>
        <div className="flex mt-20 mr-56">
          <img
            src={Cover}
            alt="portfolio"
            className="object-cover h-full w-full"
            placeholder="blurred"
          />
        </div>
      </div>
    </header>
  );
};

export default Home;
