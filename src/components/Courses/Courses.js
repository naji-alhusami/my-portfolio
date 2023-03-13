import React from "react";
import { motion } from "framer-motion";
import CoursesData from "./CoursesData";

const Courses = () => {
  const courses = CoursesData.map((course) => {
    const courseDescription = course.description.split("||");

    const variants = {
      hidden: {
        x: course.id % 2 ? -500 : 500,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    };

    return (
      <>
        <motion.div
          key={course.id}
          className={`bg-white bg-opacity-95 w-9/12 mx-auto my-4 border-4 border-green-800 relative ${
            course.id % 2 ? "border-l-0 float-left" : "border-r-0 float-right"
          }`}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col sm:flex-row justify-between">
            <h1 className="text-2xl font-bold text-green-700 text-left m-4">
              {course.name}
            </h1>
            <a href={course.certificate} target="_blank" rel="noreferrer">
              <button className="m-5 text-sm text-white bg-red-500 py-2 px-3 self-center">
                Show Certificate
              </button>
            </a>
          </div>
          <ul className="p-4 text-lg text-left">
            {courseDescription.map((description) => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        </motion.div>
      </>
    );
  });

  return <div className="flex flex-col justify-between bg-gradient-to-r from-green-300 via-white to-white">{courses}</div>;
};

export default Courses;
