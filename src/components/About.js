import React from 'react';
import './About.css';
import { FaUser } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2><FaUser className="section-icon" /> About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Neil Oswald R. Bentulan, a passionate developer with a love for creating beautiful and functional web applications.
            </p>
            <p>
              I specialize in modern web technologies and enjoy building projects that make a difference.
              With a strong foundation in both frontend and backend development, I bring ideas to life through code.
            </p>
            <p>
              When I'm not coding, you can find me learning new technologies, contributing to open-source projects,
              or exploring creative solutions to complex problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
