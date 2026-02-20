import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#F4F6F9] px-20 pt-14 pb-8">
            {/* Columnas */}
            <div className="grid grid-cols-4 gap-10 mb-12">

                {/* Col 1: Logo + descripción */}
                <div className="flex flex-col gap-4">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/logo.svg`}
                        alt="H&P Contadores Logo"
                        style={{ height: '48px', objectFit: 'contain', objectPosition: 'left' }}
                    />
                    <p
                        className="text-[#6B7280] text-sm leading-relaxed"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        Consultoría contable de primer nivel. Precisión fiscal, visión estratégica y cumplimiento legal para empresas en crecimiento.
                    </p>
                </div>

                {/* Col 2: Principios */}
                <div>
                    <p className="font-bold text-[#1A1A2E] text-base mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        Principios
                    </p>
                    {['Integridad Inquebrantable', 'Visión Estratégica', 'Cumplimiento Fiscal'].map(link => (
                        <p key={link} className="text-[#6B7280] text-sm mb-3 hover:text-[#1852AE] cursor-pointer transition-colors duration-200" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            {link}
                        </p>
                    ))}
                </div>

                {/* Col 3: Servicios */}
                <div>
                    <p className="font-bold text-[#1A1A2E] text-base mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        Servicios
                    </p>
                    {['Asesoría Fiscal', 'Contabilidad Empresarial', 'Auditoría', 'Planeación Financiera', 'Cumplimiento Legal'].map(link => (
                        <Link
                            key={link}
                            to="/servicios"
                            className="block text-[#6B7280] text-sm mb-3 hover:text-[#1852AE] transition-colors duration-200"
                            style={{ fontFamily: "'Roboto', sans-serif", textDecoration: 'none' }}
                        >
                            {link}
                        </Link>
                    ))}
                </div>

                {/* Col 4: Oficina */}
                <div>
                    <p className="font-bold text-[#1A1A2E] text-base mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        Oficina Central
                    </p>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        Mérida, Yucatán<br />México
                    </p>
                    <p className="text-[#6B7280] text-sm mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        +52 999 118 8459
                    </p>
                    <p className="text-[#6B7280] text-sm hover:text-[#1852AE] cursor-pointer transition-colors duration-200" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        contacto@hpcontadores.com
                    </p>
                </div>
            </div>

            {/* Barra inferior */}
            <div className="border-t border-[#DDE1E7] pt-6 flex items-center justify-between">
                <p className="text-[#9CA3AF] text-xs" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    © 2025 H&P Contadores. Todos los derechos reservados.
                </p>
                <div className="flex gap-6">
                    {['Política de Privacidad', 'Términos de Servicio'].map(item => (
                        <p key={item} className="text-[#9CA3AF] text-xs hover:text-[#1852AE] cursor-pointer transition-colors duration-200" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
