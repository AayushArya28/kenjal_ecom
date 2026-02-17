import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'About Us', to: '/about' },
        { name: 'Products', to: '/products' },
        { name: 'Catalogue', to: '/catalogue' },
        { name: 'Contact Us', to: '/contact' }
    ];

    const isActive = (to) => {
        if (to === '/') return location.pathname === '/';
        return location.pathname.startsWith(to);
    };

    return (
        <>
            {/* Top Banner */}
            <nav style={{ backgroundColor: '#000', color: '#fff', padding: '10px 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div className="top-banner-content" style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: '24px', fontSize: '13px'
                    }}>
                        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                        <Link to="/products" style={{
                            textDecoration: 'underline', fontWeight: 600, color: '#fff', fontSize: '13px'
                        }}>
                            ShopNow
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <header style={{
                backgroundColor: '#fff', position: 'sticky', top: 0, zIndex: 50,
                borderBottom: '1px solid #f3f4f6', boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        {/* Logo — links to home */}
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                            <img
                                src="/images/logo.png"
                                alt="Kenjal"
                                style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '4px' }}
                            />
                            <span style={{ fontSize: '24px', fontWeight: 700, color: '#2563eb' }}>Kenjal</span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="header-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.to}
                                    className={isActive(link.to) ? '' : 'nav-link'}
                                    style={{
                                        textDecoration: 'none',
                                        color: isActive(link.to) ? '#2563eb' : '#374151',
                                        fontWeight: isActive(link.to) ? 600 : 400,
                                        fontSize: '14px',
                                        borderBottom: isActive(link.to) ? '2px solid #2563eb' : 'none',
                                        paddingBottom: '4px', position: 'relative'
                                    }}>
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Search + Icons + Hamburger */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="header-search" style={{
                                display: 'flex', alignItems: 'center', backgroundColor: '#f3f4f6',
                                borderRadius: '8px', padding: '8px 16px'
                            }}>
                                <input type="text" placeholder="What are you looking for?"
                                    style={{
                                        background: 'transparent', outline: 'none', fontSize: '14px',
                                        width: '200px', border: 'none', color: '#374151'
                                    }}
                                />
                                <button style={{ marginLeft: '8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>🔍</button>
                            </div>
                            <Heart className="icon-hover" style={{ width: '22px', height: '22px', cursor: 'pointer', color: '#374151' }} />
                            <ShoppingCart className="icon-hover" style={{ width: '22px', height: '22px', cursor: 'pointer', color: '#374151' }} />

                            {/* Hamburger toggle */}
                            <button
                                className="header-mobile-toggle"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                                style={{
                                    display: 'none', background: 'none', border: 'none',
                                    cursor: 'pointer', color: '#374151', padding: '4px'
                                }}
                            >
                                {isMenuOpen
                                    ? <X style={{ width: '28px', height: '28px' }} />
                                    : <Menu style={{ width: '28px', height: '28px' }} />
                                }
                            </button>
                        </div>
                    </div>

                    {/* Mobile Nav Dropdown */}
                    <div
                        className="header-mobile-nav"
                        style={{
                            maxHeight: isMenuOpen ? '400px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease',
                        }}
                    >
                        <div style={{
                            display: 'flex', flexDirection: 'column', gap: '4px',
                            padding: isMenuOpen ? '16px 0' : '0',
                            borderTop: isMenuOpen ? '1px solid #e5e7eb' : 'none',
                            marginTop: isMenuOpen ? '12px' : '0',
                        }}>
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.to}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        textDecoration: 'none',
                                        color: isActive(link.to) ? '#2563eb' : '#374151',
                                        fontWeight: isActive(link.to) ? 600 : 400,
                                        fontSize: '16px', padding: '12px 8px',
                                        borderRadius: '6px',
                                        backgroundColor: isActive(link.to) ? '#eff6ff' : 'transparent',
                                        transition: 'background-color 0.2s',
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* Responsive styles */}
            <style>{`
                .header-mobile-nav {
                    display: none;
                }
                @media (max-width: 768px) {
                    .header-desktop-nav { display: none !important; }
                    .header-search { display: none !important; }
                    .header-mobile-toggle { display: block !important; }
                    .header-mobile-nav { display: block !important; }
                    .top-banner-content { font-size: 11px !important; gap: 8px !important; }
                    .top-banner-content span { text-align: center; }
                }
            `}</style>
        </>
    );
};

export default Header;
