import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import AboutUs from "./components/AboutUs";
import ClassSchedule from "./components/ClassSchedule";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <AboutUs />
      <ClassSchedule />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
