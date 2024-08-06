// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contents from './pages/Contents';
import Profile from './pages/Profile';
import Login from './pages/Login';
import {Navbar} from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-brown-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
