import React from 'react';
import { Shield, Key, Lock, Cloud, HardDrive, FileSearch, ShieldAlert, Server } from 'lucide-react';

const securityFeatures = [
  { title: "SSL Encryption", icon: <Shield size={24} strokeWidth={1.5} /> },
  { title: "Role-Based Permissions", icon: <Key size={24} strokeWidth={1.5} /> },
  { title: "Encrypted Authentication", icon: <Lock size={24} strokeWidth={1.5} /> },
  { title: "Secure Cloud Infrastructure", icon: <Cloud size={24} strokeWidth={1.5} /> },
  { title: "Automatic Backups", icon: <HardDrive size={24} strokeWidth={1.5} /> },
  { title: "Audit Logs", icon: <FileSearch size={24} strokeWidth={1.5} /> },
  { title: "Regular Security Updates", icon: <ShieldAlert size={24} strokeWidth={1.5} /> },
  { title: "Reliable Data Storage", icon: <Server size={24} strokeWidth={1.5} /> }
];

export const SecuritySection = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Enterprise-Grade Security
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Protecting your school's data is one of our highest priorities. We employ industry-leading security practices.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {securityFeatures.map((feat, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem',
                background: 'var(--bg-secondary)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ color: 'var(--color-primary-action)' }}>
                {feat.icon}
              </div>
              <span style={{ fontWeight: 600, fontSize: '1rem' }}>
                {feat.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
