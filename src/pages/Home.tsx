import Hero from "../Components/Sections/Hero";
import About from "../Components/Sections/About";
import TechStack from "../Components/Sections/TechStack";
import Experiences from "../Components/Sections/Experiences";
import Projects from "../Components/Sections/Projects";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Dither from "../Components/Background/Dither";
import Contact from "../Components/Sections/Contact";

export const Home = () => {
  return (
    <div>
      <div className="fixed inset-0 w-screen h-screen overflow-hidden -z-10">
        <Dither
          waveColor={[0.9, 0.3, 0.3]}
          disableAnimation={false}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.2}
          waveFrequency={2}
          waveSpeed={0.05}
        />
      </div>
      <Hero id="Hero" className="z-10" />
      <About id="About" />
      <Experiences id="Experiences" />
      <TechStack id="TechStack" />
      <Projects id="Projects" />
      <Contact id="Contact" />
      <Footer id="Footer" />
    </div>
  );
};

export default Home;
