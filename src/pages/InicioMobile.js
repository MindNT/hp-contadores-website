import React from 'react';
import NavbarMobile from '../components/navbarMobile';
import BlueButton from '../utils/BlueButton';
import SegundaSeccionMobile from './SegundaSeccionMobile';

const InicioMobile = () => {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* Navbar fijo en todas las secciones */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <NavbarMobile />
            </div>

            {/* Hero Section - Primera sección */}
            <section className="relative min-h-screen w-full snap-start overflow-hidden flex flex-col justify-center px-5 py-20">
                {/* CONTADORES - Texto de fondo */}
                <div
                    className="absolute top-[90px] left-0 right-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(153, 153, 153, 0.25) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '44px',
                        lineHeight: '1.2',
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
                <div className="absolute bottom-0 right-0 w-[200px] h-[320px]">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/chica1.svg`}
                        alt="Profesional"
                        className="w-full h-full object-contain"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                        }}
                    />
                </div>

                {/* Contenido principal - Alineado a la izquierda */}
                <div className="relative z-10 flex flex-col items-start" style={{ marginTop: '130px', maxWidth: '280px' }}>
                    {/* Título principal */}
                    <h1
                        className="text-[#E8E8E8] mb-5"
                        style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 300,
                            fontSize: '24px',
                            lineHeight: '1.3',
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
                            fontSize: '14px',
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
                        onClick={() => window.open('https://wa.me/529991188459', '_blank')}
                    />
                </div>
            </section>

            {/* Segunda Sección */}
            <SegundaSeccionMobile />
        </div>
    );
};

export default InicioMobile;
