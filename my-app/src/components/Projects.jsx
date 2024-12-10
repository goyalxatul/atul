import React from "react";

const projects = [
  {
    id: 1,
    title: "Nature Delight Website",
    description: "Web Design for Nature Delight Foundation",
    image: "/abz.png", // Replace with the actual image path
    link: "https://naturedelightfoundation.vercel.app/", // Example link
  },
  {
    id: 2,
    title: "Demographic Area Water Surface Mapping ",
    description: "AIML project to demostrate and Predict",
    image: "/dsvm5.png", // Replace with the actual image path
    link: "https://github.com/Abhishek-2502/Demographic_Location_Water_Surface_Mapping", // Example link
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full max-w-lg mx-auto bg-gray-800 rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 group"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover rounded-t-3xl"
            />

            {/* Overlay with Title and Description */}
            <div className="absolute bottom-0 w-full px-6 py-4 bg-gradient-to-b from-transparent to-black rounded-b-3xl">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>

            {/* Hover "Visit Website" Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
            >
              <div className="text-white text-xl font-semibold flex items-center space-x-2 px-8 py-2 rounded-full border-2 border-white hover:border-opacity-80">
                <span>Visit Website</span>
                <span className="text-2xl transform group-hover:rotate-45 transition-transform duration-300">↗</span>
              </div>
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .group:hover .group-hover\:opacity-100 {
            opacity: 0 !important; /* Hide the hover button on mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
