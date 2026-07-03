"use client";

import React from 'react';
import { Layout, Globe, Code2, Bot, Smartphone, Cloud, Network, HeadphonesIcon, ArrowRight } from 'lucide-react';

const services = [
  { icon: <Layout size={32} />, title: "School ERP", desc: "Modern, secure school management platform." },
  { icon: <Globe size={32} />, title: "Website Development", desc: "Responsive, secure and SEO-friendly websites." },
  { icon: <Code2 size={32} />, title: "Custom Software", desc: "Tailored applications built around unique workflows." },
  { icon: <Bot size={32} />, title: "AI Automation", desc: "Intelligent automation to reduce repetitive work." },
  { icon: <Smartphone size={32} />, title: "Mobile Applications", desc: "Android and iOS solutions for staff and customers." },
  { icon: <Cloud size={32} />, title: "Cloud Solutions", desc: "Deployment, hosting and infrastructure management." },
  { icon: <Network size={32} />, title: "API Integrations", desc: "Connect payment gateways and third-party systems." },
  { icon: <HeadphonesIcon size={32} />, title: "Maintenance & Support", desc: "Continuous improvements and technical assistance." }
];

export const ServicesEcosystem = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Everything Your Institution Needs in One Place
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            We provide a complete ecosystem of engineering services to handle every aspect of your digital transformation.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {services.map((svc, i) => (
            <div 
              key={i} 
              style={{
                background: 'var(--bg-secondary)',
                padding: '2.5rem',
                borderRadius: '24px',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
                e.currentTarget.style.borderColor = 'var(--color-primary-action)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div style={{ color: 'var(--color-primary-action)' }}>{svc.icon}</div>
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>{svc.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{svc.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
