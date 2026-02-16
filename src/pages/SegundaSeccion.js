import React from 'react';

const SegundaSeccion = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center snap-start overflow-hidden">
            {/* Título EXPERIENCIA ESTRATEGICA */}
            <h2
                className="w-[878px] text-[#D9D9D9] mb-[71px]"
                style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    fontSize: '65px',
                    lineHeight: '76px',
                    textAlign: 'center',
                }}
            >
                EXPERIENCIA ESTRATEGICA
            </h2>

            {/* Descripción */}
            <p
                className="w-[760px] text-white mb-12"
                style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '28px',
                    textAlign: 'center',
                }}
            >
                La contabilidad moderna no se trata de mirar hacia atrás, sino de proyectar hacia adelante. A través de nuestra Experiencia Estratégica, nos integramos a tu operación para brindarte perspectivas claras y soluciones proactivas. Acompañamos al empresario en cada etapa, asegurando que cada paso financiero sea firme, legal y eficiente.
            </p>

            {/* Logos de clientes */}
            <div className="flex items-center justify-center gap-12">
                <img
                    src="/images/cliente.png"
                    alt="Cliente 1"
                    style={{
                        height: '150px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: 0.9,
                    }}
                />
                <img
                    src="/images/cliente2.png"
                    alt="Cliente 2"
                    style={{
                        height: '150px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: 0.9,
                    }}
                />
                <img
                    src="/images/cliente3.png"
                    alt="Cliente 3"
                    style={{
                        height: '150px',
                        width: 'auto',
                        objectFit: 'contain',
                        opacity: 0.9,
                    }}
                />
            </div>
        </section>
    );
};

export default SegundaSeccion;
