import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span>Vidyakrit</span>
            </Link>
            <p className={styles.description}>
              Building world-class software solutions and empowering education through our flagship School ERP.
            </p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linksGroup}>
              <h4 className={styles.groupTitle}>Company</h4>
              <Link href="/about" className={styles.link}>About Us</Link>
              <Link href="/careers" className={styles.link}>Careers</Link>
              <Link href="/contact" className={styles.link}>Contact</Link>
            </div>
            <div className={styles.linksGroup}>
              <h4 className={styles.groupTitle}>Services</h4>
              <Link href="/services" className={styles.link}>Custom Software</Link>
              <Link href="/services" className={styles.link}>Mobile Apps</Link>
              <Link href="/services" className={styles.link}>UI/UX Design</Link>
            </div>
            <div className={styles.linksGroup}>
              <h4 className={styles.groupTitle}>Products</h4>
              <Link href="/products/school-erp" className={styles.link}>School ERP</Link>
              <Link href="/products/school-erp#features" className={styles.link}>Features</Link>
              <Link href="/products/school-erp#pricing" className={styles.link}>Pricing</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Vidyakrit. All rights reserved.</p>
          <div className={styles.legalLinks} style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy-policy" className={styles.link} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Privacy Policy</Link>
            <Link href="/terms-of-service" className={styles.link} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Terms of Service</Link>
          </div>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink}>Twitter</a>
            <a href="#" className={styles.socialLink}>LinkedIn</a>
            <a href="#" className={styles.socialLink}>GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
