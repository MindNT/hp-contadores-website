import React from 'react';
import Navbar from '../components/navbar';
import WhiteButton from '../utils/WhiteButton';

const TerceraSeccion = () => {
    return (
        <>
            {/* Navbar fijo */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            <section className="relative min-h-screen w-full snap-start overflow-hidden flex items-center py-20 px-8">
                {/* Imagen de la mujer profesional - Izquierda */}
                <div className="absolute left-0 bottom-0 w-[700px] h-[900px]">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/chica2.png`}
                        alt="Profesional"
                        className="w-full h-full object-contain"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                        }}
                    />
                </div>

                {/* Container centrado con max-width */}
                <div className="w-full max-w-7xl mx-auto flex justify-end">
                    {/* Contenido principal - Derecha */}
                    <div className="relative z-10 max-w-xl">
                        {/* Título principal */}
                        <h2
                            className="text-[#E8E8E8] mb-6"
                            style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: 300,
                                fontSize: '36px',
                                lineHeight: '1.3',
                                textAlign: 'left',
                                letterSpacing: '0.5px',
                            }}
                        >
                            Sabemos las necesidades de los empresarios
                        </h2>

                        {/* Subtítulo */}
                        <p
                            className="text-[#B8B8B8] mb-12"
                            style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: 300,
                                fontSize: '16px',
                                lineHeight: '1.6',
                                textAlign: 'left',
                                letterSpacing: '0.2px',
                            }}
                        >
                            Optimizamos tu gestión fiscal y trámites para que tu empresa nunca se detenga.
                        </p>

                        {/* Grid de servicios - 2x2 */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-12">
                            {/* Icono 1 - Impuestos */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex items-center justify-center flex-shrink-0"
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '6px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/check-icon.svg`}
                                        alt="Check"
                                        className="w-[20px] h-[20px]"
                                    />
                                </div>
                                <span
                                    className="text-white"
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 300,
                                        fontSize: '16px',
                                        lineHeight: '1.4',
                                        letterSpacing: '0.3px',
                                    }}
                                >
                                    Impuestos
                                </span>
                            </div>

                            {/* Icono 2 - Contabilidad */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex items-center justify-center flex-shrink-0"
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '6px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/check-icon.svg`}
                                        alt="Check"
                                        className="w-[20px] h-[20px]"
                                    />
                                </div>
                                <span
                                    className="text-white"
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 300,
                                        fontSize: '16px',
                                        lineHeight: '1.4',
                                        letterSpacing: '0.3px',
                                    }}
                                >
                                    Contabilidad
                                </span>
                            </div>

                            {/* Icono 3 - Seguridad Social */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex items-center justify-center flex-shrink-0"
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '6px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/check-icon.svg`}
                                        alt="Check"
                                        className="w-[20px] h-[20px]"
                                    />
                                </div>
                                <span
                                    className="text-white"
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 300,
                                        fontSize: '16px',
                                        lineHeight: '1.4',
                                        letterSpacing: '0.3px',
                                    }}
                                >
                                    Seguridad Social
                                </span>
                            </div>

                            {/* Icono 4 - Nómina */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex items-center justify-center flex-shrink-0"
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '6px',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/check-icon.svg`}
                                        alt="Check"
                                        className="w-[20px] h-[20px]"
                                    />
                                </div>
                                <span
                                    className="text-white"
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 300,
                                        fontSize: '16px',
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
                            onClick={() => window.open('https://wa.me/5299991188459', '_blank')}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TerceraSeccion;

