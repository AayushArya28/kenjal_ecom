import { Link } from 'react-router-dom';
import { CheckCircle, Factory, Users, ShieldCheck, Globe, ArrowRight, Wrench, Layers, Cpu } from 'lucide-react';
import {
    companyProfile, manufacturingStrengths, teamRoles,
    globalPresence, featuredIndustries,
} from '../data/siteContent';

const AboutPage = () => (
    <>
        {/* Hero Banner */}
        <section style={{
            background: 'linear-gradient(135deg, #07111f 0%, #0f172a 44%, #134e4a 100%)',
            padding: '80px 24px 88px', position: 'relative', overflow: 'hidden',
        }}>
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.14), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,191,36,0.1), transparent 70%)', filter: 'blur(36px)', pointerEvents: 'none' }} />
            <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <p style={{ color: '#99f6e4', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
                    <Link to="/" style={{ color: '#99f6e4', textDecoration: 'none' }}>Home</Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <span style={{ color: '#fff' }}>About Us</span>
                </p>
                <div className="about-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 0.7fr', gap: '48px', alignItems: 'center' }}>
                    <div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(153,246,228,0.1)', border: '1px solid rgba(153,246,228,0.18)', color: '#99f6e4', fontWeight: 700, fontSize: '11px', padding: '6px 14px', borderRadius: '999px', marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            Est. 2020 · New Delhi, India
                        </div>
                        <h1 style={{ fontSize: '52px', fontWeight: 900, color: '#fff', lineHeight: 1.04, letterSpacing: '-1.5px', marginBottom: '20px' }}>
                            {companyProfile.tagline}
                        </h1>
                        <p style={{ color: '#cbd5e1', fontSize: '17px', lineHeight: 1.85, maxWidth: '640px' }}>
                            Kenjal Industries Pvt. Ltd. is a recognised manufacturer and exporter of high-end industrial filling, packaging, and beverage processing machines — delivering customized solutions where reliability, precision, and performance are critical.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gap: '12px' }}>
                        {[
                            { value: '30+', label: 'Machine Models' },
                            { value: '14+', label: 'Industries Served' },
                            { value: '6', label: 'International Regions' },
                            { value: '100%', label: 'Custom-Built Solutions' },
                        ].map(stat => (
                            <div key={stat.label} style={{ padding: '18px 20px', borderRadius: '18px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ color: '#fff', fontSize: '28px', fontWeight: 900 }}>{stat.value}</span>
                                <span style={{ color: '#94a3b8', fontSize: '13px', textAlign: 'right', maxWidth: '120px', lineHeight: 1.5 }}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Company Overview */}
        <section style={{ backgroundColor: '#fff', padding: '80px 24px' }}>
            <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                <div className="overview-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
                    <div>
                        <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.8px', lineHeight: 1.12, marginBottom: '24px' }}>Company Overview</h2>
                        <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.9, marginBottom: '20px' }}>
                            Kenjal Industries Pvt. Ltd. is a well-recognised manufacturer and exporter of high-end industrial filling, packaging, and beverage processing machines. Established in <strong style={{ color: '#0f172a' }}>2020 in New Delhi, India</strong>, the company specialises in delivering customised solutions for industrial operations where reliability, precision, and performance are critical.
                        </p>
                        <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.9, marginBottom: '28px' }}>
                            Operations are led by experienced management under <strong style={{ color: '#0f172a' }}>Mr. Vikash (Managing Director)</strong>, who brings extensive expertise in industrial filling, packaging, and bottling machinery.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['Best-in-class machinery for every production need', 'Superior technical support and after-sales service', 'Affordable pricing for small and large enterprises'].map(item => (
                                <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                    <CheckCircle style={{ width: '18px', height: '18px', color: '#0d9488', flexShrink: 0, marginTop: '3px' }} />
                                    <span style={{ color: '#334155', fontSize: '15px', fontWeight: 500 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div style={{ background: 'linear-gradient(135deg, #f0fdfa, #f8fafc)', borderRadius: '28px', padding: '32px', border: '1px solid #ccfbf1' }}>
                            <p style={{ color: '#0d9488', fontSize: '11px', fontWeight: 800, letterSpacing: '1.8px', textTransform: 'uppercase', marginBottom: '16px' }}>Product Families</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {[
                                    'Carbonated Soft Drink Plants',
                                    'Fruit Juice Machines & Plants',
                                    'Liquid Sanitizer Machines',
                                    'Paste Filling Machines',
                                    'Filling Machines',
                                    'Shrink Tunnel Machines',
                                    'Sealing Machines',
                                    'Strapping Machines',
                                    'Vacuum Packaging Machines',
                                ].map(item => (
                                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', background: '#fff', border: '1px solid #e4faf5' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: 'linear-gradient(135deg, #0d9488, #99f6e4)', flexShrink: 0 }} />
                                        <span style={{ color: '#0f172a', fontSize: '14px', fontWeight: 600 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Manufacturing & Quality */}
        <section style={{ backgroundColor: '#f8fafc', padding: '80px 24px', borderTop: '1px solid #f1f5f9' }}>
            <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.15)', color: '#0d9488', fontWeight: 700, fontSize: '11px', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                        Infrastructure
                    </div>
                    <h2 style={{ fontSize: '38px', fontWeight: 900, color: '#0f172a', letterSpacing: '-1px', marginBottom: '16px' }}>High Quality Machinery</h2>
                    <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
                        Every machine undergoes rigorous quality inspection before delivery, ensuring consistent performance and long operational life.
                    </p>
                </div>
                <div className="mfg-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    {[
                        { Icon: Factory, title: 'Precision Manufacturing', desc: 'Advanced equipment and engineering workflows for accuracy, throughput, and plant reliability.', color: '#0d9488' },
                        { Icon: ShieldCheck, title: 'Quality-Controlled Delivery', desc: 'Machines inspected against design integrity, structural strength, raw material quality, and lifecycle performance before dispatch.', color: '#0284c7' },
                        { Icon: Wrench, title: 'Custom Engineering', desc: 'Compact, efficient machinery tailored to client requirements with systematic project management and on-time execution.', color: '#b45309' },
                        { Icon: Layers, title: 'Multi-Stage Testing', desc: 'Each unit passes through design validation, material inspection, load testing, and operational efficiency checks.', color: '#0e7490' },
                        { Icon: Cpu, title: 'Modern Technology', desc: 'Continuous adoption of automation, PLC controls, and precision engineering for evolving process demands.', color: '#0f766e' },
                        { Icon: Users, title: 'Expert Engineering Team', desc: 'A skilled team of engineers, designers, Q.C. specialists, and R&D experts continuously improving product excellence.', color: '#b45309' },
                    ].map(({ Icon, title, desc, color }) => (
                        <div key={title} className="mfg-card" style={{ padding: '28px', borderRadius: '22px', background: '#fff', border: '1px solid #f1f5f9', transition: 'all 0.25s' }}
                            onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 6px 28px rgba(0,0,0,0.06)`; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#f1f5f9'; e.currentTarget.style.transform = 'none'; }}
                        >
                            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: `${color}15`, border: `1px solid ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                                <Icon style={{ width: '22px', height: '22px', color }} />
                            </div>
                            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{title}</h3>
                            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.8 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Full Spectrum Know-How */}
        <section style={{ backgroundColor: '#fff', padding: '80px 24px', borderTop: '1px solid #f1f5f9' }}>
            <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                <div className="spectrum-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
                    <div>
                        <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.8px', lineHeight: 1.12, marginBottom: '24px' }}>Full Spectrum Know-How</h2>
                        <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.9, marginBottom: '24px' }}>
                            Kenjal Industries provides complete solutions for beverage processing including juice blending, carbonated beverage preparation, syrup preparation, filtration, homogenization, pasteurization, bottling, and packaging.
                        </p>
                        <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.9, marginBottom: '28px' }}>
                            We also support installation and commissioning of complete processing plants including pipelines and utility systems.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            {[
                                'Juice Blending', 'Carbonated Beverage Prep',
                                'Syrup Preparation', 'Filtration & Purification',
                                'Homogenization', 'Pasteurization',
                                'Bottling Lines', 'Packaging Automation',
                            ].map(item => (
                                <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '11px 14px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #f1f5f9' }}>
                                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#0d9488', flexShrink: 0 }} />
                                    <span style={{ color: '#334155', fontSize: '13.5px', fontWeight: 600 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p style={{ color: '#475569', fontSize: '15px', fontWeight: 600, marginBottom: '18px', letterSpacing: '0.2px' }}>Utility Systems Supported:</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
                            {['Steam Boilers', 'Compressed Air Systems', 'Refrigeration Systems', 'Water Treatment Systems'].map(item => (
                                <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '14px 18px', borderRadius: '12px', background: 'linear-gradient(135deg, #f0fdfa, #fff)', border: '1px solid #ccfbf1' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: 'linear-gradient(135deg, #0d9488, #0f766e)', flexShrink: 0 }} />
                                    <span style={{ color: '#0f172a', fontSize: '15px', fontWeight: 600 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ padding: '28px', borderRadius: '24px', background: 'linear-gradient(135deg, #07111f, #0f172a)', border: '1px solid rgba(153,246,228,0.12)' }}>
                            <p style={{ color: '#99f6e4', fontSize: '11px', fontWeight: 800, letterSpacing: '1.8px', textTransform: 'uppercase', marginBottom: '12px' }}>Our Strengths</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {[
                                    'Expertise in high-end machinery manufacturing',
                                    'Customized machinery solutions',
                                    'Systematic project management',
                                    'Compact and efficient machine design',
                                    'Continuous modern technology adoption',
                                    'Strong R&D and engineering support',
                                    'Dedicated customer service',
                                ].map(item => (
                                    <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0d9488', flexShrink: 0, marginTop: '7px' }} />
                                        <span style={{ color: '#cbd5e1', fontSize: '13.5px', lineHeight: 1.6 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Global Presence */}
        <section style={{ backgroundColor: '#f8fafc', padding: '80px 24px', borderTop: '1px solid #f1f5f9' }}>
            <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.15)', color: '#0d9488', fontWeight: 700, fontSize: '11px', padding: '6px 14px', borderRadius: '999px', marginBottom: '14px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                        <Globe style={{ width: '12px', height: '12px' }} />
                        International Operations
                    </div>
                    <h2 style={{ fontSize: '38px', fontWeight: 900, color: '#0f172a', letterSpacing: '-1px', marginBottom: '14px' }}>Global Presence</h2>
                    <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
                        Kenjal machines and plants operate across multiple regions worldwide.
                    </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
                    {globalPresence.map(country => (
                        <div key={country} style={{
                            padding: '16px 28px', borderRadius: '16px', background: '#fff',
                            border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 700, color: '#0f172a',
                        }}>
                            <Globe style={{ width: '16px', height: '16px', color: '#0d9488' }} />
                            {country}
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Team */}
        <section style={{ backgroundColor: '#fff', padding: '80px 24px', borderTop: '1px solid #f1f5f9' }}>
            <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                    <h2 style={{ fontSize: '38px', fontWeight: 900, color: '#0f172a', letterSpacing: '-1px', marginBottom: '14px' }}>Our Team</h2>
                    <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '580px', margin: '0 auto', lineHeight: 1.8 }}>
                        Kenjal Industries is supported by a skilled and dedicated workforce committed to engineering excellence and customer satisfaction.
                    </p>
                </div>
                <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '48px' }}>
                    {teamRoles.map(role => (
                        <div key={role} style={{ padding: '24px 16px', borderRadius: '20px', background: 'linear-gradient(135deg, #f0fdfa, #f8fafc)', border: '1px solid #ccfbf1', textAlign: 'center' }}>
                            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #0d9488, #0f766e)', margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Users style={{ width: '20px', height: '20px', color: '#fff' }} />
                            </div>
                            <p style={{ color: '#0f172a', fontSize: '14px', fontWeight: 700, lineHeight: 1.5 }}>{role}</p>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/products" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'linear-gradient(135deg, #0f766e, #0d9488)', color: '#fff',
                        padding: '14px 32px', borderRadius: '14px', textDecoration: 'none',
                        fontWeight: 700, fontSize: '15px', boxShadow: '0 6px 24px rgba(15,118,110,0.28)',
                    }}>
                        Explore Our Products <ArrowRight style={{ width: '17px', height: '17px' }} />
                    </Link>
                </div>
            </div>
        </section>

        <style>{`
            @media (max-width: 1024px) {
                .about-hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
                .overview-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
                .spectrum-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
                .mfg-grid { grid-template-columns: repeat(2, 1fr) !important; }
                .team-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
            @media (max-width: 768px) {
                .about-hero-grid h1 { font-size: 36px !important; }
                .mfg-grid { grid-template-columns: 1fr !important; }
                .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 480px) {
                .team-grid { grid-template-columns: 1fr !important; }
            }
        `}</style>
    </>
);

export default AboutPage;
