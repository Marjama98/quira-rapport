// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BorrowerDashboard from './components/BorrowerDashboard';
import ReserveringDashboard from './components/ReserveringDashboard';
import './layout.css';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const headerElement = document.querySelector('.app-header');
    if (headerElement) {
      const headerHeight = headerElement.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    }
  }, []);

  return (
    <div className="app-container">
      {/* Header component */}
      <Header onMenuClick={toggleSidebar} />
      
      {/* Main content area */}
      <div className="main-content">
        {/* Sidebar with proper props */}
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        
        {/* Content area */}
        <div className="content-area">
          <Routes>
            <Route path="/" element={<div>Home Dashboard</div>} />
            <Route path="/låner" element={<BorrowerDashboard />} />
            <Route path="/låner/:borrowerId" element={<BorrowerDashboard />} />
            <Route path="/reservering" element={<reservations />} />
            <Route path="/reservering/aktive" element={<ReserveringDashboard />} />
            <Route path="/reservering/innstillinger" element={<ReserveringDashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;