import { CheckCircle } from 'lucide-react';

const AboutPage = () => {
    return (
        <section style={{ backgroundColor: '#fff', minHeight: '80vh' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
                {/* Section label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                    <div style={{ width: '16px', height: '40px', backgroundColor: '#2563eb', borderRadius: '4px' }}></div>
                    <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#111827' }}>About Us</h1>
                </div>

                <div className="about-grid" style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'flex-start'
                }}>
                    {/* Left — Text Content */}
                    <div>
                        <p style={{
                            fontStyle: 'italic', color: '#2563eb', fontSize: '18px',
                            marginBottom: '24px', fontWeight: 500
                        }}>
                            Inspiring the smart living
                        </p>

                        <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
                            We are providing the products to easy your lifestyle like Water Purifier, Fan, LED and many
                            more electronics gadgets.
                        </p>

                        <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
                            Kenjal is no hidden fact that the water we receive from taps at our houses and offices is
                            unsafe to drink directly without any filtration. With pollution levels growing continuously,
                            water pollution can be one of the worst effects of pollution. With pollutants like lead,
                            magnesium etc and other bacterias and virus, our regular drinking water can have some
                            long term health problem. Techniques like boiling won't be effective as it also kills all the
                            essential minerals available in water. The best way to assure that you are getting safe
                            and pure water is to use a water purifier at your home and office. We are one of the
                            leading manufacturers of quality water purifier in India as well as major importers and
                            exporters of water purifying systems across the globe. We manufacture and sell different
                            type of water purifiers which utilize different purifying techniques like RO System, Inline
                            Filters, Membrane Housing, UV BARREL, CTO, GAC, Pipe Roll.
                        </p>

                        {/* Bullet points */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                'Kenjal for best products',
                                'Kenjal for best supports.',
                                'Kenjal for affordable price'
                            ].map((item) => (
                                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle style={{ width: '20px', height: '20px', color: '#22c55e', flexShrink: 0 }} />
                                    <span style={{ color: '#2563eb', fontWeight: 600, fontSize: '15px' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — "Who We Are" */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{
                            width: '100%', maxWidth: '420px', aspectRatio: '1',
                            backgroundColor: '#f3f4f6', borderRadius: '16px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            padding: '32px', position: 'relative', overflow: 'hidden',
                            border: '1px solid #e5e7eb'
                        }}>
                            <div style={{
                                width: '200px', height: '200px', borderRadius: '50%',
                                backgroundColor: '#e5e7eb', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                border: '4px solid #d1d5db'
                            }}>
                                <span style={{
                                    fontSize: '24px', fontWeight: 700, textAlign: 'center',
                                    color: '#6b7280', lineHeight: 1.3
                                }}>
                                    WHO<br />WE ARE
                                </span>
                            </div>
                            {/* Decorative circles */}
                            {['#e63946', '#2563eb', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899'].map((color, i) => (
                                <div key={i} style={{
                                    position: 'absolute',
                                    width: '48px', height: '48px', borderRadius: '50%',
                                    backgroundColor: color, opacity: 0.5,
                                    top: `${20 + (i % 3) * 30}%`,
                                    left: i < 3 ? `${5 + i * 15}%` : 'auto',
                                    right: i >= 3 ? `${5 + (i - 3) * 15}%` : 'auto',
                                }}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .about-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default AboutPage;
