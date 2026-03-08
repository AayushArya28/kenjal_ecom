import { Phone, MessageCircle, Download } from 'lucide-react';
import { COMMERCIAL_WHATSAPP_LINK } from '../data/showcaseProducts';

const CATALOGUE_LINK = '/kenjal-catalogue.pdf';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0f172a', color: '#fff', borderTop: '1px solid #1f2937' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '26px 20px 30px' }}>
        <div className="footer-top" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1.2fr', gap: '14px', marginBottom: '18px' }}>
          <div className="reveal-up hover-lift-soft footer-card" style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '14px', padding: '14px' }}>
            <p style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: 700 }}>Contact</p>
            <a href="tel:8686154646" className="footer-contact-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 700 }}>
              <Phone style={{ width: '15px', height: '15px', color: '#86efac' }} />
              8686-15-4646
            </a>
          </div>

          <a
            href={COMMERCIAL_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-up delay-1 hover-lift-soft btn-animated footer-card"
            style={{ background: '#14532d', border: '1px solid #166534', borderRadius: '14px', padding: '14px', color: '#fff', textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 10px 20px rgba(20,83,45,0.2)' }}
          >
            <p style={{ fontSize: '11px', color: '#bbf7d0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: 700 }}>WhatsApp</p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 700 }}>
              <MessageCircle style={{ width: '15px', height: '15px' }} />
              Get Info
            </span>
          </a>

          <div className="reveal-up delay-2 hover-lift-soft footer-card" style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '14px', padding: '14px' }}>
            <p style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: 700 }}>Download Catalogue</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a className="btn-animated footer-download-link" href={CATALOGUE_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', border: '1px solid #374151', borderRadius: '10px', padding: '8px 11px', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 700 }}>
                <Download style={{ width: '13px', height: '13px' }} />
                Domestic
              </a>
              <a className="btn-animated footer-download-link" href={CATALOGUE_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', border: '1px solid #374151', borderRadius: '10px', padding: '8px 11px', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 700 }}>
                <Download style={{ width: '13px', height: '13px' }} />
                Commercial
              </a>
            </div>
          </div>
        </div>

        <p style={{ color: '#6b7280', fontSize: '12px' }}>© {year} Kenjal Industries. All rights reserved.</p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-card { padding: 12px !important; }
          .footer-contact-link { font-size: 14px !important; }
          .footer-download-link { font-size: 12px !important; padding: 7px 10px !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
