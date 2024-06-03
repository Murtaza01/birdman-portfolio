interface props {
  title: string;
  icon: JSX.Element;
}
const SkillCard = ({ title, icon }: props) => {
  return (
    <>
      <div
        className="backdrop-blur-md flex-col center shadow-2xl 
      w-28 h-24  rounded-md hover:bg-sky-900 hover:cursor-pointer"
      >
        <span className="text-6xl text-sky-600 ">{icon}</span>
        <span className=" capitalize">{title}</span>
      </div>
    </>
  );
};

export default SkillCard;
