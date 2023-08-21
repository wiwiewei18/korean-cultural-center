import React from "react";
import LogoImage from "../assets/img/logo.png";

const Logo = () => {
  return (
    <img
      className="w-[150px] h-[45px] object-contain"
      src={LogoImage}
      alt="Logo Batam Korean Cultural Center"
    />
  );
};

export default Logo;
