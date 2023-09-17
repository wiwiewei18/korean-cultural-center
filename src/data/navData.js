import Facebook from "../assets/icons/Facebook";
import WhatsApp from "../assets/icons/WhatsApp";
import Instagram from "../assets/icons/Instagram";

const navLinks = [
  { text: "home", url: "/" },
  { text: "about", url: "#about" },
  { text: "classes", url: "#classes" },
  { text: "contact", url: "#contact" },
];

const socialLinks = [
  { component: <Facebook />, url: "https://facebook.com" },
  { component: <WhatsApp />, url: "https://whatsapp.com" },
  { component: <Instagram />, url: "https://instagram.com" },
];

export default {
  navLinks,
  socialLinks,
};
