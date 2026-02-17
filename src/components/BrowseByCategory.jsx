import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Tablet, Watch, Camera, Headphones, Gamepad2, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BrowseByCategory = () => {
    const sectionRef = useRef(null);

    const categories = [
        { id: 1, name: 'Phones', Icon: Smartphone },
        { id: 2, name: 'Computers', Icon: Tablet },
        { id: 3, name: 'SmartWatch', Icon: Watch },
        { id: 4, name: 'Camera', Icon: Camera },
        { id: 5, name: 'HeadPhones', Icon: Headphones },
        { id: 6, name: 'Gaming', Icon: Gamepad2 }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current.querySelectorAll('.category-box'), {
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
                opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)',
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
                    <span style={{ color: '#e63946', fontSize: '14px', fontWeight: 600 }}>Categories</span>
                </div>

                {/* Heading + arrows */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111827' }}>Browse By Category</h2>
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

                {/* Category cards */}
                <div className="category-grid" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px'
                }}>
                    {categories.map(({ id, name, Icon }) => (
                        <div key={id} className="category-box" style={{
                            border: '2px solid #e5e7eb', borderRadius: '8px', padding: '24px 32px',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
                            cursor: 'pointer', textAlign: 'center', color: '#374151'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#e63946';
                                e.currentTarget.style.borderColor = '#e63946';
                                e.currentTarget.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '';
                                e.currentTarget.style.borderColor = '#e5e7eb';
                                e.currentTarget.style.color = '#374151';
                            }}
                        >
                            <Icon style={{ width: '48px', height: '48px' }} />
                            <span style={{ fontSize: '14px', fontWeight: 600 }}>{name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .category-grid { grid-template-columns: repeat(3, 1fr) !important; }
                }
                @media (max-width: 640px) {
                    .category-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>
        </section>
    );
};

export default BrowseByCategory;
