import React from 'react';
import WhiteButton from '../utils/WhiteButton';

const TerceraSeccion = () => {
    return (
        <section className="relative h-screen w-full snap-start overflow-hidden">
            {/* Imagen de la mujer profesional - Izquierda */}
            <div className="absolute left-0 bottom-0 w-[800px] h-[1000px]">
                <img
                    src="/images/chica2.png"
                    alt="Profesional"
                    className="w-full h-full object-contain"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    }}
                />
            </div>

            {/* Contenido principal - Derecha */}
            <div className="absolute right-[107px] top-[166px] w-[600px]">
                {/* Título principal */}
                <h2
                    className="text-[#D9D9D9] mb-[24px]"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 400,
                        fontSize: '65px',
                        lineHeight: '76px',
                        textAlign: 'left',
                    }}
                >
                    SABEMOS LAS NECESIDADES DE LOS EMPRESARIOS
                </h2>

                {/* Subtítulo */}
                <p
                    className="text-white mb-[60px]"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '23px',
                        textAlign: 'left',
                    }}
                >
                    Optimizamos tu gestión fiscal y trámites para que tu empresa nunca se detenga.
                </p>

                {/* Grid de iconos con checkmarks - 2x2 */}
                <div className="grid grid-cols-2 gap-x-[80px] gap-y-[40px] mb-[60px]">
                    {/* Icono 1 - Impuestos */}
                    <div className="flex items-center gap-4">
                        <div
                            className="flex items-center justify-center flex-shrink-0"
                            style={{
                                width: '60px',
                                height: '60px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '8px',
                            }}
                        >
                            <img
                                src="/images/check-icon.svg"
                                alt="Check"
                                className="w-[30px] h-[30px]"
                            />
                        </div>
                        <span
                            className="text-white"
                            style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: 400,
                                fontSize: '24px',
                                lineHeight: '28px',
                            }}
                        >
                            Impuestos
                        </span>
                    </div>

                    {/* Icono 2 - Contabilidad */}
                    <div className="flex items-center gap-4">
                        <div
                            className="flex items-center justify-center flex-shrink-0"
                            style={{
                                width: '60px',
                                height: '60px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '8px',
                            }}
                        >
                            <img
                                src="/images/check-icon.svg"
                                alt="Check"
                                className="w-[30px] h-[30px]"
                            />
                        </div>
                        <span
                            className="text-white"
                            style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: 400,
                                fontSize: '24px',
                                lineHeight: '28px',
                            }}
                        >
                            Contabilidad
                        </span>
                    </div>

                    {/* Icono 3 - Seguridad Social */}
                    <div className="flex items-center gap-4">
                        <div
                            className="flex items-center justify-center flex-shrink-0"
                            style={{
                                width: '60px',
                                height: '60px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '8px',
                            }}
                        >
                            <img
                                src="/images/check-icon.svg"
                                alt="Check"
                                className="w-[30px] h-[30px]"
                            />
                        </div>
                        <span
                            className="text-white"
                            style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: 400,
                                fontSize: '24px',
                                lineHeight: '28px',
                            }}
                        >
                            Seguridad Social
                        </span>
                    </div>

                    {/* Icono 4 - Nómina */}
                    <div className="flex items-center gap-4">
                        <div
                            className="flex items-center justify-center flex-shrink-0"
                            style={{
                                width: '60px',
                                height: '60px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '8px',
                            }}
                        >
                            <img
                                src="/images/check-icon.svg"
                                alt="Check"
                                className="w-[30px] h-[30px]"
                            />
                        </div>
                        <span
                            className="text-white"
                            style={{
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: 400,
                                fontSize: '24px',
                                lineHeight: '28px',
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

export default TerceraSeccion;
