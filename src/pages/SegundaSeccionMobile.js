import React from 'react';

const SegundaSeccionMobile = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center snap-start overflow-hidden px-5 py-20">
            {/* Título EXPERIENCIA ESTRATEGICA */}
            <h2
                className="text-[#E8E8E8] mb-6"
                style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 300,
                    fontSize: '24px',
                    lineHeight: '1.3',
                    textAlign: 'center',
                    maxWidth: '340px',
                    letterSpacing: '0.5px',
                }}
            >
                Experiencia Estratégica
            </h2>

            {/* Descripción */}
            <p
                className="text-[#B8B8B8] mb-10"
                style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 300,
                    fontSize: '14px',
                    lineHeight: '1.6',
                    textAlign: 'center',
                    maxWidth: '340px',
                    letterSpacing: '0.2px',
                }}
            >
                La contabilidad moderna no se trata de mirar hacia atrás, sino de proyectar hacia adelante. A través de nuestra Experiencia Estratégica, nos integramos a tu operación para brindarte perspectivas claras y soluciones proactivas. Acompañamos al empresario en cada etapa, asegurando que cada paso financiero sea firme, legal y eficiente.
            </p>

            {/* Logos de clientes */}
            <div className="flex items-center justify-center gap-5">
                <img
                    src={`${process.env.PUBLIC_URL}/images/cliente.png`}
                    alt="Cliente 1"
                    style={{
                        height: '80px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: 0.8,
                    }}
                />
                <img
                    src={`${process.env.PUBLIC_URL}/images/cliente2.png`}
                    alt="Cliente 2"
                    style={{
                        height: '80px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: 0.8,
                    }}
                />
                <img
                    src={`${process.env.PUBLIC_URL}/images/cliente3.png`}
                    alt="Cliente 3"
                    style={{
                        height: '80px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: 0.8,
                    }}
                />
            </div>
        </section>
    );
};

export default SegundaSeccionMobile;
