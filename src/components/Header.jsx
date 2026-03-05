import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const pdfUrl = '/kenjal-catalogue.pdf';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menu on route change
    useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'About Us', to: '/about' },
        { name: 'Products', to: '/products' },
        { name: 'Contact Us', to: '/contact' }
    ];

    const isActive = (to) => {
        if (to === '/') return location.pathname === '/';
        return location.pathname.startsWith(to);
    };

    return (
        <>
            {/* Top Announcement Banner */}
            <div style={{
                background: 'linear-gradient(90deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
                color: '#fff', padding: '9px 0', overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div className="top-banner-content" style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: '20px', fontSize: '13px', letterSpacing: '0.1px'
                    }}>
                        <span style={{ color: '#bfdbfe' }}>
                            🎉 Summer Sale — Free Express Delivery on all orders &nbsp;
                            <span style={{
                                background: 'linear-gradient(90deg, #fbbf24, #f97316)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                fontWeight: 700
                            }}>
                                OFF 50%
                            </span>
                        </span>
                        <Link to="/products" style={{
                            fontSize: '12px', fontWeight: 700, color: '#fff',
                            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)',
                            padding: '4px 14px', borderRadius: '99px', textDecoration: 'none',
                            transition: 'background 0.2s',
                            backdropFilter: 'blur(4px)',
                            whiteSpace: 'nowrap',
                        }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                        >
                            Shop Now →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header style={{
                backgroundColor: scrolled ? 'rgba(255,255,255,0.88)' : '#fff',
                backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
                position: 'sticky', top: 0, zIndex: 50,
                borderBottom: scrolled ? '1px solid rgba(226,232,240,0.8)' : '1px solid #f1f5f9',
                boxShadow: scrolled ? '0 4px 24px rgba(15,23,42,0.08)' : '0 1px 3px rgba(15,23,42,0.04)',
                transition: 'all 0.3s ease',
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

                        {/* Logo */}
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
                            <div style={{
                                width: '38px', height: '38px', borderRadius: '10px',
                                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 4px 12px rgba(37,99,235,0.32)', overflow: 'hidden',
                                flexShrink: 0,
                            }}>
                                <img
                                    src="/images/logo.png"
                                    alt="Kenjal"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    onError={e => { e.target.style.display = 'none'; }}
                                />
                            </div>
                            <span style={{
                                fontSize: '22px', fontWeight: 800, letterSpacing: '-0.5px',
                                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            }}>Kenjal</span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="header-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.to}
                                    className={isActive(link.to) ? '' : 'nav-link'}
                                    style={{
                                        textDecoration: 'none',
                                        color: isActive(link.to) ? '#2563eb' : '#374151',
                                        fontWeight: isActive(link.to) ? 600 : 500,
                                        fontSize: '14.5px',
                                        padding: '6px 14px',
                                        borderRadius: '8px',
                                        background: isActive(link.to) ? '#eff6ff' : 'transparent',
                                        transition: 'all 0.2s ease',
                                        position: 'relative',
                                    }}
                                    onMouseEnter={e => { if (!isActive(link.to)) e.currentTarget.style.background = '#f8fafc'; }}
                                    onMouseLeave={e => { if (!isActive(link.to)) e.currentTarget.style.background = 'transparent'; }}
                                >
                                    {link.name}
                                    {isActive(link.to) && (
                                        <span style={{
                                            position: 'absolute', bottom: '3px', left: '50%',
                                            transform: 'translateX(-50%)', width: '20px', height: '2px',
                                            background: 'linear-gradient(90deg, #2563eb, #60a5fa)',
                                            borderRadius: '99px', display: 'block',
                                        }} />
                                    )}
                                </Link>
                            ))}
                            <a href={pdfUrl} target="_blank" rel="noopener noreferrer"
                                style={{
                                    textDecoration: 'none', color: '#fff', fontWeight: 600, fontSize: '14px',
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    padding: '7px 18px', borderRadius: '8px', marginLeft: '8px',
                                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                    boxShadow: '0 2px 10px rgba(37,99,235,0.28)',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-1px)';
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.42)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(37,99,235,0.28)';
                                }}
                            >
                                <BookOpen style={{ width: '15px', height: '15px' }} />
                                Catalogue
                            </a>
                        </nav>

                        {/* Hamburger */}
                        <button
                            className="header-mobile-toggle"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            style={{
                                display: 'none', background: isMenuOpen ? '#f1f5f9' : 'none', border: 'none',
                                cursor: 'pointer', color: '#0f172a', padding: '8px', borderRadius: '8px',
                                transition: 'background 0.2s',
                            }}
                        >
                            {isMenuOpen
                                ? <X style={{ width: '24px', height: '24px' }} />
                                : <Menu style={{ width: '24px', height: '24px' }} />
                            }
                        </button>
                    </div>

                    {/* Mobile Nav */}
                    <div className="header-mobile-nav" style={{
                        maxHeight: isMenuOpen ? '420px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}>
                        <div style={{
                            display: 'flex', flexDirection: 'column', gap: '2px',
                            padding: isMenuOpen ? '12px 0 20px' : '0',
                            borderTop: isMenuOpen ? '1px solid #f1f5f9' : 'none',
                        }}>
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.to}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        textDecoration: 'none',
                                        color: isActive(link.to) ? '#2563eb' : '#374151',
                                        fontWeight: isActive(link.to) ? 600 : 500,
                                        fontSize: '15px', padding: '12px 16px',
                                        borderRadius: '10px',
                                        background: isActive(link.to) ? '#eff6ff' : 'transparent',
                                        transition: 'background 0.15s',
                                    }}
                                    onMouseEnter={e => { if (!isActive(link.to)) e.currentTarget.style.background = '#f8fafc'; }}
                                    onMouseLeave={e => { if (!isActive(link.to)) e.currentTarget.style.background = 'transparent'; }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a href={pdfUrl} target="_blank" rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    textDecoration: 'none', color: '#fff', fontWeight: 600, fontSize: '15px',
                                    padding: '12px 16px', borderRadius: '10px', marginTop: '6px',
                                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                }}
                            >
                                <BookOpen style={{ width: '16px', height: '16px' }} /> Catalogue
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <style>{`
                .header-mobile-nav { display: none; }
                @media (max-width: 768px) {
                    .header-desktop-nav { display: none !important; }
                    .header-mobile-toggle { display: block !important; }
                    .header-mobile-nav { display: block !important; }
                    .top-banner-content { font-size: 11.5px !important; gap: 10px !important; }
                }
            `}</style>
        </>
    );
};

export default Header;
