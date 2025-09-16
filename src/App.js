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
          <h1 className="hero-title">6+ years of experience in software development and system engineering, with expertise in algorithm design and optimization. Currently pursuing a Master's in Mathematics with a focus on Artificial Intelligence (AI). Skilled in machine learning, statistical modeling, and data analysis for complex, real-world datasets. Proficient in Python, C++, Java, and cloud technologies (AWS). Experienced in developing scalable systems and automating processes to improve efficiency. Strong background in mathematics (probability, optimization, linear algebra) applied to AI and machine learning challenges.</h1>
          <a href="https://www.linkedin.com/in/kamal-aslam" className="hero-button">See my LinkedIn</a>
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
