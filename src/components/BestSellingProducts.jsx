import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from './ProductCard';
import { bestSellingProducts } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const BestSellingProducts = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current.querySelectorAll('.product-card'), {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
                opacity: 0, x: -50, duration: 0.8, stagger: 0.12, ease: 'power2.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} style={{ padding: '40px 0', backgroundColor: '#fff', borderTop: '1px solid #f3f4f6' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                {/* Section label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ width: '12px', height: '28px', backgroundColor: '#e63946', borderRadius: '3px' }}></div>
                    <span style={{ color: '#e63946', fontSize: '14px', fontWeight: 600 }}>This Month</span>
                </div>

                {/* Heading + View All */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111827' }}>Best Selling Products</h2>
                    <button className="btn-red" style={{
                        backgroundColor: '#e63946', color: '#fff', fontSize: '14px', fontWeight: 600,
                        padding: '12px 32px', borderRadius: '8px', border: 'none', cursor: 'pointer'
                    }}>
                        View All
                    </button>
                </div>

                {/* Products */}
                <div className="bestselling-grid" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px'
                }}>
                    {bestSellingProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .bestselling-grid { grid-template-columns: repeat(3, 1fr) !important; }
                }
                @media (max-width: 768px) {
                    .bestselling-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
                }
            `}</style>
        </section>
    );
};

export default BestSellingProducts;
