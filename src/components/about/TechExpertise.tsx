"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const technologies = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "000000" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "PHP", slug: "php", color: "777BB4" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "Supabase", slug: "supabase", color: "3ECF8E" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "Cloudflare", slug: "cloudflare", color: "F38020" },
  { name: "Express", slug: "express", color: "000000" },
];

export const TechExpertise = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' }, 
    [Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 600, marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
          Technologies We Use
        </h2>
      </div>

      {/* Marquee Container */}
      <div style={{ maxWidth: '100vw', overflow: 'hidden', cursor: 'grab' }} ref={emblaRef}>
        <div style={{ display: 'flex', touchAction: 'pan-y', backfaceVisibility: 'hidden', marginLeft: '-1rem' }}>
          {/* We duplicate the array slightly inside the render if we want to ensure it fills wide screens, but Embla loop handles most of this. To be safe for continuous scroll, we can render the list a couple of times. */}
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <div key={i} style={{ flex: '0 0 auto', minWidth: 0, paddingLeft: '1.5rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                padding: '0.75rem 1.5rem', 
                background: 'var(--bg-primary)', 
                borderRadius: 'var(--border-radius-pill)', 
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img 
                  src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt={`${tech.name} logo`}
                  style={{ width: '24px', height: '24px', display: 'block' }} 
                />
                <span style={{ fontWeight: 600, fontSize: '1rem', whiteSpace: 'nowrap' }}>{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
