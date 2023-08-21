import React from "react";
import navData from "../data/navData";

const FooterMenu = () => {
  return (
    <>
      <p className="font-semibold">Menu</p>
      <ul className="text-sm space-y-3">
        {navData.navLinks.map((navLink, index) => (
          <li key={index}>
            <a className="capitalize" href={navLink.url}>
              {navLink.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterMenu;
