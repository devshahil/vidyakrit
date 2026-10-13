"use client";

import React from 'react';
import Link from 'next/link';
import { Code, Layout, Smartphone, ArrowRight } from 'lucide-react';
import styles from './AnimatedServices.module.css';

export const AnimatedServices = () => {
  return (
    <div className={styles.bentoGrid}>
      {/* Service 1 */}
      <Link href="/services" className={styles.bentoCard}>
        <div className={styles.iconWrapper}>
          <Code size={22} strokeWidth={2} />
        </div>
        <h3 className={styles.title}>Custom Enterprise Software</h3>
        <p className={styles.description}>
          Tailored enterprise solutions designed to digitize and scale your unique workflows. We build robust systems that grow with your organization.
        </p>
        <div className={styles.cardFooter}>
          <span>Explore Architecture</span>
          <ArrowRight size={16} />
        </div>
      </Link>

      {/* Service 2 */}
      <Link href="/services" className={styles.bentoCard}>
        <div className={styles.iconWrapper}>
          <Layout size={22} strokeWidth={2} />
        </div>
        <h3 className={styles.title}>Web Applications</h3>
        <p className={styles.description}>
          High-performance web applications engineered with modern, secure technologies to deliver seamless digital experiences.
        </p>
        <div className={styles.cardFooter}>
          <span>View Engineering Stack</span>
          <ArrowRight size={16} />
        </div>
      </Link>

      {/* Service 3 */}
      <Link href="/services" className={styles.bentoCard}>
        <div className={styles.iconWrapper}>
          <Smartphone size={22} strokeWidth={2} />
        </div>
        <h3 className={styles.title}>Mobile Development</h3>
        <p className={styles.description}>
          Native and cross-platform mobile experiences built to maximize user engagement on both iOS and Android ecosystems.
        </p>
        <div className={styles.cardFooter}>
          <span>Explore Mobile Solutions</span>
          <ArrowRight size={16} />
        </div>
      </Link>
    </div>
  );
};
