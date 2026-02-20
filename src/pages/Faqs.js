import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const faqsData = [
    {
        question: '¿Qué beneficios obtengo al contratar un despacho contable externo en lugar de llevar la contabilidad internamente?',
        answer: 'Descubre cómo puedes optimizar tiempo, reducir errores y cumplir con tus obligaciones fiscales sin complicaciones. Un despacho externo especializado te brinda experiencia actualizada, objetividad y acceso a un equipo multidisciplinario que garantiza la precisión en cada proceso contable.',
    },
    {
        question: '¿Cómo puedo saber si estoy aprovechando correctamente todos los beneficios fiscales que la ley permite?',
        answer: 'Te ayudamos a identificar deducciones, estímulos fiscales y esquemas adecuados según tu actividad y régimen fiscal. Realizamos un diagnóstico integral de tu situación para asegurarnos de que aproveches cada ventaja que la legislación tributaria pone a tu disposición.',
    },
    {
        question: '¿Qué obligaciones fiscales tengo como persona moral y qué pasa si no las cumplo correctamente?',
        answer: 'El cumplimiento adecuado evita multas, recargos y problemas legales. Nosotros te ayudamos a cumplir sin sorpresas. Las personas morales tienen obligaciones como el ISR, IVA, retenciones y presentación de declaraciones periódicas; nuestro equipo se encarga de que todo esté en orden y en tiempo.',
    },
    {
        question: '¿Mi empresa necesita un contador o un despacho especializado si uso facturación electrónica y programas administrativos?',
        answer: 'La tecnología apoya, pero no reemplaza el análisis contable, la planeación fiscal ni la interpretación correcta de la ley. Los sistemas administrativos registran operaciones, pero un despacho especializado garantiza que esas operaciones se clasifiquen, reporten e interpreten correctamente ante el SAT.',
    },
    {
        question: '¿Qué régimen fiscal me conviene más y cómo afecta esto a mi carga tributaria?',
        answer: 'Evaluamos tu modelo de negocio para ayudarte a elegir entre el Régimen General, el Régimen Simplificado de Confianza u otros disponibles conforme al SAT. La elección correcta puede representar un ahorro significativo en tus impuestos y una mayor seguridad jurídica para tu empresa.',
    },
];

const FaqItem = ({ question, answer, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="border-b border-[#E5E8ED] transition-all duration-300"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-6 py-7 text-left group"
            >
                {/* Número + Pregunta */}
                <div className="flex items-start gap-5">
                    <span
                        className="text-[#1852AE] font-bold text-sm mt-0.5 flex-shrink-0"
                        style={{ fontFamily: "'Roboto', sans-serif", minWidth: '24px' }}
                    >
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                        className={`font-semibold text-base leading-snug transition-colors duration-200 ${open ? 'text-[#1852AE]' : 'text-[#1A1A2E] group-hover:text-[#1852AE]'}`}
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        {question}
                    </span>
                </div>

                {/* Ícono +/- */}
                <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                        background: open ? '#1852AE' : '#F4F6F9',
                    }}
                >
                    <span
                        className="text-xl font-light leading-none select-none"
                        style={{ color: open ? '#FFFFFF' : '#1852AE', marginTop: '-2px' }}
                    >
                        {open ? '−' : '+'}
                    </span>
                </div>
            </button>

            {/* Respuesta con animación */}
            <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open ? '300px' : '0px', opacity: open ? 1 : 0 }}
            >
                <div className="pl-11 pb-7 pr-14">
                    <p
                        className="text-[#6B7280] text-sm leading-relaxed"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Faqs = () => {
    return (
        <div className="bg-white">
            {/* ===== Navbar ===== */}
            <Navbar />

            {/* ===== Hero Section ===== */}
            <section
                className="relative flex items-center justify-center overflow-hidden"
                style={{ minHeight: '420px' }}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/images/background.jpg`}
                    alt="Preguntas Frecuentes"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div
                    className="absolute inset-0 z-[1]"
                    style={{ background: 'rgba(10, 20, 50, 0.62)' }}
                />
                <div className="relative z-[2] text-center px-20 pt-28 pb-16 max-w-2xl">
                    <p
                        className="text-white/75 text-xs uppercase tracking-[4px] mb-4"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        RESOLVEMOS TUS DUDAS
                    </p>
                    <h1
                        className="text-white font-bold text-[52px] leading-[1.15] mb-5"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Preguntas Frecuentes
                    </h1>
                    <p
                        className="text-white/80 text-base leading-relaxed"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Resolvemos las preguntas más comunes sobre nuestros servicios contables, fiscales y financieros para que tomes decisiones con confianza.
                    </p>
                </div>
            </section>

            {/* ===== Sección: FAQs Acordeón ===== */}
            <section className="px-20 py-24 bg-white">
                <div className="max-w-[820px] mx-auto">

                    {/* Encabezado */}
                    <div className="mb-14 text-center">
                        <h2
                            className="font-bold text-[36px] text-[#1A1A2E]"
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                        >
                            Lo que nuestros clientes preguntan
                        </h2>
                        <div className="w-14 h-[3px] bg-[#1852AE] rounded mx-auto mt-3 mb-5" />
                        <p
                            className="text-[#6B7280] text-sm leading-relaxed max-w-lg mx-auto"
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                        >
                            Si tienes alguna duda adicional, no dudes en contactarnos directamente. Estamos listos para ayudarte.
                        </p>
                    </div>

                    {/* Lista de preguntas */}
                    <div className="border-t border-[#E5E8ED]">
                        {faqsData.map((faq, index) => (
                            <FaqItem
                                key={index}
                                index={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>

                    {/* CTA debajo del acordeón */}
                    <div className="mt-16 flex flex-col items-center text-center gap-4">
                        <p
                            className="text-[#6B7280] text-sm"
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                        >
                            ¿No encontraste lo que buscabas?
                        </p>
                        <button
                            onClick={() => window.open('https://wa.me/529991188459', '_blank')}
                            className="px-9 py-3.5 text-white font-semibold text-xs uppercase tracking-widest transition-opacity duration-200 hover:opacity-85"
                            style={{ background: '#1852AE', fontFamily: "'Roboto', sans-serif" }}
                        >
                            Hablar con un Experto
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== Banner de Cita ===== */}
            <section
                className="relative flex items-center justify-center overflow-hidden"
                style={{ minHeight: '280px' }}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/images/servicio3.jpg`}
                    alt="Nuestra filosofía"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div
                    className="absolute inset-0"
                    style={{ background: 'rgba(10, 20, 50, 0.65)' }}
                />
                <div className="relative z-10 text-center px-16 py-14">
                    <p
                        className="text-white font-light italic text-2xl leading-relaxed max-w-3xl mx-auto"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        "El conocimiento fiscal es poder; la asesoría correcta, tranquilidad."
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
                    ¿Listo para tener claridad total sobre su situación fiscal?
                </h2>
                <p
                    className="text-white/70 text-sm leading-relaxed mb-10 max-w-[520px]"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    Nuestros expertos están disponibles para resolver todas sus dudas y diseñar la estrategia contable ideal para su empresa.
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
                        onClick={() => window.location.href = '/servicios'}
                        className="px-9 py-3.5 text-white font-semibold text-xs uppercase tracking-widest border border-white/50 transition-all duration-200 hover:bg-white hover:text-[#0A1F44]"
                        style={{ background: 'transparent', fontFamily: "'Roboto', sans-serif" }}
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

export default Faqs;
