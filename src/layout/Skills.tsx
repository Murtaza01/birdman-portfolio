import SkillCard from "../components/SkillCard";
import { skills } from "../assets/data";
const Skills = () => {
  return (
    <section className="my-[40rem]" id="skills">
      <h2 className="text-center text-2xl">Skills</h2>
      <p className="mx-auto text-center mb-8 mt-2 max-w-96 capitalize">
        all the technologies that i use, i have great experience of the below
        technologies
      </p>
      <div className=" grid grid-cols-3 place-items-center   gap-y-5">
        {skills.map(({ title, icon }) => (
          <SkillCard key={title} title={title} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
