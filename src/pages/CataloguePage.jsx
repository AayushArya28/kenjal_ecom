import { Download, FileText } from 'lucide-react';

const catalogues = [
    { id: 1, name: 'Kenjal RO Water Purifiers', description: 'Complete range of RO water purifiers', pages: 12 },
    { id: 2, name: 'Kenjal Spare Parts & Filters', description: 'All spare parts, membranes, and filters', pages: 8 },
    { id: 3, name: 'Zodikaa Series', description: 'Zodikaa ionic and membrane product line', pages: 6 },
    { id: 4, name: 'Home Appliances', description: 'LED TVs, Geysers, and more', pages: 10 },
    { id: 5, name: 'Commercial RO Plants', description: '25 LPH and industrial RO systems', pages: 4 },
];

const CataloguePage = () => {
    return (
        <section style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '80vh' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '12px' }}>Catalogue</h1>
                <p style={{ color: '#9ca3af', fontSize: '15px', marginBottom: '40px' }}>
                    Download our product catalogues for detailed specifications and pricing.
                </p>

                <div className="catalogue-grid" style={{
                    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px'
                }}>
                    {catalogues.map((cat) => (
                        <div key={cat.id} className="product-card" style={{
                            backgroundColor: '#111827', borderRadius: '12px', padding: '28px',
                            border: '1px solid #1f2937', cursor: 'pointer',
                            display: 'flex', flexDirection: 'column', gap: '16px'
                        }}>
                            <div style={{
                                width: '56px', height: '56px', borderRadius: '12px',
                                backgroundColor: '#1e3a5f', display: 'flex',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <FileText style={{ width: '28px', height: '28px', color: '#38bdf8' }} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px' }}>{cat.name}</h3>
                                <p style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '4px' }}>{cat.description}</p>
                                <span style={{ color: '#6b7280', fontSize: '12px' }}>{cat.pages} pages</span>
                            </div>
                            <button className="btn-primary" style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                backgroundColor: '#2563eb', color: '#fff', padding: '10px 20px',
                                borderRadius: '8px', fontWeight: 600, fontSize: '13px', border: 'none',
                                cursor: 'pointer', marginTop: 'auto'
                            }}>
                                <Download style={{ width: '16px', height: '16px' }} />
                                Download PDF
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .catalogue-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default CataloguePage;
