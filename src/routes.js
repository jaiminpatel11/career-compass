// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import CandidateHomePage from './container/CandidateHomePage/CandidateHomePage.jsx';
// Import other components as needed

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CandidateHomePage />} /> {/* Use element prop instead of component */}
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
