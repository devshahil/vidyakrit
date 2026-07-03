import React from 'react';
import { Button } from '@/components/ui/Button';

export const CareersSection = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          Join Our Journey
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '3rem' }}>
          We're always interested in connecting with passionate developers, designers, and educators who want to build technology that makes a difference. Even if no specific positions are currently open, we'd love to hear from you.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" href="/contact">
            View Open Positions
          </Button>
          <Button variant="secondary" size="lg" href="/contact">
            Submit Resume
          </Button>
        </div>
      </div>
    </section>
  );
};
