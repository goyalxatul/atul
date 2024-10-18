import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import arrow icon

const projects = [
  {
    title: 'Project One',
    description: 'Brief description of Project One.',
    githubLink: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'Brief description of Project Two.',
    githubLink: 'https://github.com/yourusername/project-two',
  },
  {
    title: 'Project Three',
    description: 'Brief description of Project Three.',
    githubLink: 'https://github.com/yourusername/project-three',
  },
];

const Projects = () => {
  return (
    <section className="h-screen bg-black mt-16 flex flex-col items-start justify-start">
      {/* Projects title just below the navbar */}
      <h1 className="text-white text-6xl font-bold tracking-wide ml-10 mt-4">
        Projects
      </h1>

      {/* Projects list */}
      <div className="ml-10 mt-8 space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="text-white">
            <h2 className="text-3xl font-semibold">{project.title}</h2>
            <p className="text-lg">{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center mt-2"
            >
              View on GitHub <FaArrowRight className="ml-2 transform rotate-45" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;







