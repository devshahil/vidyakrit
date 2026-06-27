"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

import { ErpSvg, AttendifySvg, LappyMartSvg } from '@/components/portfolio/ProjectGraphics';

const projects = [
  { id: 1, title: 'Vidyakrit School ERP', category: 'Web App', desc: 'Comprehensive cloud-based ERP solution for educational institutions managing operations at scale.', color: '#F8FAFC', Svg: ErpSvg },
  { id: 2, title: 'Attendify App', category: 'Mobile App', desc: 'Custom Android application for seamless student and staff attendance tracking.', color: '#F4F6FF', Svg: AttendifySvg },
  { id: 3, title: 'LappyMart', category: 'E-Commerce', desc: 'Custom e-commerce platform for refurbished laptops with a premium shopping experience.', color: '#FFFFFF', Svg: LappyMartSvg },
];

const categories = ['All', 'Web App', 'Mobile App', 'E-Commerce', 'Custom Software'];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Our Selected Work</h1>
          <p className={styles.subtitle}>
            A showcase of enterprise applications, premium websites, and custom software we've built.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.filters}>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="bentoGrid">
            {filteredProjects.map((project, index) => {
              const isLarge = index === 0; // Make ERP large
              const SvgComponent = project.Svg;
              return (
                <div key={project.id} className={`${styles.projectCard} ${isLarge ? 'bentoLarge' : ''}`} style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 1), 0 20px 40px rgba(0, 0, 0, 0.06)', borderRadius: '32px', border: 'none' }}>
                  <div className={styles.projectImageWrapper} style={{ backgroundColor: project.color }}>
                     <SvgComponent />
                  </div>
                  <div className={styles.projectInfo} style={{ padding: '2rem' }}>
                    <div className={styles.projectCategory}>{project.category}</div>
                    <h3 className={styles.projectTitle} style={{ fontSize: isLarge ? '2rem' : '1.5rem', letterSpacing: '-0.02em' }}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-light" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's build something great together.</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Ready to start your next project? Get in touch with our team today.
          </p>
          <Button size="lg" href="/contact">Start a Project</Button>
        </div>
      </section>
    </>
  );
}
