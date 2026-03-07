import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const [liked, setLiked] = useState(false);

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
                    fontSize: '13.5px', color: '#0f172a', fontWeight: 600,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', lineHeight: 1.4,
                }}>
                    {product.name}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
