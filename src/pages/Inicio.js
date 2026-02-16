import React from 'react';
import Navbar from '../components/navbar';
import BlueButton from '../utils/BlueButton';
import SegundaSeccion from './SegundaSeccion';

const Inicio = () => {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* Navbar fijo en todas las secciones */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            {/* Hero Section - Primera sección */}
            <section className="relative min-h-screen w-full snap-start overflow-hidden flex items-center py-20 px-8">
                {/* CONTADORES - Texto de fondo */}
                <div
                    className="absolute top-[140px] left-1/2 transform -translate-x-1/2"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(153, 153, 153, 0.25) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '200px',
                        lineHeight: '1.2',
                        fontFamily: "'Ropa Sans', sans-serif",
                        fontWeight: 400,
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                    }}
                >
                    CONTADORES
                </div>

                {/* Imagen de la chica */}
                <div className="absolute left-[420px] top-[140px] w-[550px] h-[750px]">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/chica1.svg`}
                        alt="Profesional"
                        className="w-full h-full object-contain"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                        }}
                    />
                </div>

                {/* Container centrado con max-width */}
                <div className="w-full max-w-7xl mx-auto">
                    {/* Contenido principal */}
                    <div className="relative z-10 max-w-lg">
                        {/* Título principal */}
                        <h1
                            className="text-[#E8E8E8] mb-6"
                            style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: 300,
                                fontSize: '42px',
                                lineHeight: '1.2',
                                textAlign: 'left',
                                letterSpacing: '0.5px',
                            }}
                        >
                            La verdadera contaduría para empresas
                        </h1>

                        {/* Descripción */}
                        <p
                            className="text-[#B8B8B8] mb-8"
                            style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: 300,
                                fontSize: '16px',
                                lineHeight: '1.6',
                                textAlign: 'left',
                                letterSpacing: '0.2px',
                            }}
                        >
                            Deja la complejidad fiscal en manos expertas y recupera tu tiempo para lo que realmente importa: hacer escalar tu negocio. Sin sorpresas, solo resultados.
                        </p>

                        {/* Botón CTA */}
                        <BlueButton
                            text="Consultoria gratis"
                            onClick={() => window.open('https://wa.me/5299991188459', '_blank')}
                        />
                    </div>
                </div>
            </section>

            {/* Segunda Sección */}
            <SegundaSeccion />
        </div>
    );
};

export default Inicio;
