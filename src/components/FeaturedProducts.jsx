import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { featuredProducts } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current.querySelectorAll('.product-card'), {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
                opacity: 0, y: 60, duration: 0.8, stagger: 0.15, ease: 'power2.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} style={{ padding: '40px 0', backgroundColor: '#fff' }} id="products">
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                {/* Section Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '16px', height: '40px', backgroundColor: '#e63946', borderRadius: '4px' }}></div>
                        <h2 style={{ fontSize: '28px', fontWeight: 700 }}>Flash Sales</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="arrow-btn" style={{
                            width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f3f4f6',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: 'none', cursor: 'pointer'
                        }}>
                            <ChevronLeft style={{ width: '20px', height: '20px' }} />
                        </button>
                        <button className="arrow-btn" style={{
                            width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f3f4f6',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: 'none', cursor: 'pointer'
                        }}>
                            <ChevronRight style={{ width: '20px', height: '20px' }} />
                        </button>
                    </div>
                </div>

                {/* Products grid */}
                <div className="products-grid" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '32px', marginBottom: '32px'
                }}>
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* View All Products */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="btn-red" style={{
                        backgroundColor: '#e63946', color: '#fff', fontSize: '14px',
                        fontWeight: 600, padding: '16px 48px', borderRadius: '8px',
                        border: 'none', cursor: 'pointer'
                    }}>
                        View All Products
                    </button>
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .products-grid { grid-template-columns: repeat(3, 1fr) !important; }
                }
                @media (max-width: 768px) {
                    .products-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
                }
            `}</style>
        </section>
    );
};

export default FeaturedProducts;
