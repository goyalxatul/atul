import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black-900 py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
        <p className="text-gray-300 mb-8">
          I am a passionate and dedicated individual pursuing a Bachelor of Technology in Computer Science and Engineering at Symbiosis Institute of Technology. With a strong interest in technology and a commitment to continuous learning, I strive to apply my skills in meaningful projects that make a difference. My journey so far has been marked by achievements in hackathons and volunteer work, where I have gained valuable experience in teamwork, problem-solving, and community service.
        </p>

        <motion.div
  className="bg-black shadow-lg rounded-lg p-6 mb-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  variants={cardVariants}
>
  <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Education</h2>
  <p className="text-gray-300 mb-2">
    <strong>1. Bachelor of Technology (B.Tech CSE)</strong> - Symbiosis Institute of Technology, Class of 2026
  </p>
  <p className="text-gray-300 mt-4 mb-2">
    <strong>2. The Century School</strong> - Non Medical (PCM)
  </p>
</motion.div>


        <motion.div
          className="bg-black shadow-lg rounded-lg p-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Co-Curricular & Extra-Curricular Achievements
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Top 10, Hack Genesis Hackathon 2023 - Showcased an AI/ML + Web Development project.</li>
            <li>Participated in the SMART INDIA HACKATHON.</li>
            <li>Fastest student calculator from year 2015 to 2017 at my school </li>
            <li>Best Calligraphist of my School from the year 2013 to 2018 in English as well as Hindi Calligraphy</li>
            <li>Participated and Won many Written Quiz competition </li>
            <li>Participation and representation in Multiple sports ,Poem recitations, Debates and Role play competition </li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-black shadow-lg rounded-lg p-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Volunteer Experience
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              Volunteer, Nature Delight Foundation - Provided web development, technical help, and contributed to fundraising initiatives.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;



