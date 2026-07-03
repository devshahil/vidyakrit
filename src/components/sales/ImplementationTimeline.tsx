import React from 'react';
import { Search, FileSearch, DatabaseZap, Sliders, Users, Rocket } from 'lucide-react';

const steps = [
  { title: "Discovery Meeting", desc: "Understand school requirements and current pain points.", time: "Day 1", icon: <Search size={24} /> },
  { title: "Requirement Analysis", desc: "Study your existing workflow to map out exact technical specifications.", time: "Days 2-3", icon: <FileSearch size={24} /> },
  { title: "Data Migration", desc: "Securely import students, staff, fees, and historical records from Excel.", time: "Days 4-7", icon: <DatabaseZap size={24} /> },
  { title: "Configuration & Customization", desc: "Configure classes, sessions, permissions, grading scales, and modules.", time: "Days 8-10", icon: <Sliders size={24} /> },
  { title: "Training", desc: "On-site or virtual training for administrators, teachers, and accountants.", time: "Days 11-13", icon: <Users size={24} /> },
  { title: "Go Live & Support", desc: "Launch the platform securely with continuous, dedicated technical support.", time: "Day 14", icon: <Rocket size={24} /> },
];

export const ImplementationTimeline = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            From Demo to Go Live
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            A proven, frictionless implementation framework designed specifically for educational institutions.
          </p>
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Vertical Line */}
          <div style={{ 
            position: 'absolute', 
            left: '24px', 
            top: '0', 
            bottom: '0', 
            width: '2px', 
            background: 'linear-gradient(180deg, var(--color-primary-action) 0%, rgba(0,0,0,0.05) 100%)',
            zIndex: 1 
          }}></div>

          {steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', position: 'relative', zIndex: 2 }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                background: 'var(--bg-primary)',
                border: '2px solid var(--color-primary-action)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: 'var(--color-primary-action)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                {step.icon}
              </div>
              <div style={{ paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{step.title}</h3>
                  <span style={{ padding: '0.25rem 0.75rem', background: 'var(--bg-secondary)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                    {step.time}
                  </span>
                </div>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
