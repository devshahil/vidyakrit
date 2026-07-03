import React from 'react';
import { Button } from '@/components/ui/Button';

export const CtaSection = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Abstract Background Elements */}
      <div style={{ 
        position: 'absolute', 
        top: '-20%', left: '-10%', width: '50%', height: '50%', 
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.05) 0%, rgba(255,255,255,0) 70%)', 
        zIndex: 1 
      }}></div>
      <div style={{ 
        position: 'absolute', 
        bottom: '-20%', right: '-10%', width: '50%', height: '50%', 
        background: 'radial-gradient(circle, rgba(107, 33, 168, 0.05) 0%, rgba(255,255,255,0) 70%)', 
        zIndex: 1 
      }}></div>
      
      {/* Grid Pattern */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundImage: 'radial-gradient(var(--border-color) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        opacity: 0.5,
        zIndex: 1
      }}></div>

      <div className="container" style={{ maxWidth: '800px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
          Ready to Modernize Your School?
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '3rem' }}>
          Whether you're looking for a complete School ERP, a modern school website, custom software, or AI-powered automation, we're here to help you build the right solution.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" href="/contact" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
            Schedule a Demo
          </Button>
          <Button variant="secondary" size="lg" href="/contact" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
