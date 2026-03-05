import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const HeroBanner = () => {
    const heroTextRef = useRef(null);
    const heroImageRef = useRef(null);
    const decorRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroTextRef.current.children, {
                opacity: 0, y: 40, duration: 0.9, stagger: 0.18, ease: 'power3.out',
            });
            gsap.from(heroImageRef.current, {
                opacity: 0, scale: 0.85, duration: 1.1, delay: 0.25, ease: 'back.out(1.4)',
            });
            gsap.from(decorRef.current.children, {
                opacity: 0, scale: 0, duration: 0.8, stagger: 0.12, delay: 0.6, ease: 'back.out(2)',
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #f0f9ff 100%)',
            overflow: 'hidden', position: 'relative', minHeight: '88vh',
            display: 'flex', alignItems: 'center',
        }} id="home">
            {/* Background decorative dots */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
            }}>
                <div className="dot-pattern" style={{
                    position: 'absolute', inset: 0, opacity: 0.35,
                }} />
                {/* Blurred blobs */}
                <div style={{
                    position: 'absolute', top: '-80px', right: '-80px',
                    width: '480px', height: '480px', borderRadius: '50%',
                    background: 'radial-gradient(circle at center, rgba(37,99,235,0.1), transparent 70%)',
                    filter: 'blur(40px)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-60px', left: '-60px',
                    width: '360px', height: '360px', borderRadius: '50%',
                    background: 'radial-gradient(circle at center, rgba(96,165,250,0.12), transparent 70%)',
                    filter: 'blur(32px)',
                }} />
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px', position: 'relative', width: '100%' }}>
                <div className="hero-grid" style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center'
                }}>
                    {/* Left — Text */}
                    <div ref={heroTextRef} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                        {/* Badge */}
                        <div className="hero-badge" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                background: 'rgba(37,99,235,0.1)', color: '#2563eb',
                                padding: '6px 16px', borderRadius: '99px', fontSize: '13px',
                                fontWeight: 600, border: '1px solid rgba(37,99,235,0.2)',
                                backdropFilter: 'blur(4px)',
                            }}>
                                <span style={{
                                    width: '6px', height: '6px', borderRadius: '50%',
                                    background: '#2563eb', display: 'inline-block',
                                    boxShadow: '0 0 0 3px rgba(37,99,235,0.25)',
                                    animation: 'pulse-soft 2s ease-in-out infinite',
                                }} />
                                Exclusive Offers Available
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 style={{ fontSize: '56px', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1.5px', color: '#0f172a' }}>
                            <span className="gradient-text">Kenjal</span><br />
                            <span style={{ color: '#0f172a' }}>Coconut &</span><br />
                            <span className="gradient-text">BLU MRX</span>
                        </h1>

                        {/* Description */}
                        <p style={{ color: '#64748b', fontSize: '18px', lineHeight: 1.7, maxWidth: '480px', fontWeight: 400 }}>
                            Premium quality coconut and wellness products crafted for your everyday lifestyle.
                        </p>

                        {/* Rating trust bar */}
                        <div className="hero-trust-bar" style={{
                            display: 'flex', alignItems: 'center', gap: '12px',
                            padding: '12px 20px', background: '#fff', borderRadius: '12px',
                            border: '1px solid #e2e8f0', width: 'fit-content',
                            boxShadow: '0 2px 12px rgba(15,23,42,0.06)',
                        }}>
                            <div style={{ display: 'flex' }}>
                                {[1,2,3,4,5].map(i => (
                                    <Star key={i} style={{ width: '15px', height: '15px', fill: '#fbbf24', color: '#fbbf24' }} />
                                ))}
                            </div>
                            <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>4.9</span>
                            <span style={{ width: '1px', height: '16px', background: '#e2e8f0' }} />
                            <span style={{ fontSize: '13px', color: '#64748b' }}>2,400+ Happy Customers</span>
                        </div>

                        {/* CTAs */}
                        <div className="hero-ctas" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <Link to="/products" className="btn-primary" style={{
                                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                color: '#fff', padding: '14px 32px', borderRadius: '12px',
                                fontWeight: 700, fontSize: '15px', border: 'none',
                                cursor: 'pointer', textDecoration: 'none',
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                boxShadow: '0 4px 16px rgba(37,99,235,0.35)',
                            }}>
                                Shop Now <ArrowRight style={{ width: '17px', height: '17px' }} />
                            </Link>
                            <a href="/kenjal-catalogue.pdf" target="_blank" rel="noopener noreferrer" style={{
                                color: '#475569', padding: '14px 28px', borderRadius: '12px',
                                fontWeight: 600, fontSize: '15px',
                                border: '1.5px solid #e2e8f0', textDecoration: 'none',
                                background: '#fff', cursor: 'pointer',
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                transition: 'all 0.2s',
                                boxShadow: '0 2px 8px rgba(15,23,42,0.05)',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.color = '#2563eb'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#475569'; }}
                            >
                                View Catalogue
                            </a>
                        </div>
                    </div>

                    {/* Right — Hero visual */}
                    <div ref={heroImageRef} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        {/* Main image container */}
                        <div className="animate-float hero-image-wrap" style={{
                            width: '420px', height: '420px', borderRadius: '32px',
                            background: 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 60%, #eff6ff 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            position: 'relative', overflow: 'hidden',
                            boxShadow: '0 32px 80px rgba(37,99,235,0.18), 0 8px 32px rgba(15,23,42,0.08)',
                            border: '1px solid rgba(255,255,255,0.8)',
                        }}>
                            <img
                                src="/images/hero-product.png"
                                alt="Kenjal product"
                                style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                                onError={e => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML += `
                                        <div style="text-align:center; padding: 32px;">
                                            <div style="font-size:80px; margin-bottom:16px;">🥥</div>
                                            <p style="color:#2563eb; font-weight:700; font-size:20px;">Kenjal Products</p>
                                            <p style="color:#64748b; font-size:14px;">Premium Quality</p>
                                        </div>
                                    `;
                                }}
                            />
                            {/* Inner hex pattern */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent 60%)',
                            }} />
                        </div>

                        {/* Floating decorative chips — hidden on mobile */}
                        <div ref={decorRef} className="hero-chips" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                            <div style={{
                                position: 'absolute', top: '12%', right: '-8%',
                                background: '#fff', borderRadius: '14px', padding: '12px 18px',
                                boxShadow: '0 8px 32px rgba(15,23,42,0.12)',
                                border: '1px solid #e2e8f0',
                                display: 'flex', alignItems: 'center', gap: '10px',
                                fontSize: '13px', fontWeight: 600, color: '#0f172a', whiteSpace: 'nowrap',
                            }}>
                                <span style={{ fontSize: '20px' }}>🌿</span>
                                100% Natural
                            </div>
                            <div style={{
                                position: 'absolute', bottom: '20%', left: '-10%',
                                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', borderRadius: '14px',
                                padding: '12px 18px',
                                boxShadow: '0 8px 32px rgba(37,99,235,0.35)',
                                display: 'flex', alignItems: 'center', gap: '10px',
                                fontSize: '13px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap',
                            }}>
                                <span style={{ fontSize: '20px' }}>🔥</span>
                                Hot Deals
                            </div>
                            <div style={{
                                position: 'absolute', top: '55%', right: '-6%',
                                background: '#fff', borderRadius: '14px', padding: '12px 18px',
                                boxShadow: '0 8px 32px rgba(15,23,42,0.1)',
                                border: '1px solid #e2e8f0',
                                display: 'flex', alignItems: 'center', gap: '10px',
                                fontSize: '13px', fontWeight: 600, color: '#0f172a', whiteSpace: 'nowrap',
                            }}>
                                <span style={{ fontSize: '20px' }}>✈️</span>
                                Free Delivery
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; text-align: center; }
                    .hero-grid h1 { font-size: 44px !important; }
                    .hero-chips { display: none !important; }
                    .hero-image-wrap { width: 320px !important; height: 320px !important; margin: 0 auto; }
                }
                @media (max-width: 640px) {
                    .hero-grid { gap: 24px !important; }
                    .hero-grid h1 { font-size: 34px !important; letter-spacing: -1px !important; }
                    .hero-trust-bar { flex-direction: column !important; gap: 8px !important; width: 100%; }
                    .hero-ctas { justify-content: center !important; }
                    .hero-badge { margin: 0 auto; }
                    .hero-image-wrap { width: 260px !important; height: 260px !important; }
                }
            `}</style>
        </section>
    );
};

export default HeroBanner;
