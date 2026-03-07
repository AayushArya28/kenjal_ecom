import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { featuredProducts } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
    const sectionRef = useRef(null);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current.querySelectorAll('.product-card'), {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
                opacity: 0,
                y: 48,
                duration: 0.8,
                stagger: 0.08,
                ease: 'power2.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -340 : 340,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section ref={sectionRef} style={{ padding: '60px 0 64px', backgroundColor: '#fff', borderTop: '1px solid #e2e8f0' }} id="products">
            <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div className="section-accent-bar" style={{ height: '26px' }} />
                    <span style={{ color: '#0f766e', fontSize: '13.5px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        Featured Range
                    </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '26px', flexWrap: 'wrap', gap: '14px' }}>
                    <div style={{ display: 'grid', gap: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Factory style={{ width: '22px', height: '22px', color: '#c08428' }} />
                            <h2 style={{ fontSize: '30px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px' }}>Core Machinery</h2>
                        </div>
                        <p style={{ maxWidth: '700px', color: '#64748b', fontSize: '15px', lineHeight: 1.7 }}>
                            A curated selection of Kenjal systems for beverage processing, water treatment, bottling, and packaging automation.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {['left', 'right'].map((dir) => (
                            <button key={dir} className="arrow-btn" onClick={() => scroll(dir)} style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                backgroundColor: '#f8fafc',
                                border: '1.5px solid #dbe4ea',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: '#475569',
                            }}>
                                {dir === 'left'
                                    ? <ChevronLeft style={{ width: '20px', height: '20px' }} />
                                    : <ChevronRight style={{ width: '20px', height: '20px' }} />}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="products-carousel"
                    style={{
                        display: 'flex',
                        gap: '18px',
                        overflowX: 'auto',
                        paddingBottom: '12px',
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch',
                        scrollSnapType: 'x proximity',
                    }}
                >
                    {featuredProducts.map((product) => (
                        <div key={product.id} style={{ minWidth: '292px', maxWidth: '292px', flex: '0 0 auto', scrollSnapAlign: 'start' }}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #e2e8f0, transparent)', margin: '28px 0 24px' }} />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/products" className="btn-primary" style={{
                        background: 'linear-gradient(135deg, #0f766e, #115e59)',
                        color: '#fff',
                        fontSize: '14.5px',
                        fontWeight: 700,
                        padding: '14px 40px',
                        borderRadius: '14px',
                        border: 'none',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        boxShadow: '0 14px 32px rgba(15,118,110,0.22)',
                    }}>
                        Explore Full Product Range
                    </Link>
                </div>
            </div>

            <style>{`
                .products-carousel::-webkit-scrollbar { display: none; }
            `}</style>
        </section>
    );
};

export default FeaturedProducts;