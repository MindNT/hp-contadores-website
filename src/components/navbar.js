import React from 'react';
import { Link } from 'react-router-dom';
import BlueButton from '../utils/BlueButton';

const Navbar = () => {
    const navItems = [
        { name: 'Principios', href: '/principios', isRoute: true },
        { name: 'FAQs', href: '/faqs', isRoute: true },
        { name: 'Miembros', href: '/miembros', isRoute: true },
        { name: 'Servicios', href: '/servicios', isRoute: true },
    ];

    return (
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 60px',
            background: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
        }}>
            {/* Logo a la izquierda */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/logo.svg`}
                    alt="HP Contadores Logo"
                    style={{ height: '60px' }}
                />
            </Link>

            {/* Opciones de navegación y botón a la derecha */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px'
            }}>
                {/* Links de navegación */}
                {navItems.map((item, index) => (
                    item.isRoute ? (
                        <Link
                            key={index}
                            to={item.href}
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '400',
                                transition: 'opacity 0.3s',
                            }}
                            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                            onMouseLeave={(e) => e.target.style.opacity = '1'}
                        >
                            {item.name}
                        </Link>
                    ) : (
                        <a
                            key={index}
                            href={item.href}
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '400',
                                transition: 'opacity 0.3s',
                            }}
                            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                            onMouseLeave={(e) => e.target.style.opacity = '1'}
                        >
                            {item.name}
                        </a>
                    )
                ))}

                {/* Botón Agendar cita */}
                <BlueButton
                    text="Agendar cita"
                    onClick={() => window.open('https://wa.me/5299911884459', '_blank')}
                />
            </div>
        </nav>
    );
};

export default Navbar;
