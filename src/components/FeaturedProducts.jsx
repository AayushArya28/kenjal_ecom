import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import ProductCard from './ProductCard';
import { featuredProducts } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
    const sectionRef = useRef(null);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current.querySelectorAll('.product-card'), {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
                opacity: 0, y: 60, duration: 0.8, stagger: 0.12, ease: 'power2.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -320 : 320, behavior: 'smooth'
            });
        }
    };

    return (
        <section ref={sectionRef} style={{
            padding: '72px 0 80px', backgroundColor: '#fff',
            borderTop: '1px solid #f1f5f9',
        }} id="products">
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                {/* Section Label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <div className="section-accent-bar" style={{ height: '26px' }} />
                    <span style={{
                        color: '#2563eb', fontSize: '13.5px', fontWeight: 700, letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                    }}>Today's</span>
                </div>

                {/* Heading + Arrows */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Zap style={{ width: '22px', height: '22px', color: '#fbbf24', fill: '#fbbf24' }} />
                        <h2 style={{
                            fontSize: '30px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px'
                        }}>Flash Sales</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {['left', 'right'].map(dir => (
                            <button key={dir} className="arrow-btn" onClick={() => scroll(dir)} style={{
                                width: '44px', height: '44px', borderRadius: '50%',
                                backgroundColor: '#f1f5f9', border: '1.5px solid #e2e8f0',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', color: '#475569',
                            }}>
                                {dir === 'left'
                                    ? <ChevronLeft style={{ width: '20px', height: '20px' }} />
                                    : <ChevronRight style={{ width: '20px', height: '20px' }} />
                                }
                            </button>
                        ))}
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollContainerRef}
                    className="products-carousel"
                    style={{
                        display: 'flex', gap: '20px',
                        overflowX: 'hidden', paddingBottom: '8px',
                        scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none',
                    }}
                >
                    {featuredProducts.map((product) => (
                        <div key={product.id} style={{ minWidth: '240px', flex: '0 0 auto' }}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #e2e8f0, transparent)', margin: '40px 0 32px' }} />

                {/* View All */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="btn-primary" style={{
                        background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                        color: '#fff', fontSize: '14.5px',
                        fontWeight: 700, padding: '14px 52px', borderRadius: '12px',
                        border: 'none', cursor: 'pointer',
                        boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
                    }}>
                        View All Products
                    </button>
                </div>
            </div>

            <style>{`
                .products-carousel::-webkit-scrollbar { display: none; }
            `}</style>
        </section>
    );
};

export default FeaturedProducts;
