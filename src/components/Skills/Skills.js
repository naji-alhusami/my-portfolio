import React from "react";

import SkillsData from "./SkillsData";
// import SkillCard from "../components/SkillCard";
import Card from "../Reusable/Card";

const Skills = () => {
  return (
    <section name="skills" className="w-full h-screen bg-primary text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* <div>
          <p className="text-4xl font-bold inline border-b-4 border-secondary ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div> */}

          {SkillsData.map((skill) => (
            <Card  key={skill.id}>
              <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
                <img
                  src={skill.img}
                  alt="my-pict"
                  className="my-4 w-20 mx-auto"
                />
                <h1 className="text-4xl font-bold mb-4">{skill.title}</h1>
              </div>
            </Card>
          ))}
        </div>
    </section>
  );
};

export default Skills;
