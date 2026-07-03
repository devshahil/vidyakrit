import React from 'react';

const roadmap = [
  {
    phase: "Current",
    color: "#10b981", // Emerald 500
    items: ["School ERP", "School Websites", "Parent Portal", "Teacher Portal"]
  },
  {
    phase: "Coming Soon",
    color: "var(--color-primary-action)",
    items: ["AI Assistant", "Predictive Analytics", "Advanced Reporting", "Native Mobile Apps", "Smart Notifications", "Online Admissions", "Digital Document Management"]
  },
  {
    phase: "Future Vision",
    color: "#8b5cf6", // Violet 500
    items: ["AI-powered insights", "Automation workflows", "Unified education platform", "Integrations marketplace"]
  }
];

export const InnovationRoadmap = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Our Product Vision
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            A transparent look at what we've built, what we're actively developing, and where we're heading next.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {roadmap.map((col, i) => (
            <div key={i} style={{ 
              background: 'var(--bg-secondary)', 
              borderRadius: '24px', 
              padding: '2.5rem',
              border: '1px solid var(--border-color)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: col.color }}></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text-primary)' }}>
                {col.phase}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {col.items.map((item, j) => (
                  <li key={j} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    fontSize: '1.125rem', 
                    color: 'var(--text-secondary)',
                    fontWeight: 500
                  }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: col.color, opacity: 0.8 }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
