import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Hace scroll al top cada vez que cambia de ruta
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
