import React from "react";
import FooterKCCInfo from "./FooterKCCInfo";
import FooterMenu from "./FooterMenu";
import FooterContactUs from "./FooterContactUs";

const Footer = () => {
  return (
    <footer className="bg-dark-blue shadow-[0_-4px_10px_0_#00000050] p-4 text-white flex gap-5">
      <div className="space-y-5">
        <FooterKCCInfo />
      </div>
      <div className="space-y-5">
        <FooterMenu />
      </div>
      <div className="space-y-5">
        <FooterContactUs />
      </div>
    </footer>
  );
};

export default Footer;
