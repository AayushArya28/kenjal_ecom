import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'KENJAL WONDER PLUS', category: 'RO', type: 'domestic', image: '/images/products/wonder-plus.png' },
    { id: 2, name: 'KENJAL FLO-TECH COPPER', category: 'RO', type: 'domestic', image: '/images/products/flo-tech.png' },
    { id: 3, name: 'KENJAL COPPER (BLACK)', category: 'RO', type: 'domestic', image: '/images/products/copper-black.png' },
    { id: 4, name: 'KENJAL FRONTIER', category: 'RO', type: 'domestic', image: '/images/products/frontier.png' },
    { id: 5, name: 'KENJAL WONDER DELUXE', category: 'RO', type: 'domestic', image: '/images/products/wonder-deluxe.png' },
    { id: 6, name: 'Kenjal PUSH', category: 'RO Parts', type: 'domestic', image: '/images/products/push.png' },
    { id: 7, name: 'KENJAL 2.0', category: 'RO', type: 'domestic', image: '/images/products/kenjal-2.png' },
    { id: 8, name: 'Kenjal Smart 100 Pump', category: 'RO Parts', type: 'domestic', image: '/images/products/smart-pump.png' },
    { id: 9, name: 'Kenjal Spare Filter', category: 'Kenjal Spare Parts', type: 'domestic', image: '/images/products/spare-filter.png' },
    { id: 10, name: 'Kenjal 8000', category: 'RO', type: 'domestic', image: '/images/products/kenjal-8000.png' },
    { id: 11, name: 'Kenjal MH Heat Pump', category: 'RO Parts', type: 'domestic', image: '/images/products/heat-pump.png' },
    { id: 12, name: 'Kenjal Booster Motor', category: 'RO Parts', type: 'domestic', image: '/images/products/booster-motor.png' },
    { id: 13, name: 'Zodikaa Membrane Filter', category: 'Kenjal Spare Parts', type: 'domestic', image: '/images/products/membrane-filter.png' },
    { id: 14, name: 'Zodikaa Membrane Box', category: 'Kenjal Spare Parts', type: 'domestic', image: '/images/products/membrane-box.png' },
    { id: 15, name: 'Kenjal KEMFLO Carbon', category: 'Kenjal Spare Parts', type: 'domestic', image: '/images/products/kemflo.png' },
    { id: 16, name: 'Zodikaa Series', category: 'RO', type: 'domestic', image: '/images/products/zodikaa.png' },
    { id: 17, name: 'Zodikaa Ionic ABC', category: 'RO', type: 'domestic', image: '/images/products/zodikaa-ionic.png' },
    { id: 18, name: 'Kenjal Royal', category: 'RO', type: 'domestic', image: '/images/products/royal.png' },
    { id: 19, name: 'Kenjal Piure Plus', category: 'RO', type: 'domestic', image: '/images/products/piure-plus.png' },
    { id: 20, name: 'Kenjal Metal Geyser 10 LTR', category: 'Home Appliances', type: 'domestic', image: '/images/products/geyser.png' },
    { id: 21, name: 'Kenjal Candy Alkaline Water Purifier', category: 'RO', type: 'domestic', image: '/images/products/candy-alkaline.png' },
    { id: 22, name: 'Kenjal Luxury Modular Water Purifier', category: 'RO', type: 'domestic', image: '/images/products/luxury-modular.png' },
    { id: 23, name: 'Kenjal Dual Alkaline Water Purifier', category: 'RO', type: 'domestic', image: '/images/products/dual-alkaline.png' },
    { id: 24, name: 'Kenjal LED Smart TV', category: 'Home Appliances', type: 'domestic', image: '/images/products/led-tv.png' },
    { id: 25, name: '25 LPH RO Plant', category: 'Commercial RO', type: 'commercial', image: '/images/products/25lph-plant.png' },
    { id: 26, name: 'Kenjal Water Purifier', category: 'RO', type: 'domestic', image: '/images/products/water-purifier.png' },
    { id: 27, name: 'AQUA SWIFT ECO WATER PLANNER', category: 'RO', type: 'domestic', image: '/images/products/aqua-swift.png' },
];

