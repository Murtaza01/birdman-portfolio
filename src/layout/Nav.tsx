import { useState } from "react";
import NavItems from "../components/NavItems";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { SiCoinmarketcap } from "react-icons/si";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleMobileNav() {
    setIsVisible((prev) => !prev);
  }

  return (
    <header className="sticky z-10 top-0 backdrop-blur-sm  shadow-md min-h-[10dvh] py-4 px-5">
      <nav className="flex">
        <span className="flex-auto ">
          <a href="#" className="w-max  block">
            <SiCoinmarketcap className="text-gold text-4xl" />
            {/* <img src={eagleLogo} className="w-12" alt="eagle image" /> */}
          </a>
        </span>
        <ul className="hidden sm:flex gap-10 flex-auto items-center ">
          <NavItems />
        </ul>
        <div className="flex sm:hidden text-xl">
          <button onClick={toggleMobileNav}>
            {isVisible ? <RxCross1 /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>
      {/* phone */}
      {isVisible && (
        <ul className="mobileNav  sm:hidden  gap-1 mb-4 flex flex-col items-center justify-center pt-2">
          <NavItems />
        </ul>
      )}
    </header>
  );
};

export default Nav;
