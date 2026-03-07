import { Factory, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import { majorClients, manufacturingStrengths, strengths } from '../data/siteContent';

const FeaturesSection = () => {
    const features = [
        {
            Icon: Factory,
            title: 'Precision Manufacturing',
            desc: 'Advanced equipment and engineering workflows designed for accuracy, throughput, and plant reliability.',
            color: '#0f766e',
            glow: 'rgba(15,118,110,0.2)',
        },
        {
            Icon: ShieldCheck,
            title: 'Quality-Controlled Delivery',
            desc: 'Machines are inspected against design integrity, structural strength, raw material quality, and lifecycle performance.',
            color: '#0284c7',
            glow: 'rgba(2,132,199,0.2)',
        },
        {
            Icon: Wrench,
            title: 'Customized Solutions',
            desc: 'Compact, efficient machinery tailored to client requirements with systematic project management and timely execution.',
            color: '#b45309',
            glow: 'rgba(180,83,9,0.22)',
        },
        {
            Icon: Sparkles,
            title: 'Continuous Innovation',
            desc: 'Strong R&D, engineering support, and modern technology adoption for evolving process and packaging needs.',
            color: '#0e7490',
            glow: 'rgba(14,116,144,0.2)',
        },
    ];

    return (
        <section style={{ padding: '84px 0 78px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <div className="section-accent-bar" style={{ height: '26px' }} />
                        <span style={{ color: '#0f766e', fontSize: '13.5px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Why Kenjal</span>
                    </div>
                    <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.6px', marginBottom: '10px' }}>
                        Engineering support built around performance and dependability
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.8, maxWidth: '840px' }}>
                        {manufacturingStrengths.join(', ')}.
                    </p>
                </div>

                <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '22px', marginBottom: '30px' }}>
                    {features.map(({ Icon, title, desc, color, glow }) => (
                        <div key={title} className="feature-item" style={{
                            display: 'flex', flexDirection: 'column', gap: '18px', cursor: 'default',
                            padding: '32px 24px', background: '#fff', borderRadius: '22px',
                            border: '1px solid #e2e8f0', boxShadow: '0 10px 28px rgba(15,23,42,0.04)',
                            transition: 'box-shadow 0.3s ease',
                        }}>
                            <div className="feature-icon-ring" style={{
                                width: '74px', height: '74px', borderRadius: '22px',
                                background: `${glow.replace('0.2', '0.08').replace('0.22', '0.08')}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: `1px solid ${glow.replace('0.2', '0.24').replace('0.22', '0.24')}`,
                            }}>
                                <div className="feature-icon-inner" style={{
                                    width: '52px', height: '52px', borderRadius: '16px',
                                    background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: `0 10px 24px ${glow}`,
                                }}>
                                    <Icon style={{ width: '22px', height: '22px', color: '#fff' }} />
                                </div>
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', lineHeight: 1.35 }}>{title}</h3>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.75 }}>{desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ padding: '24px', borderRadius: '24px', background: '#fff', border: '1px solid #e2e8f0' }}>
                    <p style={{ color: '#0f766e', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                        Trusted by leading brands
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                        {majorClients.map((client) => (
                            <span key={client} style={{ padding: '10px 12px', borderRadius: '999px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', color: '#334155', fontSize: '12px', fontWeight: 800 }}>
                                {client}
                            </span>
                        ))}
                    </div>
                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.8 }}>
                        {strengths.slice(0, 4).join(', ')}.
                    </p>
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
                @media (max-width: 640px)  { .features-grid { grid-template-columns: 1fr !important; } }
            `}</style>
        </section>
    );
};

export default FeaturesSection;