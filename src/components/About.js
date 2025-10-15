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
            <div className="about-image">
              <img src={process.env.PUBLIC_URL + '/images/my_photo.png'} alt="Neil Oswald R. Bentulan" />
            </div>
            <p>
              I'm <b>Neil Oswald R. Bentulan</b>, a passionate full stack developer with a love for creating beautiful and functional web applications. I specialize in modern web technologies and enjoy building challenging projects.
            </p>
            <p>I have been in the IT industry for some decades, involved in several projects, and exposed in several business models, architected and developed several software applications.  </p>
            <p>
              My unique advantage is the ability to quickly model systems, translate it to SQL database structures, and have the application design blueprint based on user high level product ideas.
            </p>
            <p>
              I am an expert in SQL database systems, with strong foundations in engineering, accounting systems, financial analysis and statistics.
            </p>
            <p>I am proficient in Linux and in recent years have high activity and interest in cloud services including AWS, Google Cloud and MS Azure.
            </p>
            <p>Experience in managing software projects using Agile methodologies, and other collaboration tools.
            </p>
            <p>I still love coding, usually creating the API and the base code template (Python, VueJS, Vuex, Axios). When roadblocked, programmers and team approach me and I guide them to discover the solution to their technical problems.  </p>
            <p>
              I watch YouTube to sleep, watching recent trends in web and mobile development, quantum physics and its history, big bang, parallel universe, world history, old civilizations and aliens(?).
            </p>
            <p>I believe in balance life, if the weather is good, I spend my time at the tennis court, smashing balls with my children and friends.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
