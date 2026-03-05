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
        const startY = window.scrollY;
        const duration = Math.min(600 + startY * 0.2, 1200); // scale with distance, cap at 1.2s
        const startTime = performance.now();

        const easeInOutCubic = (t) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeInOutCubic(progress);
            window.scrollTo(0, startY * (1 - eased));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
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
