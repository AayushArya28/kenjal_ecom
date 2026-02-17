import { Truck, Headphones, ShieldCheck } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        { Icon: Truck, title: 'FREE AND FAST DELIVERY', desc: 'Free delivery for all orders over ₹140' },
        { Icon: Headphones, title: '24/7 CUSTOMER SERVICE', desc: 'Friendly 24/7 customer support' },
        { Icon: ShieldCheck, title: 'MONEY BACK GUARANTEE', desc: 'We return money within 30 days' }
    ];

    return (
        <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div className="features-grid" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px'
                }}>
                    {features.map(({ Icon, title, desc }) => (
                        <div key={title} className="feature-item" style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            textAlign: 'center', gap: '16px', cursor: 'default'
                        }}>
                            <div className="feature-icon-ring" style={{
                                width: '80px', height: '80px', borderRadius: '50%',
                                backgroundColor: '#c4c4c4', display: 'flex', alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div className="feature-icon-inner" style={{
                                    width: '58px', height: '58px', borderRadius: '50%',
                                    backgroundColor: '#000', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Icon style={{ width: '28px', height: '28px', color: '#fff' }} />
                                </div>
                            </div>
                            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#111827', letterSpacing: '0.5px' }}>
                                {title}
                            </h3>
                            <p style={{ fontSize: '13px', color: '#6b7280' }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .features-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
                }
            `}</style>
        </section>
    );
};

export default FeaturesSection;
