import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const comparisons = [
  { feature: "Attendance System", old: "Manual Paper Registers", new: "Real-Time Digital & Geofenced" },
  { feature: "Fee Collection", old: "Paper Fee Registers & Cash", new: "Digital Gateways & Auto-Receipts" },
  { feature: "Architecture", old: "Fragmented, Separate Systems", new: "100% Integrated ERP Platform" },
  { feature: "Reporting", old: "Manual & Time-Consuming", new: "Instant, Automated Generation" },
  { feature: "Parent Communication", old: "Limited & Inefficient", new: "Automated WhatsApp & Email" },
  { feature: "Accessibility", old: "Desktop & On-Premise Only", new: "Cloud-Based & Mobile Friendly" },
  { feature: "Document Storage", old: "Physical Paper Files", new: "Secure Cloud Storage" }
];

export const FeatureComparison = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Why Choose Vidyakrit?
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            See exactly how modern software dramatically improves upon traditional management methods.
          </p>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'var(--bg-secondary)', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <thead>
              <tr style={{ background: '#f4f4f5' }}>
                <th style={{ padding: '2rem', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Operational Area</th>
                <th style={{ padding: '2rem', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Traditional Management</th>
                <th style={{ padding: '2rem', fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-primary-action)' }}>Vidyakrit ERP</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, i) => (
                <tr key={i} style={{ borderTop: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem 2rem', fontWeight: 500 }}>{item.feature}</td>
                  <td style={{ padding: '1.5rem 2rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <XCircle size={18} color="#ef4444" style={{ flexShrink: 0 }} />
                      {item.old}
                    </div>
                  </td>
                  <td style={{ padding: '1.5rem 2rem', fontWeight: 500 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle2 size={18} color="var(--color-primary-action)" style={{ flexShrink: 0 }} />
                      {item.new}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
