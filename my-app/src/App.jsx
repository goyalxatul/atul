import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar';
import Skills from './components/Skills';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}
export default App;

