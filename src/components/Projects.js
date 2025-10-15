import React from 'react';
import './Projects.css';
import { FaRocket, FaExternalLinkAlt, FaGlobe, FaRobot, FaDesktop } from 'react-icons/fa';

function Projects() {
  const projectCategories = [
    {
      category: 'Web / Mobile Applications',
      icon: <FaGlobe />,
      projects: [
        {
          id: 1,
          title: 'Virtual Traveler',
          description: 'Tourists can experience immersive and interactive virtual tour to various destinations. This includes a tour admin dashboard, where one can create virtual tours, set points of interest, issue tickets for selling. Tourists buy tickets online and visits the tour. This utilizes Matterport to capture destinations and render digital twin of the space. A full-stack web application built with VueJS / Typescript and Python (AWS Lambda).',
          technologies: ['VueJS', 'Typescript','Python', 'Mariadb', 'AWS Lambda', 'SocketIO', 'Matterport', 'Zoom Video API','Stripe Payment'],
          link: '#'
        },
        {
          id: 2,
          title: 'AYA Remote School Life',
          description: 'AYA is a remote school life system for young adults (ages between 15 and 39). This system specializes in avatar robot access from hospitals to schools. AYA application is a solution that will reduce the burden of the young adults from returning to real life society after being discharged from the hospital.',
          technologies: ['VueJS', 'Typescript','Python', 'Mariadb','Matterport','AWS EC2','REST API'],
          link: '#'
        }
      ]
    },
    {
      category: 'Robot Applications',
      icon: <FaRobot />,
      projects: [
        {
          id: 3,
          title: 'Robot Project One',
          description: 'Autonomous navigation system for mobile robots using sensor fusion and path planning algorithms.',
          technologies: ['ROS', 'Python', 'Computer Vision'],
          link: '#'
        }
      ]
    },
    {
      category: 'Windows Applications',
      icon: <FaDesktop />,
      projects: [
        {
          id: 4,
          title: 'Desktop App One',
          description: 'Desktop application for data management and visualization with a modern user interface.',
          technologies: ['C#', '.NET', 'WPF'],
          link: '#'
        }
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2><FaRocket className="section-icon" /> My Projects</h2>
        {projectCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="project-category">
            <h3 className="category-title">{category.icon} {category.category}</h3>
            <div className="projects-grid">
              {category.projects.map((project) => (
                <div key={project.id} className="project-card">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link">View Project <FaExternalLinkAlt /></a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
