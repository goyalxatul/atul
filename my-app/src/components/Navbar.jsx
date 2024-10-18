import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { HiMenuAlt3 } from 'react-icons/hi'; 
import { AiOutlineClose } from 'react-icons/ai'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const location = useLocation(); 
  // Toggle the side menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  // Button click handler for "Let's Connect"
  const handleConnectClick = () => {
    window.location.href = 'https://your-connect-link.com'; 
  };

  // Check if the current path matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="relative w-full mt-2 mx-auto bg-white shadow-lg rounded-lg max-w-screen-xl">
      <div className="p-3 flex justify-between items-center z-50">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            Atul Goyal
          </Link>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-center font-normal hidden">
          <ul className="flex gap-6 text-[16px] list-none">
            <Link to="/skills">
              <li className={`cursor-pointer font-bold ${isActive('/skills') ? 'border-b-2 border-purple-600' : 'hover:border-purple-600'} transition`}>
                Skills
              </li>
            </Link>
            <Link to="/projects">
              <li className={`cursor-pointer font-bold ${isActive('/projects') ? 'border-b-2 border-purple-600' : 'hover:border-purple-600'} transition`}>
                Projects
              </li>
            </Link>
          </ul>
        </div>
        
        <div className="lg:flex hidden items-center gap-4">
          {/* Social media icons */}
          <a href="https://www.instagram.com/atulxgoyal/" target="_blank" rel="noopener noreferrer" className={`text-2xl ${isActive('https://www.instagram.com/atulxgoyal/') ? 'text-purple-600' : 'hover:text-purple-600'}`}>
            <FaInstagram />
          </a>
          <a href="https://github.com/goyalxatul" target="_blank" rel="noopener noreferrer" className={`text-2xl ${isActive('https://github.com/goyalxatul') ? 'text-purple-600' : 'hover:text-purple-600'}`}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/atulxgoyal" target="_blank" rel="noopener noreferrer" className={`text-2xl ${isActive('https://www.linkedin.com/in/atulxgoyal') ? 'text-purple-600' : 'hover:text-purple-600'}`}>
            <FaLinkedin />
          </a>
          {/* Let's Connect button */}
          <button onClick={handleConnectClick} className="bg-white text-black px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition font-bold border-b-2 border-purple-600">
            Let's Connect
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <AiOutlineClose /> : <HiMenuAlt3 />} {/* Toggle between menu and close icons */}
          </button>
        </div>
      </div>

      {/* Side navigation panel */}
      <div className={`fixed top-0 right-0 h-full bg-white z-50 shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-4">
          <button onClick={toggleMenu} className="text-2xl mb-6">
            <AiOutlineClose />
          </button>
          <ul className="text-lg space-y-4">
            <Link to="/skills" onClick={toggleMenu}>
              <li className={`cursor-pointer font-bold ${isActive('/skills') ? 'border-b-2 border-purple-600' : 'hover:border-purple-600'} transition`}>
                Skills
              </li>
            </Link>
            <Link to="/projects" onClick={toggleMenu}>
              <li className={`cursor-pointer font-bold ${isActive('/projects') ? 'border-b-2 border-purple-600' : 'hover:border-purple-600'} transition`}>
                Projects
              </li>
            </Link>
            <li>
              <button onClick={handleConnectClick} className="bg-white text-black px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition font-bold border-b-2 border-purple-600">Let's Connect</button>
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <a href="https://www.instagram.com/atuxgoyal/" target="_blank" rel="noopener noreferrer" className={`text-2xl ${isActive('https://www.instagram.com/atulxgoyal/') ? 'text-purple-600' : 'hover:text-purple-600'}`}>
              <FaInstagram />
            </a>
            <a href="https://github.com/goyalxatul" target="_blank" rel="noopener noreferrer" className={`text-2xl ${isActive('https://github.com/goyalxatul') ? 'text-purple-600' : 'hover:text-purple-600'}`}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/atulxgoyal" target="_blank" rel="noopener noreferrer" className={`text-2xl ${isActive('https://www.linkedin.com/in/atulxgoyal') ? 'text-purple-600' : 'hover:text-purple-600'}`}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

