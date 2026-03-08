import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { allProducts, productCategories } from '../data/products';

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeType, setActiveType] = useState('commercial');

    const categories = useMemo(() => {
        const typeCategories = Array.from(new Set(
            allProducts
                .filter(p => p.type === activeType)
                .map(p => p.category)
        ));
        return ['All', ...typeCategories];
    }, [activeType]);

    const filtered = useMemo(() => {
        let products = allProducts.filter(product => product.type === activeType);

        if (activeCategory !== 'All') {
            products = products.filter((product) => product.category === activeCategory);
        }

        return products;
    }, [activeCategory, activeType]);

    const domesticCount = useMemo(() =>
        allProducts.filter(product => product.type === 'domestic').length, []
    );

    const commercialCount = useMemo(() =>
        allProducts.filter(product => product.type === 'commercial').length, []
    );

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
                            <span style={{ color: '#E0F6FF', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>At a glance</span>
                            <strong style={{ color: '#fff', fontSize: '30px', fontWeight: 900 }}>{allProducts.length} products</strong>
                            <p style={{ color: '#cbd5e1', fontSize: '13px', lineHeight: 1.7 }}>
                                {domesticCount} domestic solutions • {commercialCount} commercial solutions across {productCategories.length} equipment categories.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#f8fafc', minHeight: '60vh' }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '42px 24px 64px' }}>

                    {/* Type Toggle */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
                        <div style={{
                            display: 'flex',
                            backgroundColor: '#fff',
                            borderRadius: '999px',
                            padding: '4px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 20px rgba(15,23,42,0.08)',
                        }}>
                            <button
                                onClick={() => {
                                    setActiveType('domestic');
                                    setActiveCategory('All');
                                }}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '999px',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    border: 'none',
                                    backgroundColor: activeType === 'domestic' ? '#0E87CC' : 'transparent',
                                    color: activeType === 'domestic' ? '#fff' : '#64748b',
                                    transition: 'all 0.3s ease',
                                    minWidth: '140px',
                                }}
                            >
                                🏠 Domestic ({domesticCount})
                            </button>
                            <button
                                onClick={() => {
                                    setActiveType('commercial');
                                    setActiveCategory('All');
                                }}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '999px',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    border: 'none',
                                    backgroundColor: activeType === 'commercial' ? '#0E87CC' : 'transparent',
                                    color: activeType === 'commercial' ? '#fff' : '#64748b',
                                    transition: 'all 0.3s ease',
                                    minWidth: '140px',
                                }}
                            >
                                🏭 Commercial ({commercialCount})
                            </button>
                        </div>
                    </div>

                    {/* Section Header */}
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                        gap: '20px', marginBottom: '28px', flexWrap: 'wrap'
                    }}>
                        <div>
                            <p style={{ color: '#0E87CC', fontSize: '12px', fontWeight: 800, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '10px' }}>
                                {activeType === 'domestic' ? 'Domestic Solutions' : 'Commercial Solutions'}
                            </p>
                            <h2 style={{ color: '#0f172a', fontSize: '28px', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: '8px' }}>
                                {activeType === 'domestic' ? 'Home & Small Business Equipment' : 'Industrial Machinery & Equipment'}
                            </h2>
                            <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7, maxWidth: '720px' }}>
                                {activeType === 'domestic'
                                    ? 'Compact, efficient solutions designed for residential and small commercial applications.'
                                    : 'Heavy-duty industrial solutions engineered for large-scale manufacturing and processing operations.'
                                }
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

                    {/* Category Tabs */}
                    {categories.length > 1 && (
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
                                        border: activeCategory === cat ? '1px solid #0E87CC' : '1px solid #dbe4ea',
                                        backgroundColor: activeCategory === cat ? '#0E87CC' : '#fff',
                                        color: activeCategory === cat ? '#fff' : '#334155',
                                        transition: 'all 0.2s',
                                        boxShadow: activeCategory === cat ? '0 6px 20px rgba(14,135,204,0.28)' : 'none',
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Products Grid */}
                    {filtered.length > 0 ? (
                        <div key={`${activeType}-${activeCategory}`} className="page-products-grid animate-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                            {filtered.map((product) => (
                                <Link to={`/product/${product.id}`} state={{ product }} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="product-card" style={{
                                        backgroundColor: '#fff', borderRadius: '22px', overflow: 'hidden',
                                        cursor: 'pointer', border: '1px solid #e2e8f0',
                                        transition: 'all 0.3s ease', boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
                                        minHeight: '100%',
                                    }}>
                                        <div style={{
                                            height: '220px',
                                            background: product.image ? '#fff' : 'linear-gradient(135deg, #f8fafc, #CCE7FF)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            overflow: 'hidden', position: 'relative'
                                        }}>
                                            {product.image ? (
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            ) : (
                                                <div style={{ padding: '20px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                                    <div style={{ display: 'grid', gap: '8px', maxWidth: '75%' }}>
                                                        <span style={{
                                                            display: 'inline-flex', width: 'fit-content', padding: '6px 10px', borderRadius: '999px',
                                                            backgroundColor: '#fff', color: '#0E87CC', fontSize: '10.5px', fontWeight: 800,
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
                                            )}
                                            {product.image && (
                                                <div style={{
                                                    position: 'absolute', top: '12px', left: '12px'
                                                }}>
                                                    <span style={{
                                                        display: 'inline-flex', padding: '6px 10px', borderRadius: '999px',
                                                        backgroundColor: 'rgba(255,255,255,0.9)', color: '#0E87CC', fontSize: '10px', fontWeight: 800,
                                                        letterSpacing: '0.5px', textTransform: 'uppercase', border: '1px solid #dbe4ea',
                                                        backdropFilter: 'blur(4px)'
                                                    }}>
                                                        {product.category}
                                                    </span>
                                                </div>
                                            )}
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
                                                <span style={{ color: '#0E87CC', fontSize: '13px', fontWeight: 800 }}>View Details</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div style={{
                            textAlign: 'center', padding: '80px 20px', backgroundColor: '#fff',
                            borderRadius: '16px', border: '1px solid #e2e8f0'
                        }}>
                            <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                                {activeType === 'domestic' ? '🏠' : '🏭'}
                            </div>
                            <p style={{ color: '#64748b', fontSize: '16px', marginBottom: '12px' }}>
                                No {activeType} products available yet
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '14px' }}>
                                {activeType === 'domestic'
                                    ? "We're working on adding home and small business solutions."
                                    : "We're working on adding more commercial equipment."
                                }
                            </p>
                        </div>
                    )}
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
            `}</style>
        </>
    );
};

export default ProductsPage;
