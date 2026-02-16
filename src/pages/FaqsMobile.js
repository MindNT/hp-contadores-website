import React, { useState } from 'react';
import NavbarMobile from '../components/navbarMobile';

const FaqsMobile = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: '¿Qué beneficios obtengo al contratar un despacho contable externo en lugar de llevar la contabilidad internamente?',
            answer: 'Descubre cómo puedes optimizar tiempo, reducir errores y cumplir con tus obligaciones fiscales sin complicaciones.',
        },
        {
            question: '¿Cómo puedo saber si estoy aprovechando correctamente todos los beneficios fiscales que la ley permite?',
            answer: 'Te ayudamos a identificar deducciones, estímulos fiscales y esquemas adecuados según tu actividad y régimen fiscal.',
        },
        {
            question: '¿Qué obligaciones fiscales tengo como persona moral y qué pasa si no las cumplo correctamente?',
            answer: 'El cumplimiento adecuado evita multas, recargos y problemas legales. Nosotros te ayudamos a cumplir sin sorpresas.',
        },
        {
            question: '¿Mi empresa necesita un contador o un despacho especializado si uso facturación electrónica y programas administrativos?',
            answer: 'La tecnología apoya, pero no reemplaza el análisis contable, la planeación fiscal ni la interpretación correcta de la ley.',
        },
        {
            question: '¿Qué régimen fiscal me conviene más y cómo afecta esto a mi carga tributaria?',
            answer: 'Evaluamos tu modelo de negocio para ayudarte a elegir entre el Régimen General, el Régimen Simplificado de Confianza, u otros disponibles conforme al SAT.',
        },
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* Navbar fijo */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <NavbarMobile />
            </div>

            <section className="relative min-h-screen w-full snap-start overflow-hidden flex flex-col items-center justify-center px-5 py-20">
                {/* Título principal */}
                <h2
                    className="text-[#E8E8E8] mb-3 text-center"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 300,
                        fontSize: '24px',
                        lineHeight: '1.3',
                        letterSpacing: '0.5px',
                        maxWidth: '340px',
                    }}
                >
                    Preguntas Frecuentes
                </h2>

                {/* Subtítulo */}
                <p
                    className="text-[#B8B8B8] mb-8 text-center"
                    style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 300,
                        fontSize: '14px',
                        lineHeight: '1.6',
                        letterSpacing: '0.2px',
                        maxWidth: '340px',
                    }}
                >
                    Resolvemos tus dudas sobre contabilidad y fiscalidad
                </p>

                {/* FAQs Accordion */}
                <div className="w-full max-w-sm space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(8px)',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full text-left px-5 py-4 flex items-start justify-between gap-3"
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                <span
                                    className="text-white"
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '1.4',
                                        letterSpacing: '0.3px',
                                    }}
                                >
                                    {faq.question}
                                </span>
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    style={{
                                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        flexShrink: 0,
                                        marginTop: '2px',
                                    }}
                                >
                                    <path
                                        d="M5 7.5L10 12.5L15 7.5"
                                        stroke="rgba(255, 255, 255, 0.6)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {/* Answer */}
                            <div
                                style={{
                                    maxHeight: openIndex === index ? '300px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                <div
                                    className="px-5 pb-4 text-[#B8B8B8]"
                                    style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 300,
                                        fontSize: '13px',
                                        lineHeight: '1.6',
                                        letterSpacing: '0.2px',
                                    }}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FaqsMobile;
