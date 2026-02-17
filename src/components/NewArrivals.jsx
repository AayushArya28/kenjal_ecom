import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { newArrivals } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const ArrivalCard = ({ item, style, titleSize = '14px' }) => (
    <div className="arrival-card" style={{
        position: 'relative', backgroundColor: '#000', borderRadius: '8px',
        overflow: 'hidden', cursor: 'pointer', ...style
    }}>
        <img src={item.image} alt={item.name}
            style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', opacity: 0.6, transition: 'opacity 0.3s'
            }}
            onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
        }}></div>
        <div style={{
            position: 'absolute', bottom: '24px', left: '24px', color: '#fff', zIndex: 1
        }}>
            <h3 style={{ fontSize: titleSize, fontWeight: 700, marginBottom: '4px' }}>{item.name}</h3>
            <p style={{ fontSize: '12px', opacity: 0.9 }}>{item.description}</p>
        </div>
    </div>
);

const NewArrivals = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current.querySelectorAll('.arrival-card'), {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
                opacity: 0, y: 80, duration: 1, stagger: 0.2, ease: 'power3.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} style={{ padding: '40px 0', backgroundColor: '#fff', borderTop: '1px solid #f3f4f6' }} id="new">
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                {/* Section label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                    <div style={{ width: '16px', height: '40px', backgroundColor: '#2563eb', borderRadius: '4px' }}></div>
                    <h2 style={{ fontSize: '28px', fontWeight: 700 }}>New Arrival</h2>
                </div>

                {/* Asymmetric Grid */}
                <div className="arrivals-grid" style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', height: '600px'
                }}>
                    {/* Left — Large featured product */}
                    <ArrivalCard item={newArrivals[0]} titleSize="24px" style={{ minHeight: '100%' }} />

                    {/* Right — 3 smaller products */}
                    <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '24px' }}>
                        {/* Top product */}
                        <ArrivalCard item={newArrivals[1]} titleSize="20px" />

                        {/* Bottom two products */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <ArrivalCard item={newArrivals[2]} titleSize="14px" />
                            <ArrivalCard item={newArrivals[3]} titleSize="14px" />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .arrivals-grid {
                        grid-template-columns: 1fr !important;
                        height: auto !important;
                    }
                    .arrivals-grid > div:first-child { min-height: 300px !important; }
                }
            `}</style>
        </section>
    );
};

export default NewArrivals;
