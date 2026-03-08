import { Link } from 'react-router-dom';
import { allProducts } from '../data/products';
import { DOMESTIC_BUY_LINK, getCommercialWhatsAppLink } from '../data/showcaseProducts';

import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.png';
import img8 from '../assets/8.jpeg';

const domesticProducts = allProducts.filter(p => p.type === 'domestic');
const commercialProducts = allProducts.filter(p => p.type === 'commercial');

// Pick featured commercial products that have images
const featuredCommercial = commercialProducts.filter(p => p.image).slice(0, 4);
// Fill remaining with non-image products
const moreCommercial = commercialProducts.filter(p => !p.image).slice(0, 4);

const HomePage = () => (
    <section style={{ background: '#f8f7f4', minHeight: '100vh' }}>

        {/* ─── Hero Section ─── */}
        <div style={{ background: 'linear-gradient(160deg, #0f172a 0%, #134e4a 60%, #0d9488 100%)', padding: '64px 20px 56px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(45,212,191,0.08)' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(251,191,36,0.08)' }} />
            <div style={{ maxWidth: '1160px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <p className="reveal-up" style={{ color: '#99f6e4', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: '14px' }}>
                    Kenjal Industries
                </p>
                <h1 className="hero-title reveal-up delay-1" style={{ fontSize: '52px', lineHeight: 1, fontWeight: 900, color: '#fff', maxWidth: '740px', marginBottom: '16px', letterSpacing: '-1px' }}>
                    Pure Water Solutions
                    <br />
                    <span style={{ color: '#5eead4' }}>for Every Need</span>
                </h1>
                <p className="reveal-up delay-2" style={{ color: '#cbd5e1', fontSize: '17px', maxWidth: '520px', marginBottom: '32px', lineHeight: 1.7 }}>
                    From home purifiers to industrial plants — browse, select, and act in seconds.
                </p>
                <div className="reveal-up delay-3" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <Link to="/domestic" className="btn-animated" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#0f172a', textDecoration: 'none', borderRadius: '14px', padding: '14px 28px', fontWeight: 700, fontSize: '15px', boxShadow: '0 12px 28px rgba(0,0,0,0.15)' }}>
                        🏠 Domestic Products
                    </Link>
                    <Link to="/commercial" className="btn-animated" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', color: '#fff', textDecoration: 'none', borderRadius: '14px', padding: '14px 28px', fontWeight: 700, fontSize: '15px', border: '1px solid rgba(255,255,255,0.2)' }}>
                        🏭 Commercial Products
                    </Link>
                </div>
            </div>
        </div>

        {/* ─── Domestic Products Gallery (Featured First) ─── */}
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '56px 20px 32px' }}>
            <div className="reveal-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                    <p style={{ color: '#0f766e', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800, marginBottom: '6px' }}>Domestic</p>
                    <h2 className="section-title" style={{ fontSize: '34px', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>Home Water Purifiers</h2>
                </div>
                <Link to="/domestic" className="btn-animated" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#0f172a', color: '#fff', textDecoration: 'none', borderRadius: '12px', padding: '11px 20px', fontWeight: 700, fontSize: '13px' }}>
                    View All →
                </Link>
            </div>

            <div className="home-domestic-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
                {domesticProducts.map((product, index) => (
                    <article key={product.id} className={`reveal-up delay-${(index % 4) + 1} hover-lift`} style={{ background: '#fff', borderRadius: '22px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                        <div style={{
                            height: '240px',
                            background: product.image ? '#f1f5f9' : `linear-gradient(140deg, #ffffff 0%, #e7f6ef 100%)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            overflow: 'hidden',
                        }}>
                            {product.image ? (
                                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <span style={{ fontSize: '56px', fontWeight: 900, color: '#d1fae5', letterSpacing: '-2px' }}>{product.shortCode}</span>
                            )}
                        </div>
                        <div style={{ padding: '18px' }}>
                            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '6px', lineHeight: 1.3 }}>{product.name}</h3>
                            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px', lineHeight: 1.5 }}>{product.capacity}</p>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                <Link to={`/product/${product.id}`} state={{ product }} style={{ flex: '1', textAlign: 'center', padding: '10px 12px', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#334155', fontSize: '13px', fontWeight: 700 }}>
                                    More Details
                                </Link>
                                <a href={DOMESTIC_BUY_LINK} target="_blank" rel="noopener noreferrer" className="btn-animated" style={{ flex: '1', textAlign: 'center', padding: '10px 12px', borderRadius: '10px', background: '#0f766e', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 700, boxShadow: '0 6px 16px rgba(15,118,110,0.25)' }}>
                                    Buy on Flipkart
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>

        {/* ─── Commercial Products Gallery ─── */}
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '32px 20px 56px' }}>
            <div className="reveal-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                    <p style={{ color: '#7c3aed', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800, marginBottom: '6px' }}>Commercial</p>
                    <h2 className="section-title" style={{ fontSize: '34px', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>Industrial Machines & Plants</h2>
                </div>
                <Link to="/commercial" className="btn-animated" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#0f172a', color: '#fff', textDecoration: 'none', borderRadius: '12px', padding: '11px 20px', fontWeight: 700, fontSize: '13px' }}>
                    View All →
                </Link>
            </div>

            <div className="home-commercial-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
                {[...featuredCommercial, ...moreCommercial].slice(0, 8).map((product, index) => (
                    <article key={product.id} className={`reveal-up delay-${(index % 4) + 1} hover-lift`} style={{ background: '#fff', borderRadius: '22px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                        <div style={{
                            height: '200px',
                            background: product.image ? '#f1f5f9' : `linear-gradient(140deg, #ffffff 0%, #ede9fe 100%)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            overflow: 'hidden',
                        }}>
                            {product.image ? (
                                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <span style={{ fontSize: '48px', fontWeight: 900, color: '#ddd6fe', letterSpacing: '-2px' }}>{product.shortCode}</span>
                            )}
                        </div>
                        <div style={{ padding: '16px' }}>
                            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '6px', lineHeight: 1.3, minHeight: '40px' }}>{product.name}</h3>
                            <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '14px' }}>{product.capacity}</p>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                <Link to={`/product/${product.id}`} state={{ product }} style={{ flex: '1', textAlign: 'center', padding: '9px 10px', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#334155', fontSize: '12px', fontWeight: 700 }}>
                                    Details
                                </Link>
                                <a href={getCommercialWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer" className="btn-animated" style={{ flex: '1', textAlign: 'center', padding: '9px 10px', borderRadius: '10px', background: '#14532d', color: '#fff', textDecoration: 'none', fontSize: '12px', fontWeight: 700, boxShadow: '0 6px 16px rgba(20,83,45,0.25)' }}>
                                    Get Info
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>

        <style>{`
            @media (max-width: 980px) {
                .home-domestic-grid { grid-template-columns: repeat(2, 1fr) !important; }
                .home-commercial-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 640px) {
                .home-domestic-grid { grid-template-columns: 1fr !important; }
                .home-commercial-grid { grid-template-columns: 1fr !important; }
                .hero-title { font-size: 38px !important; }
                .section-title { font-size: 28px !important; }
            }
            @media (max-width: 420px) {
                .hero-title { font-size: 32px !important; }
                .section-title { font-size: 24px !important; }
            }
        `}</style>
    </section>
);

export default HomePage;
