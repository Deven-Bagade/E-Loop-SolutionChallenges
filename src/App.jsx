import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthSelection from './pages/AuthSelection';
import ProducerAuth from './pages/ProducerAuth';
import ConsumerAuth from './pages/ConsumerAuth';
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
        <Route path="/" element={<AuthSelection />} />
        <Route path="/auth/producer" element={<ProducerAuth />} />
        <Route path="/auth/consumer" element={<ConsumerAuth />} />
        
        <Route path="/producer/*" element={<ProducerDashboardPage />} />
        <Route path="/consumer" element={<ConsumerDashboardPage />} />
        
        <Route path="/recycling" element={<RecyclingPage />} />
        <Route path="/recycle" element={<RecyclePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/resale" element={<ResalePage />} />
        <Route path="/resale/marketplace" element={<ResalePage initialTab="marketplace" />} />
      </Routes>
    </Router>
  );
}

export default App;