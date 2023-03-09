import React from "react";
import CoursesData from "./CoursesData";

const Courses = () => {
  const courses = CoursesData.map((course) => {
    const courseDescription = course.description.split("||");

    // if (course.id % 2) {
    return (
      <div
        key={course.id}
        className={`bg-white bg-opacity-95 w-9/12 mx-auto my-4 border-4 border-green-800 relative ${
          course.id % 2 ? "border-l-0 float-left" : "border-r-0 float-right"
        }`}
      >
        <h1 className="text-2xl font-bold lg:max-w-lg sm:max-w-md text-green-700 text-left m-4">
          {course.name}
        </h1>
        <h2 className="absolute top-0 right-0 m-3 text-sm text-white bg-red-500 py-2 px-3">
          Donwload Certificate
        </h2>
        <ul className="p-4 text-lg text-left">
          {courseDescription.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </ul>
      </div>
    );
  });

  return <div>{courses}</div>;
};

export default Courses;
