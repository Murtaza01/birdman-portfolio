interface props {
  head: string;
  children: string;
}

const Heading = ({ head, children }: props) => {
  return (
    <div className="text-center space-y-3 mb-8 px-3 md:mb-16">
      <h2 className=" text-2xl text-gray-100 font-primary   md:text-3xl">
        {head}
      </h2>
      <p className="mx-auto font-secondary   max-w-96 capitalize text-gray-200 md:text-xl md:max-w-[640px]">
        {children}
      </p>
    </div>
  );
};

export default Heading;
