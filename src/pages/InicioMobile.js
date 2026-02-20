import React from 'react';
import NavbarMobile from '../components/navbarMobile';
import FooterMobile from '../components/footerMobile';
import Card from '../utils/Cards';

const serviciosData = [
    {
        image: `${process.env.PUBLIC_URL}/images/servicio1.jpg`,
        title: 'Tecnología',
        description: 'Asesoría contable y fiscal especializada para empresas del sector tech, startups y desarrollo de software.',
    },
    {
        image: `${process.env.PUBLIC_URL}/images/servicio2.jpg`,
        title: 'Salud y Farmacéutica',
        description: 'Cumplimiento normativo, gestión de nómina y optimización fiscal para clínicas, laboratorios y farmacias.',
    },
    {
        image: `${process.env.PUBLIC_URL}/images/servicio3.jpg`,
        title: 'Bienes Raíces',
        description: 'Estructuración fiscal de operaciones inmobiliarias, compraventa, arrendamiento y fideicomisos.',
    },
    {
        image: `${process.env.PUBLIC_URL}/images/servicio4.jpg`,
        title: 'Manufactura',
        description: 'Contabilidad de costos, inventarios y planeación tributaria para empresas industriales y maquiladoras.',
    },
    {
        image: `${process.env.PUBLIC_URL}/images/servicio5.jpg`,
        title: 'Servicios Financieros',
        description: 'Asesoría especializada para intermediarios financieros, casas de bolsa e instituciones de crédito.',
    },
    {
        image: `${process.env.PUBLIC_URL}/images/servicio6.jpg`,
        title: 'Comercio Internacional',
        description: 'Cumplimiento aduanero, transfer pricing y estrategias fiscales para operaciones de importación y exportación.',
    },
];

const SectorCard = ({ image, title }) => (
    <div className="relative overflow-hidden rounded-lg" style={{ height: '160px' }}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 p-3">
            <p
                className="text-white font-semibold text-sm leading-snug"
                style={{ fontFamily: "'Roboto', sans-serif" }}
            >
                {title}
            </p>
        </div>
    </div>
);

const InicioMobile = () => {
    return (
        <div className="bg-white">
            {/* ===== Navbar Mobile ===== */}
            <NavbarMobile />

            {/* ===== Hero Section ===== */}
            <section className="relative w-full" style={{ minHeight: '100svh' }}>
                {/* Imagen de fondo */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/background.jpg`}
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55 z-[1]" />

                {/* Contenido */}
                <div className="relative z-[2] flex flex-col justify-center min-h-[100svh] px-6 pt-24 pb-12 max-w-sm">
                    <p
                        className="text-base uppercase tracking-[3px] text-white/75 mb-4"
                        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}
                    >
                        H & P CONTADORES
                    </p>
                    <h1
                        className="text-3xl font-bold uppercase tracking-wide leading-tight text-white mb-5"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        SOLUCIONES CONTABLES PARA TU EMPRESA
                    </h1>
                    <p
                        className="text-base font-normal leading-relaxed text-white/80 mb-8"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Servicios fiscales, legales y financieros personalizados para tu crecimiento y éxito.
                    </p>
                    <button
                        onClick={() => window.open('https://wa.me/529991188459', '_blank')}
                        className="self-start px-7 py-3 text-white font-semibold text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-85"
                        style={{ background: '#1852AE', fontFamily: "'Roboto', sans-serif" }}
                    >
                        Contáctanos
                    </button>
                </div>
            </section>

            {/* ===== Nuestros Principios ===== */}
            <section className="bg-white px-6 py-14">
                {/* Encabezado */}
                <div className="mb-10">
                    <h2
                        className="font-bold text-[28px] text-[#1A1A2E] leading-tight mb-3"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Nuestros Principios
                    </h2>
                    <div className="w-10 h-[3px] bg-[#1852AE] rounded mb-4" />
                    <p
                        className="text-sm text-[#6B7280] leading-relaxed"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Más allá de los números, creemos en una base de confianza. Nuestros principios guían cada auditoría, cada estrategia y cada interacción con nuestros clientes.
                    </p>
                </div>

                {/* Cards en columna */}
                <div className="flex flex-col gap-5">
                    <Card
                        icon={`${process.env.PUBLIC_URL}/assets/integridad.svg`}
                        title="Integridad Inquebrantable"
                        description="Sostenemos los más altos estándares éticos en cada servicio. La transparencia no es solo una política; es el pilar de nuestra relación con cada cliente."
                    />
                    <Card
                        icon={`${process.env.PUBLIC_URL}/assets/vision.svg`}
                        title="Visión Estratégica"
                        description="Planificación financiera proactiva que anticipa los cambios del mercado. No solo reportamos el pasado; te ayudamos a construir el futuro de tu empresa."
                    />
                    <Card
                        icon={`${process.env.PUBLIC_URL}/assets/cumplimiento.svg`}
                        title="Cumplimiento Fiscal"
                        description="Navegamos la complejidad de las regulaciones tributarias con precisión y experiencia, garantizando que tu empresa opere siempre dentro del marco legal."
                    />
                    <Card
                        icon={`${process.env.PUBLIC_URL}/assets/confidencialidad.svg`}
                        title="Confidencialidad Absoluta"
                        description="La información de nuestros clientes es sagrada. Aplicamos los más estrictos protocolos de seguridad y discreción en cada proceso que manejamos."
                    />
                </div>
            </section>

            {/* ===== Sectores ===== */}
            <section className="bg-white px-6 pb-14">
                <div className="mb-8">
                    <p
                        className="text-[#1852AE] font-semibold text-xs uppercase tracking-widest mb-2"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Sectores
                    </p>
                    <h2
                        className="font-bold text-[28px] text-[#1A1A2E] leading-tight"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Industrias que Atendemos
                    </h2>
                </div>

                {/* Grid 2 columnas */}
                <div className="grid grid-cols-2 gap-3">
                    {serviciosData.map((item, index) => (
                        <SectorCard key={index} image={item.image} title={item.title} />
                    ))}
                </div>
            </section>

            {/* ===== CTA Banner ===== */}
            <section
                className="flex flex-col items-center text-center px-6 py-14"
                style={{ background: '#0A1F44' }}
            >
                <h2
                    className="text-white font-bold text-[28px] leading-snug mb-4 max-w-xs"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    ¿Listo para optimizar la contabilidad de tu empresa?
                </h2>
                <p
                    className="text-white/70 text-sm leading-relaxed mb-8 max-w-xs"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    Contáctanos hoy y descubre cómo nuestros expertos pueden impulsar el crecimiento de tu negocio.
                </p>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                    <button
                        onClick={() => window.open('https://wa.me/529991188459', '_blank')}
                        className="w-full py-3.5 text-white font-semibold text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-85"
                        style={{ background: '#1852AE', fontFamily: "'Roboto', sans-serif" }}
                    >
                        Contactar ahora
                    </button>
                    <button
                        onClick={() => window.location.href = '/servicios'}
                        className="w-full py-3.5 text-white font-semibold text-xs uppercase tracking-widest border border-white/50 transition-all duration-200"
                        style={{ background: 'transparent', fontFamily: "'Roboto', sans-serif" }}
                    >
                        Ver Servicios
                    </button>
                </div>
            </section>

            {/* ===== Footer Mobile ===== */}
            <FooterMobile />
        </div>
    );
};

export default InicioMobile;
