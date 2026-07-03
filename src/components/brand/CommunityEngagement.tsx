import React from 'react';
import { Button } from '@/components/ui/Button';

export const CommunityEngagement = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          Let's Build Better Education Together
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '3rem' }}>
          Vidyakrit values direct feedback from educators, principals, and administrators. Our platform continuously evolves based on your real-world requirements. 
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" href="/contact">
            Book a Demo
          </Button>
          <Button variant="secondary" size="lg" href="/contact">
            Request a Feature
          </Button>
          <Button variant="secondary" size="lg" href="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
