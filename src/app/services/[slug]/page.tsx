import React from 'react';
import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ChevronDown, ArrowLeft } from "lucide-react";
import styles from "./page.module.css";
import { servicesData } from '../servicesData';
import Link from 'next/link';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 500, textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to Services
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div className={styles.serviceIconBox} style={{ margin: 0 }}>
              {service.icon}
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              {service.title}
            </h1>
          </div>
          
          <p style={{ fontSize: 'clamp(1.125rem, 1.8vw, 1.25rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="section section-light" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className={styles.contentArea}>
            {/* The Challenge & Solution */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>The Challenge</h2>
              <p className={styles.problemText}>{service.problem}</p>
              
              <div className={styles.solutionText}>
                <strong>The Vidyakrit Solution:</strong> {service.solution}
              </div>
            </div>

            {/* Benefits */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Key Benefits</h2>
              <ul className={styles.benefitList}>
                {service.benefits.map((benefit, i) => (
                  <li key={i} className={styles.benefitItem}>
                    <div className={styles.benefitDot}>
                      <CheckCircle2 size={16} />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Our Process</h2>
              <div className={styles.processGrid}>
                {service.process.map((step, i) => (
                  <div key={i} className={styles.processCard}>
                    <span className={styles.processStep}>STEP {step.step}</span>
                    <h3 className={styles.processTitle}>{step.title}</h3>
                    <p className={styles.processDesc}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Technologies Used</h2>
              <div className={styles.techTags}>
                {service.technologies.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className={styles.contentBlock}>
              <h2 className={styles.blockTitle}>Frequently Asked Questions</h2>
              <div>
                {service.faq.map((item, i) => (
                  <details key={i} className={styles.faqItem}>
                    <summary className={styles.faqSummary}>
                      {item.q}
                      <ChevronDown size={20} className={styles.chevron} />
                    </summary>
                    <div className={styles.faqContent}>{item.a}</div>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={`${styles.contentBlock} ${styles.ctaBlock}`}>
              <h2 className={styles.blockTitle}>Ready to get started?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontSize: '1.125rem' }}>
                Let's discuss how our {service.title} solutions can transform your business.
              </p>
              <Button size="lg" href="/contact">{service.ctaText}</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
