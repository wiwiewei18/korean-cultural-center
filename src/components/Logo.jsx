import React from "react";
import LogoImage from "../assets/img/logo.png";

const Logo = () => {
  return (
    <a href="/">
      <img
        className="w-[180px] h-[75px] object-contain"
        src={LogoImage}
        alt="Logo Batam Korean Cultural Center"
      />
    </a>
  );
};

export default Logo;
