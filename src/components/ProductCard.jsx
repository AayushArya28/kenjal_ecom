import { Star, Heart, Eye, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const [liked, setLiked] = useState(false);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <Star key={i} style={{
                width: '13px', height: '13px',
                fill: i < Math.floor(rating) ? '#fbbf24' : '#e2e8f0',
                color: i < Math.floor(rating) ? '#fbbf24' : '#e2e8f0',
                flexShrink: 0,
            }} />
        ));
    };

    return (
        <div className="product-card" style={{ position: 'relative', cursor: 'pointer', background: '#fff' }}>
            {/* Image area */}
            <div style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #f8fafc, #f0f9ff)',
                borderRadius: '12px 12px 0 0',
                overflow: 'hidden', aspectRatio: '1', display: 'flex',
                alignItems: 'center', justifyContent: 'center', padding: '20px',
            }}>
                <img
                    src={product.image} alt={product.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML += '<span style="color:#cbd5e1;font-size:12px;font-weight:500">No Image</span>';
                    }}
                />

                {/* Discount badge */}
                {product.discount && (
                    <span style={{
                        position: 'absolute', top: '10px', left: '10px', zIndex: 2,
                        background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                        color: '#fff', fontSize: '10px', fontWeight: 800, padding: '4px 10px',
                        borderRadius: '99px', letterSpacing: '0.2px',
                        boxShadow: '0 2px 8px rgba(37,99,235,0.35)',
                    }}>
                        -{product.discount}%
                    </span>
                )}

                {/* Action icons */}
                <div style={{
                    position: 'absolute', top: '10px', right: '10px',
                    display: 'flex', flexDirection: 'column', gap: '6px', zIndex: 3,
                }}>
                    <button
                        className="icon-hover"
                        onClick={(e) => { e.stopPropagation(); setLiked(l => !l); }}
                        style={{
                            width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#fff',
                            boxShadow: '0 2px 12px rgba(15,23,42,0.12)', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', border: 'none', cursor: 'pointer',
                            transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
                        }}
                    >
                        <Heart style={{
                            width: '14px', height: '14px',
                            color: liked ? '#ef4444' : '#94a3b8',
                            fill: liked ? '#ef4444' : 'none',
                            transition: 'all 0.2s',
                        }} />
                    </button>
                    <button className="icon-hover" style={{
                        width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#fff',
                        boxShadow: '0 2px 12px rgba(15,23,42,0.12)', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', border: 'none', cursor: 'pointer',
                    }}>
                        <Eye style={{ width: '14px', height: '14px', color: '#94a3b8' }} />
                    </button>
                </div>

                {/* Add To Cart bar */}
                <div className="add-to-cart-bar" style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
                    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                    color: '#fff', textAlign: 'center',
                    padding: '11px 0', fontSize: '12.5px', fontWeight: 700, cursor: 'pointer',
                    letterSpacing: '0.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                }}>
                    <ShoppingCart style={{ width: '14px', height: '14px' }} />
                    Add To Cart
                </div>
            </div>

            {/* Info */}
            <div style={{ padding: '14px 14px 12px' }}>
                <p style={{
                    fontSize: '13.5px', color: '#0f172a', fontWeight: 600, marginBottom: '8px',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', lineHeight: 1.4,
                }}>
                    {product.name}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{
                        background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        fontSize: '16px', fontWeight: 800,
                    }}>₹{product.price}</span>
                    {product.originalPrice && (
                        <span style={{ color: '#94a3b8', fontSize: '12px', textDecoration: 'line-through', fontWeight: 400 }}>₹{product.originalPrice}</span>
                    )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ display: 'flex', gap: '1px' }}>{renderStars(product.rating)}</div>
                    <span style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 500 }}>({product.reviews})</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
