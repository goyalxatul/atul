import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      nameRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
      }
    );

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

    // Function to animate the image
    const moveImage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) { // Mobile view
        gsap.to(imageRef.current, {
          x: 5,
          y: 5,
          duration: 1.5,
          ease: 'power2.out',
          yoyo: true,
          repeat: -1,
        });
      } else { // Desktop view
        gsap.to(imageRef.current, {
          x: 10,
          y: 10,
          duration: 1.5,
          ease: 'power2.out',
          yoyo: true,
          repeat: -1,
        });
      }
    };

    moveImage();
  }, []);

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between bg-black px-4 md:px-8">
      <div className="flex flex-col items-start text-left max-w-lg mb-8 md:mb-0">
        <h1 
          className="text-6xl font-bold text-white mb-4" 
          ref={nameRef} 
          style={{ whiteSpace: 'nowrap' }} // Prevent line break
        >
          Hey, I'm Atul Goyal
        </h1>
        <p className="text-lg text-white max-w-xl mb-4" ref={aboutRef}>
          Currently a third-year student with a strong foundation in the MERN stack, I have a deep passion for both technology and creativity. Recently, I’ve been expanding my expertise by diving into DevOps, aiming to streamline development processes and enhance deployment efficiency.
          <br /><br />
        </p>
        <a 
          href="/path-to-your-resume.pdf" // Replace with your resume URL
          className="bg-white text-black px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition font-bold border-b-2 border-yellow-400"
          download
        >
          Resume
        </a>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="setup4.png" // Ensure this points to the correct image in the public folder
          alt="Atul Goyal"
          className="w-1/2 md:w-2/5 max-w-xs rounded-lg shadow-lg md:mt-0 mt-8 mb-16" // Adjusted width for responsiveness
          ref={imageRef}
        />
      </div>
    </section>
  );
};

export default Hero;
