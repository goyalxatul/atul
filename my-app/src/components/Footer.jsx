import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const items = [
    { name: 'LinkedIn', link: 'http://linkedin.com', icon: <FaLinkedin /> },
    { name: 'GitHub', link: 'http://github.com', icon: <FaGithub /> },
    { name: 'Instagram', link: 'http://instagram.com', icon: <FaInstagram /> },
];

const Footer = () => {
    return (
        
        <div className="w-full bg-black text-gray-300 py-6 px-4">
            <div className="max-w-[1240px] mx-auto flex flex-col items-center">
                {/* Centered Text */}
                <p className="text-2xl font-bold text-white mb-4">
                    Atul Goyal
                </p>

                {/* Social icons */}
                <div className="flex justify-center space-x-4">
                    {items.map((x, index) => (
                        <a key={index} href={x.link} className="hover:text-white cursor-pointer" target="_blank" rel="noopener noreferrer">
                            <span className="text-2xl">{x.icon}</span>
                        </a>
                    ))}
                </div>

                {/* Footer copyright */}
                <p className="text-white text-center py-2 mt-4">
                    &copy; 2024 / Atul Goyal
                </p>
            </div>
        </div>
    );
};

export default Footer;

