import React, { useEffect, useRef } from 'react';
import { FaDocker, FaAws, FaReact, FaJava, FaPython, FaGit, FaGitlab, FaNodeJs, FaDatabase, FaLinux, FaJenkins, FaBitbucket,FaFigma} from 'react-icons/fa'; // Import Bitbucket icon
import { BsFillGearFill } from 'react-icons/bs'; // Using a gear icon as a placeholder for Ansible and Terraform
import { SiKubernetes, SiTerraform } from 'react-icons/si'; // Import Kubernetes and Terraform icons
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
  { name: 'MySQL', icon: <FaDatabase size={40} /> },
  { name: 'Figma', icon: <FaFigma size={40} /> },
  { name: 'Ansible', icon: <BsFillGearFill size={40} /> }, // Ansible icon
  { name: 'CI/CD (Jenkins)', icon: <FaJenkins size={40} /> },
  { name: 'Linux', icon: <FaLinux size={40} /> },
  { name: 'Express.js', icon: <FaDatabase size={40} /> }, // Placeholder
  { name: 'JavaScript', icon: <FaJava size={40} /> }, // Placeholder
  { name: 'Data Structures & Algorithms', icon: <BsFillGearFill size={40} /> }, // Placeholder
  { name: 'Bitbucket', icon: <FaBitbucket size={40} /> }, // Bitbucket icon
  { name: 'Kubernetes', icon: <SiKubernetes size={40} /> }, // Kubernetes icon
  { name: 'Terraform', icon: <SiTerraform size={40} /> }, // Terraform icon
// Placeholder for GitOps
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
      {/* Skills section */}
      <div className="w-full max-w-3xl bg-black text-gray-400 shadow-lg rounded-lg p-4 md:p-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              ref={el => skillRefs.current[index] = el}
            >
              <div className="p-4 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700  rounded-full shadow-md flex items-center justify-center">
                {React.cloneElement(skill.icon, { color: 'black', size: 40 })} {/* Increased icon size */}
              </div>
              <p className="mt-2 text-center text-base md:text-lg font-semibold">{skill.name}</p> {/* Increased text size */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

