import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const completed = [
  "Student Management",
  "Staff & HR Management",
  "Attendance",
  "Fee Management",
  "Communication & Alerts",
  "Reports & Analytics",
  "Security & Access Control",
  "Parent Portal",
  "Android App"
];

const comingSoon = [
  "AI Assistant",
  "Advanced Analytics",
  "iOS App",
  "Smart Notifications",
  "Examination",
  "Website Builder"
];

export const RoadmapTimeline = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Product Evolution
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            We are continuously building and shipping new features.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          {/* Completed */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Completed
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {completed.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle2 color="var(--color-primary-action)" size={24} strokeWidth={2} />
                  <span style={{ fontSize: '1.125rem', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Coming Soon
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {comingSoon.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Circle color="var(--text-secondary)" size={24} strokeWidth={2} />
                  <span style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
