"use client";

import React from 'react';
import { Lightbulb, MousePointerClick, Zap, ShieldCheck, TrendingUp, Handshake } from 'lucide-react';

const philosophies = [
  { title: "Understand Before Building", desc: "Every institution is different. We dive deep into your workflow before writing a single line of code.", icon: <Lightbulb size={24} /> },
  { title: "Simple User Experience", desc: "Technology should reduce complexity. If it requires a manual to use, we redesign it.", icon: <MousePointerClick size={24} /> },
  { title: "Performance First", desc: "Fast software improves productivity. We optimize every millisecond of load time.", icon: <Zap size={24} /> },
  { title: "Security by Design", desc: "Protecting student data is essential. Security is built into the foundation, not added as an afterthought.", icon: <ShieldCheck size={24} /> },
  { title: "Continuous Improvement", desc: "Products evolve with customer feedback. We ship regular, seamless updates over the air.", icon: <TrendingUp size={24} /> },
  { title: "Long-Term Partnership", desc: "We focus on relationships, not one-time projects. Your long-term success is our success.", icon: <Handshake size={24} /> },
];

export const DevPhilosophy = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            How We Build Software
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Our engineering process is driven by a core set of principles designed to deliver exceptional value.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {philosophies.map((item, index) => (
            <div 
              key={index}
              style={{
                padding: '2.5rem',
                background: 'var(--bg-secondary)',
                borderRadius: '24px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ color: 'var(--color-primary-action)', marginBottom: '1.5rem' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
