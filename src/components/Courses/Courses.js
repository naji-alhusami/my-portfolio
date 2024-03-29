import React from "react";

import CoursesData from "./CoursesData";
import CoursesCard from "../Cards/CoursesCard";

const Courses = () => {
  return (
    <div className="relative h-full overflow-auto z-0">
      <div className="text-center">
        <h1 className="inline-block text-emerald-700 text-bold  text-6xl my-3 p-4 border-b-4 border-amber-700">
          COURSES
        </h1>
      </div>
      {CoursesData.map((course) => {
        const courseDescription = course.description.split("||");
        return (
          <CoursesCard course={course} key={course.id}>
            <div className="flex xl:flex-row xs:flex-col justify-between">
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
          </CoursesCard>
        );
      })}
    </div>
  );
};

export default Courses;
