import React from 'react';

const WhiteButton = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: '265px',
                height: '48px',
                background: '#FFFFFF',
                color: '#003F7B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
            }}
        >
            {text}
        </button>
    );
};

export default WhiteButton;
