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
          description: 'Tourists can experience immersive and interactive virtual tour to various destinations. This includes a tour admin dashboard, where one can create virtual tours, set points of interest, issue tickets for selling. Tourists buy tickets online and visits the tour. This utilizes Matterport to capture destinations and render digital twin of the space. This also allows tour conductor and tourists to interact in a video meeting in space powered by Zoom Meeting API.',
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
          title: 'ArchiTwin',
          description: 'ArchiTwin provides a navigable and interactive representation of the physical space, which can be explored in different perpectives, zoomed in and out, and even measure dimensions. Inside the virutal space we can add layers and virtual objects (which the users can experience and interact) like, tags, 3D models, video screens, slideshows and other custom objects. This project or framework is designed to be published as service for different user markets including, real estate, architecture and design, construction, tourism, remote collaboration. This is primarily powered by Matterport technology.',
          technologies: ['VueJS', 'Web2py', 'Python', 'Bulma CSS', 'Mariadb', 'Matterport', 'AWS EC2','S3', 'REST API'],
          link: '#'
        },
        {
          id: 4,
          title: 'WiCare',
          description: 'An app for monitoring elderly people in Elderly Shelters. Elderly is required to wear smartwatch which transmits vital signs like heartrate, gyro, temperature to  bluetooth gateway donggle installed in different locations in the house (giving elderly location). The donggle devices in turn transmits the collected data to the cloud server (REST API).',
          technologies: ['VueJS', 'Web2py', 'Python', 'Bulma CSS', 'Mariadb','AWS EC2', 'REST API','Smartwatch','Bluetooth Gateway'],
          link: '#'
        },
        {
          id: 5,
          title: 'OTS House',
          description: 'A house will be installed water recycling system and solar power system. This app simulates the consumption of electricity and water and calculates savings based on some current usage data, and the rainfall and sunshine metrics of the city. The app shows multiple charts visualizing the data.',
          technologies: ['Javascript','HMTL', 'Bulma CSS'],
          link: '#'
        }


      ]
    },
    {
      category: 'Robot Applications',
      icon: <FaRobot />,
      projects: [
        {
          id: 1,
          title: 'Paramedi / SOAR',
          description: 'This is a very ambitious project, the primary goal is to create a framework that allows custom applications to control and manipulate any robots from various manufacturers, each with different capabilities, operating system or commands (and SDKs). First we collate all command sets from all robots (initially 5), created a more universal standard command set. Then we created library drivers for each robots. Later we created a communication server (SOAR) utilizing websocket. Robots or Applications connects to the server, once connected any robot, application or device should now be able to connect to any robot and control it. We use Raspberry as local SOAR server, and later created SOAR server in the cloud. This project started long before the ROS standard.',
          technologies: ['Choreograph','Python','Javascript','React Native','Flutter','Android','Raspberry Pi','Websocket','NodeJS','Robot Pepper','Robot Nao','Robot Danny','Robot Tapia'],
          link: '#'
        }
      ]
    },
    {
      category: 'Windows Applications',
      icon: <FaDesktop />,
      projects: [
        {
          id: 1,
          title: 'Hotel System',
          description: 'Desktop application for hotel management, includes reservation, billing, cashiering and interfacing to PABX system to calculate phone call charges.',
          technologies: ['Windows','Clarion','Topspeed','RS232 Comm','PABX'],
          link: '#'
        },
        {
          id: 2,
          title: 'Payroll System',
          description: 'Desktop application for Philippine Payroll. Process starts with the application calculating hours work, overtime and undertime and holidays based on raw attendance log file. It automatically calculates employee pays and government deductions, including SS, PhilHealth, Pagibig and tax. It comes also with an optional Time Logging applications, scanning physical ID with barcodes. It generates all the mandated government reports.',
          technologies: ['Windows','Clarion','Topspeed','Amano Bundy','Biometric'],
          link: '#',
        },
        {
          id: 3,
          title: 'Accounting System',
          description: 'Desktop application for general accounting, includes account receivable, payables, cash disbursement, cash receipts and general ledger. It produces the usual accounting reports, balance sheet, income statement, general journal, aging of receivables and payables, generally with MTD, YTD totals and yearly variances',
          technologies: ['Windows','Clarion','Topspeed'],
          link: '#',
        },
        {
          id: 4,
          title: 'Point-of-Sale System',
          description: 'Point-of-sale application for fine-dining restaurants and retail. It supports touch screen interface and printing to kitchen printers. Highly customized products and categories and color scheme.',
          technologies: ['Windows','Clarion','Topspeed','Line Printer','Touch Interface'],
          link: '#',
        }
        // {
        //   id: 5,
        //   title: 'Inventory System',
        //   description: 'Inventory system for retail, supports multiple locations or warehouses and multiple product units.',
        //   technologies: ['Clarion','Topspeed'],
        //   link: '#',
        // }




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
