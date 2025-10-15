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
          description: 'Tourists can experience immersive and interactive virtual tour to various destinations. This includes a tour admin dashboard, where one can create virtual tours, set points of interest, issue tickets for selling. Tourists buy tickets online and visits the tour. This utilizes Matterport to capture destinations and render digital twin of the space. This also allows tour conductor and tourists to interact in a video meeting in space powered by Zoom Meeting API. A full-stack web application built with VueJS / Typescript and Python (AWS Lambda).',
          technologies: ['VueJS', 'Typescript', 'Python', 'Oruga CSS', 'Mariadb', 'AWS Lambda','S3','SocketIO', 'Matterport', 'Zoom Video API', 'Stripe Payment'],
          link: '#'
        },
        {
          id: 2,
          title: 'AYA Remote School Life',
          description: 'AYA is a remote school life system for adolescent and young adults. This system specializes in avatar robot access from hospitals to schools. AYA application is a solution that will reduce the burden of the young adults from returning to real life society after being discharged from the hospital.',
          technologies: ['VueJS', 'Typescript', 'Python', 'Web2py', 'Oruga CSS', 'Mariadb', 'Matterport', 'AWS EC2', 'REST API'],
          link: '#'
        },
        {
          id: 3,
          title: 'ArchiTwin (SaaS)',
          description: 'ArchiTwin provides a navigable and interactive representation of the physical space, which can be explored in different perpectives, zoomed in and out, and even measure dimensions. Inside the virutal space we can add layers and virtual objects (which the users can experience and interact) like, tags, 3D models, video screens, slideshows and other custom objects. This project or framework is designed to be published as service for different user markets including, real estate, architecture and design, construction, tourism, remote collaboration. This is primarily power by Matterport technology.',
          technologies: ['VueJS', 'Web2py', 'Python', 'Bulma CSS', 'Mariadb', 'Matterport', 'AWS EC2','S3', 'REST API'],
          link: '#'
        },
        {
          id: 4,
          title: 'WiCare',
          description: 'An app for monitoring elderly people in Elderly Shelters. Elderly is required to wear smartwatch which transmits vital signs like heartrate, gyro, temperature to  bluetooth gateway donggle installed in different locations in the house (giving elderly location). The donggle devices in turn transmits the collected data to the cloud server (REST API).',
          technologies: ['VueJS', 'Web2py', 'Python', 'Bulma CSS', 'Mariadb','AWS EC2', 'REST API','Smartwatch','Bluetooth Gateway'],
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
                  {/* <a href={project.link} className="project-link">View Project <FaExternalLinkAlt /></a> */}
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
