import { Star, Heart, Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <Star key={i} style={{
                width: '14px', height: '14px',
                fill: i < Math.floor(rating) ? '#fbbf24' : '#e5e7eb',
                color: i < Math.floor(rating) ? '#fbbf24' : '#e5e7eb',
            }} />
        ));
    };

    return (
        <div className="product-card" style={{ position: 'relative', cursor: 'pointer' }}>
            {/* Image */}
            <div style={{
                position: 'relative', backgroundColor: '#f9fafb', borderRadius: '8px',
                overflow: 'hidden', aspectRatio: '1', display: 'flex',
                alignItems: 'center', justifyContent: 'center', padding: '16px'
            }}>
                <img
                    src={product.image} alt={product.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML += '<span style="color:#d1d5db;font-size:12px">Image</span>';
                    }}
                />
                {/* Discount badge */}
                {product.discount && (
                    <span style={{
                        position: 'absolute', top: '8px', left: '8px', backgroundColor: '#2563eb',
                        color: '#fff', fontSize: '10px', fontWeight: 700, padding: '4px 8px',
                        borderRadius: '50px'
                    }}>
                        -{product.discount}%
                    </span>
                )}
                {/* Action icons */}
                <div style={{
                    position: 'absolute', top: '8px', right: '8px',
                    display: 'flex', flexDirection: 'column', gap: '8px'
                }}>
                    <button className="icon-hover" style={{
                        width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#fff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', border: 'none', cursor: 'pointer'
                    }}>
                        <Heart style={{ width: '14px', height: '14px', color: '#9ca3af' }} />
                    </button>
                    <button className="icon-hover" style={{
                        width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#fff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', border: 'none', cursor: 'pointer'
                    }}>
                        <Eye style={{ width: '14px', height: '14px', color: '#9ca3af' }} />
                    </button>
                </div>

                {/* Add To Cart on hover */}
                <div className="add-to-cart-bar" style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    backgroundColor: '#000', color: '#fff', textAlign: 'center',
                    padding: '10px 0', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                    letterSpacing: '0.3px'
                }}>
                    Add To Cart
                </div>
            </div>

            {/* Info */}
            <div style={{ paddingTop: '12px', paddingBottom: '4px' }}>
                <p style={{ fontSize: '13px', color: '#1f2937', fontWeight: 500, marginBottom: '6px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {product.name}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ color: '#2563eb', fontSize: '15px', fontWeight: 700 }}>₹{product.price}</span>
                    {product.originalPrice && (
                        <span style={{ color: '#9ca3af', fontSize: '12px', textDecoration: 'line-through' }}>₹{product.originalPrice}</span>
                    )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ display: 'flex' }}>{renderStars(product.rating)}</div>
                    <span style={{ color: '#9ca3af', fontSize: '11px' }}>({product.reviews})</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
