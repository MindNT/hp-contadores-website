import React from 'react';
import Navbar from '../components/navbar';
import BlueButton from '../utils/BlueButton';
import SegundaSeccion from './SegundaSeccion';
import TerceraSeccion from './TerceraSeccion';

const Inicio = () => {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* Navbar fijo en todas las secciones */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            {/* Hero Section - Primera sección */}
            <section className="relative h-screen w-full snap-start overflow-hidden">
                {/* CONTADORES - Texto de fondo */}
                <div
                    className="absolute top-[166px] left-1/2 transform -translate-x-1/2 h-[268px]"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(153, 153, 153, 0.3) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '250px',
                        lineHeight: '268px',
                        fontFamily: "'Ropa Sans', sans-serif",
                        fontWeight: 400,
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                    }}
                >
                    CONTADORES
                </div>

                {/* Imagen de la chica */}
                <div className="absolute left-[456px] top-[166px] w-[600px] h-[816px]">
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

                {/* Contenido principal */}
                <div className="relative z-10">
                    {/* Título principal */}
                    <h1
                        className="absolute left-[107px] top-[434px] w-[523px] text-[#D9D9D9]"
                        style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 400,
                            fontSize: '65px',
                            lineHeight: '76px',
                            textAlign: 'left',
                        }}
                    >
                        LA VERDADERA CONTADURIA PARA EMPRESAS
                    </h1>

                    {/* Descripción */}
                    <p
                        className="absolute left-[107px] top-[682px] w-[523px] text-[#D9D9D9]"
                        style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '23px',
                            textAlign: 'left',
                        }}
                    >
                        Deja la complejidad fiscal en manos expertas y recupera tu tiempo para lo que realmente importa: hacer escalar tu negocio. Sin sorpresas, solo resultados.
                    </p>

                    {/* Botón CTA */}
                    <div className="absolute left-[107px] top-[788px]">
                        <BlueButton
                            text="Consultoria gratis"
                            onClick={() => window.open('https://wa.me/5299911884459', '_blank')}
                        />
                    </div>
                </div>
            </section>

            {/* Segunda Sección */}
            <SegundaSeccion />

            {/* Tercera Sección */}
            <TerceraSeccion />
        </div>
    );
};

export default Inicio;
