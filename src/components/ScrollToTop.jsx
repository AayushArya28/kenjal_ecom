import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!showScrollTop) return null;

    return (
        <button onClick={scrollToTop} style={{
            position: 'fixed', bottom: '32px', right: '32px', width: '48px', height: '48px',
            backgroundColor: '#2563eb', color: '#fff', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(37,99,235,0.4)', border: 'none', cursor: 'pointer',
            zIndex: 50, transition: 'all 0.2s'
        }}>
            <ArrowUp style={{ width: '24px', height: '24px' }} />
        </button>
    );
};

export default ScrollToTop;
