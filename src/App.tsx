import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RegistrarPage from './pages/Registrar/Registrar';
import Dashboard from './pages/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/registrar" element={<Layout><RegistrarPage /></Layout>} />
          <Route path="/dashboard" element={<Dashboard />} />          
        </Routes>
      </Router>
  );
};

export default App;
