import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Factory, Settings2 } from 'lucide-react';
import { companyProfile, homeStats, productFamilies } from '../data/siteContent';

const HeroBanner = () => {
    const heroTextRef = useRef(null);
    const heroPanelRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroTextRef.current.children, {
                opacity: 0,
                y: 36,
                duration: 0.85,
                stagger: 0.12,
                ease: 'power3.out',
            });
            gsap.from(heroPanelRef.current.children, {
                opacity: 0,
                x: 32,
                duration: 0.9,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.3,
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section style={{
            background: 'linear-gradient(135deg, #07111f 0%, #0f172a 42%, #134e4a 100%)',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '88vh',
            display: 'flex',
            alignItems: 'center',
        }} id="home">
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', top: '-120px', right: '-100px',
                    width: '480px', height: '480px', borderRadius: '50%',
                    background: 'radial-gradient(circle at center, rgba(45,212,191,0.18), transparent 68%)',
                    filter: 'blur(50px)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-80px', left: '-80px',
                    width: '360px', height: '360px', borderRadius: '50%',
                    background: 'radial-gradient(circle at center, rgba(251,191,36,0.14), transparent 70%)',
                    filter: 'blur(42px)',
                }} />
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '44px 44px',
                    maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.7), transparent 92%)',
                }} />
            </div>

            <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '74px 24px 56px', position: 'relative', width: '100%' }}>
                <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '44px', alignItems: 'center' }}>
                    <div ref={heroTextRef} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(153,246,228,0.1)', border: '1px solid rgba(153,246,228,0.18)', color: '#99f6e4', fontWeight: 700, fontSize: '11px', padding: '6px 14px', borderRadius: '999px', marginBottom: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                {companyProfile.heroEyebrow}
                            </div>
                            <p style={{ color: '#99f6e4', fontSize: '13px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
                                {companyProfile.name}
                            </p>
                            <h1 style={{ fontSize: '60px', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-1.8px', color: '#fff' }}>
                                {companyProfile.heroTitle}
                            </h1>
                            <p style={{ color: '#cbd5e1', fontSize: '15px', fontWeight: 500, marginTop: '12px', fontStyle: 'italic' }}>
                                {companyProfile.tagline}
                            </p>
                        </div>

                        <p style={{ color: '#cbd5e1', fontSize: '17px', lineHeight: 1.85, maxWidth: '640px' }}>
                            {companyProfile.heroDescription}
                        </p>

                        <div className="hero-ctas" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <Link to="/products" className="btn-primary" style={{
                                background: 'linear-gradient(135deg, #0f766e, #115e59)',
                                color: '#fff', padding: '14px 30px', borderRadius: '14px',
                                fontWeight: 700, fontSize: '15px', textDecoration: 'none',
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                boxShadow: '0 14px 32px rgba(15,118,110,0.24)',
                            }}>
                                Explore Products <ArrowRight style={{ width: '17px', height: '17px' }} />
                            </Link>
                            <a href="/kenjal-catalogue.pdf" target="_blank" rel="noopener noreferrer" style={{
                                color: '#e2e8f0', padding: '14px 24px', borderRadius: '14px',
                                fontWeight: 600, fontSize: '15px', border: '1px solid rgba(255,255,255,0.14)',
                                textDecoration: 'none', background: 'rgba(255,255,255,0.04)',
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                backdropFilter: 'blur(10px)',
                            }}>
                                Download Brochure
                            </a>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
                            {productFamilies.slice(0, 5).map((family) => (
                                <span key={family} style={{ padding: '8px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', fontSize: '12px', fontWeight: 600 }}>
                                    {family}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div ref={heroPanelRef} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            {homeStats.map((stat) => (
                                <div key={stat.label} style={{
                                    padding: '18px 16px',
                                    borderRadius: '18px',
                                    background: 'rgba(255,255,255,0.06)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255,255,255,0.09)',
                                }}>
                                    <div style={{ fontSize: '28px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>{stat.value}</div>
                                    <div style={{ fontSize: '11.5px', color: '#94a3b8', lineHeight: 1.5 }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{
                            padding: '20px',
                            borderRadius: '20px',
                            background: 'rgba(255,255,255,0.06)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255,255,255,0.09)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                <Factory style={{ width: '16px', height: '16px', color: '#99f6e4' }} />
                                <span style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>Turnkey Plants</span>
                            </div>
                            <p style={{ color: '#cbd5e1', fontSize: '12.5px', lineHeight: 1.7 }}>
                                Complete beverage processing lines with installation and commissioning support.
                            </p>
                        </div>

                        <div style={{
                            padding: '14px 18px',
                            borderRadius: '16px',
                            background: 'rgba(251,191,36,0.08)',
                            border: '1px solid rgba(251,191,36,0.16)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <Building2 style={{ width: '18px', height: '18px', color: '#fbbf24', flexShrink: 0 }} />
                            <div>
                                <div style={{ color: '#fbbf24', fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>Est. {companyProfile.established}</div>
                                <div style={{ color: '#e2e8f0', fontSize: '12px', fontWeight: 600 }}>{companyProfile.headquarters}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .hero-grid { grid-template-columns: 1fr !important; }
                    .hero-grid h1 { font-size: 46px !important; }
                }
                @media (max-width: 768px) {
                    .hero-grid h1 { font-size: 34px !important; letter-spacing: -1px !important; }
                }
                @media (max-width: 520px) {
                    .hero-ctas { flex-direction: column !important; align-items: stretch !important; }
                }
            `}</style>
        </section>
    );
};

export default HeroBanner;