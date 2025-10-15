import React from 'react';
import './Skills.css';
import { FaBolt, FaLaptopCode, FaCog, FaDatabase, FaTools } from 'react-icons/fa';

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <FaLaptopCode />,
      skills: ['React','VueJS','JavaScript','TypeScript','HTML5', 'CSS3', 'Redux','Pinia']
    },
    {
      category: 'Backend',
      icon: <FaCog />,
      skills: ['Python','PHP','Node.js', 'Web2py','Code Igniter','REST APIs','SocketIO']
    },
    {
      category: 'Database',
      icon: <FaDatabase />,
      skills: ['MySQL','PostgreSQL', 'Firebase','Topspeed']
    },
    {
      category: 'Tools & Others',
      icon: <FaTools />,
      skills: ['Git', 'Docker','Docker Compose','Webpack', 'Vite', 'Agile']
    },
    {
      category: 'Server and Cloud',
      icon: <FaTools />,
      skills: ['Linux', 'Bash', 'Python','Nginx', 'Apache','AWS','GCP','Azure']
    },
    {
      category: 'Robotics and IOT',
      icon: <FaTools />,
      skills: ['Robots', 'Pepper', 'Nao','Danny', 'Choreograph','Python','Raspberry Pi']
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
