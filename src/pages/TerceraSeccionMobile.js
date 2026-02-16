import React from 'react';
import NavbarMobile from '../components/navbarMobile';
import WhiteButton from '../utils/WhiteButton';

const TerceraSeccionMobile = () => {
    return (
        <>
            {/* Navbar fijo */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <NavbarMobile />
            </div>

            <section className="relative min-h-screen w-full snap-start overflow-hidden flex flex-col justify-center items-center px-5 py-20">
                {/* Contenido principal */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Título principal */}
                    <h2
                        className="text-[#E8E8E8] mb-5"
                        style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 300,
                            fontSize: '24px',
                            lineHeight: '1.3',
                            textAlign: 'center',
                            maxWidth: '320px',
                            letterSpacing: '0.5px',
                        }}
                    >
                        Sabemos las necesidades de los empresarios
                    </h2>

                    {/* Subtítulo */}
                    <p
                        className="text-[#B8B8B8] mb-10"
                        style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontWeight: 300,
                            fontSize: '14px',
                            lineHeight: '1.6',
                            textAlign: 'center',
                            maxWidth: '320px',
                            letterSpacing: '0.2px',
                        }}
                    >
                        Optimizamos tu gestión fiscal y trámites para que tu empresa nunca se detenga.
                    </p>

                    {/* Grid de servicios centrado */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-10" style={{ maxWidth: '300px' }}>
                        {/* Icono 1 - Impuestos */}
                        <div className="flex items-center gap-2">
                            <div
                                className="flex items-center justify-center flex-shrink-0"
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/check-icon.svg`}
                                    alt="Check"
                                    className="w-[16px] h-[16px]"
                                />
                            </div>
                            <span
                                className="text-white"
                                style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 300,
                                    fontSize: '14px',
                                    lineHeight: '1.4',
                                    letterSpacing: '0.3px',
                                }}
                            >
                                Impuestos
                            </span>
                        </div>

                        {/* Icono 2 - Contabilidad */}
                        <div className="flex items-center gap-2">
                            <div
                                className="flex items-center justify-center flex-shrink-0"
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/check-icon.svg`}
                                    alt="Check"
                                    className="w-[16px] h-[16px]"
                                />
                            </div>
                            <span
                                className="text-white"
                                style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 300,
                                    fontSize: '14px',
                                    lineHeight: '1.4',
                                    letterSpacing: '0.3px',
                                }}
                            >
                                Contabilidad
                            </span>
                        </div>

                        {/* Icono 3 - Seguridad Social */}
                        <div className="flex items-center gap-2">
                            <div
                                className="flex items-center justify-center flex-shrink-0"
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/check-icon.svg`}
                                    alt="Check"
                                    className="w-[16px] h-[16px]"
                                />
                            </div>
                            <span
                                className="text-white"
                                style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 300,
                                    fontSize: '14px',
                                    lineHeight: '1.4',
                                    letterSpacing: '0.3px',
                                }}
                            >
                                Seguridad Social
                            </span>
                        </div>

                        {/* Icono 4 - Nómina */}
                        <div className="flex items-center gap-2">
                            <div
                                className="flex items-center justify-center flex-shrink-0"
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/check-icon.svg`}
                                    alt="Check"
                                    className="w-[16px] h-[16px]"
                                />
                            </div>
                            <span
                                className="text-white"
                                style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 300,
                                    fontSize: '14px',
                                    lineHeight: '1.4',
                                    letterSpacing: '0.3px',
                                }}
                            >
                                Nómina
                            </span>
                        </div>
                    </div>

                    {/* Botón CTA */}
                    <WhiteButton
                        text="Asesoría gratis"
                        onClick={() => window.open('https://wa.me/529991188459', '_blank')}
                    />
                </div>
            </section>
        </>
    );
};

export default TerceraSeccionMobile;

