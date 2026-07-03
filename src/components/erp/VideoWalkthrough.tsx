"use client";

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const VideoWalkthrough = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '1000px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
          See Vidyakrit in Action
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '3rem' }}>
          Watch a 90-second walkthrough of the complete School ERP.
        </p>

        <div style={{ 
          position: 'relative', 
          width: '100%', 
          aspectRatio: '16/9', 
          borderRadius: '24px', 
          overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
          marginBottom: '3rem',
          background: '#e5e5e5'
        }}>
          {/* Fallback text */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', zIndex: 1 }}>
            [Image: /images/video_thumbnail.webp]
          </div>
          
          <Image 
            src="/images/video_thumbnail.webp" 
            alt="Vidyakrit ERP Walkthrough Thumbnail" 
            fill 
            style={{ objectFit: 'cover', zIndex: 2 }}
          />

          {/* Overlay & Blur */}
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'rgba(0,0,0,0.3)', 
            backdropFilter: 'blur(2px)', 
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <button style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              border: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Play fill="var(--color-primary-action)" color="var(--color-primary-action)" size={32} style={{ marginLeft: '4px' }} />
            </button>
          </div>
        </div>

        <Button size="lg" href="/contact">Book Live Demo</Button>
      </div>
    </section>
  );
};
