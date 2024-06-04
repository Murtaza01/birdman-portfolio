interface props {
  title: string;
  description: string;
  img: string;
  link: string;
  index: number;
}

const ProjectItem = ({ title, description, img, link, index }: props) => {
  const even = index % 2 === 0;
  return (
    <div className={`center  ${even && "flex-row-reverse"} py-10 gap-5`}>
      <div className="text-center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={link} className="hover:blur-[1px]  ">
        {" "}
        <img
          src={img}
          className="w-48 h-44 object-cover border-2 border-gold rounded-md "
          alt=""
        />
      </a>
    </div>
  );
};

export default ProjectItem;
