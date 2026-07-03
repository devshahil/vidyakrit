import React from 'react';

const coreValues = [
  { name: "Transparency", desc: "Honest communication about capabilities, timelines, and costs. No hidden surprises." },
  { name: "Integrity", desc: "Doing the right thing, even when no one is watching, especially with your data." },
  { name: "Quality", desc: "Meticulous attention to detail in every line of code and every user interface." },
  { name: "Innovation", desc: "Constantly exploring new technologies to make your operations more efficient." },
  { name: "Security", desc: "An uncompromising approach to protecting sensitive student and financial records." },
  { name: "Reliability", desc: "Building systems that work flawlessly, 24/7, without unexpected downtime." },
  { name: "Continuous Learning", desc: "We constantly study the evolving needs of the education sector to adapt." },
  { name: "Customer Success", desc: "Your operational success is the only metric that truly matters to us." }
];

export const CompanyValues = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            The Principles Behind Everything We Build
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Our engineering is driven by a core set of values that prioritize human relationships and technical excellence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          {coreValues.map((val, i) => (
            <div key={i} style={{ 
              background: 'var(--bg-primary)', 
              padding: '2rem', 
              borderRadius: '20px', 
              border: '1px solid var(--border-color)' 
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                {val.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
