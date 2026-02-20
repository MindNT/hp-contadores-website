import React, { useState } from 'react';
import NavbarMobile from '../components/navbarMobile';
import FooterMobile from '../components/footerMobile';

const serviciosCorpoData = [
    {
        icon: `${process.env.PUBLIC_URL}/assets/auditoria.svg`,
        title: 'Auditoría y Aseguramiento',
        description: 'Brindamos confianza a los accionistas mediante auditorías rigurosas y transparentes, asegurando el cumplimiento normativo.',
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/fiscal.svg`,
        title: 'Asesoría Fiscal',
        description: 'Estrategias fiscales optimizadas para minimizar riesgos y maximizar la eficiencia financiera de su organización.',
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/negocios.svg`,
        title: 'Consultoría de Negocios',
        description: 'Transformamos su modelo operativo para impulsar la innovación, reducir costos y mejorar el rendimiento global.',
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/riesgos.svg`,
        title: 'Gestión de Riesgos',
        description: 'Identificación y mitigación proactiva de riesgos operativos, financieros y tecnológicos para proteger su patrimonio.',
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/fusiones.svg`,
        title: 'Fusiones y Adquisiciones',
        description: 'Asesoramiento experto en transacciones complejas, desde la due diligence hasta la integración post-fusión.',
    },
    {
        icon: `${process.env.PUBLIC_URL}/assets/outsourcing.svg`,
        title: 'Outsourcing Financiero',
        description: 'Delegue sus procesos contables y administrativos en manos expertas para enfocarse en el núcleo de su negocio.',
    },
];

const ServiceCardMobile = ({ icon, title, description }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex flex-col gap-3 rounded-xl p-5 transition-all duration-300"
            style={{
                border: `1px solid ${hovered ? '#1852AE' : '#E5E8ED'}`,
                backgroundColor: hovered ? '#F0F5FF' : '#FFFFFF',
            }}
        >
            <div
                className="flex items-center justify-center rounded-lg"
                style={{ width: '44px', height: '44px', background: '#F4F6F9' }}
            >
                <img src={icon} alt={title} className="w-5 h-5 object-contain" />
            </div>
            <h3
                className="text-[#1A1A2E] font-bold text-base leading-snug m-0"
                style={{ fontFamily: "'Roboto', sans-serif" }}
            >
                {title}
            </h3>
            <p
                className="text-[#6B7280] text-xs leading-relaxed m-0"
                style={{ fontFamily: "'Roboto', sans-serif" }}
            >
                {description}
            </p>
            <div className="flex items-center gap-1 mt-1">
                <span
                    onClick={() => window.open('https://wa.me/529991188459', '_blank')}
                    className="text-[#1852AE] font-semibold text-[11px] uppercase tracking-wide cursor-pointer"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    AGENDAR SERVICIO
                </span>
                <span className="text-[#1852AE] text-xs">→</span>
            </div>
        </div>
    );
};

const ServiciosMobile = () => {
    return (
        <div className="bg-white">
            <NavbarMobile />

            {/* Hero */}
            <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '360px' }}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/background.jpg`}
                    alt="Nuestros Servicios"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(10, 20, 50, 0.60)' }} />
                <div className="relative z-[2] text-center px-6 pt-24 pb-12 max-w-sm">
                    <p
                        className="text-white/75 text-[10px] uppercase tracking-[4px] mb-3"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        EXPERIENCIA Y EXCELENCIA
                    </p>
                    <h1
                        className="text-white font-bold text-[34px] leading-tight mb-4"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Nuestros Servicios
                    </h1>
                    <p
                        className="text-white/80 text-sm leading-relaxed"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Soluciones financieras integrales para impulsar el crecimiento sostenible de su empresa.
                    </p>
                </div>
            </section>

            {/* Soluciones Corporativas */}
            <section className="px-6 py-12">
                <div className="text-center mb-10">
                    <h2
                        className="font-bold text-[26px] text-[#1A1A2E]"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Soluciones Corporativas
                    </h2>
                    <div className="w-12 h-[3px] bg-[#1852AE] rounded mx-auto mt-3 mb-4" />
                    <p
                        className="text-[#6B7280] text-sm leading-relaxed max-w-xs mx-auto"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Desde auditoría hasta consultoría estratégica, enfrentamos sus desafíos más complejos.
                    </p>
                </div>

                {/* Cards en columna única */}
                <div className="flex flex-col gap-4">
                    {serviciosCorpoData.map((item, index) => (
                        <ServiceCardMobile
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>

            {/* Banner cita */}
            <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '220px' }}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/servicio2.jpg`}
                    alt="Filosofía"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(10, 20, 50, 0.65)' }} />
                <div className="relative z-10 text-center px-8 py-10">
                    <p
                        className="text-white font-light italic text-lg leading-relaxed"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        "La confianza es la moneda de nuestro negocio."
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section
                className="flex flex-col items-center text-center px-6 py-14"
                style={{ background: '#0A1F44' }}
            >
                <h2
                    className="text-white font-bold text-[26px] leading-snug mb-4 max-w-xs"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    ¿Listo para fortalecer su empresa con expertos contables?
                </h2>
                <p
                    className="text-white/70 text-sm leading-relaxed mb-8 max-w-xs"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    Contáctenos hoy y descubra cómo nuestros servicios pueden transformar su gestión financiera.
                </p>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                    <button
                        onClick={() => window.open('https://wa.me/529991188459', '_blank')}
                        className="w-full py-3.5 text-white font-semibold text-xs uppercase tracking-widest"
                        style={{ background: '#1852AE', fontFamily: "'Roboto', sans-serif" }}
                    >
                        Contactar Ahora
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full py-3.5 text-white font-semibold text-xs uppercase tracking-widest border border-white/50"
                        style={{ background: 'transparent', fontFamily: "'Roboto', sans-serif" }}
                    >
                        Volver al Inicio
                    </button>
                </div>
            </section>

            <FooterMobile />
        </div>
    );
};

export default ServiciosMobile;
