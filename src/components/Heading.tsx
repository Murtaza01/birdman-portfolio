interface props {
  head: string;
  children: string;
}

const Heading = ({ head, children }: props) => {
  return (
    <>
      <h2 className="text-center text-2xl">{head}</h2>
      <p className="mx-auto text-center mb-8 mt-2 max-w-96 capitalize">
        {children}
      </p>
    </>
  );
};

export default Heading;
