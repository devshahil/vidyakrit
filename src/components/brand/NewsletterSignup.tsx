"use client";

import React from 'react';

export const NewsletterSignup = () => {
  return (
    <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Stay Updated
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          Subscribe to receive the latest feature releases, security updates, and educational technology insights.
        </p>
        
        <form style={{ display: 'flex', gap: '0.5rem', maxWidth: '500px', margin: '0 auto' }} onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            style={{
              flexGrow: 1,
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '1rem 2rem',
              borderRadius: '12px',
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              fontWeight: 600,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
