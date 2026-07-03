import React from 'react';
import { Button } from '@/components/ui/Button';

export const SalesCta = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Dashboard-inspired abstract background elements */}
      <div style={{ 
        position: 'absolute', 
        top: '-10%', right: '-5%', width: '40%', height: '80%', 
        background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(255,255,255,0) 100%)', 
        borderRadius: '32px',
        transform: 'rotate(-15deg)',
        zIndex: 1,
        border: '1px solid rgba(0, 102, 204, 0.1)'
      }}></div>
      
      <div style={{ 
        position: 'absolute', 
        bottom: '-10%', left: '-5%', width: '30%', height: '60%', 
        background: 'linear-gradient(135deg, rgba(107, 33, 168, 0.05) 0%, rgba(255,255,255,0) 100%)', 
        borderRadius: '24px',
        transform: 'rotate(10deg)',
        zIndex: 1,
        border: '1px solid rgba(107, 33, 168, 0.1)'
      }}></div>

      <div className="container" style={{ maxWidth: '800px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
          Ready to Experience Vidyakrit?
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '3rem' }}>
          Book a personalized demonstration and discover exactly how Vidyakrit can simplify your school's daily operations and empower your staff.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" href="/contact" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
            Book a Demo
          </Button>
          <Button variant="secondary" size="lg" href="/contact" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
