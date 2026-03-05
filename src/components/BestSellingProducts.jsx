import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp } from 'lucide-react';
import ProductCard from './ProductCard';
import { bestSellingProducts } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const BestSellingProducts = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current.querySelectorAll('.product-card'), {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
                opacity: 0, x: -40, duration: 0.75, stagger: 0.1, ease: 'power2.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} style={{
            padding: '72px 0', backgroundColor: '#f8fafc',
            borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                {/* Section label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <div className="section-accent-bar" style={{ height: '26px' }} />
                    <span style={{
                        color: '#2563eb', fontSize: '13.5px', fontWeight: 700,
                        letterSpacing: '0.5px', textTransform: 'uppercase',
                    }}>This Month</span>
                </div>

                {/* Heading + View All */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <TrendingUp style={{ width: '22px', height: '22px', color: '#2563eb' }} />
                        <h2 style={{ fontSize: '30px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px' }}>
                            Best Selling Products
                        </h2>
                    </div>
                    <button className="btn-primary" style={{
                        background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                        color: '#fff', fontSize: '14px', fontWeight: 700,
                        padding: '12px 32px', borderRadius: '10px', border: 'none', cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
                    }}>
                        View All
                    </button>
                </div>

                {/* Products */}
                <div className="bestselling-grid" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px'
                }}>
                    {bestSellingProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) { .bestselling-grid { grid-template-columns: repeat(3, 1fr) !important; } }
                @media (max-width: 768px)  { .bestselling-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; } }
                @media (max-width: 480px)  { .bestselling-grid { grid-template-columns: 1fr !important; } }
            `}</style>
        </section>
    );
};

export default BestSellingProducts;
