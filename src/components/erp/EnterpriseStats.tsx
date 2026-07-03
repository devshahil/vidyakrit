import React from 'react';
import { Cloud, Clock, ShieldCheck, Lock, Smartphone, GitMerge, Zap } from 'lucide-react';

const stats = [
  { value: "100%", label: "Cloud-Based", icon: <Cloud size={32} strokeWidth={1.5} /> },
  { value: "24×7", label: "Available Online", icon: <Clock size={32} strokeWidth={1.5} /> },
  { value: "Role-Based", label: "Access Control", icon: <ShieldCheck size={32} strokeWidth={1.5} /> },
  { value: "256-bit", label: "Secure Encryption", icon: <Lock size={32} strokeWidth={1.5} /> },
  { value: "Mobile", label: "Responsive Design", icon: <Smartphone size={32} strokeWidth={1.5} /> },
  { value: "Multi-Module", label: "Integrated ERP", icon: <GitMerge size={32} strokeWidth={1.5} /> },
  { value: "Fast", label: "Optimized Performance", icon: <Zap size={32} strokeWidth={1.5} /> }
];

export const EnterpriseStats = () => {
  return (
    <section style={{ padding: '8rem 0', background: '#0a0a0a', color: '#ffffff', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '3rem',
          textAlign: 'center'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: 'var(--color-primary-action)' }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '1.125rem', color: '#a1a1aa' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
