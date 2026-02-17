import { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Building2, Facebook } from 'lucide-react';

const ContactPage = () => {
    const [form, setForm] = useState({
        name: '', mobile: '', email: '', state: '', city: '', subject: '', message: ''
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => { e.preventDefault(); alert('Message sent! We will get back to you soon.'); };

    const states = [
        'Select State', 'Andhra Pradesh', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat',
        'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
        'Maharashtra', 'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana',
        'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ];

    const inputStyle = {
        width: '100%', padding: '12px 16px', backgroundColor: '#fff', border: '1px solid #d1d5db',
        borderRadius: '6px', fontSize: '14px', color: '#111827', outline: 'none', fontFamily: 'inherit'
    };

    return (
        <section style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '80vh' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
                <div className="contact-grid" style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'flex-start'
                }}>
                    {/* Left — Contact Info */}
                    <div>
                        <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>Contact US</h1>

                        {/* Kenjal Industries */}
                        <div style={{ marginBottom: '28px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                <Building2 style={{ width: '18px', height: '18px', color: '#38bdf8' }} />
                                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f59e0b' }}>KENJAL INDUSTRIES</h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                <MapPin style={{ width: '16px', height: '16px', color: '#6b7280', flexShrink: 0, marginTop: '2px' }} />
                                <span style={{ color: '#d1d5db', fontSize: '14px' }}>DLF, Phase-3, 27/11, Gurugram Haryana, Pin-122002</span>
                            </div>
                        </div>

                        {/* Head Office */}
                        <div style={{ marginBottom: '28px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>Head Office</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <MapPin style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                                    <span style={{ color: '#d1d5db', fontSize: '14px' }}>Delhi</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Phone style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                                    <span style={{ color: '#d1d5db', fontSize: '14px' }}>8686-15-4646</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Mail style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                                    <span style={{ color: '#d1d5db', fontSize: '14px' }}>contact@kenjal.com</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Globe style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                                    <span style={{ color: '#d1d5db', fontSize: '14px' }}>www.kenjal.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Channel Partner */}
                        <div style={{ marginBottom: '28px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#4ade80', marginBottom: '12px' }}>
                                Channel Partner For All Bihar
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Building2 style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                                    <span style={{ color: '#d1d5db', fontSize: '14px', fontWeight: 600 }}>ARADHYA AQUA INDUSTRY</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <MapPin style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                                    <span style={{ color: '#d1d5db', fontSize: '14px' }}>Patna (Bihar) Pin-800007</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Phone style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                                    <span style={{ color: '#d1d5db', fontSize: '14px' }}>+91 9631582105</span>
                                </div>
                            </div>
                            <div style={{ marginTop: '12px' }}>
                                <Facebook style={{ width: '20px', height: '20px', color: '#2563eb', cursor: 'pointer' }} />
                            </div>
                        </div>

                        {/* Map */}
                        <div style={{ borderRadius: '12px', overflow: 'hidden', marginTop: '24px' }}>
                            <iframe
                                title="Kenjal Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3563213048566!2d77.09257831506!3d28.46020078248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c85e1be0a7%3A0x5c5a2e4ed6f8bbf8!2sDLF%20Phase%203%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122010!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right — Feedback Form */}
                    <div>
                        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>Feedback</h2>
                        <p style={{ color: '#38bdf8', fontSize: '14px', marginBottom: '24px' }}>Send your feedback.</p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} style={inputStyle} />
                            <input name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange} style={inputStyle} />
                            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} style={inputStyle} />
                            <select name="state" value={form.state} onChange={handleChange}
                                style={{ ...inputStyle, cursor: 'pointer' }}>
                                {states.map((s) => <option key={s} value={s === 'Select State' ? '' : s}>{s}</option>)}
                            </select>
                            <input name="city" placeholder="City" value={form.city} onChange={handleChange} style={inputStyle} />
                            <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} style={inputStyle} />
                            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange}
                                rows={4} style={{ ...inputStyle, resize: 'vertical' }} />

                            <button type="submit" className="btn-red" style={{
                                backgroundColor: '#e63946', color: '#fff', padding: '12px 32px',
                                borderRadius: '6px', fontWeight: 600, fontSize: '14px', border: 'none',
                                cursor: 'pointer', width: 'fit-content'
                            }}>
                                Send
                            </button>
                        </form>

                        {/* Phone / WhatsApp section */}
                        <div style={{ marginTop: '32px' }}>
                            <p style={{ color: '#38bdf8', fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>
                                Feel free to call us or just send message on WhatsApp to our Service Center.
                            </p>

                            {[
                                { label: 'All India', phone: '96315 82105', whatsapp: '96315 82105' },
                                { label: 'Chapra', phone: '9955668833', whatsapp: '9955668833' },
                                { label: 'Siwan-Gopalganj', phone: '9572424344', whatsapp: '9801011105' }
                            ].map(({ label, phone, whatsapp }) => (
                                <div key={label} style={{ marginTop: '16px' }}>
                                    <p style={{ fontSize: '13px', fontWeight: 600, color: '#9ca3af', marginBottom: '8px' }}>{label}</p>
                                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                        <a href={`tel:${phone.replace(/\s/g, '')}`}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '8px',
                                                padding: '8px 16px', border: '2px solid #4ade80', borderRadius: '8px',
                                                color: '#111827', backgroundColor: '#fff', fontSize: '14px',
                                                fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s'
                                            }}>
                                            <Phone style={{ width: '18px', height: '18px', color: '#4ade80' }} />
                                            {phone}
                                        </a>
                                        <a href={`https://wa.me/${whatsapp.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '8px',
                                                padding: '8px 16px', border: '2px solid #22c55e', borderRadius: '8px',
                                                color: '#111827', backgroundColor: '#fff', fontSize: '14px',
                                                fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s'
                                            }}>
                                            <span style={{ fontSize: '18px' }}>💬</span>
                                            {whatsapp}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .contact-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default ContactPage;
