import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaTimes } from 'react-icons/fa';
import './styles.css';

const About = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  // Hide intro screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroVisible(false);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  // Toggle card modal
  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const closeModal = () => setActiveCard(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatePresence>
        {isIntroVisible && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center text-gradient-to-r from-purple-800 via-pink-600 to-yellow-500 bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-bold">hi, atul here again!</h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isIntroVisible && (
        <>
          {/* About Information Section */}
          <section>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-10 bg-black">
              {/* Image Section */}
              <div className="relative w-[230px] h-[390px] overflow-hidden rounded-[70px] transform transition-transform duration-300 hover:scale-105">
                <img
                  src="/atul6.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="text-center md:text-left max-w-lg">
                <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 leading-snug">
                  I'm a MERN Stack Developer<br />
                  working remotely from <br />
                  Pune, India.
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                  Originally from Karnal, Haryana, India, I'm a penultimate
                  student at Symbiosis Institute of Technology Pune, India. Over
                  the past few years, I've been involved in various projects
                  utilizing modern web technologies, ML projects, etc. I
                  specialize in frontend and backend development, focusing on
                  delivering seamless user experiences. Currently enthusiastic
                  about DevOps and the continuous creation and delivery process.
                </p>
                <p className="mt-4 text-gray-600 text-lg">
                  These days, I focus on DevOps and learning new technologies.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          
        </>
      )}
    </div>
  );
};

export default About;

