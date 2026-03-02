import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
                opacity: 0, y: 60, duration: 0.8, stagger: 0.15, ease: 'power2.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 300; // Updated scroll amount
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section ref={sectionRef} style={{ padding: '60px 0', backgroundColor: '#fff' }} id="products">
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                {/* Section Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '16px', height: '40px', backgroundColor: '#2563eb', borderRadius: '4px' }}></div>
                        <h2 style={{ fontSize: '28px', fontWeight: 700 }}>Flash Sales</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="arrow-btn" onClick={() => scroll('left')} style={{
                            width: '46px', height: '46px', borderRadius: '50%', backgroundColor: '#f3f4f6',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: 'none', cursor: 'pointer', transition: 'all 0.2s'
                        }}>
                            <ChevronLeft style={{ width: '22px', height: '22px' }} />
                        </button>
                        <button className="arrow-btn" onClick={() => scroll('right')} style={{
                            width: '46px', height: '46px', borderRadius: '50%', backgroundColor: '#f3f4f6',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: 'none', cursor: 'pointer', transition: 'all 0.2s'
                        }}>
                            <ChevronRight style={{ width: '22px', height: '22px' }} />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollContainerRef}
                    className="products-carousel"
                    style={{
                        display: 'flex',
                        gap: '24px',
                        overflowX: 'hidden',
                        paddingBottom: '24px',
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none' // IE/Edge
                    }}
                >
                    {featuredProducts.map((product) => (
                        <div key={product.id} style={{ minWidth: '240px', flex: '0 0 auto' }}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {/* Spacer */}
                <div style={{ height: '40px', width: '100%' }}></div>

                {/* View All Products */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', paddingBottom: '16px', position: 'relative', zIndex: 1 }}>
                    <button className="btn-primary" style={{
                        backgroundColor: '#2563eb', color: '#fff', fontSize: '14px',
                        fontWeight: 600, padding: '16px 48px', borderRadius: '8px',
                        border: 'none', cursor: 'pointer'
                    }}>
                        View All Products
                    </button>
                </div>
            </div>

            <style>{`
                .products-carousel::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default FeaturedProducts;
