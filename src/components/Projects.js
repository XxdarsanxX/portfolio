import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
const projects = [
  {
    title: 'Horror Estate',
    videoUrl: 'https://www.youtube.com/embed/9k37Mrr_g50',
    imageUrl: 'https://via.placeholder.com/320x180.png?text=Vehicle',
    description:
      'This game was made for the Scream Game Jam 2025 which we were required to make in one week. The theme was "Horror". The game takes place in a haunted apartment as a journalist looks for evidence of supernatural activity while avoiding a ghost that roams the apartment.',
    playUrl: 'https://moeymakes.itch.io/horrorestate',
    techStack: ['Unity', 'C#', '3D'],
    contributions: [
      'Co-developed all major gameplay systems, including ghost events, haunted furniture interactions, and overall game flow.',
      'Designed and implemented a modular audio system to manage ambient sounds, ghost cues, and jump scares.',
      'Created light and visual effects, including flickering lights and co-developed atmosphere-driven post-processing.',
      'Helped choreograph and script jump scares, balancing timing and sound to enhance player tension.',
      'Built reusable and modular gameplay components to simplify event creation and improve development efficiency.',
      'Contributed to testing, debugging, and balancing to refine pacing and ensure a consistent horror experience.',
      'Created some artwork and environmental elements for the haunted apartment.'
    ]
  },
    {
  title: 'Modular AI Agent Framework for Game Engines',
  videoUrl: '',
  imageUrl: 'https://via.placeholder.com/320x180.png?text=AI+Framework',
  description: "A C++ framework enabling game AI agents to switch between decision-making paradigms (FSM, Utility AI, Behavior Trees, GOAP) without rewriting behaviors. Built as a Master's dissertation to solve paradigm isolation in game AI, validated with 4000 concurrent agents and Unity integration.",
  playUrl: 'https://github.com/XxdarsanxX/Modular-Ai-Agents-Final-Dissertation',
  techStack: ['C++', 'Unity', 'C#', 'Google Test'],
  contributions: [
    'Adapter Pattern for AI Paradigms: Translation layer converting universal role definitions into engine-specific configurations (FSM states, BT nodes, Utility considerations, GOAP goals/actions)',
    'Behavior Abstraction Layer: Decoupled behavior definitions from engine implementations using a component-based architecture for reusable action primitives',
    'Created a Role Creation System: That allows defining agent roles with goals, actions, and decision logic independent of the underlying paradigm',
    'Enhanced Decision Engine Implementations: FSM with weighted transitions, Utility AI with score caching, Behavior Trees with environmental adaptation, GOAP with reactive planning',
    'Component-Based Action System: Modular behavior construction from atomic primitives enabling flexible composition without engine-specific code',
    'Universal Action Execution Pipeline: Engine-agnostic executors with viability evaluation, environmental perception, and resource validation across all paradigms',
    'Resource Management Framework: Automatic tracking, critical state detection, dynamic importance weighting, and decay/regeneration systems',
    'Environmental Awareness Integration: Perception-based action evaluation with triggers, responses, and context-sensitive scoring',
    'Cross-Platform DLL Interface: C++ to Unity bridge enabling real-time agent observation, decision monitoring, and bidirectional communication',
    'Comprehensive Testing: 170+ Google Test validations, systematic paradigm comparison infrastructure, stress testing with 4000 agents',
    'Successfully validated 36 role-engine combinations with consistent cross-platform behaviors and sub-200ms engine switching'
  ]
},
    {
      title: 'Audience Controlled Vehicle',
      videoUrl: 'https://www.youtube.com/embed/oJ0hzasWpqg',
      imageUrl: 'https://via.placeholder.com/320x180.png?text=Vehicle',
      description: 'An interactive multi-game experience where groups control gameplay using colored paddles and a custom camera system. Built for the University of Hull to inspire students and showcase computer science, it features two games and two activities—all powered by real-time computer vision and group input.',
      playUrl: '',
      techStack: ['Unity', 'C#', 'Python', 'OpenCV', 'WebSocket', 'UI', '3D', '2D'],
      contributions: [
        'Developed and optimized a camera controller using Python and OpenCV for paddle input and color detection',
        'Integrated real-time communication between Unity and Python for gameplay calibration and feedback',
        'Designed and implemented obstacle spawner, power-up system',
        'Created and refined calibration and paddle movement systems for multi-player support',
        'Led gameplay bug fixing, UI scaling, and visual polish (underwater effects, lighting, bubbles)',
        'Acted as Scrum Master: managed sprints, task assignments, and client communication',
        'Developed quiz system, event plans, and tutorial scenes for public interaction',
        'Produced activity and component diagrams for camera controller and gameplay systems',
        'Supported team with Git, Unity, and technical troubleshooting'
      ]
    },
    {
      title: 'Physics Simulation Engine',
      videoUrl: 'https://www.youtube.com/embed/LdzJch3SuWQ',
      imageUrl: '',
      description: 'A high-performance, real-time physics simulation engine built from scratch in C++ using DirectX 12 and DirectXMath. Supports advanced collision handling, full 3D rigid body dynamics, and distributed simulation with up to 4 peers.',
      playUrl: 'https://github.com/XxdarsanxX/sim_Final_Lab/',
      techStack: ['C++', 'DirectX 12', 'DirectXMath', 'WinSock2', 'ImGui', '3D'],
      keyFeatures: [
        'Multi-threaded Physics Simulation',
        'SAT-Based Collision Detection with realistic Response',
        'Sphere, Box, and cylinder Rigid Bodies',
        'Full 3D Rotation and Material System',
        'User Interface with Debug Metrics',
        'Scenario Control (Pause, Reverse, Gravity Toggle)',
        'Spatial Segmentation (O(n·k/t) Optimized)',
        'localNetworked Peer Synchronization (4 Peers)'
      ],
      contributions: [
        'Implemented a custom thread pool with task stealing, mapped to specific cores for optimal multi-core utilization. also used task batching to reduce the busying worker threads with smaller tasks',
        'Reduced simulation complexity from O(n²) to O(n·k/t) via spatial segmentation and threading',
        'Developed full 3D SAT-based collision detection and response for spheres, boxes, and cylinders',
        'Built a networked simulation layer supporting up to 4 peers with synchronization and correction',
        'Created a flexible scenario system with controls for gravity, pause/resume, and playback reversal',
        'Designed a debug UI using ImGui to display simulation stats and runtime control',
        'Handled all architecture, systems, and implementation independently as a solo developer'
      ]
    
    },  
   /* {
      title: 'I Died and Got Reincarnated as a Skeleton to Stop My Wife from Marrying the Guy Who Killed Me to finally get my Lived Happily Ever After',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      imageUrl: 'https://via.placeholder.com/320x180.png?text=Pixel+Game',
      description: '3d stealth game made in Unity',
      playUrl: 'https://itch.io/',
      techStack: ['Unity', 'C#', 'Pixel Art'],
      contributions: [
        'Designed and animated all pixel art sprites',
        'Implemented player movement and physics',
        'Developed level editor and game logic',
      ]
    }, */
    {
      title: 'Penguin 2.5D Platformer DirectX 11',
      videoUrl: 'https://www.youtube.com/embed/Vn0nxZoSxbQ',
      imageUrl: '',
      description: 'A 2.5D platformer demo built in C++ and DirectX 11, featuring multi-layered scenes, custom OBJ model loading, advanced shading and lighting, particle effects, and a camera system that follows the player. Developed to demonstrate real-time graphics and game programming techniques for university assessment.',
      playUrl: 'https://github.com/XxdarsanxX/PenguinDirectX_11',
      techStack: [ 'DirectX 11','C++','ImGUI'],
      keyFeatures: [
        'Multi-layered 2.5D platformer with custom OBJ model loader',
        'Advanced real-time graphics: Phong & Gouraud shading, bump/displacement/roughness/AO mapping',
        'Particle systems: snow and torch fire',
        'Full player controls and camera system',
        'Multiple lighting types: ambient, directional, point, and torch',
        'Configurable scene and animation via external file',
        'IMGUI-based UI for stats and controls',
        'All required controls and gameplay mechanics implemented'
      ],
      contributions: [
        'this was a solo project so i did everything'
      ]
    },
    {
      title: 'Bubble Climber',
      videoUrl: 'https://www.youtube.com/embed/oi94_wZ7mlo',
      imageUrl: 'https://via.placeholder.com/320x180.png?text=Bubble+Climber',
      description: 'A retro platformer game with pixel art graphics and tight controls. Built with Unity and C#.',
      playUrl: 'https://xxdarsanxx.itch.io/bubble-climber',
      techStack: ['Godot', 'GDScript', 'Pixel Art'],
      keyFeatures: ['Randomly Spawned Bubbles', 'Randomly Spawned Enemies', 'Randomly Spawned Obstacles', 'Randomly Spawned Items', 'Randomly Spawned Enemies', 'Randomly Spawned Power-Ups', 'Randomly Spawned Obstacles','Difficulty Increases as the game progresses','Score System','2D Platformer','Bouncing Physics'],
      contributions: [
        'this was a solo project so i did everything' 
      ]
    },
    {
      title: 'ubermensch ',
      videoUrl: 'https://www.youtube.com/embed/R7BF-iYuDBc?si=JjU_QEajVI9rxHz5',
      imageUrl: 'https://via.placeholder.com/320x180.png?text=Ubermensch',
      description: 'A retro platformer game with pixel art graphics and tight controls. Built with Unity and C#.',
      playUrl: 'https://animeadam.itch.io/ubermensch-webgl-by-wormies',
      techStack: ['Unity', 'C#', 'Pixel Art', 'AI'],
      contributions: [
        'Tied Logic of the Ai and the Player to the Animation',
        'Implemented player movement and Part of the Ai movement',
        'Developed parts of the Ai logic for the enemies',
        'Designed Game Mechanics',
        'created parts of the Art'
      ]
    },
    {
      title: 'Who took my Soggy Cakes',
      videoUrl: 'https://www.youtube.com/embed/tP_s2t7rUSY?si=pHXBJYAqcnXnMgRb',
      imageUrl: 'https://via.placeholder.com/320x180.png?text=Soggy+Cakes',
      description: 'A Side Scrolling shooter featuring waves of enemies and power-ups. Developed in Godot.',
      playUrl: 'https://xxdarsanxx.itch.io/who-took-my-soggy-cake',
      techStack: ['Godot', 'GDScript', 'Pixel Art'],
      contributions: [
        'Created enemy AI and wave system',
        'Programmed power-up mechanics',
        'made all art assets',
        'made a cool Boss at the end of the game', 
        'Made funny dialogue and story',
        'Game engines/Frameworks used - Godot',
        'this was a solo project so i did everything'
      ]
    },
    {
      title: 'Evil Mage',
      videoUrl: 'https://www.youtube.com/embed/WQRQaBH0afg',
      imageUrl: 'https://via.placeholder.com/320x180.png?text=Evil+Mage',
      description: 'A platformer game originally made in LibGdx and as part of my final year project I made the same game on Unity and Godot then compared the performance of the two.',
      playUrl: 'https://github.com/XxdarsanxX/Mage-game-2d-libgdx',
      techStack: ['LibGDX', 'Unity', 'Godot', 'Java', 'C#', 'GDScript'],
      contributions: [
        'Designed level',
        'Basic platformer mechanics',
        'Basic enemy AI',
        'Save and Load System',
        'Basic UI',
        'made all art assets',
        'Game engines/Frameworks used - Godot and Unity and LibGdx',
        'this was a solo project so i did everything'
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