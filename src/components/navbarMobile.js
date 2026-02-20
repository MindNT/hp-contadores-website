import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarMobile = () => {
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: 'Inicio', href: '/' },
        { name: 'Servicios', href: '/servicios' },
        { name: 'FAQs', href: '/faqs' },
    ];

    return (
        <>
            {/* Barra superior */}
            <nav
                className="flex items-center justify-between px-5 py-4 absolute top-0 left-0 right-0 z-[1000]"
                style={{ background: 'transparent' }}
            >
                {/* Logo */}
                <Link to="/" onClick={() => setOpen(false)}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/logo.svg`}
                        alt="HP Contadores Logo"
                        style={{ height: '44px' }}
                    />
                </Link>

                {/* Botón hamburguesa */}
                <button
                    onClick={() => setOpen(!open)}
                    className="flex flex-col justify-center items-center gap-[5px] w-9 h-9 focus:outline-none"
                    aria-label="Abrir menú"
                >
                    <span
                        className="block h-[2px] w-6 bg-white rounded transition-all duration-300"
                        style={{
                            transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
                        }}
                    />
                    <span
                        className="block h-[2px] w-6 bg-white rounded transition-all duration-300"
                        style={{ opacity: open ? 0 : 1 }}
                    />
                    <span
                        className="block h-[2px] w-6 bg-white rounded transition-all duration-300"
                        style={{
                            transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
                        }}
                    />
                </button>
            </nav>

            {/* Overlay + Menú deslizable */}
            {open && (
                <div
                    className="fixed inset-0 z-[999]"
                    onClick={() => setOpen(false)}
                    style={{ background: 'rgba(0,0,0,0.45)' }}
                />
            )}

            <div
                className="fixed top-0 right-0 h-full z-[1000] flex flex-col transition-transform duration-300"
                style={{
                    width: '260px',
                    background: '#0A1F44',
                    transform: open ? 'translateX(0)' : 'translateX(100%)',
                    boxShadow: '-4px 0 24px rgba(0,0,0,0.25)',
                }}
            >
                {/* Cabecera del drawer */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/logo.svg`}
                        alt="HP Contadores"
                        style={{ height: '36px' }}
                    />
                    <button
                        onClick={() => setOpen(false)}
                        className="text-white/70 hover:text-white text-2xl leading-none focus:outline-none"
                    >
                        ✕
                    </button>
                </div>

                {/* Links de navegación */}
                <nav className="flex flex-col px-6 pt-8 gap-2 flex-grow">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setOpen(false)}
                            className="text-white/85 hover:text-white text-base font-medium py-3 border-b border-white/10 transition-colors duration-200"
                            style={{ fontFamily: "'Roboto', sans-serif", textDecoration: 'none' }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Botón Contactar */}
                <div className="px-6 pb-10">
                    <button
                        onClick={() => {
                            setOpen(false);
                            window.open('https://wa.me/529991188459', '_blank');
                        }}
                        className="w-full py-3 text-white font-semibold text-sm uppercase tracking-widest transition-opacity duration-200 hover:opacity-85"
                        style={{ background: '#1852AE', fontFamily: "'Roboto', sans-serif" }}
                    >
                        Contactar
                    </button>
                </div>
            </div>
        </>
    );
};

export default NavbarMobile;
