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
          <p><strong>Hi, I'm [Your Name]!</strong></p>
          <p>
            [Write a short introduction about yourself, your background, and your passion for game development, programming, or design.]
          </p>
          <h2>Skills & Tools</h2>
          <ul>
            <li>Game Engines: Unity, Godot, Unreal, LibGDX</li>
            <li>Languages: C#, C++, Python, JavaScript</li>
            <li>Graphics: Pixel Art, Animation, Blender</li>
            <li>Other: Git, Agile, UI/UX Design</li>
          </ul>
          <h2>Contact</h2>
          <ul>
            <li>Email: your.email@example.com</li>
            <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></li>
            <li>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">yourgithub</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home; 