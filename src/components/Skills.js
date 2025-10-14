import React from 'react';
import './Skills.css';
import { FaBolt, FaLaptopCode, FaCog, FaDatabase, FaTools } from 'react-icons/fa';

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <FaLaptopCode />,
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'Redux']
    },
    {
      category: 'Backend',
      icon: <FaCog />,
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Database',
      icon: <FaDatabase />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
    },
    {
      category: 'Tools & Others',
      icon: <FaTools />,
      skills: ['Git', 'Docker', 'AWS', 'Webpack', 'Jest', 'Agile']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2><FaBolt className="section-icon" /> Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.icon} {category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
