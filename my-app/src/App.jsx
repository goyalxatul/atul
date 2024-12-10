import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import DotCursor from './components/DotCursor';

function App() {
  return (
    <Router>
      <DotCursor/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        
      </Routes>
      <Footer />
     
    </Router>
  );
}

export default App;


