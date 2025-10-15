import React from 'react';
import './Skills.css';
import { FaBolt, FaLaptopCode, FaCog, FaDatabase, FaTools, FaServer, FaRobot } from 'react-icons/fa';

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <FaLaptopCode />,
      skills: ['React','VueJS','JavaScript','TypeScript','HTML5', 'CSS3', 'Axios','State Management','Redux','Vuex','Pinia','Cypress','jQuery','Zend']
    },
    {
      category: 'Backend',
      icon: <FaCog />,
      skills: ['Python','PHP','Node.js', 'Web2py','Code Igniter','REST APIs','SocketIO','Stripe','RobotX']
    },
    {
      category: 'Database',
      icon: <FaDatabase />,
      skills: ['MySQL','PostgreSQL', 'Firebase','Topspeed']
    },
    {
      category: 'Tools & Others',
      icon: <FaTools />,
      skills: ['Git', 'Docker','Docker Compose','Webpack', 'Vite', 'Agile','Clarion for DOS / Windows',]
    },
    {
      category: 'Server and Cloud',
      icon: <FaServer />,
      skills: ['Linux', 'Bash', 'Python','Nginx','Apache','AWS','EC2','Load Balancer','GCP','Azure']
    },
    {
      category: 'Robotics and IOT',
      icon: <FaRobot />,
      skills: ['Robots', 'Pepper', 'Nao','Danny','Tapia','Choreograph','Python','Flutter','Raspberry Pi']
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
