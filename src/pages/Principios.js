import React from 'react';
import Navbar from '../components/navbar';

const Principios = () => {
    const principios = [
        {
            numero: '01',
            titulo: 'TRANSPARENCIA',
            descripcion: 'Comunicación clara y honesta en cada paso. Tu confianza es nuestro activo más valioso.',
        },
        {
            numero: '02',
            titulo: 'EXCELENCIA',
            descripcion: 'Compromiso con la calidad y precisión en cada servicio que brindamos a nuestros clientes.',
        },
        {
            numero: '03',
            titulo: 'PROACTIVIDAD',
            descripcion: 'Anticipamos necesidades y ofrecemos soluciones antes de que surjan los problemas.',
        },
        {
            numero: '04',
            titulo: 'CONFIDENCIALIDAD',
            descripcion: 'Protegemos tu información con los más altos estándares de seguridad y discreción.',
        },
    ];

    return (
        <>
            {/* Navbar fijo */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            <section className="relative min-h-screen w-full snap-start overflow-hidden flex flex-col items-center justify-center py-24 px-8">
                {/* Container centrado con max-width */}
                <div className="w-full max-w-5xl mx-auto">
                    {/* Título principal */}
                    <h2
                        className="text-[#E8E8E8] mb-16"
                        style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 300,
                            fontSize: '36px',
                            lineHeight: '1.3',
                            textAlign: 'center',
                            letterSpacing: '0.5px',
                        }}
                    >
                        Nuestros Principios
                    </h2>

                    {/* Grid de principios - 2x2 */}
                    <div className="grid grid-cols-2 gap-8">
                        {principios.map((principio, index) => (
                            <div
                                key={index}
                                className="relative group"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(8px)',
                                    borderRadius: '8px',
                                    padding: '32px',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {/* Número del principio */}
                                <div
                                    className="text-white mb-3"
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '28px',
                                        lineHeight: '1',
                                        opacity: 0.7,
                                        letterSpacing: '1px',
                                    }}
                                >
                                    {principio.numero}
                                </div>

                                {/* Título del principio */}
                                <h3
                                    className="text-white mb-4"
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '20px',
                                        lineHeight: '1.3',
                                        letterSpacing: '0.5px',
                                    }}
                                >
                                    {principio.titulo}
                                </h3>

                                {/* Descripción */}
                                <p
                                    className="text-[#B8B8B8]"
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 300,
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        letterSpacing: '0.2px',
                                    }}
                                >
                                    {principio.descripcion}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Principios;
