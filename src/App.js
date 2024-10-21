import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AlertPage from './pages/AlertPage';
import DiscussPage from './pages/DiscussPage';
import Navbar from './components/Navbar';
import './css files/styles.css'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/alert" element={<AlertPage />} />
        <Route path="/discuss" element={<DiscussPage />} />
      </Routes>
    </Router>
  );
};

export default App;


