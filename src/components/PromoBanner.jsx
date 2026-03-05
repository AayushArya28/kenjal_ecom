const PromoBanner = () => {
    return (
        <section style={{ margin: '48px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e1b4b 100%)',
                    borderRadius: '24px', overflow: 'hidden', position: 'relative',
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
                }}>
                    {/* Decorative glow blobs */}
                    <div style={{
                        position: 'absolute', top: '-60px', left: '30%',
                        width: '360px', height: '360px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)',
                        filter: 'blur(24px)', pointerEvents: 'none',
                    }} />
                    <div style={{
                        position: 'absolute', bottom: '-40px', right: '10%',
                        width: '280px', height: '280px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(34,197,94,0.12), transparent 70%)',
                        filter: 'blur(20px)', pointerEvents: 'none',
                    }} />

                    <div className="promo-inner" style={{
                        display: 'flex', alignItems: 'center', padding: '56px 64px', gap: '40px',
                        position: 'relative', zIndex: 1,
                    }}>
                        {/* Left side — text */}
                        <div style={{ flex: 1, color: '#fff' }}>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
                                color: '#4ade80', fontWeight: 700, fontSize: '12px',
                                padding: '5px 14px', borderRadius: '99px', marginBottom: '20px',
                                letterSpacing: '1px', textTransform: 'uppercase',
                            }}>
                                <span style={{
                                    width: '6px', height: '6px', background: '#4ade80',
                                    borderRadius: '50%', animation: 'pulse-soft 2s ease-in-out infinite',
                                    display: 'inline-block',
                                }} />
                                Featured Category
                            </div>
                            <h2 style={{
                                fontSize: '42px', fontWeight: 900, lineHeight: 1.12,
                                marginBottom: '28px', letterSpacing: '-0.8px',
                                color: '#fff',
                            }}>
                                Enhance Your<br />
                                <span style={{
                                    background: 'linear-gradient(90deg, #4ade80, #22d3ee)',
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                }}>Drinking Experience</span>
                            </h2>
                            <button className="btn-green" style={{
                                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                                color: '#fff', padding: '14px 36px',
                                borderRadius: '12px', fontWeight: 700, fontSize: '15px', border: 'none',
                                cursor: 'pointer', boxShadow: '0 4px 20px rgba(34,197,94,0.35)',
                            }}>
                                Buy Now →
                            </button>
                        </div>

                        {/* Right side — image */}
                        <div style={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
                            <div style={{
                                width: '260px', height: '320px',
                                borderRadius: '20px', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', overflow: 'hidden',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(8px)',
                            }}>
                                <img src="/images/promo.png" alt="Promo product"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML += '<span style="color:#6b7280;font-size:14px">Promo Image</span>';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .promo-inner { flex-direction: column !important; padding: 36px 28px !important; text-align: center; }
                    .promo-inner h2 { font-size: 30px !important; }
                }
            `}</style>
        </section>
    );
};

export default PromoBanner;
