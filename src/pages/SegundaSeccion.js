import React from 'react';

const SegundaSeccion = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center snap-start overflow-hidden py-20 px-8">
            {/* Container centrado con max-width */}
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
                {/* Título EXPERIENCIA ESTRATEGICA */}
                <h2
                    className="text-[#E8E8E8] mb-8"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 300,
                        fontSize: '36px',
                        lineHeight: '1.3',
                        textAlign: 'center',
                        letterSpacing: '0.5px',
                    }}
                >
                    Experiencia Estratégica
                </h2>

                {/* Descripción */}
                <p
                    className="text-[#B8B8B8] mb-16 max-w-3xl"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 300,
                        fontSize: '16px',
                        lineHeight: '1.6',
                        textAlign: 'center',
                        letterSpacing: '0.2px',
                    }}
                >
                    La contabilidad moderna no se trata de mirar hacia atrás, sino de proyectar hacia adelante. A través de nuestra Experiencia Estratégica, nos integramos a tu operación para brindarte perspectivas claras y soluciones proactivas. Acompañamos al empresario en cada etapa, asegurando que cada paso financiero sea firme, legal y eficiente.
                </p>

                {/* Logos de clientes */}
                <div className="flex items-center justify-center gap-10">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/cliente.png`}
                        alt="Cliente 1"
                        style={{
                            height: '100px',
                            width: 'auto',
                            objectFit: 'contain',
                            opacity: 0.8,
                        }}
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/images/cliente2.png`}
                        alt="Cliente 2"
                        style={{
                            height: '100px',
                            width: 'auto',
                            objectFit: 'contain',
                            opacity: 0.8,
                        }}
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/images/cliente3.png`}
                        alt="Cliente 3"
                        style={{
                            height: '100px',
                            width: 'auto',
                            objectFit: 'contain',
                            opacity: 0.8,
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default SegundaSeccion;
