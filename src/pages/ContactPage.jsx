import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Globe, Send } from 'lucide-react';

const CONTACT_NUMBER = '8686154646';
const WHATSAPP_LINK = `https://wa.me/91${CONTACT_NUMBER}`;

const ContactPage = () => {
  const [query, setQuery] = useState('');

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(query || 'Hi, I want to know more about Kenjal products.');
    window.open(`${WHATSAPP_LINK}?text=${text}`, '_blank');
  };

  return (
    <section style={{ background: '#f8f7f4', minHeight: '72vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '44px 20px 72px' }}>
        <p className="reveal-up" style={{ textAlign: 'center', color: '#52525b', letterSpacing: '1.2px', fontSize: '12px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '12px' }}>
          Contact Us
        </p>

        <h1 className="contact-title reveal-up delay-1" style={{ textAlign: 'center', color: '#0f172a', fontSize: '46px', lineHeight: 1.04, fontWeight: 800, marginBottom: '16px' }}>
          Let's Talk Business
        </h1>

        <p className="reveal-up delay-2" style={{ textAlign: 'center', color: '#3f3f46', fontSize: '17px', lineHeight: 1.65, maxWidth: '600px', margin: '0 auto 36px' }}>
          Reach out for product enquiries, project consultations, custom machinery quotes, or after-sales support.
        </p>

        {/* ─── Office Cards ─── */}
        <div className="office-grid reveal-up delay-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', marginBottom: '24px' }}>
          {/* Head Office */}
          <article style={{ background: 'linear-gradient(135deg, #0f172a, #134e4a)', borderRadius: '22px', padding: '28px', color: '#fff' }}>
            <span style={{ display: 'inline-block', background: 'rgba(153,246,228,0.15)', border: '1px solid rgba(153,246,228,0.25)', borderRadius: '999px', padding: '5px 14px', fontSize: '11px', fontWeight: 800, color: '#5eead4', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '16px' }}>
              🏢 Head Office
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '18px' }}>Gurugram, Haryana</h2>
            <div style={{ display: 'grid', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin style={{ width: '16px', height: '16px', color: '#5eead4', marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '14px', lineHeight: 1.6, color: '#cbd5e1' }}>DLF Phase-3, 27/11<br />Gurugram, Haryana – 122002</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone style={{ width: '16px', height: '16px', color: '#5eead4', flexShrink: 0 }} />
                <a href={`tel:${CONTACT_NUMBER}`} style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>8686-15-4646</a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail style={{ width: '16px', height: '16px', color: '#5eead4', flexShrink: 0 }} />
                <a href="mailto:kenjalindustries@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>kenjalindustries@gmail.com</a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Globe style={{ width: '16px', height: '16px', color: '#5eead4', flexShrink: 0 }} />
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href="https://www.kenjal.com" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>www.kenjal.com ↗</a>
                  <a href="https://www.kenjal.in" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>www.kenjal.in ↗</a>
                </div>
              </div>
            </div>
          </article>

          {/* Branch Office */}
          <article style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '22px', padding: '28px' }}>
            <span style={{ display: 'inline-block', background: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '999px', padding: '5px 14px', fontSize: '11px', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '16px' }}>
              🏢 Branch Office
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '18px' }}>Patna, Bihar</h2>
            <div style={{ display: 'grid', gap: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin style={{ width: '16px', height: '16px', color: '#16a34a', marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '14px', lineHeight: 1.6, color: '#475569' }}>Plot 24, Road 4<br />Krishnachandra Nagar, Near Zero Mile<br />Patna, Bihar</span>
              </div>
            </div>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '16px' }}>
              <p style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>Channel Partner (All Bihar)</p>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>Aradhya Aqua Industry handles Kenjal distribution across the Bihar region from this location.</p>
            </div>
          </article>
        </div>

        {/* ─── Quick Contact Row ─── */}
        <div className="contact-quick-row reveal-up delay-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '28px' }}>
          <a href={`tel:${CONTACT_NUMBER}`} className="hover-lift-soft" style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '18px', textDecoration: 'none' }}>
            <Phone style={{ width: '18px', height: '18px', color: '#0f766e' }} />
            <div>
              <p style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700 }}>Call Us</p>
              <p style={{ fontSize: '16px', color: '#0f172a', fontWeight: 700 }}>8686-15-4646</p>
            </div>
          </a>
          <a href="mailto:kenjalindustries@gmail.com" className="hover-lift-soft" style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '18px', textDecoration: 'none' }}>
            <Mail style={{ width: '18px', height: '18px', color: '#0f766e' }} />
            <div>
              <p style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700 }}>Email Us</p>
              <p style={{ fontSize: '16px', color: '#0f172a', fontWeight: 700 }}>kenjalindustries@gmail.com</p>
            </div>
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover-lift-soft" style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '18px', textDecoration: 'none' }}>
            <MessageCircle style={{ width: '18px', height: '18px', color: '#16a34a' }} />
            <div>
              <p style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700 }}>WhatsApp</p>
              <p style={{ fontSize: '16px', color: '#0f172a', fontWeight: 700 }}>+91 {CONTACT_NUMBER}</p>
            </div>
          </a>
        </div>

        {/* ─── WhatsApp Query + Map ─── */}
        <div className="query-map-grid reveal-up delay-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '18px' }}>
          {/* WhatsApp Quick Query */}
          <div style={{ background: '#0f172a', borderRadius: '22px', padding: '28px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <MessageCircle style={{ width: '20px', height: '20px', color: '#5eead4' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 800 }}>WhatsApp Quick Query</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>Typical response within a few hours</p>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe the machine or plant you need, capacity requirements, industry, or any other details..."
                style={{
                  width: '100%', minHeight: '120px', background: '#1e293b', border: '1px solid #334155',
                  borderRadius: '14px', padding: '16px', color: '#fff', fontSize: '14px', lineHeight: 1.6,
                  resize: 'vertical', fontFamily: 'inherit', outline: 'none',
                }}
              />
            </div>
            <div style={{ marginTop: '18px' }}>
              <button
                onClick={handleWhatsAppSend}
                className="btn-animated"
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  background: '#16a34a', color: '#fff', border: 'none', borderRadius: '14px',
                  padding: '14px 24px', fontWeight: 700, fontSize: '15px', cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(22,163,74,0.3)',
                }}
              >
                <Send style={{ width: '16px', height: '16px' }} />
                Send on WhatsApp
              </button>
              <p style={{ fontSize: '11px', color: '#64748b', marginTop: '10px', textAlign: 'center' }}>
                Opens WhatsApp with your message pre-filled for +91 {CONTACT_NUMBER}
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div style={{ borderRadius: '22px', overflow: 'hidden', border: '1px solid #e5e7eb', minHeight: '380px' }}>
            <iframe
              title="Kenjal Industries Head Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.123456789!2d77.09!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDLF+Phase+3%2C+Sector+24%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .office-grid { grid-template-columns: 1fr !important; }
          .contact-quick-row { grid-template-columns: 1fr !important; }
          .query-map-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .contact-title { font-size: 36px !important; }
        }
        @media (max-width: 420px) {
          .contact-title { font-size: 31px !important; }
        }
      `}</style>
    </section>
  );
};

export default ContactPage;
