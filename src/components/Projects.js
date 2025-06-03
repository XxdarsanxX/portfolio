import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Audience Controlled Vehicle',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      imageUrl: '',
      description: 'A vehicle controlled by audience input in real time.',
      playUrl: '',
      contributions: [
        'Developed real-time audience input system',
        'Integrated video streaming and vehicle control',
        'Designed interactive UI for audience participation'
      ]
    },
    {
      title: 'Physics Simulation Engine',
      videoUrl: '',
      imageUrl: '',
      description: 'A high-performance physics simulation engine built from scratch in C++ for real-time applications. Designed to efficiently handle up to 10,000 objects with multi-threaded processing.',
      playUrl: '',
      contributions: [
        'Designed and implemented a custom thread pool with task stealing for optimal multi-core utilization',
        'Developed support for three rigid body types: spheres, cylinders, and boxes',
        'Implemented all collision detection, response, and integration logic using only DirectXMath and DirectX 12 libraries',
        'Engine efficiently simulates up to 10,000 objects in real time',
        'Created a user interface for simulation control and visualization'
      ]
    },  
    {
      title: 'I Died and Got Reincarnated as a Skeleton to Stop My Wife from Marrying the Guy Who Killed Me to finally get my Lived Happily Ever After',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      imageUrl: 'https://via.placeholder.com/320x180.png?text=Pixel+Game',
      description: 'A retro platformer game with pixel art graphics and tight controls. Built with Unity and C#.',
      playUrl: 'https://itch.io/',
      contributions: [
        'Designed and animated all pixel art sprites',
        'Implemented player movement and physics',
        'Developed level editor and game logic'
      ]
    }, 
    {
      title: 'Penguin 3d Platformer DirectX 11',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      imageUrl: 'https://via.placeholder.com/320x180.png?text=Pixel+Game',
      description: 'A retro platformer game with pixel art graphics and tight controls. Built with Unity and C#.',
      playUrl: 'https://itch.io/',
      contributions: [
        'Designed and animated all pixel art sprites',
        'Implemented player movement and physics',
        'Developed level editor and game logic'
      ]
    },
    {
      title: 'Bubble Climber',
      videoUrl: 'https://www.youtube.com/embed/oi94_wZ7mlo',
      imageUrl: 'https://via.placeholder.com/320x180.png?text=Pixel+Game',
      description: 'A retro platformer game with pixel art graphics and tight controls. Built with Unity and C#.',
      playUrl: 'https://xxdarsanxx.itch.io/bubble-climber',
      contributions: [
        'Designed and animated all pixel art sprites',
        'Implemented player movement and physics',
        'Developed level editor and game logic'
      ]
    },
 
      {
      title: 'ubermensch ',
      videoUrl: 'https://www.youtube.com/embed/R7BF-iYuDBc?si=JjU_QEajVI9rxHz5',
      imageUrl: 'https://via.placeholder.com/320x180.png?text=Pixel+Game',
      description: 'A retro platformer game with pixel art graphics and tight controls. Built with Unity and C#.',
      playUrl: 'https://animeadam.itch.io/ubermensch-webgl-by-wormies',
      contributions: [
        'Designed and animated all pixel art sprites',
        'Implemented player movement and physics',
        'Developed level editor and game logic'
      ]
    },
    {
      title: 'Who took my Soggy Cakes',
      videoUrl: 'https://www.youtube.com/embed/tP_s2t7rUSY?si=pHXBJYAqcnXnMgRb',
      imageUrl: 'https://via.placeholder.com/320x180.png?text=Space+Shooter',
      description: 'A top-down space shooter featuring waves of enemies and power-ups. Developed in Godot.',
      playUrl: '',
      contributions: [
        'Created enemy AI and wave system',
        'Programmed power-up mechanics',
        'Composed original chiptune soundtrack'
      ]
    },
    {
      title: 'Evil Mage',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      imageUrl: '',
      description: 'A puzzle adventure game with unique mechanics and charming pixel visuals. Made with Phaser.',
      playUrl: '',
      contributions: [
        'Designed puzzle levels',
        'Implemented spell-casting system',
        'Wrote dialogue and story scripts'
      ]
    }
  ];

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
}

export default Projects; 