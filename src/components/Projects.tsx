import HobbyVille from '../assets/HobbyVille.png';
import EVA from '../assets/EVA.jpg';
import R2 from '../assets/R2.jpg';
import sorting from '../assets/sorting.jpg';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'EVA - Enhanced Visitor Assistant',
      description:
        'A humanoid robot designed to assist visitors at SRM KTR campus. Integrated advanced chatbot capabilities with fine-tuned LLM, voice recognition, and autonomous navigation using ROS and LiDAR.',
      image: EVA,
      technologies: ['ROS', 'LiDAR', 'LLM', 'Python', 'Chatbot'],
      github: 'https://github.com/AnshulKawarey/EVA',
      // demo: '#'
    },
    {
      title: 'HobbyVille',
      description:
        'A mobile app that connects users with similar hobbies. Built using Flutter and Firebase, it includes customizable search radius functionality integrated with OpenStreetMap.',
      image: HobbyVille,
      technologies: ['Flutter', 'Firebase', 'OpenStreetMap'],
      github: 'https://github.com/AnshulKawarey/HobbyVille',
      // demo: 'https://github.com/AnshulKawarey/HobbyVille'
    },
    {
      title: 'Autonomous 4WD Robot',
      description:
        'An omni-directional 4WD robot featuring depth mapping with Zed2 stereo camera and object recognition using ML. Improved competition performance by 40%, securing AIR 9 at DD Robocon 2024.',
      image: R2,
      technologies: ['Raspberry Pi Pico', 'Zed2 Camera', 'MATLAB', 'ML'],
      github: '#',
      // demo: '#'
    },
    {
      title: 'Sorting Visualizer',
      description:
        'A real-time sorting visualizer built with Python, Matplotlib, and NumPy. Enabled users to visually compare sorting algorithms with highly optimized rendering performance.',
      image: sorting,
      technologies: ['Python', 'Matplotlib', 'NumPy'],
      github: '',
      demo: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-matte-800 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
