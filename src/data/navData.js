import Facebook from "../assets/icons/Facebook";

const navLinks = [
  { text: "home", url: "#home" },
  { text: "about", url: "#about" },
  { text: "classes", url: "#classes" },
  { text: "contact", url: "#contact" },
];

const socialLinks = [
  { component: <Facebook />, url: "https://facebook.com" },
  { component: <Facebook />, url: "https://facebook.com" },
  { component: <Facebook />, url: "https://facebook.com" },
];

export default {
  navLinks,
  socialLinks,
};
