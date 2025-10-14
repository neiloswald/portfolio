import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaMobileAlt, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2><FaPaperPlane className="section-icon" /> Contact Me</h2>
        <div className="contact-content">
          <table className="contact-table">
            <tbody>
              <tr>
                <th><FaEnvelope /> Email</th>
                <td>
                  <a href="mailto:neilbentulan@gmail.com">neilbentulan@gmail.com</a>
                </td>
              </tr>
              <tr>
                <th><FaLinkedin /> LinkedIn</th>
                <td>
                  <a href="https://www.linkedin.com/in/neil-oswald-bentulan-88131163/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/neil-oswald-bentulan-88131163
                  </a>
                </td>
              </tr>
              <tr>
                <th><FaMobileAlt /> Mobile</th>
                <td>
                  <a href="tel:+639173024863">+63 917 302 4863</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Contact;
