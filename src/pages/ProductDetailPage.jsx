import { Link, useLocation, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { findProductById } from '../data/products';

const ProductDetailPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const product = location.state?.product || findProductById(id);

    if (!product) {
        return (
            <section style={{ padding: '80px 24px', textAlign: 'center', minHeight: '60vh' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Product Not Found</h2>
                <p style={{ color: '#64748b', marginBottom: '24px' }}>The product you are looking for is not available in the current catalog.</p>
                <Link to="/products" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: 'linear-gradient(135deg, #0f766e, #115e59)', color: '#fff',
                    padding: '12px 28px', borderRadius: '12px', textDecoration: 'none',
                    fontWeight: 700, fontSize: '14px',
                }}>
                    <ArrowLeft style={{ width: '16px', height: '16px' }} />
                    Browse Products
                </Link>
            </section>
        );
    }

    return (
        <>
            <section style={{
                background: 'linear-gradient(135deg, #07111f 0%, #0f172a 42%, #134e4a 100%)',
                padding: '54px 24px', position: 'relative', overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', top: '-80px', right: '-80px', width: '280px', height: '280px',
                    borderRadius: '50%', background: 'rgba(45,212,191,0.1)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-50px', left: '-50px', width: '220px', height: '220px',
                    borderRadius: '50%', background: 'rgba(251,191,36,0.12)',
                }} />
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <Link to="/products" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        color: '#99f6e4', textDecoration: 'none', fontSize: '13px', fontWeight: 700,
                        marginBottom: '20px', padding: '7px 14px', borderRadius: '10px',
                        background: 'rgba(153,246,228,0.08)', border: '1px solid rgba(153,246,228,0.16)',
                        transition: 'background 0.2s',
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(153,246,228,0.15)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(153,246,228,0.08)'}
                    >
                        <ArrowLeft style={{ width: '14px', height: '14px' }} />
                        Back to Products
                    </Link>
                    <p style={{ color: '#99f6e4', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
                        <Link to="/" style={{ color: '#99f6e4', textDecoration: 'none' }}>Home</Link>
                        <span style={{ margin: '0 8px' }}>/</span>
                        <Link to="/products" style={{ color: '#99f6e4', textDecoration: 'none' }}>Products</Link>
                        <span style={{ margin: '0 8px' }}>/</span>
                        <span style={{ color: '#fff' }}>{product.name}</span>
                    </p>
                    <span style={{ display: 'inline-flex', padding: '7px 12px', borderRadius: '999px', backgroundColor: 'rgba(153,246,228,0.12)', border: '1px solid rgba(153,246,228,0.18)', color: '#99f6e4', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '16px' }}>
                        {product.category}
                    </span>
                    <h1 style={{ color: '#fff', fontSize: '42px', fontWeight: 900, letterSpacing: '-1px', lineHeight: 1.08, maxWidth: '860px' }}>
                        {product.name}
                    </h1>
                </div>
            </section>

            <section style={{ backgroundColor: '#f8fafc', minHeight: '60vh' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
                    <div className="product-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '34px', alignItems: 'start' }}>
                        <div style={{
                            backgroundColor: '#fff', borderRadius: '28px', overflow: 'hidden',
                            padding: '28px', border: '1px solid #e2e8f0', boxShadow: '0 24px 60px rgba(15,23,42,0.05)',
                            display: 'grid', gap: '24px',
                        }}>
                            <div style={{
                                minHeight: '400px',
                                borderRadius: '24px',
                                background: product.image ? '#fff' : 'linear-gradient(135deg, #ecfeff, #f8fafc 42%, #fefce8)',
                                border: '1px solid #dbe4ea',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div style={{ padding: '28px', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'grid', gap: '12px', position: 'relative', zIndex: 1 }}>
                                            <span style={{
                                                display: 'inline-flex', width: 'fit-content', padding: '7px 12px', borderRadius: '999px',
                                                backgroundColor: '#fff', color: '#0f766e', fontSize: '11px', fontWeight: 800,
                                                textTransform: 'uppercase', letterSpacing: '0.6px', border: '1px solid #dbe4ea'
                                            }}>
                                                {product.category}
                                            </span>
                                            <strong style={{ color: '#0f172a', fontSize: '72px', fontWeight: 900, lineHeight: 1, letterSpacing: '-2px' }}>
                                                {product.shortCode}
                                            </strong>
                                            <p style={{ color: '#334155', fontSize: '15px', lineHeight: 1.7, maxWidth: '360px' }}>
                                                {product.summary}
                                            </p>
                                        </div>
                                        <div style={{
                                            width: '180px', height: '180px', borderRadius: '40px',
                                            background: 'linear-gradient(135deg, rgba(15,23,42,0.08), rgba(255,255,255,0.75))',
                                            border: '1px solid rgba(15,23,42,0.08)', transform: 'rotate(18deg) translateY(28px)'
                                        }} />
                                    </div>
                                )}
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                                {product.specifications.slice(0, 4).map((spec) => (
                                    <div key={spec.label} style={{ padding: '16px', borderRadius: '18px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                        <p style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#64748b', marginBottom: '8px' }}>
                                            {spec.label}
                                        </p>
                                        <p style={{ fontSize: '14px', color: '#0f172a', fontWeight: 700, lineHeight: 1.6 }}>
                                            {spec.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'grid', gap: '22px' }}>
                            <div style={{ padding: '26px', borderRadius: '24px', backgroundColor: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 18px 48px rgba(15,23,42,0.04)' }}>
                                <div style={{ display: 'grid', gap: '14px' }}>
                                    <div>
                                        <p style={{ fontSize: '12px', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Overview</p>
                                        {product.description.map((paragraph) => (
                                            <p key={paragraph} style={{ fontSize: '15px', color: '#475569', lineHeight: 1.8, marginBottom: '12px' }}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    <div style={{ height: '1px', backgroundColor: '#e2e8f0' }} />
                                    <div>
                                        <p style={{ fontSize: '12px', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Key Features</p>
                                        <div style={{ display: 'grid', gap: '10px' }}>
                                            {product.features.map((feature) => (
                                                <div key={feature} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0f766e', marginTop: '8px', flexShrink: 0 }} />
                                                    <span style={{ color: '#334155', fontSize: '14px', lineHeight: 1.7 }}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ padding: '26px', borderRadius: '24px', backgroundColor: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 18px 48px rgba(15,23,42,0.04)' }}>
                                <p style={{ fontSize: '12px', color: '#0f766e', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Applications</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {product.applications.map((item) => (
                                        <span key={item} style={{ padding: '10px 14px', borderRadius: '999px', backgroundColor: '#ecfeff', color: '#0f172a', fontSize: '13px', fontWeight: 700, border: '1px solid #cdeeed' }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ padding: '26px', borderRadius: '24px', background: 'linear-gradient(135deg, #07111f, #0f172a)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 56px rgba(15,23,42,0.16)' }}>
                                <p style={{ fontSize: '12px', color: '#99f6e4', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Request commercial details</p>
                                <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.8, marginBottom: '18px' }}>
                                    Get configuration guidance, project sizing, and quotation support from the Kenjal team.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                                    <a href="tel:8686154646" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                                        <Phone style={{ width: '16px', height: '16px', color: '#99f6e4' }} />
                                        8686-15-4646
                                    </a>
                                    <a href="mailto:kenjalindustries@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
                                        <Mail style={{ width: '16px', height: '16px', color: '#99f6e4' }} />
                                        kenjalindustries@gmail.com
                                    </a>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    <Link to="/contact" style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                                        background: 'linear-gradient(135deg, #0f766e, #115e59)', color: '#fff',
                                        padding: '14px 24px', borderRadius: '14px', textDecoration: 'none',
                                        fontWeight: 700, fontSize: '14px',
                                        boxShadow: '0 12px 30px rgba(15,118,110,0.22)',
                                    }}>
                                        Enquire Now
                                        <ArrowUpRight style={{ width: '16px', height: '16px' }} />
                                    </Link>
                                    <Link to="/products" style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                                        backgroundColor: 'rgba(255,255,255,0.08)', color: '#e2e8f0',
                                        padding: '14px 24px', borderRadius: '14px', textDecoration: 'none',
                                        fontWeight: 700, fontSize: '14px', border: '1px solid rgba(255,255,255,0.12)',
                                    }}>
                                        <ArrowLeft style={{ width: '16px', height: '16px' }} />
                                        All Products
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 768px) {
                    .product-detail-grid {
                        grid-template-columns: 1fr !important;
                        gap: 24px !important;
                    }
                }
            `}</style>
        </>
    );
};

export default ProductDetailPage;