import Header from '../components/Header.jsx';
import Hero from '../components/sections/Hero.jsx';
import OurStory from '../components/sections/OurStory.jsx';
import HowWeWork from '../components/sections/HowWeWork.jsx';
import Projects from '../components/sections/Projects.jsx';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OurStory />
      <HowWeWork />
      <Projects />
    </>
  );
}

export default Home;
