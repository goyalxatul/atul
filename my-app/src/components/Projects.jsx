import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import arrow icon

const projects = [
  {
    title: 'Nature Delight Website',
    description: 'Developed and launched a fully responsive website for Nature Delight Foundation, an NGO dedicated to environmental conservation. Led the project from concept to completion, incorporating key features such as a news ticker, donation form, and interactive content sections.',
    githubLink: 'https://github.com/goyalxatul/natureDelight',
  },
  {
    title: 'Demographic Location Water Surface Mapping',
    description: 'This project addresses challenges related to water resource management by mapping surface water bodies using satellite imagery and digital image processing techniques and predicting the future.',
    githubLink: 'https://github.com/goyalxatul/Demographic_Location_Water_Surface_Mapping',
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
              className="text-yellow-600 hover:underline flex items-center mt-2"
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







