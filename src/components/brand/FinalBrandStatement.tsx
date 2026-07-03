import React from 'react';
import { Button } from '@/components/ui/Button';

export const FinalBrandStatement = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Abstract Background */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'radial-gradient(circle at center, rgba(0, 102, 204, 0.05) 0%, rgba(255,255,255,0) 70%)', 
        zIndex: 1 
      }}></div>

      <div className="container" style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          More Than Software.<br />A Technology Partner.
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '3.5rem' }}>
          At Vidyakrit, we believe technology should simplify operations, strengthen communication, and help institutions focus on what truly matters—education. Whether you're implementing our School ERP, building a modern website, or exploring AI-powered automation, our goal is to become your trusted long-term technology partner.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" href="/contact" style={{ padding: '1.25rem 3.5rem', fontSize: '1.125rem' }}>
            Book a Demo
          </Button>
          <Button variant="secondary" size="lg" href="/contact" style={{ padding: '1.25rem 3.5rem', fontSize: '1.125rem' }}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
