import React from "react";
import { Link } from "react-router-dom";
import Cover from "../Images/Cover.png";
import SocialLinks from "./SocialLinks";

const Home2 = () => {
  return (
    <header className="absolute z-0 w-screen">
        <div className=" items-center mx-auto max-w-screen-lg flex h-full">
          <div className="w-1/2">
            <div>
              <div className="bg-emerald-500 py-1 w-28 my-4" alt="A line" />
            </div>
            <h1 className="text-7xl text-bold text-teal-900 text-left my-6">
              I'm Naji
            </h1>
            <h4 className="text-2xl text-left my-4 text-bold">
              Font-End Development
            </h4>
            <div className="text-xl text-bold float-left my-3">
              {/* Please Read: */}
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
            <div className="mt-50 w-60 flex justify-between">
              {SocialLinks.map((link) => {
                return (
                  <a href={link.url} key={link.id} className="text-4xl text-gray-500 transition duration-500">
                    {link.image}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative z-10 my-4">
            <img
              src={Cover}
              alt="portfolio"
              className="m-10"
              placeholder="blurred"
            />
          </div>
        </div>
    </header>
  );
};

export default Home2;
