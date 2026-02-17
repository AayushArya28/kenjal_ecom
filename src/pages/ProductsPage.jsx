import { useState } from 'react';

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
        <section style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '80vh' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>Products</h1>

                {/* Category tabs */}
                <div className="product-tabs" style={{
                    display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px',
                    borderBottom: '1px solid #374151', paddingBottom: '16px'
                }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '8px 20px', borderRadius: '4px', fontSize: '13px',
                                fontWeight: 600, cursor: 'pointer', border: 'none',
                                backgroundColor: activeCategory === cat ? '#2563eb' : 'transparent',
                                color: activeCategory === cat ? '#fff' : '#38bdf8',
                                transition: 'all 0.2s',
                                textDecoration: activeCategory === cat ? 'none' : 'underline'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product grid */}
                <div className="page-products-grid" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '24px'
                }}>
                    {filtered.map((product) => (
                        <div key={product.id} className="product-card" style={{
                            backgroundColor: '#111827', borderRadius: '12px', overflow: 'hidden',
                            cursor: 'pointer', border: '1px solid #1f2937'
                        }}>
                            <div style={{
                                aspectRatio: '1', backgroundColor: '#1f2937',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                overflow: 'hidden', padding: '16px'
                            }}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'
                                    }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML += `<div style="text-align:center;color:#9ca3af;font-size:12px;padding:8px">Product Image</div>`;
                                    }}
                                />
                            </div>
                            <div style={{ padding: '14px 16px' }}>
                                <p style={{
                                    fontSize: '13px', fontWeight: 600, color: '#38bdf8',
                                    textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {product.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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
        </section>
    );
};

export default ProductsPage;
