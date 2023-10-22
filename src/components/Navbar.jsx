import React, { useState } from "react";
import navData from "../data/navData";
import Logo from "./Logo";
import HamburgerMenu from "../assets/icons/hamburger.svg";

const Navbar = () => {
  const [isNavShown, setIsNavShown] = useState(false);
  return (
    <header className="bg-primary shadow-[0_4px_10px_0_#00000050] sticky top-0 z-50">
      <div className="w-[80%] mx-auto py-4 flex items-center justify-between">
        <Logo />
        <button
          className="lg:hidden"
          onClick={() => setIsNavShown(!isNavShown)}
        >
          <img src={HamburgerMenu} />
        </button>
        <nav className="lg:static absolute left-0 top-full lg:w-fit w-full">
          <ul
            className={`lg:flex lg:flex-row lg:w-fit lg:h-fit flex-col w-full h-screen lg:gap-10 lg:bg-transparent bg-[#4F95EC] ${
              isNavShown ? "flex" : "hidden"
            }`}
          >
            {navData.navLinks.map((navLink, index) => (
              <li
                key={index}
                className="lg:py-0 py-14 lg:text-left text-center"
              >
                <a
                  className="text-white font-semibold uppercase transition hover:text-warning lg:text-base text-2xl"
                  href={navLink.url}
                  onClick={() => setIsNavShown(false)}
                >
                  {navLink.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
