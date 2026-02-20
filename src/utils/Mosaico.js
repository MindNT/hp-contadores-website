import React from 'react';

/**
 * Mosaico: Grid de tarjetas 3xN con overlay suave al hover
 *
 * Props:
 *   items: [{ image: string, title: string, description: string }]
 */

const FlipCard = ({ image, title, description }) => {
    return (
        <div
            className="relative overflow-hidden group"
            style={{ height: '260px' }}
        >
            {/* Imagen */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay negro: 30% base → 55% en hover */}
            <div
                className="absolute inset-0 bg-black/30 group-hover:bg-black/55 transition-all duration-400"
            />

            {/* Título (siempre visible abajo) */}
            <div className="absolute bottom-0 left-0 p-5 transition-all duration-400 group-hover:opacity-0 group-hover:translate-y-1">
                <p
                    className="text-white font-semibold text-lg leading-snug"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    {title}
                </p>
            </div>

            {/* Descripción: aparece al hover centrada */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-75">
                <p
                    className="text-white font-bold text-base mb-2"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    {title}
                </p>
                <div className="w-8 h-[2px] bg-white/50 rounded mb-3" />
                <p
                    className="text-white/90 text-sm leading-relaxed"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

const Mosaico = ({ items = [] }) => {
    return (
        <div
            className="grid grid-cols-3"
            style={{ gap: '2px' }}
        >
            {items.map((item, index) => (
                <FlipCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
};

export default Mosaico;
