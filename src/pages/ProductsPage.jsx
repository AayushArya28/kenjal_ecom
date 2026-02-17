import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'RO', 'RO Parts', 'Kenjal Spare Parts', 'Home Appliances', 'Commercial RO'];

const products = [
    { id: 1, name: 'KENJAL WONDER PLUS', category: 'RO', image: '/images/products/wonder-plus.png' },
    { id: 2, name: 'KENJAL FLO-TECH COPPER', category: 'RO', image: '/images/products/flo-tech.png' },
    { id: 3, name: 'KENJAL COPPER (BLACK)', category: 'RO', image: '/images/products/copper-black.png' },
    { id: 4, name: 'KENJAL FRONTIER', category: 'RO', image: '/images/products/frontier.png' },
    { id: 5, name: 'KENJAL WONDER DELUXE', category: 'RO', image: '/images/products/wonder-deluxe.png' },
    { id: 6, name: 'Kenjal PUSH', category: 'RO Parts', image: '/images/products/push.png' },
    { id: 7, name: 'KENJAL 2.0', category: 'RO', image: '/images/products/kenjal-2.png' },
    { id: 8, name: 'Kenjal Smart 100 Pump', category: 'RO Parts', image: '/images/products/smart-pump.png' },
    { id: 9, name: 'Kenjal Spare Filter', category: 'Kenjal Spare Parts', image: '/images/products/spare-filter.png' },
    { id: 10, name: 'Kenjal 8000', category: 'RO', image: '/images/products/kenjal-8000.png' },
    { id: 11, name: 'Kenjal MH Heat Pump', category: 'RO Parts', image: '/images/products/heat-pump.png' },
    { id: 12, name: 'Kenjal Booster Motor', category: 'RO Parts', image: '/images/products/booster-motor.png' },
    { id: 13, name: 'Zodikaa Membrane Filter', category: 'Kenjal Spare Parts', image: '/images/products/membrane-filter.png' },
    { id: 14, name: 'Zodikaa Membrane Box', category: 'Kenjal Spare Parts', image: '/images/products/membrane-box.png' },
    { id: 15, name: 'Kenjal KEMFLO Carbon', category: 'Kenjal Spare Parts', image: '/images/products/kemflo.png' },
    { id: 16, name: 'Zodikaa Series', category: 'RO', image: '/images/products/zodikaa.png' },
    { id: 17, name: 'Zodikaa Ionic ABC', category: 'RO', image: '/images/products/zodikaa-ionic.png' },
    { id: 18, name: 'Kenjal Royal', category: 'RO', image: '/images/products/royal.png' },
    { id: 19, name: 'Kenjal Piure Plus', category: 'RO', image: '/images/products/piure-plus.png' },
    { id: 20, name: 'Kenjal Metal Geyser 10 LTR', category: 'Home Appliances', image: '/images/products/geyser.png' },
    { id: 21, name: 'Kenjal Candy Alkaline Water Purifier', category: 'RO', image: '/images/products/candy-alkaline.png' },
    { id: 22, name: 'Kenjal Luxury Modular Water Purifier', category: 'RO', image: '/images/products/luxury-modular.png' },
    { id: 23, name: 'Kenjal Dual Alkaline Water Purifier', category: 'RO', image: '/images/products/dual-alkaline.png' },
    { id: 24, name: 'Kenjal LED Smart TV', category: 'Home Appliances', image: '/images/products/led-tv.png' },
    { id: 25, name: '25 LPH RO Plant', category: 'Commercial RO', image: '/images/products/25lph-plant.png' },
    { id: 26, name: 'Kenjal Water Purifier', category: 'RO', image: '/images/products/water-purifier.png' },
    { id: 27, name: 'AQUA SWIFT ECO WATER PLANNER', category: 'RO', image: '/images/products/aqua-swift.png' },
];

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

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

                    {/* Category tabs */}
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

                    {/* Product count */}
                    <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '24px' }}>
                        Showing <span style={{ fontWeight: 600, color: '#111827' }}>{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''}
                        {activeCategory !== 'All' && <> in <span style={{ fontWeight: 600, color: '#2563eb' }}>{activeCategory}</span></>}
                    </p>

                    {/* Product grid */}
                    <div className="page-products-grid" style={{
                        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '24px'
                    }}>
                        {filtered.map((product) => (
                            <div key={product.id} className="product-card" style={{
                                backgroundColor: '#f9fafb', borderRadius: '12px', overflow: 'hidden',
                                cursor: 'pointer', border: '1px solid #e5e7eb',
                                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                            }}>
                                <div style={{
                                    aspectRatio: '1', backgroundColor: '#f3f4f6',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    overflow: 'hidden', padding: '16px'
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            maxWidth: '100%', maxHeight: '100%', objectFit: 'contain',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML += `<div style="text-align:center;color:#9ca3af;font-size:12px;padding:8px">Product Image</div>`;
                                        }}
                                    />
                                </div>
                                <div style={{ padding: '14px 16px' }}>
                                    <p style={{
                                        fontSize: '13px', fontWeight: 600, color: '#111827',
                                        textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap', marginBottom: '4px'
                                    }}>
                                        {product.name}
                                    </p>
                                    <p style={{
                                        fontSize: '11px', color: '#6b7280',
                                        textAlign: 'center'
                                    }}>
                                        {product.category}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
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
