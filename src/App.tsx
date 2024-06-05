import Nav from "./layout/Nav";
import Home from "./layout/Home";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import About from "./layout/About";
const App = () => {
  return (
    <>
      <div className="">
        <Nav />
        <Home />
        <Skills />
        <Projects />
        <About />
      </div>
    </>
  );
};

export default App;
