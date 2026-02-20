import React from 'react';
import { Link } from 'react-router-dom';

const FooterMobile = () => {
    return (
        <footer className="bg-[#F4F6F9] px-6 pt-10 pb-6">

            {/* Logo + descripción */}
            <div className="flex flex-col gap-3 mb-8">
                <img
                    src={`${process.env.PUBLIC_URL}/images/logo.svg`}
                    alt="H&P Contadores Logo"
                    style={{ height: '40px', objectFit: 'contain', objectPosition: 'left' }}
                />
                <p
                    className="text-[#6B7280] text-sm leading-relaxed"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    Consultoría contable de primer nivel. Precisión fiscal, visión estratégica y cumplimiento legal para empresas en crecimiento.
                </p>
            </div>

            {/* Columnas apiladas */}
            <div className="grid grid-cols-2 gap-8 mb-8">

                {/* Principios */}
                <div>
                    <p className="font-bold text-[#1A1A2E] text-sm mb-3" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        Principios
                    </p>
                    {['Integridad Inquebrantable', 'Visión Estratégica', 'Cumplimiento Fiscal'].map(link => (
                        <p
                            key={link}
                            className="text-[#6B7280] text-xs mb-2.5 hover:text-[#1852AE] cursor-pointer transition-colors duration-200"
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                        >
                            {link}
                        </p>
                    ))}
                </div>

                {/* Servicios */}
                <div>
                    <p className="font-bold text-[#1A1A2E] text-sm mb-3" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        Servicios
                    </p>
                    {['Asesoría Fiscal', 'Contabilidad', 'Auditoría', 'Planeación Financiera', 'Cumplimiento Legal'].map(link => (
                        <Link
                            key={link}
                            to="/servicios"
                            className="block text-[#6B7280] text-xs mb-2.5 hover:text-[#1852AE] transition-colors duration-200"
                            style={{ fontFamily: "'Roboto', sans-serif", textDecoration: 'none' }}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Oficina */}
            <div className="border-t border-[#DDE1E7] pt-6 mb-6">
                <p className="font-bold text-[#1A1A2E] text-sm mb-3" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    Oficina Central
                </p>
                <p className="text-[#6B7280] text-xs leading-relaxed mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    Mérida, Yucatán — México
                </p>
                <p className="text-[#6B7280] text-xs mb-1.5" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    +52 999 118 8459
                </p>
                <p className="text-[#6B7280] text-xs hover:text-[#1852AE] cursor-pointer transition-colors duration-200" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    contacto@hpcontadores.com
                </p>
            </div>

            {/* Barra inferior */}
            <div className="border-t border-[#DDE1E7] pt-5 flex flex-col gap-3 items-center text-center">
                <p className="text-[#9CA3AF] text-[11px]" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    © 2025 H&P Contadores. Todos los derechos reservados.
                </p>
                <div className="flex gap-4">
                    {['Política de Privacidad', 'Términos de Servicio'].map(item => (
                        <p
                            key={item}
                            className="text-[#9CA3AF] text-[11px] hover:text-[#1852AE] cursor-pointer transition-colors duration-200"
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default FooterMobile;
