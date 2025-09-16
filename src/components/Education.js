import React from 'react';
import './Education.css';

const education = [
  {
    degree: 'Masters of Math, Collaborative Specialization in AI',
    university: 'University of Guelph',
    year: '2026'
  },
  {
    degree: 'Honours Bachelors of Science, Math & Computer Science',
    university: 'University of Toronto',
    year: '2018'
  }
];

const certifications = [
  { name: 'Azure Fundamentals', year: '2024' },
  { name: 'AWS Solutions Architect', year: '2023' },
  { name: 'Linux System Administration', year: '2022' }
];

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-list">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h4>{edu.degree}</h4>
            <p>{edu.university} | {edu.year}</p>
          </div>
        ))}
      </div>
      <div className="certifications-list">
        <h3>Certifications</h3>
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <h4>{cert.name}</h4>
            <p>{cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
