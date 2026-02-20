import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import InicioMobile from './pages/InicioMobile';
import Servicios from './pages/Servicios';
import ServiciosMobile from './pages/ServiciosMobile';
import Faqs from './pages/Faqs';
import FaqsMobile from './pages/FaqsMobile';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <Router>
      <div
        className="App"
        style={{ minHeight: '100vh', width: '100%' }}
      >
        <Routes>
          <Route path="/" element={isMobile ? <InicioMobile /> : <Inicio />} />
          <Route path="/servicios" element={isMobile ? <ServiciosMobile /> : <Servicios />} />
          <Route path="/faqs" element={isMobile ? <FaqsMobile /> : <Faqs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
