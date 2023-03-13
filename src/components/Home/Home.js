import React from "react";
import { Link } from "react-router-dom";
import Cover from "../Images/Cover.png";

const Home = () => {
  return (
    <header className="absolute z-0 w-screen h-screen">
      <div className="bg-gradient-to-r from-green-300 via-white h-full">
        <div className="h-full items-center mx-auto max-w-screen-lg flex">
          <div className="w-1/2">
            <div>
              <div className="bg-emerald-500 py-1 w-24 my-4" alt="A line" />
            </div>
            <h1 className="text-6xl text-bold text-teal-800 text-left my-4">I'm Naji</h1>
            <h4 className="text-2xl text-left my-2 text-bold">Font-End Development</h4>
            <div className="text-xl text-bold float-left">
              Please Check:
              <Link to="/about">
                <button
                  type="button"
                  className="text-xl bg-emerald-500 p-3 rounded-md m-3 hover:text-white hover:bg-emerald-700"
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
      </div>
    </header>
  );
};

export default Home;
