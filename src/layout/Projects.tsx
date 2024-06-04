import Heading from "../components/Heading";
import { projects } from "../assets/data";
import ProjectItem from "../components/ProjectItem";
const Projects = () => {
  return (
    <section className="px-4  py-10 " id="projects">
      <Heading head="My Projects">
        These are all the projects that i've made over the last few months
      </Heading>
      {projects.map(({ title, description, img, link }, index) => (
        <ProjectItem
          key={title}
          index={index}
          link={link}
          title={title}
          description={description}
          img={img}
        />
      ))}
    </section>
  );
};

export default Projects;
