import React from 'react';
import { FaTwitter, FaLinkedin, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-6">
      <div className="flex justify-center space-x-6 mb-4">
        {/* Social Media Icons */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-600 text-2xl hover:text-gray-900 transition-colors" />
        </a>
        <a href="www.linkedin.com/in/atulxgoyal" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-600 text-2xl hover:text-gray-900 transition-colors" />
        </a>
      </div>
      
      {/* Copyright Text */}
      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Atul Goyal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

