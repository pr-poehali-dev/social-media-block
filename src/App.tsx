
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import SocialNavBar from './components/SocialNavBar';

function App() {
  return (
    <div className="app">
      <SocialNavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
