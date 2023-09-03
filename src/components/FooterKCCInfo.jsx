import React from "react";
import Logo from "./Logo";
import navData from "../data/navData";

const FooterKCCInfo = () => {
  return (
    <>
      <Logo />
      <p className="text-sm">
        Empower your child with Taekwondo and Korean culture. Led by Grand
        Master Ahn Dong Kyun and Grand Master Park Eun Joo, we foster growth,
        creativity, and confidence.
      </p>
      <div className="flex items-center gap-6">
        {navData.socialLinks.map((socialLink, index) => (
          <a key={index} href={socialLink.url}>
            {socialLink.component}
          </a>
        ))}
      </div>
    </>
  );
};

export default FooterKCCInfo;