const ProductsPage = () => {
    const [activeType, setActiveType] = useState('domestic');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredBySection = useMemo(() => {
        return products.filter(p => p.type === activeType);
    }, [activeType]);

    const categories = useMemo(() => {
        const cats = ['All', ...new Set(filteredBySection.map(p => p.category))];
        return cats;
    }, [filteredBySection]);

    const filtered = activeCategory === 'All'
        ? filteredBySection
        : filteredBySection.filter(p => p.category === activeCategory);

    const handleTypeChange = (type) => {
        setActiveType(type);
        setActiveCategory('All'); // Reset sub-category when switching main type
    };

    return (
        <>
            {/* Hero Banner */}
            <section style={{
                background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #3b82f6 100%)',
                padding: '56px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px',
                    borderRadius: '50%', background: 'rgba(255,255,255,0.06)'
                }}></div>
                <div style={{
                    position: 'absolute', bottom: '-40px', left: '-40px', width: '150px', height: '150px',
                    borderRadius: '50%', background: 'rgba(255,255,255,0.04)'
                }}></div>
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <p style={{ color: '#93c5fd', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                        <Link to="/" style={{ color: '#93c5fd', textDecoration: 'none' }}>Home</Link>
                        <span style={{ margin: '0 8px' }}>/</span>
                        <span style={{ color: '#fff' }}>Products</span>
                    </p>
                    <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Our Products</h1>
                    <p style={{ color: '#bfdbfe', fontSize: '15px', maxWidth: '520px', margin: '0 auto' }}>
                        Explore our complete range of water purifiers, spare parts, and home appliances.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ backgroundColor: '#fff', minHeight: '60vh' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>

                    {/* Section Toggle */}
                    <div style={{
                        display: 'flex', justifyContent: 'center', marginBottom: '40px'
                    }}>
                        <div style={{
                            backgroundColor: '#f3f4f6', padding: '6px', borderRadius: '12px',
                            display: 'flex', gap: '4px', border: '1px solid #e5e7eb'
                        }}>
                            <button
                                onClick={() => handleTypeChange('domestic')}
                                style={{
                                    padding: '10px 32px', borderRadius: '8px', fontSize: '14px',
                                    fontWeight: 700, cursor: 'pointer', border: 'none',
                                    backgroundColor: activeType === 'domestic' ? '#fff' : 'transparent',
                                    color: activeType === 'domestic' ? '#2563eb' : '#6b7280',
                                    boxShadow: activeType === 'domestic' ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' : 'none',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                Domestic
                            </button>
                            <button
                                onClick={() => handleTypeChange('commercial')}
                                style={{
                                    padding: '10px 32px', borderRadius: '8px', fontSize: '14px',
                                    fontWeight: 700, cursor: 'pointer', border: 'none',
                                    backgroundColor: activeType === 'commercial' ? '#fff' : 'transparent',
                                    color: activeType === 'commercial' ? '#2563eb' : '#6b7280',
                                    boxShadow: activeType === 'commercial' ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' : 'none',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                Commercial
                            </button>
                        </div>
                    </div>

                    {/* Category tabs */}
                    {categories.length > 2 && (
                        <div className="product-tabs" style={{
                            display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px',
                            borderBottom: '1px solid #e5e7eb', paddingBottom: '16px'
                        }}>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        padding: '8px 20px', borderRadius: '6px', fontSize: '13px',
                                        fontWeight: 600, cursor: 'pointer', border: 'none',
                                        backgroundColor: activeCategory === cat ? '#2563eb' : '#f3f4f6',
                                        color: activeCategory === cat ? '#fff' : '#374151',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Product count */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <p style={{ color: '#6b7280', fontSize: '14px' }}>
                            Showing <span style={{ fontWeight: 600, color: '#111827' }}>{filtered.length}</span> {activeType} product{filtered.length !== 1 ? 's' : ''}
                            {activeCategory !== 'All' && <> in <span style={{ fontWeight: 600, color: '#2563eb' }}>{activeCategory}</span></>}
                        </p>
                    </div>

                    {/* Product grid */}
                    <div
                        key={`${activeType}-${activeCategory}`}
                        className="page-products-grid animate-in"
                        style={{
                            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '24px'
                        }}
                    >
                        {filtered.map((product) => (
                            <div key={product.id} className="product-card" style={{
                                backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden',
                                cursor: 'pointer', border: '1px solid #f3f4f6',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                            }}>
                                <div style={{
                                    aspectRatio: '1', backgroundColor: '#f9fafb',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    overflow: 'hidden', padding: '24px', position: 'relative'
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            maxWidth: '100%', maxHeight: '100%', objectFit: 'contain',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="product-image"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML += `<div style="text-align:center;color:#9ca3af;font-size:12px;padding:8px">Product Image</div>`;
                                        }}
                                    />
                                </div>
                                <div style={{ padding: '16px' }}>
                                    <div style={{
                                        display: 'inline-block', padding: '2px 8px', borderRadius: '4px',
                                        backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '10px',
                                        fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px'
                                    }}>
                                        {product.category}
                                    </div>
                                    <h3 style={{
                                        fontSize: '14px', fontWeight: 600, color: '#111827',
                                        marginBottom: '12px', lineHeight: '1.4'
                                    }}>
                                        {product.name}
                                    </h3>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                        borderTop: '1px solid #f3f4f6', paddingTop: '12px'
                                    }}>
                                        <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: 500 }}>View Details</span>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 9L7.5 6L4.5 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                .product-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.04), 0 8px 10px -6px rgba(0, 0, 0, 0.04) !important;
                    border-color: #dbeafe !important;
                }
                .product-card:hover .product-image {
                    transform: scale(1.05);
                }
                @media (max-width: 1024px) {
                    .page-products-grid { grid-template-columns: repeat(3, 1fr) !important; }
                }
                @media (max-width: 768px) {
                    .page-products-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
                }
                @media (max-width: 480px) {
                    .page-products-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </>
    );
};

export default ProductsPage;
