import eagle from "../assets/eagle.svg";

const Home = () => {
  return (
    <main className="flex h-[85dvh] justify-around pt-5 px-5 overflow-x-hidden">
      <div className="basis-60  text-center pt-10">
        <h1>Hello world</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          placeat deleniti iure, veniam quasi nemo libero, molestiae odio sequi
          et quam incidunt eius accusantium voluptate, reiciendis facilis a id
          quis?
        </p>
      </div>
      <figure className="w-44  pt-16">
        <img src={eagle} alt="" className="border-l-2 border-black" />
      </figure>
    </main>
  );
};

export default Home;
