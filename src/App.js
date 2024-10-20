import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AlertPage from './pages/AlertPage';
import DiscussPage from './pages/DiscussPage';
import './css files/styles.css'

const App = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} /> {/* Use element prop instead of component */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/alert" element={<AlertPage />} />
        <Route path="/discuss" element={<DiscussPage />} />
      </Routes>
    </Router>
  );
};

export default App;


