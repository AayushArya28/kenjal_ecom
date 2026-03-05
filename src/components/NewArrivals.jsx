import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight } from 'lucide-react';
import { newArrivals } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const ArrivalCard = ({ item, style, titleSize = '14px', featured = false }) => (
    <div className="arrival-card" style={{
        position: 'relative', backgroundColor: '#0f172a', borderRadius: featured ? '20px' : '16px',
        overflow: 'hidden', cursor: 'pointer', ...style
    }}>
        <img src={item.image} alt={item.name}
            style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', opacity: 0.55, transition: 'opacity 0.4s ease, transform 0.6s ease',
            }}
            onError={(e) => { e.target.style.display = 'none'; }}
        />
        {/* Gradient overlay */}
        <div style={{
            position: 'absolute', inset: 0,
            background: featured
                ? 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)'
                : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 70%)',
        }} />
        {/* Tag */}
        {featured && (
            <div style={{
                position: 'absolute', top: '20px', left: '20px',
                background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.25)', borderRadius: '99px',
                padding: '5px 14px', fontSize: '11px', fontWeight: 700,
                color: '#fff', letterSpacing: '0.8px', textTransform: 'uppercase',
            }}>New</div>
        )}
        {/* Text */}
        <div style={{
            position: 'absolute', bottom: featured ? '28px' : '20px',
            left: featured ? '28px' : '18px', right: featured ? '28px' : '18px',
            color: '#fff', zIndex: 1,
        }}>
            <h3 style={{ fontSize: titleSize, fontWeight: 800, marginBottom: '6px', lineHeight: 1.2 }}>{item.name}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <p style={{ fontSize: '12px', opacity: 0.75, flex: 1 }}>{item.description}</p>
                {featured && (
                    <div style={{
                        width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(255,255,255,0.3)',
                    }}>
                        <ArrowRight style={{ width: '15px', height: '15px' }} />
                    </div>
                )}
            </div>
        </div>
    </div>
);

const NewArrivals = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current.querySelectorAll('.arrival-card'), {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
                opacity: 0, y: 60, duration: 0.9, stagger: 0.15, ease: 'power3.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} style={{
            padding: '72px 0', backgroundColor: '#fff', borderTop: '1px solid #f1f5f9',
        }} id="new">
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                {/* Section label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <div className="section-accent-bar" style={{ height: '26px' }} />
                    <span style={{
                        color: '#2563eb', fontSize: '13.5px', fontWeight: 700, letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                    }}>Featured</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' }}>
                    <Sparkles style={{ width: '22px', height: '22px', color: '#fbbf24' }} />
                    <h2 style={{ fontSize: '30px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px' }}>New Arrival</h2>
                </div>

                {/* Asymmetric Grid */}
                <div className="arrivals-grid" style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', height: '620px'
                }}>
                    <ArrivalCard item={newArrivals[0]} titleSize="26px" featured={true} style={{ minHeight: '100%' }} />
                    <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '20px' }}>
                        <ArrivalCard item={newArrivals[1]} titleSize="20px" />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <ArrivalCard item={newArrivals[2]} titleSize="14px" />
                            <ArrivalCard item={newArrivals[3]} titleSize="14px" />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .arrivals-grid { grid-template-columns: 1fr !important; height: auto !important; }
                    .arrivals-grid > div:first-child { min-height: 320px !important; }
                }
            `}</style>
        </section>
    );
};

export default NewArrivals;
