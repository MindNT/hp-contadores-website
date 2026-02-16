import React from 'react';
import NavbarMobile from '../components/navbarMobile';

const PrincipiosMobile = () => {
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
                <NavbarMobile />
            </div>

            <section className="relative min-h-screen w-full snap-start overflow-hidden flex flex-col items-center justify-center px-5 py-20">
                {/* Título principal */}
                <h2
                    className="text-[#E8E8E8] mb-10"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 300,
                        fontSize: '24px',
                        lineHeight: '1.3',
                        textAlign: 'center',
                        letterSpacing: '0.5px',
                    }}
                >
                    Nuestros Principios
                </h2>

                {/* Grid de principios */}
                <div className="w-full max-w-sm space-y-5" style={{ overflowY: 'auto', maxHeight: '70vh' }}>
                    {principios.map((principio, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(8px)',
                                borderRadius: '8px',
                                padding: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                            }}
                        >
                            {/* Número del principio */}
                            <div
                                className="text-white mb-2"
                                style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '24px',
                                    lineHeight: '1',
                                    opacity: 0.7,
                                    letterSpacing: '1px',
                                }}
                            >
                                {principio.numero}
                            </div>

                            {/* Título del principio */}
                            <h3
                                className="text-white mb-3"
                                style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '16px',
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
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    letterSpacing: '0.2px',
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

export default PrincipiosMobile;
