import React from 'react';
import NavbarMobile from '../components/navbarMobile';
import BlueButton from '../utils/BlueButton';
import SegundaSeccionMobile from './SegundaSeccionMobile';
import TerceraSeccionMobile from './TerceraSeccionMobile';

const InicioMobile = () => {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* Navbar fijo en todas las secciones */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <NavbarMobile />
            </div>

            {/* Hero Section - Primera sección */}
            <section className="relative h-screen w-full snap-start overflow-hidden flex flex-col justify-center px-6">
                {/* CONTADORES - Texto de fondo */}
                <div
                    className="absolute top-[100px] left-0 right-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(153, 153, 153, 0.3) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '50px',
                        lineHeight: '55px',
                        fontFamily: "'Ropa Sans', sans-serif",
                        fontWeight: 400,
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                    }}
                >
                    CONTADORES
                </div>

                {/* Imagen de la chica - Posicionada a la derecha */}
                <div className="absolute bottom-0 right-0 w-[220px] h-[350px]">
                    <img
                        src="/images/chica1.svg"
                        alt="Profesional"
                        className="w-full h-full object-contain"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                        }}
                    />
                </div>

                {/* Contenido principal - Alineado a la izquierda */}
                <div className="relative z-10 flex flex-col items-start" style={{ marginTop: '140px', maxWidth: '280px' }}>
                    {/* Título principal */}
                    <h1
                        className="text-[#D9D9D9] mb-6"
                        style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 400,
                            fontSize: '26px',
                            lineHeight: '30px',
                            textAlign: 'left',
                        }}
                    >
                        LA VERDADERA CONTADURIA PARA EMPRESAS
                    </h1>

                    {/* Descripción */}
                    <p
                        className="text-[#D9D9D9] mb-8"
                        style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '18px',
                            textAlign: 'left',
                        }}
                    >
                        Deja la complejidad fiscal en manos expertas y recupera tu tiempo para lo que realmente importa: hacer escalar tu negocio. Sin sorpresas, solo resultados.
                    </p>

                    {/* Botón CTA */}
                    <BlueButton
                        text="Consultoria gratis"
                        onClick={() => window.open('https://wa.me/5299911884459', '_blank')}
                    />
                </div>
            </section>

            {/* Segunda Sección */}
            <SegundaSeccionMobile />

            {/* Tercera Sección */}
            <TerceraSeccionMobile />
        </div>
    );
};

export default InicioMobile;
