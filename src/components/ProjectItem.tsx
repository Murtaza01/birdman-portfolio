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
      className={`flex mx-3 items-center shadow-md justify-around px-4 rounded-md  ${
        even ? "flex-row-reverse bg-gradient-to-br" : "bg-gradient-to-bl"
      } py-8 gap-4 from-gray-700 from-40% to-transparent my-8  backdrop-blur-sm sm:mx-[10%] md:max-w-[750px] md:mx-auto`}
    >
      <div className="text-center space-y-2 ">
        <h3 className="text-lg text-gray-100  capitalize font-primary">
          {title}
        </h3>
        <p className="text-gray-300 font-secondary   lg:w-[30rem] lg:mx-auto">
          {description}
        </p>
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
