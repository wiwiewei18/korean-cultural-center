import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import AboutUs from "./components/AboutUs";
import ClassSchedule from "./components/ClassSchedule";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <AboutUs />
      <ClassSchedule />
      <Footer />
    </>
  );
}

export default App;
