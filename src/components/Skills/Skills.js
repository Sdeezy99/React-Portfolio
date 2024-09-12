import React from 'react';
import './Skills.css';  // Import the CSS for styling

const skillsData = [
  { name: "CSS", percentage: 70 },
  { name: "HTML", percentage: 75 },
  { name: "Javascript", percentage: 70 },
  { name: "Java", percentage: 75 },
  { name: "Typescript", percentage: 65 },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-subtitle">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
        </p>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-bar" key={index}>
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
