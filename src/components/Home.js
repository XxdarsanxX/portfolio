import React from 'react';

function Home() {
  return (
    <div className="about-container">
      <div className="about-main-row">
        <div className="about-video">
          <iframe
            width="720"
            height="405"
            src="https://www.youtube.com/embed/oJ0hzasWpqg?autoplay=1&mute=1&controls=0&loop=1&playlist=oJ0hzasWpqg"
            title="Compilation of My Work"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p><strong>Hi, I'm [Darsan Jalal]!</strong></p>
          <p>
            Dedicated programmer with over 8 years of experience in studying and working with computer technologies. With a proven passion for Games and Programming by jumping at any chance I got, I participated in numerous Games and Game Development projects throughout my education and career. Currently, I am seeking to show my skills and my abilities on a project where I can push and improve myself.
          </p>
          <h2>Skills & Tools</h2>
          <p>I have hands-on experience with a wide range of programming languages, game engines, and creative tools—including Unity, Godot, C#, C++, Python, and pixel art—enabling me to design, develop, and deliver engaging game experiences from concept to completion.</p>
          <p>For a full list of my technical skills and tools, check out the <a href="/#/skills">Skills</a> page!</p>
          <h2>Contact</h2>
          <ul>
            <li>Email: darsan.jalal@gmail.com</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/darsan-jalal-18aa0b140/" target="_blank" rel="noopener noreferrer">Darsan Jalal</a></li>
            <li>GitHub: <a href="https://github.com/XxdarsanxX" target="_blank" rel="noopener noreferrer">XxdarsanxX</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home; 