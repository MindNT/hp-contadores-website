import React from 'react';

const BlueButton = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: '265px',
                height: '48px',
                background: '#003F7B',
                color: 'white',
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

export default BlueButton;
