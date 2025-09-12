import { useState, useEffect } from "react";
import "./App.css";

// Components
import UnderConstruction from "./components/UnderConstruction";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Partnerships from "./components/Partnerships";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Utils
import { initScrollAnimations, initParallax } from "./utils/scrollAnimations";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize scroll animations
    const cleanupScrollAnimations = initScrollAnimations();
    const cleanupParallax = initParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanupScrollAnimations();
      cleanupParallax();
    };
  }, []);

  // Show under construction page until approval
  const showUnderConstruction = true;

  if (showUnderConstruction) {
    return <UnderConstruction />;
  }

  return (
    <div className="App">
      <Header isScrolled={isScrolled} />
      <Hero />
      <About />
      <Services />
      <Partnerships />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
