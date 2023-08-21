import React from "react";
import navData from "../data/navData";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="bg-primary shadow-[0_4px_10px_0_#00000050]">
      <div className="w-[80%] mx-auto py-4 flex items-center justify-between">
        <Logo />
        <nav>
          <ul className="flex gap-10">
            {navData.navLinks.map((navLink, index) => (
              <li key={index}>
                <a
                  className="text-white font-semibold uppercase"
                  href={navLink.url}
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
