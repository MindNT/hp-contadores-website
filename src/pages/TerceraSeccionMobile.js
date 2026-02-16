import React from 'react';
import WhiteButton from '../utils/WhiteButton';

const TerceraSeccionMobile = () => {
    return (
        <section className="relative h-screen w-full snap-start overflow-hidden flex flex-col justify-center items-center px-6">
            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Título principal */}
                <h2
                    className="text-[#D9D9D9] mb-4"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 400,
                        fontSize: '26px',
                        lineHeight: '30px',
                        textAlign: 'center',
                        maxWidth: '320px',
                    }}
                >
                    SABEMOS LAS NECESIDADES DE LOS EMPRESARIOS
                </h2>

                {/* Subtítulo */}
                <p
                    className="text-white mb-8"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '18px',
                        textAlign: 'center',
                        maxWidth: '320px',
                    }}
                >
                    Optimizamos tu gestión fiscal y trámites para que tu empresa nunca se detenga.
                </p>

                {/* Grid de servicios centrado */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8" style={{ maxWidth: '300px' }}>
                    {/* Icono 1 - Impuestos */}
                    <div className="flex items-center gap-2">
                        <div
                            className="flex items-center justify-center flex-shrink-0"
                            style={{
                                width: '40px',
                                height: '40px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '8px',
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
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '18px',
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
                                width: '40px',
                                height: '40px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '8px',
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
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '18px',
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
                                width: '40px',
                                height: '40px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '8px',
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
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '18px',
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
                                width: '40px',
                                height: '40px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '8px',
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
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '18px',
                            }}
                        >
                            Nómina
                        </span>
                    </div>
                </div>

                {/* Botón CTA */}
                <WhiteButton
                    text="Asesoría gratis"
                    onClick={() => window.open('https://wa.me/5299911884459', '_blank')}
                />
            </div>
        </section>
    );
};

export default TerceraSeccionMobile;
