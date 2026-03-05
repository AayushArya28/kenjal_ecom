import { Link } from 'react-router-dom';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'linear-gradient(180deg, #0a0f1e 0%, #020617 100%)',
            color: '#fff', position: 'relative', overflow: 'hidden',
        }}>
            {/* Top glow accent */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)',
            }} />
            <div style={{
                position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)',
                width: '600px', height: '200px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%)',
                filter: 'blur(20px)', pointerEvents: 'none',
            }} />

            {/* Main Content */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px 48px', position: 'relative', zIndex: 1 }}>
                <div className="footer-grid" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px',
                }}>
                    {/* Brand + Subscribe */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                            <div style={{
                                width: '36px', height: '36px', borderRadius: '10px',
                                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 4px 14px rgba(37,99,235,0.35)',
                            }}>
                                <span style={{ color: '#fff', fontWeight: 900, fontSize: '16px' }}>K</span>
                            </div>
                            <h3 style={{ fontWeight: 900, fontSize: '22px', letterSpacing: '-0.5px', color: '#fff' }}>Kenjal</h3>
                        </div>
                        <p style={{ fontSize: '13.5px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>Subscribe</p>
                        <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '18px', lineHeight: 1.6 }}>
                            Get 10% off your first order
                        </p>
                        <div style={{
                            display: 'flex', border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '10px', overflow: 'hidden', maxWidth: '240px',
                            background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)',
                            transition: 'border-color 0.3s, box-shadow 0.3s',
                        }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.15)'; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            <input type="email" placeholder="Enter your email"
                                style={{
                                    background: 'transparent', fontSize: '13px', padding: '11px 14px',
                                    outline: 'none', flex: 1, color: '#e2e8f0', border: 'none', minWidth: 0,
                                }}
                            />
                            <button style={{
                                padding: '0 14px', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                border: 'none', color: '#fff', cursor: 'pointer',
                                transition: 'opacity 0.2s', display: 'flex', alignItems: 'center',
                            }}
                                aria-label="Subscribe"
                                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                            >
                                <Send style={{ width: '16px', height: '16px' }} />
                            </button>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '20px', color: '#fff' }}>Support</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <MapPin style={{ width: '15px', height: '15px', color: '#2563eb', flexShrink: 0, marginTop: '1px' }} />
                                <p style={{ color: '#64748b', fontSize: '13.5px', lineHeight: 1.6 }}>Patna (Bihar)<br />Pin-800007</p>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <Mail style={{ width: '15px', height: '15px', color: '#2563eb', flexShrink: 0 }} />
                                <p style={{ color: '#64748b', fontSize: '13.5px' }}>contact@kenjal.com</p>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <Phone style={{ width: '15px', height: '15px', color: '#2563eb', flexShrink: 0 }} />
                                <a href="tel:+919631582105" className="footer-link"
                                    style={{ color: '#64748b', textDecoration: 'none', fontSize: '13.5px' }}>
                                    +91 9631582105
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '20px', color: '#fff' }}>Pages</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { name: 'Home', to: '/' },
                                { name: 'About Us', to: '/about' },
                                { name: 'Products', to: '/products' },
                                { name: 'Contact Us', to: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.to} className="footer-link"
                                        style={{ color: '#64748b', fontSize: '13.5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#2563eb', display: 'inline-block', flexShrink: 0 }} />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a href="/kenjal-catalogue.pdf" target="_blank" rel="noopener noreferrer" className="footer-link"
                                    style={{ color: '#64748b', fontSize: '13.5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#2563eb', display: 'inline-block' }} />
                                    Catalogue
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '20px', color: '#fff' }}>Quick Link</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Contact' ? '/contact' : '#'} className="footer-link"
                                        style={{ color: '#64748b', fontSize: '13.5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#2563eb', display: 'inline-block', flexShrink: 0 }} />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)',
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '18px 40px' }}>
                    <div className="footer-bottom" style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        flexWrap: 'wrap', gap: '12px'
                    }}>
                        <div style={{ display: 'flex', gap: '6px', fontSize: '13px', flexWrap: 'wrap' }}>
                            {[
                                { name: 'Home', to: '/' },
                                { name: 'About Us', to: '/about' },
                                { name: 'Products', to: '/products' },
                                { name: 'Contact Us', to: '/contact' }
                            ].map((item, i) => (
                                <span key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    {i > 0 && <span style={{ color: '#1e293b' }}>â€¢</span>}
                                    <Link to={item.to} className="footer-link"
                                        style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }}>
                                        {item.name}
                                    </Link>
                                </span>
                            ))}
                        </div>
                        <p style={{ color: '#334155', fontSize: '12.5px' }}>
                            &copy; {new Date().getFullYear()} Kenjal. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) { .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; } }
                @media (max-width: 640px)  { .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; } .footer-bottom { justify-content: center !important; text-align: center; } }
            `}</style>
        </footer>
    );
};

export default Footer;
