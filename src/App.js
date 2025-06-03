import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';
import mePic from './assets/me1.png';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sticky-header">
          <nav className="navbar">
            <ul>
              <li className="profile-menu-item">
                <div className="profile-pic-container">
                  <img src={mePic} alt="Profile" className="profile-pic" />
                  <div className="profile-name">Darsan Jalal</div>
                </div>
              </li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
