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
          title: 'Project One',
          description: 'A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.',
          technologies: ['React', 'Node.js', 'MongoDB'],
          link: '#'
        },
        {
          id: 2,
          title: 'Project Two',
          description: 'An e-commerce platform with shopping cart functionality, payment integration, and admin dashboard.',
          technologies: ['React', 'Express', 'PostgreSQL'],
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
