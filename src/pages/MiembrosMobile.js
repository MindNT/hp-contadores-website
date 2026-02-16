import React from 'react';
import NavbarMobile from '../components/navbarMobile';

const MiembrosMobile = () => {
    const miembros = [
        {
            nombre: '',
            profesion: '',
            resumen: '',
            foto: `${process.env.PUBLIC_URL}/images/miembro1.jpg`,
        },
        {
            nombre: '',
            profesion: '',
            resumen: '',
            foto: `${process.env.PUBLIC_URL}/images/miembro2.jpg`,
        },
        {
            nombre: '',
            profesion: '',
            resumen: '',
            foto: `${process.env.PUBLIC_URL}/images/miembro3.jpg`,
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
                    className="text-[#E8E8E8] mb-3 text-center"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 300,
                        fontSize: '24px',
                        lineHeight: '1.3',
                        letterSpacing: '0.5px',
                        maxWidth: '340px',
                    }}
                >
                    Nuestro Equipo
                </h2>

                {/* Subtítulo */}
                <p
                    className="text-[#B8B8B8] mb-10 text-center"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 300,
                        fontSize: '14px',
                        lineHeight: '1.6',
                        letterSpacing: '0.2px',
                        maxWidth: '340px',
                    }}
                >
                    Profesionales comprometidos con tu éxito empresarial
                </p>

                {/* Tarjetas de miembros */}
                <div className="w-full max-w-sm space-y-6">
                    {miembros.map((miembro, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(8px)',
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Foto del miembro */}
                            <div
                                style={{
                                    width: '100%',
                                    height: '240px',
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
                                                width: 100px;
                                                height: 100px;
                                                border-radius: 50%;
                                                background: rgba(255, 255, 255, 0.1);
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                font-size: 40px;
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
                            <div className="p-5">
                                {/* Nombre */}
                                <h3
                                    className="text-white mb-2"
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '18px',
                                        lineHeight: '1.3',
                                        letterSpacing: '0.3px',
                                    }}
                                >
                                    {miembro.nombre}
                                </h3>

                                {/* Profesión */}
                                <p
                                    className="text-[#1852AE] mb-3"
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '12px',
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
                                        fontSize: '13px',
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
            </section>
        </>
    );
};

export default MiembrosMobile;
