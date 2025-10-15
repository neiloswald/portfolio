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
              I'm <b>Neil Oswald R. Bentulan</b>, a passionate full stack developer with a love for creating beautiful and functional web applications. I have been in the IT industry for the past 30 years, involved in several projects, and exposed in several business models, architected and developed several software applications.  
            </p>
            <p>I specialize in modern web technologies and enjoy building challenging projects. With a strong foundation in both frontend and backend development, I bring ideas to life through code."
            </p>

            <p>
            My unique advantage is the ability to quickly model systems, translate it to SQL database structures, and have the application design blueprint based on user high level product ideas. 
            </p>
            <p>
            I am an expert in SQL database systems, with strong foundations in engineering, accounting systems, financial analysis and statistics.
            </p>
            <p>I am proficient in Linux and in recent years have high activity and interest in “cloud servers and services” including AWS, Google Cloud and MS Azure.
            </p>
            <p>Experience in managing software projects using Agile methodologies, and other collaboration tools.
            </p>
            <p>I still love coding, usually creating the API and the base code template (Python, VueJS, Vuex, Axios). When roadblocked, programmers and team approach me and I guide them to discover the solution to their technical problems. I love it when teamates compliment me because I was able to fix issues in 30 minutes, which they were struggling with, in weeks. </p>
            <p>
            I watch YouTube to sleep, watching Python, Javascript, NodeJS, VueJS, MVC, React, State Management, Axios, Webpack,  Machine Learning, AI, Flutter, Android development, AWS, Docker, Quantum Physics, Physics History, Universe, Big Bang, Parallel Universe, World History, Old Civilizations, Aliens?, TedEx, CryptoCurrency, BitCoin, Ethereum, Lex Fridman podcast, Steve Jobs, Elon Musk (I can relate when he said he works 100 hours per week). 
            </p>
            <p>I believe in balance life, if the weather is good, I spend my time at the tennis court, smahing balls with my children and friends.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
