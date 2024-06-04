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
    <div
      className={`flex items-center shadow-md justify-around px-4 rounded-md  ${
        even ? "flex-row-reverse bg-gradient-to-br" : "bg-gradient-to-bl"
      } py-8 gap-4 from-gray-700 from-40% to-transparent   backdrop-blur-sm`}
    >
      <div className="text-center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        className="hover:blur-[1px]  min-w-36 w-44 max-w-56  "
      >
        {" "}
        <img
          src={img}
          className=" object-cover border-2 border-gold rounded-md "
          alt=""
        />
      </a>
    </div>
  );
};

export default ProjectItem;
