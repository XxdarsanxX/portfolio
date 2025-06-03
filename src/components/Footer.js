import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span>&copy; {new Date().getFullYear()} Darsan Jalal</span>
        </div>
        <div className="footer-center">
          <a href="/#/" className="footer-link">Home</a>
          <a href="/#/projects" className="footer-link">Projects</a>
          <a href="/#/skills" className="footer-link">Skills</a>
          <a href="/#/contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/in/darsan-jalal-18aa0b140/" target="_blank" rel="noopener noreferrer" className="footer-icon" title="LinkedIn">
            <span role="img" aria-label="LinkedIn">🔗</span>
          </a>
          <a href="https://github.com/XxdarsanxX" target="_blank" rel="noopener noreferrer" className="footer-icon" title="GitHub">
            <span role="img" aria-label="GitHub">🐙</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 