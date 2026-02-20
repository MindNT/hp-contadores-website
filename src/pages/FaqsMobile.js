import React, { useState } from 'react';
import NavbarMobile from '../components/navbarMobile';
import FooterMobile from '../components/footerMobile';

const faqsData = [
    {
        question: '¿Qué beneficios obtengo al contratar un despacho contable externo en lugar de llevar la contabilidad internamente?',
        answer: 'Descubre cómo puedes optimizar tiempo, reducir errores y cumplir con tus obligaciones fiscales sin complicaciones. Un despacho externo especializado te brinda experiencia actualizada, objetividad y un equipo multidisciplinario que garantiza la precisión en cada proceso contable.',
    },
    {
        question: '¿Cómo puedo saber si estoy aprovechando correctamente todos los beneficios fiscales que la ley permite?',
        answer: 'Te ayudamos a identificar deducciones, estímulos fiscales y esquemas adecuados según tu actividad y régimen fiscal. Realizamos un diagnóstico integral para asegurarnos de que aproveches cada ventaja que la legislación tributaria pone a tu disposición.',
    },
    {
        question: '¿Qué obligaciones fiscales tengo como persona moral y qué pasa si no las cumplo correctamente?',
        answer: 'El cumplimiento adecuado evita multas, recargos y problemas legales. Las personas morales tienen obligaciones como el ISR, IVA, retenciones y declaraciones periódicas; nuestro equipo se encarga de que todo esté en orden y en tiempo.',
    },
    {
        question: '¿Mi empresa necesita un despacho especializado si uso facturación electrónica y programas administrativos?',
        answer: 'La tecnología apoya, pero no reemplaza el análisis contable, la planeación fiscal ni la interpretación correcta de la ley. Un despacho garantiza que las operaciones se clasifiquen, reporten e interpreten correctamente ante el SAT.',
    },
    {
        question: '¿Qué régimen fiscal me conviene más y cómo afecta esto a mi carga tributaria?',
        answer: 'Evaluamos tu modelo de negocio para ayudarte a elegir entre el Régimen General, el Régimen Simplificado de Confianza u otros disponibles conforme al SAT. La elección correcta puede representar un ahorro significativo en tus impuestos.',
    },
];

const FaqItem = ({ question, answer, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-[#E5E8ED]">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left"
            >
                <div className="flex items-start gap-3">
                    <span
                        className="text-[#1852AE] font-bold text-xs mt-0.5 flex-shrink-0"
                        style={{ fontFamily: "'Roboto', sans-serif", minWidth: '20px' }}
                    >
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                        className={`font-semibold text-sm leading-snug transition-colors duration-200 ${open ? 'text-[#1852AE]' : 'text-[#1A1A2E]'}`}
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        {question}
                    </span>
                </div>
                <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: open ? '#1852AE' : '#F4F6F9' }}
                >
                    <span
                        className="text-base font-light leading-none select-none"
                        style={{ color: open ? '#FFFFFF' : '#1852AE', marginTop: '-1px' }}
                    >
                        {open ? '−' : '+'}
                    </span>
                </div>
            </button>
            <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open ? '300px' : '0px', opacity: open ? 1 : 0 }}
            >
                <div className="pl-8 pb-5 pr-2">
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

const FaqsMobile = () => {
    return (
        <div className="bg-white">
            <NavbarMobile />

            {/* Hero */}
            <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '360px' }}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/background.jpg`}
                    alt="FAQs"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(10, 20, 50, 0.62)' }} />
                <div className="relative z-[2] text-center px-6 pt-24 pb-12 max-w-sm">
                    <p
                        className="text-white/75 text-[10px] uppercase tracking-[4px] mb-3"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        RESOLVEMOS TUS DUDAS
                    </p>
                    <h1
                        className="text-white font-bold text-[34px] leading-tight mb-4"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Preguntas Frecuentes
                    </h1>
                    <p
                        className="text-white/80 text-sm leading-relaxed"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Resolvemos las dudas más comunes sobre nuestros servicios contables, fiscales y financieros.
                    </p>
                </div>
            </section>

            {/* Acordeón */}
            <section className="px-6 py-12">
                <div className="text-center mb-10">
                    <h2
                        className="font-bold text-[26px] text-[#1A1A2E]"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Lo que nuestros clientes preguntan
                    </h2>
                    <div className="w-12 h-[3px] bg-[#1852AE] rounded mx-auto mt-3 mb-4" />
                    <p
                        className="text-[#6B7280] text-sm leading-relaxed max-w-xs mx-auto"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Si tienes alguna duda adicional, contáctanos directamente.
                    </p>
                </div>

                <div className="border-t border-[#E5E8ED]">
                    {faqsData.map((faq, index) => (
                        <FaqItem key={index} index={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>

                <div className="mt-10 flex flex-col items-center gap-3">
                    <p className="text-[#6B7280] text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        ¿No encontraste lo que buscabas?
                    </p>
                    <button
                        onClick={() => window.open('https://wa.me/529991188459', '_blank')}
                        className="w-full max-w-xs py-3.5 text-white font-semibold text-xs uppercase tracking-widest"
                        style={{ background: '#1852AE', fontFamily: "'Roboto', sans-serif" }}
                    >
                        Hablar con un Experto
                    </button>
                </div>
            </section>

            {/* Banner cita */}
            <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '220px' }}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/servicio3.jpg`}
                    alt="Filosofía"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(10, 20, 50, 0.65)' }} />
                <div className="relative z-10 text-center px-8 py-10">
                    <p
                        className="text-white font-light italic text-lg leading-relaxed"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        "El conocimiento fiscal es poder; la asesoría correcta, tranquilidad."
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
                    ¿Listo para tener claridad total sobre su situación fiscal?
                </h2>
                <p
                    className="text-white/70 text-sm leading-relaxed mb-8 max-w-xs"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    Nuestros expertos están disponibles para resolver todas sus dudas y diseñar la estrategia ideal.
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
                        onClick={() => window.location.href = '/servicios'}
                        className="w-full py-3.5 text-white font-semibold text-xs uppercase tracking-widest border border-white/50"
                        style={{ background: 'transparent', fontFamily: "'Roboto', sans-serif" }}
                    >
                        Ver Servicios
                    </button>
                </div>
            </section>

            <FooterMobile />
        </div>
    );
};

export default FaqsMobile;
