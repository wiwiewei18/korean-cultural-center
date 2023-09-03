import React from "react";
import FooterKCCInfo from "./FooterKCCInfo";
import FooterMenu from "./FooterMenu";
import FooterContactUs from "./FooterContactUs";

const Footer = () => {
  return (
    <footer className="bg-dark-blue shadow-[0_-4px_10px_0_#00000050] py-12 text-white">
      <div className="w-[80%] mx-auto flex justify-between gap-8">
        <div className="space-y-5 max-w-[400px] mr-10">
          <FooterKCCInfo />
        </div>
        <div className="space-y-5">
          <FooterMenu />
        </div>
        <div className="space-y-5 max-w-[310px]">
          <FooterContactUs />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
