import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#000', color: '#fff' }}>
            {/* Main Footer Content */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px 40px' }}>
                <div className="footer-grid" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px',
                }}>
                    {/* Exclusive / Subscribe */}
                    <div>
                        <h3 style={{ fontWeight: 700, fontSize: '20px', marginBottom: '16px', letterSpacing: '0.5px' }}>
                            Exclusive
                        </h3>
                        <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Subscribe</p>
                        <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '20px' }}>
                            Get 10% off your first order
                        </p>
                        <div style={{
                            display: 'flex', border: '1px solid #4b5563', borderRadius: '6px',
                            overflow: 'hidden', maxWidth: '240px',
                            transition: 'border-color 0.3s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fff'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#4b5563'}
                        >
                            <input type="email" placeholder="Enter your email"
                                style={{
                                    background: 'transparent', fontSize: '14px', padding: '10px 16px',
                                    outline: 'none', flex: 1, color: '#d1d5db', border: 'none', minWidth: 0,
                                }}
                            />
                            <button style={{
                                padding: '0 12px', background: 'transparent', border: 'none',
                                color: '#fff', cursor: 'pointer', transition: 'color 0.2s'
                            }}
                                aria-label="Subscribe"
                                onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                            >
                                <Send style={{ width: '20px', height: '20px' }} />
                            </button>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 style={{ fontWeight: 600, fontSize: '18px', marginBottom: '16px' }}>Support</h4>
                        <div style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.8' }}>
                            <p style={{ marginBottom: '12px' }}>Patna (Bihar)<br />Pin-800007</p>
                            <p style={{ marginBottom: '12px' }}>contact@kenjal.com</p>
                            <a href="tel:+919631582105" className="footer-link"
                                style={{ color: '#9ca3af', textDecoration: 'underline', display: 'inline-block' }}>
                                +91 9631582105
                            </a>
                        </div>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 style={{ fontWeight: 600, fontSize: '18px', marginBottom: '16px' }}>Pages</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                { name: 'Home', to: '/' },
                                { name: 'About Us', to: '/about' },
                                { name: 'Products', to: '/products' },
                                { name: 'Catalogue', to: '/catalogue' },
                                { name: 'Contact Us', to: '/contact' }
                            ].map((item) => (
                                <li key={item.name} style={{ marginBottom: '12px' }}>
                                    <Link to={item.to} className="footer-link"
                                        style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Link */}
                    <div>
                        <h4 style={{ fontWeight: 600, fontSize: '18px', marginBottom: '16px' }}>Quick Link</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((item) => (
                                <li key={item} style={{ marginBottom: '12px' }}>
                                    <Link to={item === 'Contact' ? '/contact' : '#'} className="footer-link"
                                        style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar — Matching reference */}
            <div style={{ borderTop: '1px solid #1f2937', backgroundColor: '#0a0a0a' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 40px' }}>
                    <div className="footer-bottom" style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        flexWrap: 'wrap', gap: '12px'
                    }}>
                        <div style={{ display: 'flex', gap: '8px', fontSize: '13px' }}>
                            {[
                                { name: 'Home', to: '/' },
                                { name: 'About Us', to: '/about' },
                                { name: 'Products', to: '/products' },
                                { name: 'Contact Us', to: '/contact' }
                            ].map((item, i) => (
                                <span key={item.name}>
                                    {i > 0 && <span style={{ color: '#6b7280' }}> | </span>}
                                    <Link to={item.to} className="footer-link"
                                        style={{ color: '#38bdf8', textDecoration: 'none' }}>
                                        {item.name}
                                    </Link>
                                </span>
                            ))}
                        </div>
                        <p style={{ color: '#6b7280', fontSize: '13px' }}>
                            Copyright (c) 2011. All rights reserved. Design by smarteshop.in
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
                }
                @media (max-width: 640px) {
                    .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
                    .footer-bottom { justify-content: center !important; text-align: center; }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
