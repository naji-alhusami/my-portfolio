import React from "react";

const Home = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap bg-cyan-600">
      <div className="w-full lg:w-2/3 p-4">
        <h1 className="text-4xl font-bold mb-4">Title</h1>
        <p className="text-lg mb-4">Some text goes here.</p>
        <p className="text-lg mb-4">More text goes here.</p>
      </div>
      <div className="w-full lg:w-1/3 p-4">
        <img
          src="https://example.com/image.jpg"
          alt="my-pict"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
