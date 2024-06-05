interface props {
  head: string;
  children: string;
}

const Heading = ({ head, children }: props) => {
  return (
    <div className="text-center space-y-3 mb-8 px-3 md:mb-16">
      <h2 className=" text-2xl text-gray-100   font-semibold md:text-3xl">
        {head}
      </h2>
      <p className="mx-auto  max-w-96 capitalize text-gray-300 md:text-lg md:max-w-[640px]">
        {children}
      </p>
    </div>
  );
};

export default Heading;
