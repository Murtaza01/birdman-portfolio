import SkillCard from "../components/SkillCard";
import { skills } from "../assets/data";
import Heading from "../components/Heading";
const Skills = () => {
  return (
    <section className=" py-10" id="skills">
      <Heading head="My Skills">
        all the technologies that i use, i have great experience of the below
        technologies
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
