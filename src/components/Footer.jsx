import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, ArrowUpRight, Youtube } from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();

    const companyLinks = [
        { name: 'Home', to: '/' },
        { name: 'About Us', to: '/about' },
        { name: 'Products', to: '/products' },
        { name: 'Catalogue', to: '/catalogue' },
        { name: 'Contact Us', to: '/contact' },
    ];

    const productFamilies = [
        'Water Treatment Systems',
        'Beverage Processing',
        'Bottling Machines',
        'Filling Machines',
        'Packaging Machines',
        'Labeling & Printing',
        'Industrial Pumps',
        'PET Bottle Manufacturing',
    ];

    return (
        <footer style={{
            background: 'linear-gradient(180deg, #0a0f1e 0%, #07111f 100%)',
            borderTop: '1px solid rgba(153,246,228,0.1)',
        }}>
            {/* Top accent line */}
            <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, #0f766e 40%, #99f6e4 60%, transparent)' }} />

            <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '60px 24px 48px' }}>
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.8fr 0.9fr 1fr 1.2fr', gap: '48px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

                    {/* Brand column */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div style={{
                                width: '42px', height: '42px', borderRadius: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden',
                            }}>
                                <img
                                    src="/kenjal_icon.png" alt="Kenjal"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    onError={e => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML += '<span style="color:#fff;font-weight:900;font-size:22px;line-height:1">K</span>';
                                    }}
                                />
                            </div>
                            <div>
                                <div style={{ color: '#fff', fontWeight: 800, fontSize: '17px', lineHeight: 1.2 }}>Kenjal Industries</div>
                                <div style={{ color: '#99f6e4', fontSize: '10px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase' }}>Pvt. Ltd.</div>
                            </div>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.85, marginBottom: '22px', maxWidth: '300px' }}>
                            Manufacturer and exporter of advanced industrial machinery for beverage processing, water purification, filling, bottling, and packaging automation.
                        </p>
                        <p style={{ color: '#64748b', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>Sectors</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {['Food & Beverage', 'Pharma', 'FMCG', 'Cosmetics'].map(tag => (
                                <span key={tag} style={{
                                    padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 600,
                                    background: 'rgba(153,246,228,0.07)', color: '#99f6e4',
                                    border: '1px solid rgba(153,246,228,0.13)',
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Company links */}
                    <div>
                        <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '13px', marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>Company</h4>
                        {companyLinks.map(link => (
                            <Link
                                key={link.to} to={link.to}
                                style={{ display: 'block', color: '#94a3b8', fontSize: '14px', marginBottom: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#99f6e4'}
                                onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '13px', marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>Contact</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <a href="tel:8686154646" style={{ display: 'flex', gap: '10px', color: '#94a3b8', textDecoration: 'none' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#99f6e4'}
                                onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                            >
                                <Phone style={{ width: '14px', height: '14px', color: '#0d9488', flexShrink: 0, marginTop: '2px' }} />
                                <span style={{ fontSize: '14px', lineHeight: 1.6 }}>8686-15-4646</span>
                            </a>
                            <a href="mailto:kenjalindustries@gmail.com" style={{ display: 'flex', gap: '10px', color: '#94a3b8', textDecoration: 'none' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#99f6e4'}
                                onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                            >
                                <Mail style={{ width: '14px', height: '14px', color: '#0d9488', flexShrink: 0, marginTop: '2px' }} />
                                <span style={{ fontSize: '13px', lineHeight: 1.6, wordBreak: 'break-all' }}>kenjalindustries@gmail.com</span>
                            </a>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <Globe style={{ width: '14px', height: '14px', color: '#0d9488', flexShrink: 0, marginTop: '3px' }} />
                                <div>
                                    <a href="https://www.kenjal.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '14px', textDecoration: 'none', marginBottom: '4px' }}
                                        onMouseEnter={e => e.currentTarget.style.color = '#99f6e4'}
                                        onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                                    >
                                        www.kenjal.com <ArrowUpRight style={{ width: '12px', height: '12px' }} />
                                    </a>
                                    <a href="https://www.kenjal.in" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '14px', textDecoration: 'none' }}
                                        onMouseEnter={e => e.currentTarget.style.color = '#99f6e4'}
                                        onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                                    >
                                        www.kenjal.in <ArrowUpRight style={{ width: '12px', height: '12px' }} />
                                    </a>
                                </div>
                            </div>
                            <a href="https://www.youtube.com/channel/UCLNVN1oW6wdupDaHM-xOmNQ" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '10px', color: '#94a3b8', textDecoration: 'none' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#99f6e4'}
                                onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                            >
                                <Youtube style={{ width: '14px', height: '14px', color: '#0d9488', flexShrink: 0, marginTop: '2px' }} />
                                <span style={{ fontSize: '14px', lineHeight: 1.6 }}>YouTube Channel</span>
                            </a>
                        </div>
                    </div>

                    {/* Offices */}
                    <div>
                        <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '13px', marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>Offices</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={{
                                    width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0,
                                    background: 'rgba(15,118,110,0.15)', border: '1px solid rgba(15,118,110,0.25)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <MapPin style={{ width: '13px', height: '13px', color: '#0d9488' }} />
                                </div>
                                <div>
                                    <p style={{ color: '#e2e8f0', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>Head Office</p>
                                    <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.8 }}>
                                        DLF Phase-3, 27/11<br />
                                        Gurugram, Haryana – 122002
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={{
                                    width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0,
                                    background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <MapPin style={{ width: '13px', height: '13px', color: '#fbbf24' }} />
                                </div>
                                <div>
                                    <p style={{ color: '#e2e8f0', fontSize: '12px', fontWeight: 700, marginBottom: '5px' }}>Branch Office</p>
                                    <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.8 }}>
                                        Plot 24, Road 4<br />
                                        Krishnachandra Nagar<br />
                                        Near Zero Mile, Patna, Bihar
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <p style={{ color: '#475569', fontSize: '13px' }}>
                        © {year} Kenjal Industries Pvt. Ltd. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '28px' }}>
                        {['Privacy Policy', 'Terms of Use', 'FAQ'].map(item => (
                            <a key={item} href="#" style={{ color: '#475569', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#99f6e4'}
                                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                            >{item}</a>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
                }
                @media (max-width: 640px) {
                    .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
