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
                y: 42,
                scale: 0.96,
                duration: 0.9,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.18,
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
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', width: 'fit-content' }}>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(153,246,228,0.1)', color: '#99f6e4',
                                padding: '7px 16px', borderRadius: '999px', fontSize: '12px',
                                fontWeight: 700, border: '1px solid rgba(153,246,228,0.18)',
                                letterSpacing: '0.8px', textTransform: 'uppercase',
                            }}>
                                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#99f6e4', boxShadow: '0 0 0 4px rgba(153,246,228,0.12)' }} />
                                {companyProfile.heroEyebrow}
                            </div>
                        </div>

                        <div>
                            <p style={{ color: '#99f6e4', fontSize: '13px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
                                {companyProfile.name}
                            </p>
                            <h1 style={{ fontSize: '60px', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-1.8px', color: '#fff', maxWidth: '760px' }}>
                                {companyProfile.heroTitle}
                            </h1>
                        </div>

                        <p style={{ color: '#cbd5e1', fontSize: '17px', lineHeight: 1.85, maxWidth: '720px' }}>
                            {companyProfile.heroDescription}
                        </p>

                        <p style={{ color: '#99f6e4', fontSize: '15px', fontWeight: 700, letterSpacing: '0.4px' }}>
                            {companyProfile.tagline}
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

                        <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                            {homeStats.map((stat) => (
                                <div key={stat.label} style={{
                                    padding: '16px', borderRadius: '18px', background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)'
                                }}>
                                    <strong style={{ display: 'block', color: '#fff', fontSize: '28px', fontWeight: 900, marginBottom: '6px' }}>{stat.value}</strong>
                                    <span style={{ color: '#cbd5e1', fontSize: '12px', lineHeight: 1.6 }}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div ref={heroPanelRef} style={{ display: 'grid', gap: '16px' }}>
                        <div style={{
                            padding: '24px',
                            borderRadius: '28px',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(14px)',
                            boxShadow: '0 30px 80px rgba(0,0,0,0.22)',
                        }}>
                            <div style={{ display: 'grid', gap: '14px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '14px' }}>
                                    <div style={{ flex: 1, padding: '18px', borderRadius: '20px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                        <Factory style={{ width: '20px', height: '20px', color: '#99f6e4', marginBottom: '12px' }} />
                                        <p style={{ color: '#fff', fontSize: '16px', fontWeight: 800, marginBottom: '8px' }}>Turnkey plants</p>
                                        <p style={{ color: '#cbd5e1', fontSize: '13px', lineHeight: 1.7 }}>Processing, bottling, packaging, and utility integration from one engineering team.</p>
                                    </div>
                                    <div style={{ width: '138px', padding: '18px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(153,246,228,0.14), rgba(255,255,255,0.04))', border: '1px solid rgba(153,246,228,0.18)' }}>
                                        <Building2 style={{ width: '18px', height: '18px', color: '#99f6e4', marginBottom: '12px' }} />
                                        <p style={{ color: '#fff', fontSize: '13px', fontWeight: 800, lineHeight: 1.5 }}>Established in 2020</p>
                                        <p style={{ color: '#cbd5e1', fontSize: '12px', lineHeight: 1.6, marginTop: '6px' }}>New Delhi, India</p>
                                    </div>
                                </div>

                                <div style={{ padding: '20px', borderRadius: '22px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                                        <Settings2 style={{ width: '18px', height: '18px', color: '#fbbf24' }} />
                                        <p style={{ color: '#fff', fontSize: '14px', fontWeight: 800 }}>Product Families</p>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                        {productFamilies.map((family) => (
                                            <span key={family} style={{
                                                padding: '9px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)',
                                                border: '1px solid rgba(255,255,255,0.08)', color: '#e2e8f0', fontSize: '12px', fontWeight: 600
                                            }}>
                                                {family}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
                    .hero-grid h1 { font-size: 46px !important; }
                }
                @media (max-width: 768px) {
                    .hero-grid h1 { font-size: 34px !important; letter-spacing: -1px !important; }
                    .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 520px) {
                    .hero-stats { grid-template-columns: 1fr !important; }
                    .hero-ctas { flex-direction: column !important; align-items: stretch !important; }
                }
            `}</style>
        </section>
    );
};

export default HeroBanner;