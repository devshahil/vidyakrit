import React from 'react';
import { CheckCircle } from 'lucide-react';

const standards = [
  "Clean Code",
  "Scalable Architecture",
  "Responsive Design",
  "Performance Optimization",
  "Secure Authentication",
  "Role-Based Permissions",
  "Automatic Backups",
  "Error Monitoring",
  "Regular Updates",
  "Accessibility",
  "Cross-Browser Compatibility",
  "Mobile Optimization"
];

export const EngineeringStandards = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Built with Engineering Excellence
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            We adhere to strict engineering standards to ensure your platform is robust, secure, and maintainable for decades to come.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {standards.map((std, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '1.25rem', 
              background: 'var(--bg-secondary)', 
              borderRadius: '12px' 
            }}>
              <CheckCircle size={20} color="var(--color-primary-action)" strokeWidth={2.5} />
              <span style={{ fontSize: '1.125rem', fontWeight: 500 }}>{std}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
