import { Download, FileText, ExternalLink, BookOpen, Package, Wrench, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const pdfUrl = '/kenjal-catalogue.pdf';

const CataloguePage = () => {
    const sections = [
        { Icon: Package, title: 'Water Treatment Systems', desc: 'RO plants, sand filters, carbon filters, micron filters, and high-pressure pump configurations.' },
        { Icon: Layers, title: 'Beverage & Bottling Lines', desc: 'Carbonated drink fillers, monobloc RFC machines, pasteurizers, homogenizers, carbonators.' },
        { Icon: Wrench, title: 'Filling & Packaging Machines', desc: 'Servo fillers, piston fillers (linear & rotary), vacuum packaging, strapping, sealing machines.' },
        { Icon: BookOpen, title: 'Labeling & Printing', desc: 'Shrink sleeve applicator, BOPP hot melt glue labeler, inkjet coding/printing machines.' },
    ];

    return (
        <>
            {/* Hero */}
            <section style={{
                background: 'linear-gradient(135deg, #07111f 0%, #0f172a 44%, #134e4a 100%)',
                padding: '80px 24px 88px', position: 'relative', overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.14), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <p style={{ color: '#99f6e4', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
                        <Link to="/" style={{ color: '#99f6e4', textDecoration: 'none' }}>Home</Link>
                        <span style={{ margin: '0 8px' }}>/</span>
                        <span style={{ color: '#fff' }}>Catalogue</span>
                    </p>
                    <h1 style={{ fontSize: '52px', fontWeight: 900, color: '#fff', letterSpacing: '-1.5px', marginBottom: '16px', lineHeight: 1.06 }}>
                        Product Catalogue
                    </h1>
                    <p style={{ color: '#cbd5e1', fontSize: '17px', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto 32px' }}>
                        Download the complete Kenjal Industries brochure for detailed specifications on all 30+ machine models across 8 product categories.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                        <a
                            href={pdfUrl} target="_blank" rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '9px',
                                background: 'linear-gradient(135deg, #0f766e, #0d9488)', color: '#fff',
                                padding: '15px 32px', borderRadius: '14px', textDecoration: 'none',
                                fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 28px rgba(15,118,110,0.3)',
                            }}
                        >
                            <ExternalLink style={{ width: '17px', height: '17px' }} />
                            View PDF
                        </a>
                        <a
                            href={pdfUrl} download
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '9px',
                                background: 'rgba(255,255,255,0.07)', color: '#e2e8f0',
                                border: '1px solid rgba(255,255,255,0.15)',
                                padding: '15px 32px', borderRadius: '14px', textDecoration: 'none',
                                fontWeight: 700, fontSize: '15px', backdropFilter: 'blur(10px)',
                            }}
                        >
                            <Download style={{ width: '17px', height: '17px' }} />
                            Download Brochure
                        </a>
                    </div>
                </div>
            </section>

            {/* Contents preview */}
            <section style={{ backgroundColor: '#f8fafc', padding: '72px 24px' }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.8px', marginBottom: '12px' }}>What's Inside</h2>
                        <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
                            The catalogue covers all product families with specifications, capacities, and configurations.
                        </p>
                    </div>
                    <div className="cat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '48px' }}>
                        {sections.map(({ Icon, title, desc }) => (
                            <div key={title} style={{ padding: '28px', borderRadius: '22px', background: '#fff', border: '1px solid #e2e8f0', display: 'flex', gap: '20px', alignItems: 'flex-start', transition: 'all 0.2s' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = '#99f6e4'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(13,148,136,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                            >
                                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)', border: '1px solid #99f6e4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icon style={{ width: '22px', height: '22px', color: '#0d9488' }} />
                                </div>
                                <div>
                                    <h3 style={{ color: '#0f172a', fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>{title}</h3>
                                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.75 }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', padding: '36px', borderRadius: '24px', background: 'linear-gradient(135deg, #07111f, #0f172a)', border: '1px solid rgba(153,246,228,0.12)' }}>
                        <FileText style={{ width: '40px', height: '40px', color: '#99f6e4', margin: '0 auto 16px' }} />
                        <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 800, marginBottom: '10px' }}>Kenjal Industries Product Catalogue</h3>
                        <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
                            30+ machine models · 8 product categories · Technical specifications & capacities
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #0f766e, #0d9488)', color: '#fff', padding: '13px 28px', borderRadius: '12px', textDecoration: 'none', fontWeight: 700, fontSize: '14px' }}>
                                <ExternalLink style={{ width: '16px', height: '16px' }} />
                                View in Browser
                            </a>
                            <a href={pdfUrl} download style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.07)', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.14)', padding: '13px 28px', borderRadius: '12px', textDecoration: 'none', fontWeight: 700, fontSize: '14px' }}>
                                <Download style={{ width: '16px', height: '16px' }} />
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 768px) {
                    .cat-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </>
    );
};

export default CataloguePage;

