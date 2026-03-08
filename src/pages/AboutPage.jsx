import { MessageCircle } from 'lucide-react';
import { COMMERCIAL_WHATSAPP_LINK } from '../data/showcaseProducts';

const AboutPage = () => {
  return (
    <section style={{ background: '#f8f7f4', minHeight: '65vh' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '48px 20px 72px' }}>
        <p className="about-kicker reveal-up" style={{ color: '#0f766e', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800, marginBottom: '8px' }}>
          About Kenjal
        </p>
        <h1 className="about-title reveal-up delay-1" style={{ color: '#0f172a', fontSize: '44px', lineHeight: 1.05, fontWeight: 800, marginBottom: '24px' }}>
          Building Trust Through
          <br />
          Quality & Simplicity
        </h1>

        <div className="about-card reveal-up delay-2" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '22px', padding: '28px', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Who We Are</h2>
          <p className="about-copy" style={{ color: '#3f3f46', fontSize: '16px', lineHeight: 1.85 }}>
            Kenjal Industries is a trusted name in water treatment, beverage processing, and packaging solutions.
            We serve both households and businesses with reliable, high-performance products backed by dedicated technical support.
            From domestic RO purifiers to full-scale industrial bottling plants, our range covers every water and beverage need.
          </p>
        </div>

        <div className="about-card reveal-up delay-3" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '22px', padding: '28px', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>What We Do</h2>
          <p className="about-copy" style={{ color: '#3f3f46', fontSize: '16px', lineHeight: 1.85, marginBottom: '14px' }}>
            Our product catalog spans two clear segments:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '16px', padding: '18px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>🏠 Domestic</h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.7 }}>
                Home water purifiers, geysers, and filter accessories — available for direct purchase on Flipkart.
              </p>
            </div>
            <div style={{ background: '#faf5ff', border: '1px solid #f3e8ff', borderRadius: '16px', padding: '18px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>🏭 Commercial</h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.7 }}>
                Industrial RO plants, bottling machines, packaging lines, and more — enquire via WhatsApp for sizing and pricing.
              </p>
            </div>
          </div>
        </div>

        <div className="about-card reveal-up delay-4" style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '22px', padding: '28px', marginBottom: '18px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Our Promise</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
            {[
              { icon: '⚡', title: 'Fast Action', desc: 'Browse, select, and connect in seconds.' },
              { icon: '🎯', title: 'Clear Products', desc: 'No clutter. Each product is visible and easy to understand.' },
              { icon: '🤝', title: 'Direct Support', desc: 'Our team is always reachable via WhatsApp or phone.' },
            ].map(item => (
              <div key={item.title} style={{ textAlign: 'center', padding: '18px' }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>{item.title}</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-up delay-4" style={{ textAlign: 'center', marginTop: '8px' }}>
          <a
            href={COMMERCIAL_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-animated"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '9px',
              background: '#14532d', color: '#fff', textDecoration: 'none',
              borderRadius: '14px', padding: '14px 28px', fontWeight: 700, fontSize: '15px',
              boxShadow: '0 10px 24px rgba(20,83,45,0.22)',
            }}
          >
            <MessageCircle style={{ width: '16px', height: '16px' }} />
            Talk to Us on WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-card > div[style*="grid-template-columns: 1fr 1fr"],
          .about-card > div[style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .about-title { font-size: 34px !important; }
          .about-card { padding: 20px !important; }
          .about-copy { font-size: 15px !important; }
        }
        @media (max-width: 420px) {
          .about-title { font-size: 30px !important; }
          .about-kicker { font-size: 11px !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutPage;
