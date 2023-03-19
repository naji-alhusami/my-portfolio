import React from "react";

import SkillsCard from "../Cards/SkillsCard";
import SkillsData from "./SkillsData";

const Skills = () => {
  return (
    <section name="skills" className="relative w-full bg-primary text-gray-300 z-0">
      <div className="max-w-[1000px] m-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center mx-auto">
          <h1 className="text-emerald-700 text-bold text-center text-6xl  p-4 border-b-4 border-amber-700">
            SKILLS
          </h1>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-1 text-center  px-8">
          {SkillsData.map((skill) => (
            <SkillsCard key={skill.id}>
              <img
                src={skill.img}
                alt="my-pict"
                className="my-4 w-20 h-20 mx-auto"
              />
              <p className="text-2xl font-bold mb-4 text-center">
                {skill.title}
              </p>
            </SkillsCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
