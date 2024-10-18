import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;

