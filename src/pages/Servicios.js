import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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

const ServiceCard = ({ icon, title, description }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex flex-col gap-4 rounded-xl p-8 transition-all duration-300 cursor-default"
            style={{
                border: `1px solid ${hovered ? '#1852AE' : '#E5E8ED'}`,
                backgroundColor: hovered ? '#F0F5FF' : '#FFFFFF',
            }}
        >
            {/* Ícono */}
            <div className="w-13 h-13 flex items-center justify-center rounded-xl"
                style={{ width: '52px', height: '52px', background: '#F4F6F9' }}>
                <img
                    src={icon}
                    alt={title}
                    className="w-6 h-6 object-contain"
                />
            </div>

            {/* Título */}
            <h3
                className="text-[#1A1A2E] font-bold text-lg leading-snug m-0"
                style={{ fontFamily: "'Roboto', sans-serif" }}
            >
                {title}
            </h3>

            {/* Descripción */}
            <p
                className="text-[#6B7280] text-sm leading-relaxed m-0 flex-grow"
                style={{ fontFamily: "'Roboto', sans-serif" }}
            >
                {description}
            </p>

            {/* Enlace LEER MÁS */}
            <div className="flex items-center gap-1.5 mt-1">
                <span
                    onClick={() => window.open('https://wa.me/529991188459', '_blank')}
                    className="text-[#1852AE] font-semibold text-xs uppercase tracking-wide cursor-pointer"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    AGENDAR SERVICIO
                </span>
                <span className="text-[#1852AE] text-sm">→</span>
            </div>
        </div>
    );
};

const Servicios = () => {
    return (
        <div className="bg-white">
            {/* ===== Navbar ===== */}
            <Navbar />

            {/* ===== Hero Section ===== */}
            <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '420px' }}>
                {/* Imagen de fondo */}
                <img
                    src={`${process.env.PUBLIC_URL}/images/background.jpg`}
                    alt="Nuestros Servicios"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Overlay oscuro */}
                <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(10, 20, 50, 0.60)' }} />

                {/* Contenido centrado */}
                <div className="relative z-[2] text-center px-20 pt-28 pb-16 max-w-2xl">
                    <p
                        className="text-white/75 text-xs uppercase tracking-[4px] mb-4"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        EXPERIENCIA Y EXCELENCIA
                    </p>
                    <h1
                        className="text-white font-bold text-[52px] leading-[1.15] mb-5"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Nuestros Servicios
                    </h1>
                    <p
                        className="text-white/80 text-base leading-relaxed"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Ofrecemos soluciones financieras integrales diseñadas para impulsar el crecimiento sostenible de su empresa en un mercado global.
                    </p>
                </div>
            </section>

            {/* ===== Sección: Soluciones Corporativas ===== */}
            <section className="px-20 pt-20 pb-24 bg-white">

                {/* Encabezado centrado */}
                <div className="text-center mb-14">
                    <h2
                        className="font-bold text-[36px] text-[#1A1A2E] inline-block"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Soluciones Corporativas
                    </h2>
                    <div className="w-14 h-[3px] bg-[#1852AE] rounded mx-auto mt-2.5 mb-5" />
                    <p
                        className="text-[#6B7280] text-sm leading-relaxed max-w-lg mx-auto"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Desde auditoría hasta consultoría estratégica, nuestro equipo de expertos está preparado para enfrentar sus desafíos más complejos.
                    </p>
                </div>

                {/* Grid de ServiceCards — 3 columnas */}
                <div className="grid grid-cols-3 gap-6 max-w-[1100px] mx-auto">
                    {serviciosCorpoData.map((item, index) => (
                        <ServiceCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </section>

            {/* ===== Banner de Cita ===== */}
            <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '320px' }}>
                {/* Imagen de fondo */}
                <img
                    src={`${process.env.PUBLIC_URL}/images/servicio2.jpg`}
                    alt="Nuestra filosofía"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Overlay oscuro */}
                <div className="absolute inset-0" style={{ background: 'rgba(10, 20, 50, 0.65)' }} />

                {/* Cita */}
                <div className="relative z-10 text-center px-16 py-14">
                    <p
                        className="text-white font-light italic text-2xl leading-relaxed max-w-3xl mx-auto"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        "La confianza es la moneda de nuestro negocio."
                    </p>
                </div>
            </section>

            {/* ===== CTA Banner ===== */}
            <section
                className="flex flex-col items-center justify-center text-center py-20 px-20"
                style={{ background: '#0A1F44' }}
            >
                <h2
                    className="text-white font-bold text-[38px] leading-tight mb-5 max-w-[680px]"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    ¿Listo para fortalecer su empresa con expertos contables?
                </h2>
                <p
                    className="text-white/70 text-sm leading-relaxed mb-10 max-w-[520px]"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    Contáctenos hoy y descubra cómo nuestros servicios de clase mundial pueden transformar su gestión financiera y fiscal.
                </p>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => window.open('https://wa.me/529991188459', '_blank')}
                        className="px-9 py-3.5 text-white font-semibold text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-85"
                        style={{ background: '#1852AE', fontFamily: "'Roboto', sans-serif" }}
                    >
                        Contactar Ahora
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="px-9 py-3.5 text-white font-semibold text-xs uppercase tracking-widest border border-white/50 transition-all duration-200 hover:bg-white hover:text-[#0A1F44]"
                        style={{ background: 'transparent', fontFamily: "'Roboto', sans-serif" }}
                    >
                        Volver al Inicio
                    </button>
                </div>
            </section>

            {/* ===== Footer ===== */}
            <Footer />
        </div>
    );
};

export default Servicios;
