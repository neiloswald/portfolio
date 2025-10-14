import React from 'react';
import './Projects.css';
import { FaRocket, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projects = [
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
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A mobile-responsive portfolio website showcasing modern design principles and smooth animations.',
      technologies: ['React', 'CSS3', 'JavaScript'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2><FaRocket className="section-icon" /> My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
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
    </section>
  );
}

export default Projects;
