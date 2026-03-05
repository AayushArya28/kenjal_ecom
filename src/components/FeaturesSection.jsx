import { Truck, Headphones, ShieldCheck } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        { Icon: Truck, title: 'FREE & FAST DELIVERY', desc: 'Free delivery for all orders over ₹140', color: '#2563eb', glow: 'rgba(37,99,235,0.2)' },
        { Icon: Headphones, title: '24/7 CUSTOMER SERVICE', desc: 'Friendly 24/7 customer support', color: '#7c3aed', glow: 'rgba(124,58,237,0.2)' },
        { Icon: ShieldCheck, title: 'MONEY BACK GUARANTEE', desc: 'We return money within 30 days', color: '#059669', glow: 'rgba(5,150,105,0.2)' },
    ];

    return (
        <section style={{ padding: '80px 0 72px', backgroundColor: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div className="features-grid" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'
                }}>
                    {features.map(({ Icon, title, desc, color, glow }) => (
                        <div key={title} className="feature-item" style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            textAlign: 'center', gap: '18px', cursor: 'default',
                            padding: '36px 28px', background: '#fff', borderRadius: '20px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
                            transition: 'box-shadow 0.3s ease',
                        }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 32px ${glow}`}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(15,23,42,0.04)'}
                        >
                            <div className="feature-icon-ring" style={{
                                width: '84px', height: '84px', borderRadius: '50%',
                                background: `rgba(${color === '#2563eb' ? '37,99,235' : color === '#7c3aed' ? '124,58,237' : '5,150,105'}, 0.1)`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: `2px solid ${glow.replace('0.2', '0.3')}`,
                            }}>
                                <div className="feature-icon-inner" style={{
                                    width: '60px', height: '60px', borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: `0 4px 16px ${glow}`,
                                }}>
                                    <Icon style={{ width: '26px', height: '26px', color: '#fff' }} />
                                </div>
                            </div>
                            <h3 style={{
                                fontSize: '13.5px', fontWeight: 800, color: '#0f172a',
                                letterSpacing: '0.6px', textTransform: 'uppercase',
                            }}>
                                {title}
                            </h3>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) { .features-grid { grid-template-columns: 1fr !important; } }
                @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            `}</style>
        </section>
    );
};

export default FeaturesSection;
