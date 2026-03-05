import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Tablet, Watch, Camera, Headphones, Gamepad2, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const categoryColors = [
    { bg: 'linear-gradient(135deg, #dbeafe, #eff6ff)', icon: '#2563eb', border: '#bfdbfe' },
    { bg: 'linear-gradient(135deg, #fce7f3, #fdf4ff)', icon: '#db2777', border: '#f9a8d4' },
    { bg: 'linear-gradient(135deg, #dcfce7, #f0fdf4)', icon: '#16a34a', border: '#86efac' },
    { bg: 'linear-gradient(135deg, #fff7ed, #fffbeb)', icon: '#ea580c', border: '#fed7aa' },
    { bg: 'linear-gradient(135deg, #f3e8ff, #fdf4ff)', icon: '#7c3aed', border: '#d8b4fe' },
    { bg: 'linear-gradient(135deg, #fef2f2, #fff1f2)', icon: '#dc2626', border: '#fecaca' },
];

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
                opacity: 0, scale: 0.82, y: 20, duration: 0.55, stagger: 0.08, ease: 'back.out(1.7)',
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
                        color: '#2563eb', fontSize: '13.5px', fontWeight: 700, letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                    }}>Categories</span>
                </div>

                {/* Heading + arrows */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
                    <h2 style={{ fontSize: '30px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px' }}>Browse By Category</h2>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {['left', 'right'].map(dir => (
                            <button key={dir} className="arrow-btn" style={{
                                width: '44px', height: '44px', borderRadius: '50%',
                                backgroundColor: '#fff', border: '1.5px solid #e2e8f0',
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

                {/* Category cards */}
                <div className="category-grid" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px'
                }}>
                    {categories.map(({ id, name, Icon }, idx) => {
                        const colors = categoryColors[idx % categoryColors.length];
                        return (
                            <div key={id} className="category-box" style={{
                                border: `1.5px solid ${colors.border}`,
                                background: colors.bg,
                                borderRadius: '16px', padding: '28px 16px',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px',
                                cursor: 'pointer', textAlign: 'center', color: '#0f172a',
                                boxShadow: '0 2px 8px rgba(15,23,42,0.04)',
                            }}>
                                <div style={{
                                    width: '52px', height: '52px', borderRadius: '14px',
                                    background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: `0 4px 16px ${colors.border}`,
                                    color: colors.icon,
                                    position: 'relative', zIndex: 1,
                                }}>
                                    <Icon style={{ width: '26px', height: '26px' }} />
                                </div>
                                <span style={{ fontSize: '13.5px', fontWeight: 700, position: 'relative', zIndex: 1 }}>{name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) { .category-grid { grid-template-columns: repeat(3, 1fr) !important; } }
                @media (max-width: 640px)  { .category-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            `}</style>
        </section>
    );
};

export default BrowseByCategory;
