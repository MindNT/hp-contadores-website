import React from 'react';

const Card = ({ icon, title, description }) => {
    return (
        <div style={{
            background: '#F4F6F9',
            borderRadius: '16px',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '360px',
            width: '100%',
        }}>
            {/* Icono en cuadro blanco */}
            <div style={{
                width: '64px',
                height: '64px',
                background: '#FFFFFF',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.06)',
            }}>
                <img
                    src={icon}
                    alt={title}
                    style={{
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain',
                    }}
                />
            </div>

            {/* Título */}
            <h3 style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
                fontSize: '20px',
                color: '#1A1A2E',
                margin: 0,
                lineHeight: '1.3',
            }}>
                {title}
            </h3>

            {/* Descripción */}
            <p style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: '15px',
                color: '#6B7280',
                margin: 0,
                lineHeight: '1.7',
            }}>
                {description}
            </p>
        </div>
    );
};

export default Card;
