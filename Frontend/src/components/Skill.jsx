import { useState } from "react";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <>
      <section
        id="skills"
        className="bg-slate-200 flex flex-col items-center pb-6 border border-black overflow-hidden"
      >
        <h2 className="text-2xl font-bold text-center mb-2">Skills</h2>
        <div
          id="skillBox"
          className="flex gap-10 justify-start relative transition-all duration-500 w-full overflow-x-scroll no-scrollbar p-5"
        >
          <SkillCard
            title={"Frontend"}
            firstSkill={"/img/html.svg"}
            secondSkill={"/img/css.svg"}
            thirdSkill={"/img/javascript.svg"}
          />
          <SkillCard
            title={"Backend"}
            firstSkill={"/img/nodejs.svg"}
            secondSkill={"/img/expressjs.svg"}
            thirdSkill={"/img/MongoDB.svg"}
            width1={50}
            width2={40}
            width3={20}
          />
          <SkillCard
            title={"Tools"}
            firstSkill={"/img/github-mark.svg"}
            secondSkill={"/img/vscode.svg"}
            thirdSkill={"/img/vscode.svg"}
            width1={50}
            width2={40}
            width3={40}
          />
        </div>
      </section>
    </>
  );
};

export default Skill;
