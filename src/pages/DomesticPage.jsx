import { Link } from 'react-router-dom';
import { allProducts } from '../data/products';
import { DOMESTIC_BUY_LINK } from '../data/showcaseProducts';
import { domesticProducts as showcaseDomestic } from '../data/showcaseProducts';

const domesticFromCatalog = allProducts.filter(p => p.type === 'domestic');

const DomesticPage = () => {
  return (
    <section style={{ background: '#f8f7f4', minHeight: '70vh' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '48px 20px 72px' }}>
        <p className="reveal-up" style={{ color: '#0f766e', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px', fontWeight: 800 }}>
          Domestic Collection
        </p>
        <h1 className="reveal-up delay-1 domestic-page-title" style={{ fontSize: '42px', lineHeight: 1.05, color: '#0f172a', fontWeight: 800, marginBottom: '10px' }}>
          Home Water Purifiers & Appliances
        </h1>
        <p className="reveal-up delay-2" style={{ color: '#52525b', fontSize: '15px', marginBottom: '36px', maxWidth: '520px' }}>
          Pick a product and buy directly on Flipkart. Need help? Contact us via WhatsApp.
        </p>

        {/* Catalog Products (with images) */}
        <div className="domestic-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', marginBottom: '40px' }}>
          {domesticFromCatalog.map((product, index) => (
            <article key={product.id} className={`reveal-up delay-${(index % 4) + 1} hover-lift`} style={{ background: '#fff', borderRadius: '22px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
              <div style={{
                height: '260px',
                background: product.image ? '#f1f5f9' : 'linear-gradient(140deg, #ffffff 0%, #e7f6ef 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
              }}>
                {product.image ? (
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ fontSize: '64px', fontWeight: 900, color: '#d1fae5', letterSpacing: '-2px' }}>{product.shortCode}</span>
                )}
              </div>
              <div style={{ padding: '18px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '6px', lineHeight: 1.3 }}>{product.name}</h3>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px', lineHeight: 1.5 }}>{product.capacity}</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <Link to={`/product/${product.id}`} state={{ product }} style={{ flex: '1', textAlign: 'center', padding: '11px 12px', borderRadius: '11px', border: '1px solid #e2e8f0', textDecoration: 'none', color: '#334155', fontSize: '13px', fontWeight: 700 }}>
                    More Details
                  </Link>
                  <a href={DOMESTIC_BUY_LINK} target="_blank" rel="noopener noreferrer" className="btn-animated" style={{ flex: '1', textAlign: 'center', padding: '11px 12px', borderRadius: '11px', background: '#0f766e', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 700, boxShadow: '0 6px 16px rgba(15,118,110,0.25)' }}>
                    Buy on Flipkart
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Showcase Products (spare parts / accessories) */}
        <div>
          <h2 className="reveal-up" style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', marginBottom: '18px' }}>Spare Parts & Accessories</h2>
          <div className="domestic-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
            {showcaseDomestic.map((product, index) => (
              <article key={product.id} className={`reveal-up delay-${(index % 4) + 1} hover-lift-soft`} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '20px', overflow: 'hidden' }}>
                <div style={{ height: '160px', background: `linear-gradient(140deg, #ffffff 0%, ${index % 2 === 0 ? '#e7f6ef' : '#f2f2f2'} 100%)`, display: 'flex', alignItems: 'flex-end', padding: '16px' }}>
                  <span style={{ background: '#111827', color: '#fff', borderRadius: '999px', padding: '6px 12px', fontSize: '11px', fontWeight: 700 }}>
                    {product.tag}
                  </span>
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '17px', lineHeight: 1.35, color: '#111827', fontWeight: 700, marginBottom: '14px', minHeight: '46px' }}>
                    {product.name}
                  </h3>
                  <a
                    href={DOMESTIC_BUY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-animated"
                    style={{ display: 'inline-flex', background: '#0f766e', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 700, padding: '10px 16px', borderRadius: '11px', boxShadow: '0 6px 16px rgba(15,118,110,0.22)' }}
                  >
                    Buy on Flipkart
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .domestic-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .domestic-grid { grid-template-columns: 1fr !important; }
          .domestic-page-title { font-size: 34px !important; }
        }
        @media (max-width: 420px) {
          .domestic-page-title { font-size: 29px !important; }
        }
      `}</style>
    </section>
  );
};

export default DomesticPage;
