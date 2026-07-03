import React from 'react';
import { Search, FileText, LayoutTemplate, Code, Bug, Rocket, GraduationCap, Headphones } from 'lucide-react';

const journey = [
  { title: "Discovery Meeting", desc: "Understanding your school's unique challenges.", icon: <Search size={24} /> },
  { title: "Requirement Analysis", desc: "Mapping out exact technical specifications.", icon: <FileText size={24} /> },
  { title: "UI/UX Planning", desc: "Designing intuitive interfaces for all users.", icon: <LayoutTemplate size={24} /> },
  { title: "Development", desc: "Writing clean, scalable, secure code.", icon: <Code size={24} /> },
  { title: "Testing", desc: "Rigorous QA across devices and browsers.", icon: <Bug size={24} /> },
  { title: "Deployment", desc: "Seamless launch with zero downtime.", icon: <Rocket size={24} /> },
  { title: "Training", desc: "Onboarding your staff and administrators.", icon: <GraduationCap size={24} /> },
  { title: "Ongoing Support", desc: "24/7 monitoring and technical assistance.", icon: <Headphones size={24} /> }
];

export const ImplementationJourney = () => {
  return (
    <section style={{ padding: '8rem 0', background: '#0a0a0a', color: '#fff', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em', color: '#ffffff' }}>
            Working With Vidyakrit
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#a1a1aa', lineHeight: 1.6 }}>
            Our proven implementation framework guarantees a smooth transition from legacy systems to modern software.
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
            background: 'linear-gradient(180deg, var(--color-primary-action) 0%, rgba(255,255,255,0.1) 100%)',
            zIndex: 1 
          }}></div>

          {journey.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', position: 'relative', zIndex: 2 }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                background: '#0a0a0a',
                border: '2px solid var(--color-primary-action)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: 'var(--color-primary-action)'
              }}>
                {step.icon}
              </div>
              <div style={{ paddingTop: '10px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>{step.title}</h3>
                <p style={{ fontSize: '1.125rem', color: '#a1a1aa' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
