import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Building2, Facebook } from 'lucide-react';

const ContactPage = () => {
    const [form, setForm] = useState({ message: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const inputStyle = {
        width: '100%', padding: '12px 16px', backgroundColor: '#f9fafb', border: '1px solid #d1d5db',
        borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', fontFamily: 'inherit',
        transition: 'border-color 0.2s, box-shadow 0.2s'
    };

    return (
        <>
            {/* Hero Banner */}
            <section style={{
                background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #3b82f6 100%)',
                padding: '56px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px',
                    borderRadius: '50%', background: 'rgba(255,255,255,0.06)'
                }}></div>
                <div style={{
                    position: 'absolute', bottom: '-40px', left: '-40px', width: '150px', height: '150px',
                    borderRadius: '50%', background: 'rgba(255,255,255,0.04)'
                }}></div>
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <p style={{ color: '#93c5fd', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                        <Link to="/" style={{ color: '#93c5fd', textDecoration: 'none' }}>Home</Link>
                        <span style={{ margin: '0 8px' }}>/</span>
                        <span style={{ color: '#fff' }}>Contact Us</span>
                    </p>
                    <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Contact Us</h1>
                    <p style={{ color: '#bfdbfe', fontSize: '15px', maxWidth: '520px', margin: '0 auto' }}>
                        Get in touch with us for inquiries, support, or partnership opportunities.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ backgroundColor: '#fff', color: '#111827' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
                    <div className="contact-grid" style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'flex-start'
                    }}>
                        {/* Left — Contact Info */}
                        <div>
                            {/* Kenjal Industries */}
                            <div style={{
                                backgroundColor: '#f0f7ff', borderRadius: '12px', padding: '24px',
                                border: '1px solid #dbeafe', marginBottom: '24px'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                    <Building2 style={{ width: '20px', height: '20px', color: '#2563eb' }} />
                                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#2563eb' }}>KENJAL INDUSTRIES</h3>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                    <MapPin style={{ width: '16px', height: '16px', color: '#6b7280', flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ color: '#4b5563', fontSize: '14px' }}>DLF, Phase-3, 27/11, Gurugram Haryana, Pin-122002</span>
                                </div>
                            </div>

                            {/* Head Office */}
                            <div style={{
                                backgroundColor: '#f9fafb', borderRadius: '12px', padding: '24px',
                                border: '1px solid #e5e7eb', marginBottom: '24px'
                            }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: '#111827' }}>Head Office</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <MapPin style={{ width: '16px', height: '16px', color: '#2563eb' }} />
                                        <span style={{ color: '#4b5563', fontSize: '14px' }}>Delhi</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Phone style={{ width: '16px', height: '16px', color: '#2563eb' }} />
                                        <span style={{ color: '#4b5563', fontSize: '14px' }}>8686-15-4646</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Mail style={{ width: '16px', height: '16px', color: '#2563eb' }} />
                                        <span style={{ color: '#4b5563', fontSize: '14px' }}>contact@kenjal.com</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Globe style={{ width: '16px', height: '16px', color: '#2563eb' }} />
                                        <span style={{ color: '#4b5563', fontSize: '14px' }}>www.kenjal.com</span>
                                    </div>
                                </div>
                            </div>

                            {/* Channel Partner */}
                            <div style={{
                                backgroundColor: '#f9fafb', borderRadius: '12px', padding: '24px',
                                border: '1px solid #e5e7eb', marginBottom: '24px'
                            }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#2563eb', marginBottom: '16px' }}>
                                    Channel Partner For All Bihar
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Building2 style={{ width: '16px', height: '16px', color: '#2563eb' }} />
                                        <span style={{ color: '#4b5563', fontSize: '14px', fontWeight: 600 }}>ARADHYA AQUA INDUSTRY</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <MapPin style={{ width: '16px', height: '16px', color: '#2563eb' }} />
                                        <span style={{ color: '#4b5563', fontSize: '14px' }}>Patna (Bihar) Pin-800007</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Phone style={{ width: '16px', height: '16px', color: '#2563eb' }} />
                                        <span style={{ color: '#4b5563', fontSize: '14px' }}>+91 9631582105</span>
                                    </div>
                                </div>
                                <div style={{ marginTop: '14px' }}>
                                    <Facebook style={{ width: '20px', height: '20px', color: '#2563eb', cursor: 'pointer' }} />
                                </div>
                            </div>

                            {/* Map */}
                            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                                <iframe
                                    title="Kenjal Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3563213048566!2d77.09257831506!3d28.46020078248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c85e1be0a7%3A0x5c5a2e4ed6f8bbf8!2sDLF%20Phase%203%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122010!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="280"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {/* Right — WhatsApp Query Box */}
                        <div>
                            <div style={{
                                backgroundColor: '#fff', borderRadius: '16px', padding: '32px',
                                border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '12px',
                                        backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <span style={{ fontSize: '24px' }}>💬</span>
                                    </div>
                                    <div>
                                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#111827' }}>Quick Query</h2>
                                        <p style={{ color: '#22c55e', fontSize: '13px', fontWeight: 600 }}>WhatsApp Us Directly</p>
                                    </div>
                                </div>

                                <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '24px', lineHeight: '1.5' }}>
                                    Have a question? Type your message below and we'll connect you instantly with our team on WhatsApp.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <textarea
                                        placeholder="Type your query here..."
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        rows={6}
                                        style={{ ...inputStyle, resize: 'none', fontSize: '15px' }}
                                        onFocus={(e) => { e.target.style.borderColor = '#22c55e'; e.target.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.1)'; }}
                                        onBlur={(e) => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none'; }}
                                    />

                                    <button
                                        onClick={() => {
                                            if (!form.message.trim()) {
                                                alert('Please type a message first.');
                                                return;
                                            }
                                            const encodedMsg = encodeURIComponent(form.message);
                                            window.open(`https://wa.me/918686154646?text=${encodedMsg}`, '_blank');
                                        }}
                                        style={{
                                            backgroundColor: '#22c55e', color: '#fff', padding: '16px 32px',
                                            borderRadius: '12px', fontWeight: 700, fontSize: '15px', border: 'none',
                                            cursor: 'pointer', width: '100%', transition: 'all 0.2s',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                            boxShadow: '0 4px 12px rgba(34, 197, 94, 0.2)'
                                        }}
                                        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#16a34a'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#22c55e'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        Send on WhatsApp
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Phone / WhatsApp section */}
                            <div style={{
                                marginTop: '24px', backgroundColor: '#f9fafb', borderRadius: '16px',
                                padding: '24px', border: '1px solid #e5e7eb'
                            }}>
                                <p style={{ color: '#2563eb', fontSize: '15px', fontWeight: 600, marginBottom: '16px' }}>
                                    Feel free to call us or send a message on WhatsApp
                                </p>

                                {[
                                    { label: 'All India', phone: '96315 82105', whatsapp: '96315 82105' },
                                    { label: 'Chapra', phone: '9955668833', whatsapp: '9955668833' },
                                    { label: 'Siwan-Gopalganj', phone: '9572424344', whatsapp: '9801011105' }
                                ].map(({ label, phone, whatsapp }) => (
                                    <div key={label} style={{ marginTop: '14px' }}>
                                        <p style={{ fontSize: '13px', fontWeight: 600, color: '#6b7280', marginBottom: '8px' }}>{label}</p>
                                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                            <a href={`tel:${phone.replace(/\s/g, '')}`}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '8px',
                                                    padding: '8px 16px', border: '2px solid #2563eb', borderRadius: '8px',
                                                    color: '#2563eb', backgroundColor: '#fff', fontSize: '14px',
                                                    fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s'
                                                }}>
                                                <Phone style={{ width: '16px', height: '16px', color: '#2563eb' }} />
                                                {phone}
                                            </a>
                                            <a href={`https://wa.me/${whatsapp.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '8px',
                                                    padding: '8px 16px', border: '2px solid #22c55e', borderRadius: '8px',
                                                    color: '#22c55e', backgroundColor: '#fff', fontSize: '14px',
                                                    fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s'
                                                }}>
                                                <span style={{ fontSize: '16px' }}>💬</span>
                                                {whatsapp}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 768px) {
                    .contact-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </>
    );
};

export default ContactPage;
