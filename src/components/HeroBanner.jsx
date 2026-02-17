import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroBanner = () => {
    const heroTextRef = useRef(null);
    const heroImageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroTextRef.current.children, {
                opacity: 0, y: 50, duration: 1, stagger: 0.2, ease: 'power3.out',
            });
            gsap.from(heroImageRef.current, {
                opacity: 0, scale: 0.8, rotation: -10, duration: 1.2, delay: 0.3, ease: 'back.out(1.7)',
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section style={{ backgroundColor: '#fff', overflow: 'hidden', position: 'relative' }} id="home">
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 64px' }}>
                <div className="hero-grid" style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center'
                }}>
                    {/* Left — Text */}
                    <div ref={heroTextRef} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{
                            display: 'inline-block', backgroundColor: '#2563eb', color: '#fff',
                            padding: '8px 20px', borderRadius: '50px', fontSize: '14px',
                            fontWeight: 600, width: 'fit-content'
                        }}>
                            Get Offers
                        </div>
                        <h1 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1 }}>
                            <span style={{ color: '#2563eb' }}>Kenjal</span><br />
                            <span style={{ color: '#1f2937' }}>Coconut</span><br />
                            <span style={{ color: '#2563eb' }}>BLU MRX</span>
                        </h1>
                        <p style={{ color: '#6b7280', fontSize: '18px' }}>
                            Premium quality products for your home and lifestyle
                        </p>
                        <button className="btn-primary" style={{
                            backgroundColor: '#2563eb', color: '#fff', padding: '16px 32px',
                            borderRadius: '8px', fontWeight: 600, fontSize: '16px', border: 'none',
                            cursor: 'pointer', width: 'fit-content'
                        }}>
                            Shop Now
                        </button>
                    </div>

                    {/* Right — Image */}
                    <div ref={heroImageRef} style={{ position: 'relative' }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #dbeafe, #eff6ff)',
                            borderRadius: '50%', padding: '48px'
                        }}>
                            <div style={{
                                backgroundColor: '#fff', borderRadius: '50%', padding: '24px',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.12)'
                            }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    {['Image', 'Image', 'Image', 'Image'].map((label, i) => (
                                        <div key={i} style={{
                                            backgroundColor: '#e5e7eb', height: '128px', borderRadius: '8px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: '#9ca3af', fontSize: '12px'
                                        }}>{label}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div style={{
                            position: 'absolute', right: 0, bottom: 0, width: '128px', height: '256px',
                            backgroundColor: '#d1d5db', borderRadius: '8px', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', color: '#6b7280', fontSize: '14px'
                        }}>
                            Model Image
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .hero-grid h1 { font-size: 36px !important; }
                }
            `}</style>
        </section>
    );
};

export default HeroBanner;
