import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categoryStyles = {
    'Water Treatment Systems': {
        background: 'linear-gradient(135deg, #d1fae5, #ecfeff)',
        accent: '#0f766e',
    },
    'Beverage Processing Equipment': {
        background: 'linear-gradient(135deg, #dbeafe, #ecfeff)',
        accent: '#0284c7',
    },
    'Bottling Machines': {
        background: 'linear-gradient(135deg, #cffafe, #e0f2fe)',
        accent: '#0e7490',
    },
    'Filling Machines': {
        background: 'linear-gradient(135deg, #fef3c7, #fff7ed)',
        accent: '#b45309',
    },
    'PET Bottle Manufacturing Machines': {
        background: 'linear-gradient(135deg, #e0f2fe, #f0fdfa)',
        accent: '#0f766e',
    },
    'Packaging Machines': {
        background: 'linear-gradient(135deg, #fee2e2, #fff7ed)',
        accent: '#c2410c',
    },
    'Labeling & Printing Machines': {
        background: 'linear-gradient(135deg, #bae6fd, #dbeafe)',
        accent: '#0369a1',
    },
    'Industrial Pumps': {
        background: 'linear-gradient(135deg, #e2e8f0, #f8fafc)',
        accent: '#334155',
    },
};

const ProductCard = ({ product }) => {
    const style = categoryStyles[product.category] || categoryStyles['Beverage Processing Equipment'];

    return (
        <Link to={`/product/${product.id}`} state={{ product }} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="product-card" style={{ position: 'relative', cursor: 'pointer', background: '#fff', minHeight: '100%' }}>
                <div style={{
                    position: 'relative',
                    background: style.background,
                    borderRadius: '18px 18px 0 0',
                    overflow: 'hidden',
                    minHeight: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '18px',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'flex-start' }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '6px 10px',
                            borderRadius: '999px',
                            backgroundColor: 'rgba(255,255,255,0.78)',
                            color: style.accent,
                            fontSize: '10.5px',
                            fontWeight: 800,
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                            border: '1px solid rgba(255,255,255,0.85)',
                        }}>
                            {product.category}
                        </span>
                        <div style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '14px',
                            backgroundColor: 'rgba(15,23,42,0.08)',
                            color: style.accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: 900,
                            letterSpacing: '0.8px',
                        }}>
                            {product.shortCode}
                        </div>
                    </div>

                    <div style={{ position: 'relative', minHeight: '90px' }}>
                        <div style={{
                            position: 'absolute',
                            right: '-14px',
                            bottom: '-30px',
                            width: '120px',
                            height: '120px',
                            borderRadius: '32px',
                            border: '1px solid rgba(15,23,42,0.08)',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.55), rgba(255,255,255,0.08))',
                            transform: 'rotate(16deg)',
                        }} />
                        <div style={{
                            position: 'absolute',
                            left: '0',
                            bottom: '0',
                            width: '96px',
                            height: '96px',
                            borderRadius: '24px',
                            border: '1px solid rgba(15,23,42,0.08)',
                            background: 'rgba(255,255,255,0.35)',
                        }} />
                    </div>

                    <div className="add-to-cart-bar" style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
                        background: 'linear-gradient(135deg, #0f766e, #0d9488)',
                        color: '#fff', textAlign: 'center',
                        padding: '12px 16px', fontSize: '12.5px', fontWeight: 700,
                        letterSpacing: '0.4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                    }}>
                        View Details
                        <ArrowUpRight style={{ width: '14px', height: '14px' }} />
                    </div>
                </div>

                <div style={{ padding: '18px 18px 16px', display: 'grid', gap: '10px' }}>
                    <p style={{
                        fontSize: '16px', color: '#0f172a', fontWeight: 700,
                        lineHeight: 1.35,
                        minHeight: '44px',
                    }}>
                        {product.name}
                    </p>
                    <p style={{
                        fontSize: '13.5px', color: '#64748b', lineHeight: 1.6,
                        minHeight: '66px',
                    }}>
                        {product.summary}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', paddingTop: '8px', borderTop: '1px solid #e2e8f0' }}>
                        <span style={{ fontSize: '11px', color: '#0f766e', fontWeight: 800, letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                            Capacity
                        </span>
                        <span style={{ fontSize: '12px', color: '#0f172a', fontWeight: 700, textAlign: 'right' }}>
                            {product.capacity}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;