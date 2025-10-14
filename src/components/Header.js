import React from 'react';
import './Header.css';
import { FaCode } from 'react-icons/fa';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo"><FaCode className="logo-icon" /> My Portfolio</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
