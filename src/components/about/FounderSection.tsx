import React from 'react';
import Image from 'next/image';
import { Mail, CheckCircle2 } from 'lucide-react';
import styles from './FounderSection.module.css';

const expertise = [
  "Full Stack Development",
  "ERP Systems",
  "Web Applications",
  "AI Automation",
  "Cloud Infrastructure",
  "Performance Optimization"
];

// Simple SVG for LinkedIn
const LinkedinIcon = () => (
  <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Simple SVG for GitHub
const GithubIcon = () => (
  <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const FounderSection = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.04em' }}>Meet the Founder</h2>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '4rem', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Image Side */}
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '450px',
              aspectRatio: '4/5', 
              borderRadius: '32px', 
              overflow: 'hidden',
              background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-parchment) 100%)',
              boxShadow: 'var(--shadow-premium)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', zIndex: 1 }}>
                [Image: /images/shahil_kumar.webp]
              </div>
              <Image 
                src="/images/shahil_kumar.webp"
                alt="Shahil Kumar - Founder of Vidyakrit"
                fill
                style={{ objectFit: 'cover', zIndex: 2 }}
              />
            </div>
          </div>

          {/* Content Side */}
          <div style={{ flex: '1 1 500px' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.25rem', letterSpacing: '-0.03em' }}>Shahil Kumar</h3>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-primary-action)', fontWeight: 500, marginBottom: '2rem' }}>
              Founder & Full Stack Developer
            </p>

            <blockquote style={{ 
              fontSize: '1.25rem', 
              lineHeight: 1.7, 
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
              borderLeft: '4px solid var(--color-primary-action)',
              paddingLeft: '1.5rem',
              marginBottom: '3rem'
            }}>
              "Vidyakrit was created with a simple vision—to help educational institutions replace outdated manual processes with modern, secure, and easy-to-use technology. Every feature is built with long-term reliability, performance, and simplicity in mind."
            </blockquote>

            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Areas of Expertise</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
              {expertise.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="var(--color-primary-action)" strokeWidth={2} />
                  <span style={{ fontSize: '1rem', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            <div className={styles.card}>
              <ul>
                <li className={styles.isoPro}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <a href="#" aria-label="LinkedIn">
                    <LinkedinIcon />
                  </a>
                  <div className={styles.text}>LinkedIn</div>
                </li>
                <li className={styles.isoPro}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <a href="#" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                  <div className={styles.text}>GitHub</div>
                </li>
                <li className={styles.isoPro}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <a href="#" aria-label="Email">
                    <Mail className={styles.svg} />
                  </a>
                  <div className={styles.text}>Email</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
