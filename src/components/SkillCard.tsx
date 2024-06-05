interface props {
  title: string;
  icon: JSX.Element;
}
const SkillCard = ({ title, icon }: props) => {
  return (
    <>
      <div
        className="backdrop-blur-md flex-col center shadow-2xl 
      w-28 h-24 sm:w-36 sm:h-32 lg:w-44 lg:h-40 rounded-md hover:bg-sky-900 hover:cursor-pointer"
      >
        <span className="text-6xl text-sky-600 md:text-7xl ">{icon}</span>
        <span className=" capitalize md:text-lg font-semibold">{title}</span>
      </div>
    </>
  );
};

export default SkillCard;
