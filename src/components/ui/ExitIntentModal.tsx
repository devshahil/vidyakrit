"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

export const ExitIntentModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop where mouseleave makes sense
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    const hasSeenModal = localStorage.getItem('vidyakrit_exit_intent_seen');
    if (hasSeenModal) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when cursor leaves the top of the viewport (intent to close/switch tab)
      if (e.clientY <= 0) {
        setIsVisible(true);
        localStorage.setItem('vidyakrit_exit_intent_seen', 'true');
        // Remove listener after triggering once
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(12px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeInPage 0.3s ease-out forwards',
      }}
    >
      <div 
        style={{
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-color)',
          borderRadius: '24px',
          padding: '3rem 2.5rem',
          maxWidth: '500px',
          width: '100%',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          textAlign: 'center'
        }}
      >
        <button 
          onClick={() => setIsVisible(false)}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-secondary)',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'none'}
        >
          <X size={20} />
        </button>

        <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
          Wait! Before you go...
        </h3>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          Get a <strong style={{ color: 'var(--color-primary-action)' }}>Free 30-Minute Architecture Audit</strong> with our lead engineers. Find out exactly how we can modernize your legacy systems and scale your operations.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Button 
            size="lg" 
            href="/contact" 
            onClick={() => setIsVisible(false)} 
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Claim Free Audit
          </Button>
          <button 
            onClick={() => setIsVisible(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 500,
              textDecoration: 'underline',
              marginTop: '0.5rem'
            }}
          >
            No thanks, I'll pass.
          </button>
        </div>
      </div>
    </div>
  );
};
