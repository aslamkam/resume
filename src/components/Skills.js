import React from 'react';
import './Skills.css';

const skills = {
  "Technical Skills": ["Python (NumPy | Pandas | PyTorch)", "R", "C++", "SQL", "Java", "C#"],
  "Development Tools": ["AWS", "Microsoft Azure", "Git", "Docker", "Kubernetes", "Linux", "Hadoop"],
  "Mathematical Tools": ["Probability & Statistics", "Linear Algebra", "Numerical Methods", "Time Series Analysis", "Optimization"]
};

const Skills = () => {
  return (
    <div className="skills-container">
      {Object.keys(skills).map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category}</h3>
          <ul className="skill-list">
            {skills[category].map((skill, i) => (
              <li key={i} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
