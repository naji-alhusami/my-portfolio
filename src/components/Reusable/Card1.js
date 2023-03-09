import React from "react";

const Card1 = (props) => {
  return (
    <div className="shadow-md shadow-[#040c16] border-4 border-green-500 text-green-800 my-14 lg:mt-12 w-11/12   rounded-lg shadow-lg bg-white">
      {props.children}
    </div>
  );
};

export default Card1;
