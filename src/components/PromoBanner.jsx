const PromoBanner = () => {
    return (
        <section style={{ margin: '40px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #111827, #1f2937)',
                    borderRadius: '16px', overflow: 'hidden'
                }}>
                    <div className="promo-inner" style={{
                        display: 'flex', alignItems: 'center', padding: '48px', gap: '32px'
                    }}>
                        {/* Left side — text */}
                        <div style={{ flex: 1, color: '#fff' }}>
                            <span style={{ color: '#4ade80', fontWeight: 600, fontSize: '14px', display: 'block', marginBottom: '16px' }}>
                                Categories
                            </span>
                            <h2 style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.2, marginBottom: '24px' }}>
                                Enhance Your<br />Drinking Experience
                            </h2>
                            <button className="btn-green" style={{
                                backgroundColor: '#22c55e', color: '#fff', padding: '14px 32px',
                                borderRadius: '8px', fontWeight: 600, fontSize: '16px', border: 'none',
                                cursor: 'pointer'
                            }}>
                                Buy Now!
                            </button>
                        </div>

                        {/* Right side — image */}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{
                                backgroundColor: '#374151', width: '256px', height: '320px',
                                borderRadius: '8px', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', overflow: 'hidden'
                            }}>
                                <img src="/images/promo.png" alt="Promo product"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML += '<span style="color:#9ca3af;font-size:14px">Promo Image</span>';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .promo-inner {
                        flex-direction: column !important;
                        padding: 32px !important;
                        text-align: center;
                    }
                    .promo-inner h2 { font-size: 28px !important; }
                }
            `}</style>
        </section>
    );
};

export default PromoBanner;
