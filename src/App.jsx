import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProducerDashboardPage from './pages/ProducerDashboardPage';
import ConsumerDashboardPage from './pages/ConsumerDashboardPage';
import RecyclingPage from './pages/RecyclingPage';
import RecyclePage from './pages/RecyclePage';
import EducationPage from './pages/EducationPage';
import ResalePage from './pages/ResalePage';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/recycling" element={<RecyclingPage />} />
        <Route path="/recycle" element={<RecyclePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/consumer" element={<ConsumerDashboardPage />} />
        <Route path="/" element={<ConsumerDashboardPage />} />

        <Route path="/producer" element={<ProducerDashboardPage />} />

        <Route path="/resale" element={<ResalePage />} />
        <Route path="/resale/marketplace" element={<ResalePage initialTab="marketplace" />} />

      </Routes>
    </Router>
  );
}

export default App;