import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CircleButton from '../utils/CircleButton';

const NavbarMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Principios', href: '/principios', isRoute: true },
        { name: 'Miembros', href: '#miembros', isRoute: false },
        { name: 'Servicios', href: '#servicios', isRoute: false },
        { name: 'Dudas', href: '#dudas', isRoute: false },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Navbar fijo */}
            <nav style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'rgba(10, 34, 72, 0.95)',
                backdropFilter: 'blur(10px)',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            }}>
                {/* Logo a la izquierda */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/logo.svg`}
                        alt="HP Contadores Logo"
                        style={{ height: '40px' }}
                    />
                </Link>

                {/* Contenedor derecho: WhatsApp + Hamburger */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Botón circular de WhatsApp */}
                    <CircleButton
                        icon={`${process.env.PUBLIC_URL}/images/whatsaap-icon.svg`}
                        size="40px"
                        onClick={() => {
                            window.open('https://wa.me/5299911884459', '_blank');
                        }}
                    />

                    {/* Botón hamburguesa */}
                    <button
                        onClick={toggleMenu}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                        }}
                        aria-label="Menu"
                    >
                        <div style={{
                            width: '24px',
                            height: '2px',
                            background: 'white',
                            transition: 'all 0.3s',
                            transform: isMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
                        }} />
                        <div style={{
                            width: '24px',
                            height: '2px',
                            background: 'white',
                            transition: 'all 0.3s',
                            opacity: isMenuOpen ? 0 : 1,
                        }} />
                        <div style={{
                            width: '24px',
                            height: '2px',
                            background: 'white',
                            transition: 'all 0.3s',
                            transform: isMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
                        }} />
                    </button>
                </div>
            </nav>

            {/* Menú desplegable */}
            <div style={{
                position: 'fixed',
                top: '72px',
                left: 0,
                right: 0,
                background: 'rgba(10, 34, 72, 0.98)',
                backdropFilter: 'blur(10px)',
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease-in-out',
                zIndex: 999,
                padding: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                visibility: isMenuOpen ? 'visible' : 'hidden',
                opacity: isMenuOpen ? 1 : 0,
            }}>
                {/* Navigation Items */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}>
                    {navItems.map((item, index) => (
                        item.isRoute ? (
                            <Link
                                key={index}
                                to={item.href}
                                onClick={closeMenu}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                    fontWeight: '400',
                                    padding: '12px 0',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
                                onClick={closeMenu}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                    fontWeight: '400',
                                    padding: '12px 0',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                    transition: 'opacity 0.3s',
                                }}
                                onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                                onMouseLeave={(e) => e.target.style.opacity = '1'}
                            >
                                {item.name}
                            </a>
                        )
                    ))}
                </div>
            </div>
        </>
    );
};

export default NavbarMobile;
