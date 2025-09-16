import './App.css';
import Section from './components/Section';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Research from './components/Research';

function App() {
  return (
    <div className="App">
      <Section title="Kamal Aslam" className="hero">
        <div className="hero-intro">
          <p className="hero-subtitle">Hello :)</p>
          <h1 className="hero-title">I'm a Software Developer with a passion for creating memorable digital experiences.</h1>
          <a href="#experience" className="hero-button">See my work</a>
        </div>
      </Section>
      <Section title="Professional Experience" id="experience">
        <Experience />
      </Section>
      <Section title="Education">
        <Education />
      </Section>
      <Section title="Technical Skills">
        <Skills />
      </Section>
      <Section title="Research">
        <Research />
      </Section>
    </div>
  );
}

export default App;
