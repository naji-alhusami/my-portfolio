import React from "react";

import CoverPhoto from "../Images/CoverPhoto.avif";
import PersonalPhoto from "../Images/PersonalPhoto.jpg";

const Home = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap  h-full">
      <div className="w-full lg:w-2/3 p-4 text-white bg-green-700">
        <img src={PersonalPhoto} alt="my-pict" className="w-60 h-60 my-4 mx-auto overflow-hidden rounded-full" />
        <h1 className="text-4xl font-bold mb-4">NAJI ALHUSAMI</h1>
        <h3 className="text-lg mb-4">Front-End Development</h3>
        <p className="text-lg mb-4 px-40">I'm a Front-End Developer, specializing in building responsive web applications.</p>
      </div>
      <div className="w-full lg:w-1/3">
        <img src={CoverPhoto} alt="my-pict" className="w-full h-96" />
      </div>
    </div>
  );
};

export default Home;
