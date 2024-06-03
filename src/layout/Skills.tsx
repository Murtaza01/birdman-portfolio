import SkillCard from "../components/SkillCard";
import { skills } from "../assets/data";
const Skills = () => {
  return (
    <section className="my-5 grid grid-cols-3 place-items-center   gap-y-5">
      {skills.map(({ title, icon }) => (
        <SkillCard key={title} title={title} icon={icon} />
      ))}
    </section>
  );
};

export default Skills;
