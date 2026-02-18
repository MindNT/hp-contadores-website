import React from 'react';
import Navbar from '../components/navbar';

const Miembros = () => {
    const miembros = [
        {
            nombre: 'David',
            profesion: 'Contador Publico',
            resumen: 'La contabilidad no es solo cumplimiento, es estrategia. Ayudamos a personas y empresas a cumplir correctamente sus obligaciones fiscales y a tomar decisiones financieras con seguridad y visión a futuro.',
            foto: `${process.env.PUBLIC_URL}/images/miembro1.jpg`,
        },
        {
            nombre: 'Regina',
            profesion: 'Contadora Publica',
            resumen: 'Trabajamos con integridad, responsabilidad y actualización constante. Nuestra misión es proteger el patrimonio de nuestros clientes mediante una planeación fiscal sólida y un cumplimiento oportuno.',
            foto: `${process.env.PUBLIC_URL}/images/miembro2.jpg`,
        }
    ];

    return (
        <>
            {/* Navbar fijo */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            <section className="relative min-h-screen w-full snap-start overflow-hidden flex flex-col items-center justify-center py-24 px-8">
                {/* Container centrado con max-width */}
                <div className="w-full max-w-6xl mx-auto">
                    {/* Título principal */}
                    <h2
                        className="text-[#E8E8E8] mb-4 text-center"
                        style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 300,
                            fontSize: '36px',
                            lineHeight: '1.3',
                            letterSpacing: '0.5px',
                        }}
                    >
                        Nuestro Equipo
                    </h2>

                    {/* Subtítulo */}
                    <p
                        className="text-[#B8B8B8] mb-16 text-center"
                        style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 300,
                            fontSize: '16px',
                            lineHeight: '1.6',
                            letterSpacing: '0.2px',
                        }}
                    >
                        Profesionales comprometidos con tu éxito empresarial
                    </p>

                    {/* Grid de tarjetas de miembros */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {miembros.map((miembro, index) => (
                            <div
                                key={index}
                                className="group"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(8px)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                }}
                            >
                                {/* Foto del miembro */}
                                <div
                                    style={{
                                        width: '100%',
                                        height: '280px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <img
                                        src={miembro.foto}
                                        alt={miembro.nombre}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = `
                                                <div style="
                                                    width: 120px;
                                                    height: 120px;
                                                    border-radius: 50%;
                                                    background: rgba(255, 255, 255, 0.1);
                                                    display: flex;
                                                    align-items: center;
                                                    justify-content: center;
                                                    font-size: 48px;
                                                    color: rgba(255, 255, 255, 0.3);
                                                    font-weight: 300;
                                                ">
                                                    ${miembro.nombre.charAt(0)}
                                                </div>
                                            `;
                                        }}
                                    />
                                </div>

                                {/* Información del miembro */}
                                <div className="p-6">
                                    {/* Nombre */}
                                    <h3
                                        className="text-white mb-2"
                                        style={{
                                            fontFamily: "'Roboto', sans-serif",
                                            fontWeight: 400,
                                            fontSize: '20px',
                                            lineHeight: '1.3',
                                            letterSpacing: '0.3px',
                                        }}
                                    >
                                        {miembro.nombre}
                                    </h3>

                                    {/* Profesión */}
                                    <p
                                        className="text-white mb-3"
                                        style={{
                                            fontFamily: "'Roboto', sans-serif",
                                            fontWeight: 400,
                                            fontSize: '14px',
                                            lineHeight: '1.4',
                                            letterSpacing: '0.5px',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {miembro.profesion}
                                    </p>

                                    {/* Resumen */}
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
                                        {miembro.resumen}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Miembros;
