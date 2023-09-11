import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import WorkExperience from "./components/Work_Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <WorkExperience />
      <div classname = "portfolio">
        <Portfolio />
        </div>
        <div className="skills">
          <Skills />
        </div>
      
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
