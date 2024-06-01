import { useState } from "react";
const navItems = ["Home", "Skills", "Projects", "About"];

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  function toggleMenu() {
    setIsVisible((prev) => !prev);
  }
  function handleNavClick() {
    setIsVisible(false);
  }
  return (
    <header className="pb-20">
      <nav
        className={`fixed w-full bg-black text-white flex
         flex-col items-center px-5 sm:pr-10 text-xl ${
           isVisible ? "h-dvh" : ""
         } py-5  sm:h-20 sm:flex-row `}
      >
        <div className="flex justify-between  w-full sm:w-max ">
          <span className="">LOGO</span>
          <span className="sm:hidden" onClick={toggleMenu}>
            {isVisible ? "X" : "Hamburger"}
          </span>
        </div>
        <menu
          className={`mt-[20vh] flex gap-8 items-center ${
            isVisible ? " flex-col" : "hidden"
          } sm:flex  sm:mt-0 sm:gap-16 sm:w-full sm:justify-center`}
        >
          {navItems.map((item) => (
            <li key={item} onClick={handleNavClick}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </menu>
      </nav>
    </header>
  );
};

export default Nav;
