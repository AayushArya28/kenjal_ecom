import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
        { name: 'Domestic', to: '/domestic' },
        { name: 'Commercial', to: '/commercial' },
        { name: 'About', to: '/about' },
        { name: 'Contact Us', to: '/contact' },
    ];

    const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

    return (
        <header className="reveal-down" style={{
            position: 'sticky', top: 0, zIndex: 100,
            backgroundColor: scrolled ? 'rgba(248,247,244,0.96)' : '#f8f7f4',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid #e5e7eb',
            transition: 'all 0.3s ease',
        }}>
            <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

                    {/* Logo */}
                    <Link to="/" className="site-logo-wrap" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0, minWidth: 0 }}>
                        <div style={{
                            width: '40px', height: '40px', borderRadius: '10px',
                            background: '#ffffff',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: '1px solid #e5e7eb', overflow: 'hidden', flexShrink: 0,
                        }}>
                            <img
                                src="/kenjal_icon.png" alt="Kenjal"
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                onError={e => {
                                    e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML += '<span style="color:#111827;font-weight:900;font-size:20px;line-height:1">K</span>';
                                }}
                            />
                        </div>
                        <div className="site-logo-text" style={{ minWidth: 0 }}>
                            <div className="site-logo-title" style={{ color: '#111827', fontWeight: 800, fontSize: '16px', letterSpacing: '-0.2px', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Kenjal Industries</div>
                            <div className="site-logo-subtitle" style={{ color: '#6b7280', fontSize: '10px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Domestic and Commercial</div>
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
                                    color: isActive(link.to) ? '#111827' : '#4b5563',
                                    backgroundColor: isActive(link.to) ? '#ffffff' : 'transparent',
                                    border: isActive(link.to) ? '1px solid #d1d5db' : '1px solid transparent',
                                }}
                                onMouseEnter={e => { if (!isActive(link.to)) { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#111827'; e.currentTarget.style.border = '1px solid #e5e7eb'; } }}
                                onMouseLeave={e => { if (!isActive(link.to)) { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#4b5563'; e.currentTarget.style.border = '1px solid transparent'; } }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile toggle */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button
                            className="hamburger-btn"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#111827', padding: '8px', display: 'none' }}
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
                borderTop: isOpen ? '1px solid #e5e7eb' : 'none',
                background: '#f8f7f4', backdropFilter: 'blur(20px)',
            }}>
                <div className="mobile-menu-pad" style={{ padding: '12px 24px 20px' }}>
                    {navLinks.map(link => (
                        <Link
                            key={link.to} to={link.to}
                            style={{
                                display: 'block', padding: '13px 16px', borderRadius: '12px',
                                fontSize: '15px', fontWeight: 600, textDecoration: 'none', marginBottom: '4px',
                                color: isActive(link.to) ? '#111827' : '#4b5563',
                                backgroundColor: isActive(link.to) ? '#ffffff' : 'transparent',
                                border: '1px solid #e5e7eb',
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .desktop-nav { display: none !important; }
                    .hamburger-btn { display: flex !important; }
                }
                @media (max-width: 560px) {
                    .site-logo-wrap { gap: 9px !important; }
                    .site-logo-title { font-size: 14px !important; }
                    .site-logo-subtitle { display: none !important; }
                    .mobile-menu-pad { padding: 10px 14px 16px !important; }
                }
                @media (max-width: 380px) {
                    .site-logo-title { font-size: 13px !important; }
                }
            `}</style>
        </header>
    );
};

export default Header;
