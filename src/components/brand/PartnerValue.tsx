"use client";

import React from 'react';
import { Handshake, Code2, MessagesSquare, Scaling, Sparkles, BookOpenCheck } from 'lucide-react';

const values = [
  { icon: <Handshake size={32} />, title: "Long-Term Partnership", desc: "We don't disappear after launch. We continue supporting and growing with you." },
  { icon: <Code2 size={32} />, title: "Modern Engineering", desc: "Built with cutting-edge technologies to ensure incredible speed and security." },
  { icon: <MessagesSquare size={32} />, title: "Transparent Communication", desc: "No jargon. Just clear timelines, honest feedback, and regular updates." },
  { icon: <Scaling size={32} />, title: "Scalable Solutions", desc: "Architecture designed to handle your growth from 100 to 10,000 students effortlessly." },
  { icon: <Sparkles size={32} />, title: "Continuous Improvements", desc: "We push seamless over-the-air updates so your software never feels outdated." },
  { icon: <BookOpenCheck size={32} />, title: "Focused on Education", desc: "Interfaces meticulously crafted around actual educational workflows." }
];

export const PartnerValue = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Why Partner With Vidyakrit?
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            We provide more than just software. We provide peace of mind.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {values.map((val, i) => (
            <div 
              key={i} 
              style={{
                background: 'var(--bg-secondary)',
                padding: '2.5rem',
                borderRadius: '24px',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ color: 'var(--color-primary-action)', marginBottom: '1.5rem' }}>{val.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>{val.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
