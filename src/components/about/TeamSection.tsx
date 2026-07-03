import React from 'react';
import Image from 'next/image';

export const TeamSection = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Meet the Team
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            The dedicated engineers, designers, and educators building the future of school administration.
          </p>
        </div>

        <div style={{ 
          position: 'relative', 
          width: '100%', 
          aspectRatio: '16/9', 
          borderRadius: '32px', 
          overflow: 'hidden',
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-premium)'
        }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', zIndex: 1 }}>
            [Image: /images/team_group.webp]
          </div>
          <Image 
            src="/images/team_group.webp"
            alt="The Vidyakrit Team"
            fill
            style={{ objectFit: 'cover', zIndex: 2 }}
          />
        </div>
      </div>
    </section>
  );
};
