import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
