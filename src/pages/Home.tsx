import Dither from "./Components/Dither";
import Hero from "./Components/Sections/Hero";
import About from "./Components/Sections/About";
import TechStack from "./Components/Sections/TechStack";
import Experiences from "./Components/Sections/Experiences";
import Projects from "./Components/Sections/Projects";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen relative">
      <Dither
        waveColor={[0.6, 0.3, 0.3]}
        disableAnimation={false}
        enableMouseInteraction={false}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.33}
        waveFrequency={3}
        waveSpeed={0.05}
      />
      <Navbar />
      <Hero id="Hero" />
      <About id="About" />
      <Experiences id="Experiences" />
      <TechStack id="TechStack" />
      <Projects id="Projects" />
      <Footer id="Footer" />
    </div>
  );
};

export default Home;
