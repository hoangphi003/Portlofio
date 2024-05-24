import SkillCard from "./SkillCard";
import { skills } from "../../constants/index";

function Skill() {
  return (
    <section id="skill" className="flex flex-1 my-16 relative">
      <h3 className="text-white text-4xl font-bold absolute top-[-20px] right-[42%] max-sm:right-[20%]">
        My skills
      </h3>
      <div className="flex flex-wrap justify-between items-center mt-10">
        {skills.map((item) => (
          <SkillCard label={item.name} imgURL={item.img} />
        ))}
      </div>
    </section>
  );
}

export default Skill;
