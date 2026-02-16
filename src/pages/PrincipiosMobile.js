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

            <section className="relative h-screen w-full snap-start overflow-hidden flex flex-col items-center justify-center px-6">
                {/* Título principal */}
                <h2
                    className="text-[#D9D9D9] mb-8"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 400,
                        fontSize: '26px',
                        lineHeight: '30px',
                        textAlign: 'center',
                    }}
                >
                    NUESTROS PRINCIPIOS
                </h2>

                {/* Grid de principios - 2x2 */}
                <div className="grid grid-cols-1 gap-4" style={{ maxWidth: '340px', overflowY: 'auto', maxHeight: '70vh' }}>
                    {principios.map((principio, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '12px',
                                padding: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            {/* Número del principio */}
                            <div
                                className="text-[#1852AE] mb-2"
                                style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 700,
                                    fontSize: '32px',
                                    lineHeight: '38px',
                                    opacity: 0.6,
                                }}
                            >
                                {principio.numero}
                            </div>

                            {/* Título del principio */}
                            <h3
                                className="text-white mb-2"
                                style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '22px',
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
                                    fontSize: '14px',
                                    lineHeight: '18px',
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
