import SkillCard from "../components/SkillCard";
import { skills } from "../assets/data";
import Heading from "../components/Heading";
const Skills = () => {
  return (
    <section className=" py-10" id="skills">
      <Heading head="My Skills">
        Over the years i've learned the below technologies, i've spent some time
        playing around with them and be familiar with important concept of each
      </Heading>
      <div className=" grid grid-cols-3 place-items-center   gap-y-5">
        {skills.map(({ title, icon }) => (
          <SkillCard key={title} title={title} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
