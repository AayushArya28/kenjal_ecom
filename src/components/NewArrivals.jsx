import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { featuredIndustries, industriesServed } from '../data/siteContent';

gsap.registerPlugin(ScrollTrigger);

const IndustryCard = ({ item, index }) => (
    <div className="arrival-card" style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0f172a, #1f2937 62%, #0f766e)',
        borderRadius: '24px',
        overflow: 'hidden',
        padding: '24px',
        minHeight: '240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#fff',
    }}>
        <div style={{
            position: 'absolute', right: '-20px', top: '-20px', width: '120px', height: '120px', borderRadius: '32px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.03))', transform: 'rotate(18deg)', border: '1px solid rgba(255,255,255,0.08)'
        }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', position: 'relative', zIndex: 1 }}>
            <span style={{ display: 'inline-flex', padding: '6px 10px', borderRadius: '999px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: '#99f6e4', fontSize: '11px', fontWeight: 800, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                Sector 0{index + 1}
            </span>
            <ArrowUpRight style={{ width: '18px', height: '18px', color: '#99f6e4' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '10px', lineHeight: 1.15 }}>{item.title}</h3>
            <p style={{ fontSize: '14px', opacity: 0.84, lineHeight: 1.8 }}>{item.description}</p>
        </div>
    </div>
);

const NewArrivals = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current.querySelectorAll('.arrival-card'), {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
                opacity: 0,
                y: 52,
                duration: 0.85,
                stagger: 0.1,
                ease: 'power3.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} style={{ padding: '76px 0', backgroundColor: '#fff', borderTop: '1px solid #e2e8f0' }} id="industries">
            <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '12px' }}>Built for diverse production environments</h2>
                    <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.8 }}>
                        Kenjal machinery is deployed across packaging, bottling, processing, and utility workflows for food, beverage, pharma, FMCG, cosmetic, and industrial operations.
                    </p>
                </div>

                <div className="arrivals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '28px' }}>
                    {featuredIndustries.map((item, index) => (
                        <IndustryCard key={item.title} item={item} index={index} />
                    ))}
                </div>

                <div style={{ padding: '24px', borderRadius: '24px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <p style={{ fontSize: '12px', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>Complete coverage</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {industriesServed.map((industry) => (
                            <span key={industry} style={{ padding: '10px 12px', borderRadius: '999px', backgroundColor: '#fff', border: '1px solid #e2e8f0', color: '#334155', fontSize: '12px', fontWeight: 700 }}>
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .arrivals-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default NewArrivals;