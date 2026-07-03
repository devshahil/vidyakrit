import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const roiPoints = [
  "Dramatically reduce paperwork across all departments.",
  "Centralize fragmented information into a single source of truth.",
  "Improve direct communication with parents effortlessly.",
  "Simplify and speed up daily attendance marking.",
  "Manage fees digitally to reduce late payments and cash handling.",
  "Generate complex statutory reports instantly.",
  "Reduce the massive administrative workload on teachers.",
  "Increase overall operational efficiency and transparency."
];

export const OperationalRoi = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '1000px', display: 'flex', flexDirection: 'row', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
        
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            How Vidyakrit Improves School Operations
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '3rem' }}>
            We don't promise arbitrary percentage increases. We promise concrete, structural improvements to how your school functions every single day.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {roiPoints.slice(0, 4).map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <CheckCircle2 size={24} color="var(--color-primary-action)" strokeWidth={2} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '1.125rem', fontWeight: 500 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: '1 1 400px' }}>
          <div style={{ background: 'var(--bg-primary)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-premium)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '12px' }}>
                <ArrowUpRight size={32} color="var(--color-primary-action)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Operational ROI</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {roiPoints.slice(4).map((point, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <CheckCircle2 size={24} color="var(--color-primary-action)" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1.125rem', fontWeight: 500 }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
