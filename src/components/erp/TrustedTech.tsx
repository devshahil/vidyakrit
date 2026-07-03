"use client";

import React from 'react';
import { Layers, Database, Lock, Globe, Server, MessageCircle, Mail, CreditCard, Cpu, Layout } from 'lucide-react';
import styles from './TrustedTech.module.css';

const technologies = [
  { name: 'React', desc: 'Modern interactive user interfaces.', icon: <Layout size={24} strokeWidth={1.5} /> },
  { name: 'Next.js', desc: 'High-performance edge computing.', icon: <Layers size={24} strokeWidth={1.5} /> },
  { name: 'Node.js', desc: 'Scalable backend architecture.', icon: <Server size={24} strokeWidth={1.5} /> },
  { name: 'PostgreSQL', desc: 'Robust relational database.', icon: <Database size={24} strokeWidth={1.5} /> },
  { name: 'Supabase', desc: 'Secure real-time backend.', icon: <Database size={24} strokeWidth={1.5} /> },
  { name: 'Cloudflare', desc: 'Global CDN and DDoS protection.', icon: <Globe size={24} strokeWidth={1.5} /> },
  { name: 'Docker', desc: 'Containerized isolated environments.', icon: <Cpu size={24} strokeWidth={1.5} /> },
  { name: 'Razorpay', desc: 'Enterprise-grade payment processing.', icon: <CreditCard size={24} strokeWidth={1.5} /> },
  { name: 'WhatsApp API', desc: 'Instant parent notifications.', icon: <MessageCircle size={24} strokeWidth={1.5} /> },
  { name: 'Resend / Zepto', desc: 'Reliable transactional emails.', icon: <Mail size={24} strokeWidth={1.5} /> },
];

export const TrustedTech = () => {
  // Duplicate array for seamless infinite scrolling
  const marqueeTechs = [...technologies, ...technologies];

  return (
    <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            Built With Modern Technology
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Engineered using modern, secure, and scalable technologies trusted by businesses worldwide.
          </p>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            {marqueeTechs.map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`} 
                className={styles.techCard}
              >
                <div className={styles.techIcon}>
                  {tech.icon}
                </div>
                <h3 className={styles.techName}>
                  {tech.name}
                </h3>
                <p className={styles.techDesc}>
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
