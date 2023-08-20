import React from "react";
import navData from "../data/navData";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <header className="bg-primary">
      <div className="w-[80%] mx-auto py-4 flex items-center justify-between">
        <img
          className="w-[150px] h-[45px] object-contain"
          src={Logo}
          alt="Logo"
        />
        <nav>
          <ul className="flex gap-10">
            {navData.navLinks.map((navLink, index) => (
              <li key={index}>
                <a className="text-white font-semibold" href={navLink.url}>
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
