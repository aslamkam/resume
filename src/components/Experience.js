import React from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Advanced Micro Devices (AMD)',
    role: 'Software System Engineer',
    duration: 'Oct 2019 – Dec 2023',
    description: 'Led automation of test coverage by developing custom tools, significantly improving efficiency and accuracy. Defined clear automation requirements to ensure seamless integration with client needs and specifications. Addressed technical challenges through innovative AI-driven solutions, replacing manual processes and enhancing operational efficiency. Collaborated with cross-functional teams and clients to maintain and improve legacy automation systems, ensuring continued reliability and relevance.'
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Devops Engineer',
    duration: 'Sept 2018 – Oct 2019',
    description: 'Migrated high-availability web applications from Weblogic to JBoss, optimizing performance and reducing costs. Engineered Docker-based containerized solutions to standardize deployments and accelerate delivery. Deployed cloud-native services on OpenShift, ensuring reliability and compliance. Implemented data governance to maintain security and integrity.'
  },
  {
    company: 'Advanced Micro Devices (AMD)',
    role: 'Software Engineer Intern',
    duration: 'June 2016 – Aug 2017',
    description: 'Developed high-performance web applications for internal and client-facing platforms, optimizing systems to handle large datasets. Ensured low-latency, high-availability operations while maintaining strict data security and compliance. Consistently delivered results on tight deadlines, optimizing system architecture for scalability and efficiency.'
  }
];

const Experience = () => {
  return (
    <div className="experience-container">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.role}</h3>
          <h4>{exp.company} | {exp.duration}</h4>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
