import React from 'react';
import Navbar from '../components/navbar';
import Card from '../utils/Cards';
import Mosaico from '../utils/Mosaico';
import Footer from '../components/footer';

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
    {
        image: `${process.env.PUBLIC_URL}/images/servicio7.jpg`,
        title: 'Educación',
        description: 'Apoyo contable para instituciones educativas, desde escuelas privadas hasta universidades y centros de capacitación.',
    },
    {
        image: `${process.env.PUBLIC_URL}/images/servicio8.jpg`,
        title: 'Hospitalidad y Turismo',
        description: 'Gestión financiera para hoteles, restaurantes, agencias de viaje y empresas del sector turístico.',
    },
    {
        image: `${process.env.PUBLIC_URL}/images/servicio9.jpg`,
        title: 'Agropecuario',
        description: 'Régimen fiscal especializado, deducciones estratégicas y contabilidad para productores agrícolas y ganaderos.',
    },
];

const Inicio = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* ===== Hero Section ===== */}
            <section className="relative w-full min-h-screen">

                {/* Imagen de fondo */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/background.jpg`}
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Overlay negro 55% */}
                <div className="absolute inset-0 bg-black/55 z-[1]" />

                {/* Contenido de texto */}
                <div className="relative z-[2] flex flex-col items-start justify-center min-h-screen px-20 max-w-[700px]">

                    {/* H & P CONTADORES */}
                    <p
                        className="text-4xl uppercase tracking-[4px] text-left mb-5 text-white/75"
                        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}
                    >
                        H &amp; P CONTADORES
                    </p>

                    {/* Título principal */}
                    <h1
                        className="text-[42px] font-bold uppercase tracking-[2px] leading-[1.3] text-left mb-6 text-white"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        SOLUCIONES CONTABLES PARA TU EMPRESA
                    </h1>

                    {/* Descripción */}
                    <p
                        className="text-xl font-normal text-left leading-[1.7] max-w-[600px] text-white/80"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Servicios fiscales, legales y financieros personalizados para tu crecimiento y éxito.
                    </p>
                </div>
            </section>

            {/* ===== Sección: Nuestros Principios ===== */}
            <section className="bg-white p-20">

                {/* Cabecera */}
                <div className="flex items-start justify-between gap-[60px] mb-14">

                    {/* Izquierda: título + línea azul */}
                    <div className="flex-none">
                        <h2
                            className="font-bold text-[36px] text-[#1A1A2E] leading-tight mb-3"
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                        >
                            Nuestros Principios
                        </h2>
                        <div className="w-12 h-[3px] bg-[#1852AE] rounded" />
                    </div>

                    {/* Derecha: descripción */}
                    <p
                        className="font-normal text-base text-[#6B7280] leading-[1.8] max-w-[480px] pt-1"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Más allá de los números, creemos en una base de confianza. Nuestros principios guían cada auditoría, cada estrategia y cada interacción con nuestros clientes.
                    </p>
                </div>

                {/* Grid de Cards */}
                <div className="grid grid-cols-4 gap-7">
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
            {/* ===== Sección: Sectores ===== */}
            <section className="bg-white px-20 pb-20 pt-16">

                {/* Encabezado */}
                <div className="mb-10">
                    <p
                        className="text-[#1852AE] font-semibold text-sm uppercase tracking-widest mb-3"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Sectores
                    </p>
                    <h2
                        className="font-bold text-[36px] text-[#1A1A2E] leading-tight"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Industrias que Atendemos
                    </h2>
                </div>

                {/* Grid de Mosaico */}
                <Mosaico items={serviciosData} />
            </section>

            {/* ===== CTA Banner ===== */}
            <section
                className="flex flex-col items-center justify-center text-center py-20 px-20"
                style={{ background: '#0A1F44' }}
            >
                <h2
                    className="text-white font-bold text-[38px] leading-tight mb-5 max-w-[700px]"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    ¿Listo para optimizar la contabilidad de tu empresa?
                </h2>
                <p
                    className="text-white/70 text-base leading-relaxed mb-10 max-w-[540px]"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    Contáctanos hoy y descubre cómo nuestros expertos en materia fiscal, legal y financiera pueden impulsar el crecimiento de tu negocio.
                </p>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => window.open('https://wa.me/529991188459', '_blank')}
                        className="px-8 py-3 text-white font-semibold text-sm uppercase tracking-widest transition-opacity duration-200 hover:opacity-85"
                        style={{ background: '#1852AE', fontFamily: "'Roboto', sans-serif" }}
                    >
                        Contactar ahora
                    </button>
                    <button
                        onClick={() => window.location.href = '/servicios'}
                        className="px-8 py-3 text-white font-semibold text-sm uppercase tracking-widest border border-white/50 transition-all duration-200 hover:bg-white hover:text-[#0A1F44]"
                        style={{ fontFamily: "'Roboto', sans-serif", background: 'transparent' }}
                    >
                        Ver Servicios
                    </button>
                </div>
            </section>

            {/* ===== Footer ===== */}
            <Footer />
        </div>
    );
};

export default Inicio;
