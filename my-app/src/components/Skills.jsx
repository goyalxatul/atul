import React, { useEffect, useRef } from 'react';
import { FaDocker, FaAws, FaReact, FaJava, FaPython, FaGit, FaGitlab, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Import new icons
import { gsap } from 'gsap';

const skills = [
  { name: 'Docker', icon: <FaDocker size={40} /> },
  { name: 'AWS', icon: <FaAws size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Java', icon: <FaJava size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'Git', icon: <FaGit size={40} /> },
  { name: 'GitLab', icon: <FaGitlab size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'Express.js', icon: <FaDatabase size={40} /> }, // Placeholder, replace with a more appropriate icon if available
  { name: 'JavaScript', icon: <FaJava size={40} /> }, // Placeholder, replace with a more appropriate icon if available
  { name: 'MySQL', icon: <FaDatabase size={40} /> },
  { name: 'Data Structures', icon: <FaDatabase size={40} /> }, // Placeholder, replace with a more appropriate icon if available
  { name: 'Algorithms', icon: <FaDatabase size={40} /> }, // Placeholder, replace with a more appropriate icon if available
];

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    // GSAP animation for skill cards
    gsap.fromTo(
      skillRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section className="h-auto min-h-screen flex flex-col items-center justify-center bg-black px-4 md:px-8 pt-16 md:pt-24">
      {/* Random text */}
      <div className="text-white text-center mb-8 md:mb-12">
        <p className="text-lg md:text-xl">Here are some of the technologies I've been working with:</p>
      </div>
      
      {/* Skills section */}
      <div className="w-full max-w-3xl bg-black text-white shadow-lg rounded-lg p-4 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              ref={el => skillRefs.current[index] = el}
            >
              <div className="p-3 bg-white rounded-full shadow-md flex items-center justify-center">
                {React.cloneElement(skill.icon, { color: 'black', size: 30 })} {/* Adjust icon size */}
              </div>
              <p className="mt-2 text-center text-sm md:text-base font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



