import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Hero = () => {
  const [avatarClicked, setAvatarClicked] = useState(false);

  useEffect(() => {
    gsap.utils.toArray(".floating-dot").forEach((dot) => {
      gsap.fromTo(
        dot,
        { y: -10, opacity: 0.8 },
        {
          y: 20,
          opacity: 1,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: Math.random() * 0.3,
        }
      );
    });
  }, []);

  const handleAvatarClick = () => {
    setAvatarClicked(true);
    setTimeout(() => setAvatarClicked(false), 500);
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://docs.google.com/document/d/1hifq8ooMhFI3o9OYauCq8OoDDbu2BUq-G6NRSxWQpqE/export?format=pdf";
    link.download = "Atul_Goyal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black text-center px-4 md:px-8 relative overflow-hidden">
      {/* Floating Dots */}
      <div className="absolute inset-0">
        <div className="floating-dot absolute top-24 left-10 w-6 h-6 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full opacity-70"></div>
        <div className="floating-dot absolute top-32 right-12 w-8 h-8 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full opacity-60"></div>
        <div className="floating-dot absolute bottom-28 left-16 w-5 h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 rounded-full opacity-60"></div>
        <div className="floating-dot absolute bottom-20 right-14 w-7 h-7 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 rounded-full opacity-60"></div>
      </div>

      {/* Main Content */}
      <div className="flex items-center mb-6 relative">
        <div className="relative cursor-pointer" onClick={handleAvatarClick}>
          <img
            src="/set1.jpg"
            alt="Avatar"
            className="w-40 h-40 rounded-full border-2 border-gray-500"
          />
          {avatarClicked && (
            <motion.div
              className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-white text-lg bg-gray-700 rounded-full px-4 py-2 shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: -30 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Hi
            </motion.div>
          )}
        </div>
      </div>

      <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 mb-2">
        Atul Goyal
      </h1>

      <p className="text-white max-w-xl mb-6">
        I am a MERN Stack Developer, specializing in building scalable web
        applications and currently learning DevOps.
      </p>

      {/* New Resume Download Button */}
      <div>
        <button
          onClick={handleResumeDownload}
          className="bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition transform hover:scale-105"
        >
          My Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
