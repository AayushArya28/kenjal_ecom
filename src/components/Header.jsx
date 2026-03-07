import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [location.pathname]);

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'About Us', to: '/about' },
        { name: 'Products', to: '/products' },
        { name: 'Contact Us', to: '/contact' },
    ];

    const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

    return (
        <header style={{
            position: 'sticky', top: 0, zIndex: 100,
            backgroundColor: scrolled ? 'rgba(7,17,31,0.97)' : '#07111f',
            backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(153,246,228,0.12)' : '1px solid rgba(255,255,255,0.06)',
            boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
            transition: 'all 0.3s ease',
        }}>
            <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
                        <div style={{
                            width: '40px', height: '40px', borderRadius: '12px',
                            background: 'linear-gradient(135deg, #0f766e, #0d9488)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 16px rgba(15,118,110,0.35)', overflow: 'hidden', flexShrink: 0,
                        }}>
                            <img
                                src="/images/logo.png" alt="Kenjal"
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                onError={e => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML += '<span style="color:#fff;font-weight:900;font-size:20px;line-height:1">K</span>';
                                }}
                            />
                        </div>
                        <div>
                            <div style={{ color: '#fff', fontWeight: 800, fontSize: '16px', letterSpacing: '-0.3px', lineHeight: 1.2 }}>Kenjal Industries</div>
                            <div style={{ color: '#99f6e4', fontSize: '10px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase' }}>Pvt. Ltd.</div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                        {navLinks.map(link => (
                            <Link
                                key={link.to} to={link.to}
                                style={{
                                    padding: '8px 16px', borderRadius: '10px', fontSize: '14px', fontWeight: 600,
                                    textDecoration: 'none', transition: 'all 0.2s',
                                    color: isActive(link.to) ? '#99f6e4' : '#cbd5e1',
                                    backgroundColor: isActive(link.to) ? 'rgba(153,246,228,0.1)' : 'transparent',
                                    borderBottom: isActive(link.to) ? '2px solid rgba(153,246,228,0.6)' : '2px solid transparent',
                                }}
                                onMouseEnter={e => { if (!isActive(link.to)) { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff'; } }}
                                onMouseLeave={e => { if (!isActive(link.to)) { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#cbd5e1'; } }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <a
                            href="/kenjal-catalogue.pdf" target="_blank" rel="noopener noreferrer"
                            className="cta-download"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '7px',
                                padding: '9px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: 700,
                                background: 'linear-gradient(135deg, #0f766e, #0d9488)',
                                color: '#fff', textDecoration: 'none',
                                boxShadow: '0 4px 16px rgba(15,118,110,0.32)',
                                transition: 'all 0.2s', whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(15,118,110,0.5)'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(15,118,110,0.32)'}
                        >
                            <Download style={{ width: '14px', height: '14px' }} />
                            Brochure
                        </a>
                        <button
                            className="hamburger-btn"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e2e8f0', padding: '8px', display: 'none' }}
                            onClick={() => setIsOpen(o => !o)}
                        >
                            {isOpen
                                ? <X style={{ width: '22px', height: '22px' }} />
                                : <Menu style={{ width: '22px', height: '22px' }} />
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div style={{
                maxHeight: isOpen ? '420px' : '0', overflow: 'hidden',
                transition: 'max-height 0.3s ease',
                borderTop: isOpen ? '1px solid rgba(255,255,255,0.07)' : 'none',
                background: 'rgba(7,17,31,0.98)', backdropFilter: 'blur(20px)',
            }}>
                <div style={{ padding: '12px 24px 20px' }}>
                    {navLinks.map(link => (
                        <Link
                            key={link.to} to={link.to}
                            style={{
                                display: 'block', padding: '13px 16px', borderRadius: '12px',
                                fontSize: '15px', fontWeight: 600, textDecoration: 'none', marginBottom: '4px',
                                color: isActive(link.to) ? '#99f6e4' : '#cbd5e1',
                                backgroundColor: isActive(link.to) ? 'rgba(153,246,228,0.1)' : 'transparent',
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/kenjal-catalogue.pdf" target="_blank" rel="noopener noreferrer"
                        style={{
                            display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px',
                            padding: '13px 16px', borderRadius: '12px', fontSize: '15px', fontWeight: 700,
                            background: 'linear-gradient(135deg, #0f766e, #0d9488)',
                            color: '#fff', textDecoration: 'none',
                        }}
                    >
                        <Download style={{ width: '16px', height: '16px' }} />
                        Download Brochure
                    </a>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .desktop-nav { display: none !important; }
                    .cta-download { display: none !important; }
                    .hamburger-btn { display: flex !important; }
                }
            `}</style>
        </header>
    );
};

export default Header;
