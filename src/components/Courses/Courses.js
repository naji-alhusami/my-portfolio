import React from "react";
import CoursesData from "./CoursesData";
import CoursesCard from "../Cards/CoursesCard";

const Courses = () => {
  return CoursesData.map((course) => {
    const courseDescription = course.description.split("||");

    // return (
    //   <div className="h-screen">
    //       {CoursesData.map((course) => {
    //         const courseDescription = course.description.split("||");
    //         return (
    //           <CoursesCard course={course} key={course.id}>
    //             <div className="flex flex-col sm:flex-row justify-between">
    //               <h1 className="text-2xl font-bold text-green-700 text-left m-4">
    //                 {course.name}
    //               </h1>
    //               <a href={course.certificate} target="_blank" rel="noreferrer">
    //                 <button className="m-5 text-sm text-white bg-red-500 py-2 px-3 self-center text-bold hover:bg-red-800">
    //                   Show Certificate
    //                 </button>
    //               </a>
    //             </div>
    //             <ul className="p-4 text-lg text-left">
    //               {courseDescription.map((description) => (
    //                 <li key={description}>{description}</li>
    //               ))}
    //             </ul>
    //           </CoursesCard>
    //         );
    //       })}
    //     </div>
    // );

    return (
      <div className="h-full overflow-auto">
        <CoursesCard course={course} key={course.id}>
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
        </CoursesCard>
      </div>
    );
  });
};

export default Courses;
