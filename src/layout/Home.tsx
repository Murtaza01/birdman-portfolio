import eagle from "../assets/images/eagle.svg";

const Home = () => {
  return (
    <main
      id="home"
      className="my-16 mx-2 py-5 gap-5 flex items-center justify-evenly bg-gradient-to-tr from-gray-900  to-sky-950 rounded-md shadow-md"
    >
      <div>
        <figure className="center">
          <img src={eagle} alt="" className="w-40 translate-x-2" />
        </figure>
        <div className="text-center">
          <h1 className="text-2xl capitalize">
            This is <span className="text-gold ">Birdman</span>
          </h1>
          <p className="capitalize">a full stack developer</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <button className="btn border-2 border-gold text-gold hover:text-black hover:bg-gold">
          Download CV
        </button>
        <button className="btn bg-gold text-black hover:brightness-125">
          Contact Me
        </button>
      </div>
    </main>
  );
};

export default Home;
