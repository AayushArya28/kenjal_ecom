import { Download, FileText, ExternalLink } from 'lucide-react';

const pdfUrl = '/kenjal-catalogue.pdf';

const CataloguePage = () => {
    return (
        <section style={{ backgroundColor: '#fff', color: '#111827', minHeight: '80vh' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
                {/* Section label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                    <div style={{ width: '16px', height: '40px', backgroundColor: '#2563eb', borderRadius: '4px' }}></div>
                    <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#111827' }}>Catalogue</h1>
                </div>
                <p style={{ color: '#6b7280', fontSize: '15px', marginBottom: '40px' }}>
                    Download our complete product catalogue for detailed specifications and pricing.
                </p>

                {/* Single catalogue card */}
                <div style={{ maxWidth: '480px' }}>
                    <div className="product-card" style={{
                        backgroundColor: '#f9fafb', borderRadius: '12px', padding: '28px',
                        border: '1px solid #e5e7eb',
                        display: 'flex', flexDirection: 'column', gap: '16px'
                    }}>
                        <div style={{
                            width: '56px', height: '56px', borderRadius: '12px',
                            backgroundColor: '#dbeafe', display: 'flex',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <FileText style={{ width: '28px', height: '28px', color: '#2563eb' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '6px', color: '#111827' }}>Kenjal Product Catalogue</h3>
                            <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>
                                Complete product range — RO water purifiers, spare parts, filters, home appliances, and more.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', flexWrap: 'wrap' }}>
                            <a href={pdfUrl} target="_blank" rel="noopener noreferrer"
                                className="btn-primary" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    backgroundColor: '#2563eb', color: '#fff', padding: '10px 20px',
                                    borderRadius: '8px', fontWeight: 600, fontSize: '13px', border: 'none',
                                    cursor: 'pointer', textDecoration: 'none'
                                }}>
                                <ExternalLink style={{ width: '16px', height: '16px' }} />
                                View PDF
                            </a>
                            <a href={pdfUrl} download
                                className="btn-primary" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    backgroundColor: '#fff', color: '#2563eb', padding: '10px 20px',
                                    borderRadius: '8px', fontWeight: 600, fontSize: '13px',
                                    border: '1px solid #2563eb',
                                    cursor: 'pointer', textDecoration: 'none'
                                }}>
                                <Download style={{ width: '16px', height: '16px' }} />
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CataloguePage;
