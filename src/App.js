import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import InicioMobile from './pages/InicioMobile';
import Principios from './pages/Principios';
import PrincipiosMobile from './pages/PrincipiosMobile';
import Faqs from './pages/Faqs';
import FaqsMobile from './pages/FaqsMobile';
import Miembros from './pages/Miembros';
import MiembrosMobile from './pages/MiembrosMobile';
import TerceraSeccion from './pages/TerceraSeccion';
import TerceraSeccionMobile from './pages/TerceraSeccionMobile';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para detectar el ancho de la ventana
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar al cargar
    checkMobile();

    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Router>
      <div
        className="App"
        style={{
          background: 'linear-gradient(180deg, #0A2248 0%, #1852AE 100%)',
          border: '1px solid #000000',
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <Routes>
          <Route path="/" element={isMobile ? <InicioMobile /> : <Inicio />} />
          <Route path="/principios" element={isMobile ? <PrincipiosMobile /> : <Principios />} />
          <Route path="/faqs" element={isMobile ? <FaqsMobile /> : <Faqs />} />
          <Route path="/miembros" element={isMobile ? <MiembrosMobile /> : <Miembros />} />
          <Route path="/servicios" element={isMobile ? <TerceraSeccionMobile /> : <TerceraSeccion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
