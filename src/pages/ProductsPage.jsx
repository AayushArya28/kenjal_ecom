import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { allProducts, productCategories } from '../data/products';

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = useMemo(() => ['All', ...productCategories], []);

    const filtered = activeCategory === 'All'
        ? allProducts
        : allProducts.filter((product) => product.category === activeCategory);

    return (
        <>
            <section style={{
                background: 'linear-gradient(135deg, #07111f 0%, #0f172a 42%, #134e4a 100%)',
                padding: '72px 24px 80px',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px',
                    borderRadius: '50%', background: 'rgba(45,212,191,0.1)',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-50px', left: '-50px', width: '220px', height: '220px',
                    borderRadius: '50%', background: 'rgba(251,191,36,0.12)',
                }} />
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <p style={{ color: '#99f6e4', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                        <Link to="/" style={{ color: '#99f6e4', textDecoration: 'none' }}>Home</Link>
                        <span style={{ margin: '0 8px' }}>/</span>
                        <span style={{ color: '#fff' }}>Products</span>
                    </p>
                    <div className="products-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr', gap: '36px', alignItems: 'end' }}>
                        <div>
                            <h1 style={{ fontSize: '48px', fontWeight: 900, color: '#fff', marginBottom: '14px', letterSpacing: '-1px', lineHeight: 1.05 }}>
                                Industrial Machinery
                                <span style={{ color: '#99f6e4' }}> Engineered for Output</span>
                            </h1>
                            <p style={{ color: '#cbd5e1', fontSize: '16px', maxWidth: '720px', lineHeight: 1.8 }}>
                                Explore the Kenjal portfolio across water treatment systems, beverage processing equipment,
                                bottling lines, PET bottle manufacturing, packaging automation, labeling systems, and industrial pumps.
                            </p>
                        </div>
                        <div style={{
                            display: 'grid',
                            gap: '10px',
                            padding: '18px',
                            borderRadius: '20px',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(12px)',
                        }}>
                            <span style={{ color: '#99f6e4', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>At a glance</span>
                            <strong style={{ color: '#fff', fontSize: '30px', fontWeight: 900 }}>{allProducts.length} products</strong>
                            <p style={{ color: '#cbd5e1', fontSize: '13px', lineHeight: 1.7 }}>
                                Structured into {productCategories.length} major equipment categories for faster browsing and quotation follow-up.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#f8fafc', minHeight: '60vh' }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '42px 24px 64px' }}>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                        gap: '20px', marginBottom: '28px', flexWrap: 'wrap'
                    }}>
                        <div>
                            <p style={{ color: '#0f766e', fontSize: '12px', fontWeight: 800, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '10px' }}>
                                Browse by Category
                            </p>
                            <h2 style={{ color: '#0f172a', fontSize: '28px', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: '8px' }}>
                                Machines, plants, and utility equipment
                            </h2>
                            <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7, maxWidth: '720px' }}>
                                Each product card links to a dedicated detail page with applications, key features, and technical highlights.
                            </p>
                        </div>
                        <div style={{
                            padding: '16px 18px',
                            borderRadius: '16px',
                            backgroundColor: '#fff',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(15,23,42,0.04)',
                            minWidth: '220px',
                        }}>
                            <p style={{ color: '#64748b', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '6px' }}>
                                Visible items
                            </p>
                            <p style={{ color: '#0f172a', fontSize: '28px', fontWeight: 900 }}>{filtered.length}</p>
                        </div>
                    </div>

                    <div className="product-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '10px 18px',
                                    borderRadius: '999px',
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    border: activeCategory === cat ? '1px solid #0d9488' : '1px solid #dbe4ea',
                                    backgroundColor: activeCategory === cat ? '#0d9488' : '#fff',
                                    color: activeCategory === cat ? '#fff' : '#334155',
                                    transition: 'all 0.2s',
                                    boxShadow: activeCategory === cat ? '0 6px 20px rgba(13,148,136,0.28)' : 'none',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div key={activeCategory} className="page-products-grid animate-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                        {filtered.map((product) => (
                            <Link to={`/product/${product.id}`} state={{ product }} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="product-card" style={{
                                    backgroundColor: '#fff', borderRadius: '22px', overflow: 'hidden',
                                    cursor: 'pointer', border: '1px solid #e2e8f0',
                                    transition: 'all 0.3s ease', boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
                                    minHeight: '100%',
                                }}>
                                    <div style={{
                                        minHeight: '188px',
                                        background: 'linear-gradient(135deg, #f8fafc, #ecfeff)',
                                        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                                        overflow: 'hidden', padding: '20px', position: 'relative'
                                    }}>
                                        <div style={{ display: 'grid', gap: '8px', maxWidth: '75%' }}>
                                            <span style={{
                                                display: 'inline-flex', width: 'fit-content', padding: '6px 10px', borderRadius: '999px',
                                                backgroundColor: '#fff', color: '#0f766e', fontSize: '10.5px', fontWeight: 800,
                                                letterSpacing: '0.5px', textTransform: 'uppercase', border: '1px solid #dbe4ea'
                                            }}>
                                                {product.category}
                                            </span>
                                            <strong style={{ fontSize: '30px', color: '#0f172a', fontWeight: 900, letterSpacing: '-1px' }}>
                                                {product.shortCode}
                                            </strong>
                                        </div>
                                        <div style={{
                                            width: '90px', height: '90px', borderRadius: '28px',
                                            background: 'linear-gradient(135deg, rgba(15,23,42,0.06), rgba(255,255,255,0.75))',
                                            border: '1px solid rgba(15,23,42,0.08)', transform: 'rotate(14deg)'
                                        }} />
                                    </div>
                                    <div style={{ padding: '20px', display: 'grid', gap: '12px' }}>
                                        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', lineHeight: '1.35' }}>
                                            {product.name}
                                        </h3>
                                        <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.7', minHeight: '72px' }}>
                                            {product.summary}
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '14px', gap: '12px' }}>
                                            <div>
                                                <span style={{ display: 'block', fontSize: '10px', color: '#64748b', fontWeight: 800, letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '4px' }}>Capacity</span>
                                                <span style={{ fontSize: '13px', color: '#0f172a', fontWeight: 700 }}>{product.capacity}</span>
                                            </div>
                                            <span style={{ color: '#0f766e', fontSize: '13px', fontWeight: 800 }}>View Details</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div style={{ marginTop: '34px', padding: '24px', borderRadius: '24px', background: '#fff', border: '1px solid #e2e8f0', display: 'grid', gap: '10px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#0f766e' }}>Need a custom machine line?</span>
                        <p style={{ color: '#334155', fontSize: '15px', lineHeight: 1.8 }}>
                            Kenjal specializes in customized solutions for industrial operations where reliability, precision, and performance are critical.
                        </p>
                        <div>
                            <Link to="/contact" className="btn-primary" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none',
                                background: 'linear-gradient(135deg, #0f766e, #115e59)', color: '#fff',
                                padding: '13px 22px', borderRadius: '14px', fontWeight: 700,
                            }}>
                                Talk to Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .animate-in {
                    animation: fadeInUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @media (max-width: 1024px) {
                    .page-products-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 900px) {
                    .products-hero-grid { grid-template-columns: 1fr !important; }
                }
                @media (max-width: 768px) {
                    .page-products-grid { grid-template-columns: 1fr !important; gap: 18px !important; }
                }
            `}</style>
        </>
    );
};

export default ProductsPage;