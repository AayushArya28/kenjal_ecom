import { Globe2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyProfile, globalPresence, majorClients, productFamilies } from '../data/siteContent';

const PromoBanner = () => {
    return (
        <section style={{ margin: '56px 0' }}>
            <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #111827 0%, #0f172a 44%, #1f2937 100%)',
                    borderRadius: '30px', overflow: 'hidden', position: 'relative',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 34px 80px rgba(15,23,42,0.28)',
                }}>
                    <div style={{
                        position: 'absolute', top: '-40px', left: '35%', width: '320px', height: '320px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(45,212,191,0.16), transparent 70%)', filter: 'blur(24px)', pointerEvents: 'none',
                    }} />
                    <div style={{
                        position: 'absolute', bottom: '-60px', right: '6%', width: '300px', height: '300px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(251,191,36,0.12), transparent 70%)', filter: 'blur(24px)', pointerEvents: 'none',
                    }} />

                    <div className="promo-inner" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '34px', padding: '52px 56px', position: 'relative', zIndex: 1 }}>
                        <div style={{ color: '#fff' }}>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(153,246,228,0.12)', border: '1px solid rgba(153,246,228,0.18)',
                                color: '#99f6e4', fontWeight: 800, fontSize: '12px',
                                padding: '6px 14px', borderRadius: '999px', marginBottom: '18px',
                                letterSpacing: '1px', textTransform: 'uppercase',
                            }}>
                                <Sparkles style={{ width: '14px', height: '14px' }} />
                                About Preview
                            </div>
                            <h2 style={{ fontSize: '42px', fontWeight: 900, lineHeight: 1.08, marginBottom: '18px', letterSpacing: '-1px', color: '#fff' }}>
                                Reliable machines,
                                <span style={{ color: '#99f6e4' }}> customized for industrial throughput</span>
                            </h2>
                            <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.9, marginBottom: '22px' }}>
                                {companyProfile.aboutPreview}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
                                {productFamilies.slice(0, 6).map((family) => (
                                    <span key={family} style={{ padding: '9px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)', color: '#e2e8f0', fontSize: '12px', fontWeight: 600 }}>
                                        {family}
                                    </span>
                                ))}
                            </div>

                            <Link to="/about" className="btn-primary" style={{
                                background: 'linear-gradient(135deg, #0f766e, #115e59)',
                                color: '#fff', padding: '14px 28px', borderRadius: '14px', textDecoration: 'none',
                                fontWeight: 700, fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px',
                            }}>
                                Learn More About Kenjal
                            </Link>
                        </div>

                        <div style={{ display: 'grid', gap: '18px' }}>
                            <div style={{ padding: '22px', borderRadius: '24px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                                    <Globe2 style={{ width: '18px', height: '18px', color: '#99f6e4' }} />
                                    <p style={{ color: '#fff', fontSize: '15px', fontWeight: 800 }}>Global Presence</p>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {globalPresence.map((region) => (
                                        <span key={region} style={{ padding: '10px 12px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#e2e8f0', fontSize: '12px', fontWeight: 700 }}>
                                            {region}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ padding: '22px', borderRadius: '24px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <p style={{ color: '#fff', fontSize: '15px', fontWeight: 800, marginBottom: '14px' }}>Companies Served</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {majorClients.map((client) => (
                                        <span key={client} style={{ padding: '8px 12px', borderRadius: '999px', backgroundColor: 'rgba(15,118,110,0.18)', border: '1px solid rgba(153,246,228,0.1)', color: '#fff', fontSize: '12px', fontWeight: 700 }}>
                                            {client}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .promo-inner { grid-template-columns: 1fr !important; padding: 34px 24px !important; }
                    .promo-inner h2 { font-size: 30px !important; }
                }
            `}</style>
        </section>
    );
};

export default PromoBanner;