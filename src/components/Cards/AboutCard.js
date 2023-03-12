import React from "react";

const AboutCard = (props) => {
  return (
    <div className="shadow-md shadow-[#040c16] border-4 border-green-500 bg-green-100 bg-opacity-95 m-14 lg:mt-12 w-11/12 rounded-lg shadow-lg bg-white">
      {props.children}
    </div>
  );
};

export default AboutCard;
