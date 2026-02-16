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

            <section className="relative h-screen w-full snap-start overflow-hidden flex flex-col items-center justify-center">
                {/* Título principal */}
                <h2
                    className="text-[#D9D9D9] mb-[80px]"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 400,
                        fontSize: '65px',
                        lineHeight: '76px',
                        textAlign: 'center',
                    }}
                >
                    NUESTROS PRINCIPIOS
                </h2>

                {/* Grid de principios - 2x2 */}
                <div className="grid grid-cols-2 gap-x-[60px] gap-y-[40px]" style={{ maxWidth: '1200px' }}>
                    {principios.map((principio, index) => (
                        <div
                            key={index}
                            className="relative"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '12px',
                                padding: '40px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease',
                                width: '520px',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Número del principio */}
                            <div
                                className="text-[#1852AE] mb-4"
                                style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '48px',
                                    lineHeight: '56px',
                                    opacity: 0.6,
                                }}
                            >
                                {principio.numero}
                            </div>

                            {/* Título del principio */}
                            <h3
                                className="text-white mb-3"
                                style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 500,
                                    fontSize: '28px',
                                    lineHeight: '33px',
                                }}
                            >
                                {principio.titulo}
                            </h3>

                            {/* Descripción */}
                            <p
                                className="text-[#D9D9D9]"
                                style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '22px',
                                }}
                            >
                                {principio.descripcion}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Principios;
