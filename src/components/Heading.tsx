interface props {
  head: string;
  children: string;
}

const Heading = ({ head, children }: props) => {
  return (
    <div className="text-center space-y-3 mb-8">
      <h2 className=" text-2xl text-gray-100   font-semibold">{head}</h2>
      <p className="mx-auto   max-w-96 capitalize text-gray-300">{children}</p>
    </div>
  );
};

export default Heading;
