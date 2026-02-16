import React from 'react';

const SegundaSeccionMobile = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center snap-start overflow-hidden px-6">
            {/* Título EXPERIENCIA ESTRATEGICA */}
            <h2
                className="text-[#D9D9D9] mb-8"
                style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    fontSize: '32px',
                    lineHeight: '38px',
                    textAlign: 'center',
                    maxWidth: '340px',
                }}
            >
                EXPERIENCIA ESTRATEGICA
            </h2>

            {/* Descripción */}
            <p
                className="text-white mb-8"
                style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '20px',
                    textAlign: 'center',
                    maxWidth: '340px',
                }}
            >
                La contabilidad moderna no se trata de mirar hacia atrás, sino de proyectar hacia adelante. A través de nuestra Experiencia Estratégica, nos integramos a tu operación para brindarte perspectivas claras y soluciones proactivas. Acompañamos al empresario en cada etapa, asegurando que cada paso financiero sea firme, legal y eficiente.
            </p>

            {/* Logos de clientes */}
            <div className="flex items-center justify-center gap-6">
                <img
                    src="/images/cliente.png"
                    alt="Cliente 1"
                    style={{
                        height: '100px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: 0.9,
                    }}
                />
                <img
                    src="/images/cliente2.png"
                    alt="Cliente 2"
                    style={{
                        height: '100px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: 0.9,
                    }}
                />
                <img
                    src="/images/cliente3.png"
                    alt="Cliente 3"
                    style={{
                        height: '100px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: 0.9,
                    }}
                />
            </div>
        </section>
    );
};

export default SegundaSeccionMobile;
