import eagle from "../assets/images/eagle.svg";
import resume from "../assets/resume.pdf";
const Home = () => {
  function scrollToFooter() {
    const footer = document.getElementById("footer");
    footer?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <main
      id="home"
      className="my-16 mx-3 py-5 gap-3 flex items-center justify-evenly bg-gradient-to-tl  from-gray-900   to-transparent backdrop-blur-sm rounded-md shadow-md sm:mx-[10%] md:max-w-[750px] md:mx-auto "
    >
      <div>
        <figure className="center">
          <img src={eagle} alt="" className="w-40 translate-x-2" />
        </figure>
        <div className="text-center">
          <h1 className="text-2xl  font-primary">
            This is <span className="text-gold ">Birdman</span>
          </h1>
          <p className="capitalize font-secondary">a full stack developer</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 font-primary-light">
        <button className="btn  border-2 border-gold text-gold hover:text-black hover:bg-gold">
          <a href={resume} download>
            Download CV
          </a>
        </button>
        <button
          onClick={scrollToFooter}
          className="btn   bg-gold text-black hover:brightness-125"
        >
          <a href="#">Contact Me</a>
        </button>
      </div>
    </main>
  );
};

export default Home;
