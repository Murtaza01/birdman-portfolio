import Nav from "./layout/Nav";
import Home from "./layout/Home";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import About from "./layout/About";
import Footer from "./layout/Footer";
const App = () => {
  return (
    <>
      <div className="">
        <Nav />
        <Home />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default App;
