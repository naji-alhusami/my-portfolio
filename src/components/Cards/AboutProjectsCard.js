import React from "react";

const AboutProjectsCard = (props) => {
  return (
    <div className="shadow-md shadow-[#040c16] border-4 border-emerald-500 bg-green-100 bg-opacity-95 m-14 lg:mt-12  rounded-lg shadow-lg bg-white">
      {props.children}
    </div>
  );
};

export default AboutProjectsCard;
