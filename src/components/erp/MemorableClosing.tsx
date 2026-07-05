"use client";

import React from 'react';
import styles from './MemorableClosing.module.css';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';

export const MemorableClosing = () => {
  return (
    <section className={styles.container}>
      <div className={styles.glow}></div>
      <div className="container">
        <FadeIn>
          <div className={styles.content}>
            <h2 className={styles.title}>Ready to upgrade your campus?</h2>
            <p className={styles.subtitle}>
              Join the fastest-growing schools in India running on Vidyakrit OS. Schedule a demo today and see how we can migrate your data in under 7 days.
            </p>
            <div className={styles.ctaWrapper}>
              <Button size="lg" href="/contact" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem', borderRadius: '99px' }}>
                Book Your Live Demo
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
