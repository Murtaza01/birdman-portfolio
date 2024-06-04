import Nav from "./layout/Nav";
import Home from "./layout/Home";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
const App = () => {
  return (
    <>
      <div className="">
        <Nav />
        <Home />
        <Skills />
        <Projects />
      </div>
    </>
  );
};

export default App;
