import React from 'react';
import { ShieldCheck, DatabaseBackup, Lock, KeyRound, Server, UploadCloud } from 'lucide-react';

const securityPoints = [
  { title: "You Own Your Data", desc: "We are strictly processors. You retain 100% legal ownership of your records.", icon: <KeyRound size={24} /> },
  { title: "Securely Stored", desc: "Data is housed in world-class enterprise cloud data centers.", icon: <Server size={24} /> },
  { title: "Daily Backups", desc: "Automated, redundant backups ensure data is never lost.", icon: <DatabaseBackup size={24} /> },
  { title: "Role-Based Access", desc: "Staff can only view information relevant to their exact role.", icon: <ShieldCheck size={24} /> },
  { title: "256-Bit Encryption", desc: "Industry-standard encryption protects data in transit and at rest.", icon: <Lock size={24} /> },
  { title: "Export Anytime", desc: "Instantly export your complete database to Excel formats.", icon: <UploadCloud size={24} /> }
];

export const DataSecurity = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary-action)' }}>
              <ShieldCheck size={48} strokeWidth={1.5} />
            </div>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Your School Data Always Belongs to You
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
            We understand the extreme sensitivity of student information. Our platform is built from the ground up to protect your data with enterprise-grade security protocols.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {securityPoints.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              <div style={{ color: 'var(--color-primary-action)', marginTop: '0.25rem' }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
