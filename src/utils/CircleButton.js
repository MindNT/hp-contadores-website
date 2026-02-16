import React from 'react';

const CircleButton = ({ icon, onClick, backgroundColor = '#25D366', size = '48px' }) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: size,
                height: size,
                borderRadius: '50%',
                background: backgroundColor,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
            }}
            aria-label="WhatsApp"
        >
            <img
                src={icon}
                alt="WhatsApp"
                style={{
                    width: '60%',
                    height: '60%',
                    objectFit: 'contain',
                }}
            />
        </button>
    );
};

export default CircleButton;
