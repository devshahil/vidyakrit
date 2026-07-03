import React from 'react';
import { GraduationCap, Building2, BookOpen, Briefcase, Rocket, MonitorPlay, Users, Building } from 'lucide-react';

const industries = [
  { icon: <GraduationCap size={24} />, name: "Schools" },
  { icon: <Building2 size={24} />, name: "Colleges" },
  { icon: <BookOpen size={24} />, name: "Training Institutes" },
  { icon: <MonitorPlay size={24} />, name: "Coaching Centers" },
  { icon: <Rocket size={24} />, name: "Startups" },
  { icon: <Briefcase size={24} />, name: "Small Businesses" },
  { icon: <Building size={24} />, name: "Enterprises" },
  { icon: <Users size={24} />, name: "Educational Organizations" },
];

export const IndustriesServed = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Built to Solve Real Business Problems
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            While our flagship ERP focuses on education, our engineering expertise and digital solutions are designed to support a wide range of industries.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {industries.map((ind, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '1.5rem', 
              background: 'var(--bg-primary)', 
              borderRadius: '16px', 
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ color: 'var(--color-primary-action)' }}>{ind.icon}</div>
              <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
