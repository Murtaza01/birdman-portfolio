import { useState } from "react";
import NavItems from "../components/NavItems";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleMobileNav() {
    setIsVisible((prev) => !prev);
  }

  return (
    <header className="sticky top-0 z-[1] mx-auto flex-wrap w-full bg-black text-white p-[2em]  ">
      <nav className="flex text-lg">
        <span className="flex-auto">LOGO</span>
        <ul className="hidden sm:flex gap-10 flex-auto">
          <NavItems />
        </ul>
        <div className="flex sm:hidden">
          <button onClick={toggleMobileNav}>
            {isVisible ? "X" : "Hamburger"}
          </button>
        </div>
      </nav>
      {/* phone */}
      {isVisible && (
        <ul className="mobileNav gap-1 flex flex-col items-center justify-center pt-2">
          <NavItems />
        </ul>
      )}
    </header>
  );
};

export default Nav;
