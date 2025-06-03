import React from 'react';

function ProjectCard({ title, videoUrl, videoFile, imageUrl, description, playUrl, contributions, techStack, keyFeatures }) {
  // Merge keyFeatures into contributions for consistent display
  const allContributions = [
    ...(keyFeatures || []),
    ...(contributions || [])
  ];

  return (
    <div className="project-card">
      <h2>{title}</h2>
      {techStack && techStack.length > 0 && (
        <div className="project-techstack">
          {techStack.map((tech, idx) => (
            <span className="tech-badge" key={idx}>{tech}</span>
          ))}
        </div>
      )}
      {videoFile && (
        <div className="project-video">
          <video width="480" height="270" controls>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {!videoFile && videoUrl && (
        <div className="project-video">
          <iframe
            width="480"
            height="270"
            src={videoUrl}
            title={title + ' video'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <p>{description}</p>
      {allContributions.length > 0 && (
        <div className="project-contributions">
          <strong>My Contributions:</strong>
          <ul>
            {allContributions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {playUrl && (
        <a
          href={playUrl}
          className="pixel-btn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', marginTop: '12px' }}
        >
          Play Now
        </a>
      )}
    </div>
  );
}

export default ProjectCard; 