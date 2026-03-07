import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, MessageCircle, ArrowUpRight, Building2 } from 'lucide-react';

const ContactPage = () => {
    const [query, setQuery] = useState('');

    const handleWhatsApp = () => {
        const text = encodeURIComponent(query || 'Hello, I would like to enquire about Kenjal Industries machinery.');
        window.open(`https://wa.me/918686154646?text=${text}`, '_blank', 'noopener noreferrer');
    };

    return (
        <>
            {/* Hero Banner */}
            <section style={{
                background: 'linear-gradient(135deg, #07111f 0%, #0f172a 44%, #134e4a 100%)',
                padding: '80px 24px 88px', position: 'relative', overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.14), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <p style={{ color: '#99f6e4', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
                        <Link to="/" style={{ color: '#99f6e4', textDecoration: 'none' }}>Home</Link>
                        <span style={{ margin: '0 8px' }}>/</span>
                        <span style={{ color: '#fff' }}>Contact Us</span>
                    </p>
                    <h1 style={{ fontSize: '52px', fontWeight: 900, color: '#fff', letterSpacing: '-1.5px', marginBottom: '16px', lineHeight: 1.06 }}>
                        Let's Talk Business
                    </h1>
                    <p style={{ color: '#cbd5e1', fontSize: '17px', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto' }}>
                        Reach out for product enquiries, project consultations, custom machinery quotes, or after-sales support.
                    </p>
                </div>
            </section>

            {/* Offices + Contact */}
            <section style={{ backgroundColor: '#f8fafc', padding: '72px 24px' }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                    <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginBottom: '28px' }}>

                        {/* Head Office */}
                        <div style={{ padding: '36px', borderRadius: '28px', background: 'linear-gradient(135deg, #07111f, #0f172a)', border: '1px solid rgba(153,246,228,0.12)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.15), transparent 70%)' }} />
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(153,246,228,0.1)', border: '1px solid rgba(153,246,228,0.16)', color: '#99f6e4', fontWeight: 700, fontSize: '10px', padding: '5px 12px', borderRadius: '999px', marginBottom: '18px', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                                    <Building2 style={{ width: '11px', height: '11px' }} /> Head Office
                                </div>
                                <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 800, marginBottom: '20px' }}>Gurugram, Haryana</h3>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                                    <MapPin style={{ width: '16px', height: '16px', color: '#99f6e4', flexShrink: 0, marginTop: '2px' }} />
                                    <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.8 }}>DLF Phase-3, 27/11<br />Gurugram, Haryana – 122002</p>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                                    <Phone style={{ width: '16px', height: '16px', color: '#99f6e4', flexShrink: 0, marginTop: '3px' }} />
                                    <a href="tel:8686154646" style={{ color: '#94a3b8', fontSize: '15px', textDecoration: 'none' }}>8686-15-4646</a>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                                    <Mail style={{ width: '16px', height: '16px', color: '#99f6e4', flexShrink: 0, marginTop: '3px' }} />
                                    <a href="mailto:kenjalindustries@gmail.com" style={{ color: '#94a3b8', fontSize: '15px', textDecoration: 'none', wordBreak: 'break-all' }}>kenjalindustries@gmail.com</a>
                                </div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <Globe style={{ width: '16px', height: '16px', color: '#99f6e4', flexShrink: 0, marginTop: '3px' }} />
                                    <div>
                                        <a href="https://www.kenjal.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '15px', textDecoration: 'none', marginBottom: '4px' }}>
                                            www.kenjal.com <ArrowUpRight style={{ width: '13px', height: '13px' }} />
                                        </a>
                                        <a href="https://www.kenjal.in" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '15px', textDecoration: 'none' }}>
                                            www.kenjal.in <ArrowUpRight style={{ width: '13px', height: '13px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Branch Office */}
                        <div style={{ padding: '36px', borderRadius: '28px', background: '#fff', border: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '150px', height: '150px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,191,36,0.08), transparent 70%)' }} />
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.18)', color: '#b45309', fontWeight: 700, fontSize: '10px', padding: '5px 12px', borderRadius: '999px', marginBottom: '18px', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                                    <Building2 style={{ width: '11px', height: '11px' }} /> Branch Office
                                </div>
                                <h3 style={{ color: '#0f172a', fontSize: '22px', fontWeight: 800, marginBottom: '20px' }}>Patna, Bihar</h3>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                                    <MapPin style={{ width: '16px', height: '16px', color: '#0d9488', flexShrink: 0, marginTop: '2px' }} />
                                    <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.8 }}>Plot 24, Road 4<br />Krishnachandra Nagar, Near Zero Mile<br />Patna, Bihar</p>
                                </div>
                                <div style={{ marginTop: '28px', padding: '18px', borderRadius: '14px', background: '#f0fdfa', border: '1px solid #ccfbf1' }}>
                                    <p style={{ color: '#0f172a', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>Channel Partner (All Bihar)</p>
                                    <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.7 }}>Aradhya Aqua Industry handles Kenjal distribution across the Bihar region from this location.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick contact cards */}
                    <div className="quick-contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                        {[
                            { icon: Phone, label: 'Call Us', value: '8686-15-4646', href: 'tel:8686154646', color: '#0d9488' },
                            { icon: Mail, label: 'Email Us', value: 'kenjalindustries@gmail.com', href: 'mailto:kenjalindustries@gmail.com', color: '#0d9488' },
                            { icon: MessageCircle, label: 'WhatsApp', value: '+91 8686154646', href: 'https://wa.me/918686154646', color: '#16a34a', newTab: true },
                        ].map(({ icon: Icon, label, value, href, color, newTab }) => (
                            <a
                                key={label} href={href}
                                target={newTab ? '_blank' : undefined}
                                rel={newTab ? 'noopener noreferrer' : undefined}
                                style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '22px 24px', borderRadius: '18px', background: '#fff', border: '1px solid #e2e8f0', textDecoration: 'none', transition: 'all 0.2s' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 6px 24px ${color}18`; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icon style={{ width: '20px', height: '20px', color }} />
                                </div>
                                <div>
                                    <p style={{ color: '#64748b', fontSize: '12px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '4px' }}>{label}</p>
                                    <p style={{ color: '#0f172a', fontSize: '14px', fontWeight: 600, wordBreak: 'break-all' }}>{value}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* WhatsApp Query + Map */}
            <section style={{ backgroundColor: '#fff', padding: '72px 24px', borderTop: '1px solid #f1f5f9' }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                    <div className="wa-map-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '36px', alignItems: 'start' }}>

                        {/* WhatsApp form */}
                        <div style={{ padding: '36px', borderRadius: '28px', background: 'linear-gradient(135deg, #07111f, #0f172a)', border: '1px solid rgba(153,246,228,0.12)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(22,163,74,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <MessageCircle style={{ width: '22px', height: '22px', color: '#4ade80' }} />
                                </div>
                                <div>
                                    <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 800 }}>WhatsApp Quick Query</h3>
                                    <p style={{ color: '#94a3b8', fontSize: '13px' }}>Typical response within a few hours</p>
                                </div>
                            </div>
                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', margin: '22px 0' }} />
                            <textarea
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Describe the machine or plant you need, capacity requirements, industry, or any other details..."
                                rows={6}
                                style={{
                                    width: '100%', borderRadius: '14px', padding: '16px',
                                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#e2e8f0', fontSize: '14px', lineHeight: 1.7, resize: 'vertical',
                                    outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box',
                                }}
                                onFocus={e => e.target.style.borderColor = 'rgba(153,246,228,0.4)'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                            <button
                                onClick={handleWhatsApp}
                                style={{
                                    marginTop: '14px', width: '100%', padding: '15px',
                                    background: 'linear-gradient(135deg, #16a34a, #15803d)',
                                    color: '#fff', fontWeight: 700, fontSize: '15px',
                                    border: 'none', borderRadius: '14px', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
                                    boxShadow: '0 6px 24px rgba(22,163,74,0.25)', transition: 'all 0.2s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(22,163,74,0.4)'}
                                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(22,163,74,0.25)'}
                            >
                                <MessageCircle style={{ width: '18px', height: '18px' }} />
                                Send on WhatsApp
                            </button>
                            <p style={{ color: '#475569', fontSize: '12px', textAlign: 'center', marginTop: '12px', lineHeight: 1.6 }}>
                                Opens WhatsApp with your message pre-filled for +91 8686154646
                            </p>
                        </div>

                        {/* Map */}
                        <div style={{ borderRadius: '28px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', height: '100%', minHeight: '420px' }}>
                            <iframe
                                title="Kenjal Industries Head Office — DLF Phase 3, Gurugram"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0023607265836!2d77.09178167538986!3d28.47044547575491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193e68c47ffd%3A0xbcf3b7dbac9c0ddd!2sDLF%20Phase%203%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1709800000000!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0, display: 'block', minHeight: '420px' }}
                                allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 1024px) {
                    .contact-grid { grid-template-columns: 1fr !important; }
                    .quick-contact-grid { grid-template-columns: 1fr !important; }
                    .wa-map-grid { grid-template-columns: 1fr !important; }
                }
                @media (max-width: 768px) {
                    .quick-contact-grid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 520px) {
                    .quick-contact-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </>
    );
};

export default ContactPage;
