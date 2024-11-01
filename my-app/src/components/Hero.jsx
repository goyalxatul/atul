import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const nameRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    // Animate the name with a falling effect
    gsap.fromTo(
      nameRef.current,
      { y: -100, opacity: 0 }, // Reduced the initial y value for better visibility
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'bounce.out',
      }
    );

    // Fade in the about text
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
        delay: 1,
      }
    );
  }, []);

  const handleDownloadCV = () => {
    window.open('./assets/resume-example.pdf');
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black text-center px-4 md:px-8">
      <img
        src="/set1.jpg"
        alt="Atul Goyal"
        className="w-40 h-40 rounded-full mb-4"
      />
      <h1
        ref={nameRef}
        className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 mb-2"
        style={{ whiteSpace: 'nowrap' }}
      >
        Atul Goyal
      </h1>
      <h2
        ref={aboutRef}
        className="text-3xl text-white font-semibold mb-4"
      >
         Developer based in India.
      </h2>
      <p className="text-white max-w-xl mb-6">
        I am a MERN Stack Developer , specializing in building
        scalable web applications and currently learning DevOps.
      </p>
      <button
        className="bg-gradient-to-r from-yellow-300 to-yellow-700 text-white px-6 py-2 rounded-full font-bold hover:shadow-md transition"
        onClick={handleDownloadCV}
      >
        My resume
      </button>
    </section>
  );
};

export default Hero;




