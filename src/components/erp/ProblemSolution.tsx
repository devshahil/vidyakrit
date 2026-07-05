"use client";

import React from 'react';
import styles from './ProblemSolution.module.css';
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

export const ProblemSolution = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <FadeIn>
          <div className={styles.header}>
            <h2 className="display-section">Why Upgrade Your Campus?</h2>
            <p className="text-body-premium">
              Traditional school management relies on disconnected tools, paper records, and manual data entry. We engineered Vidyakrit OS to eliminate the chaos and automate your daily operations.
            </p>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {/* The Old Way */}
          <FadeIn delay={0.1}>
            <div className={`${styles.card} ${styles.cardOld}`}>
              <div className={`${styles.badge} ${styles.badgeOld}`}>The Old Way</div>
              
              <div className={styles.cardHeader}>
                <div className={`${styles.iconWrap} ${styles.iconWrapOld}`}>
                  <AlertTriangle size={24} />
                </div>
                <h3 className={styles.title}>Fragmented Chaos</h3>
              </div>
              
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <XCircle size={20} className={styles.listIcon} />
                  <p className={styles.listText}><span className={styles.highlight}>Lost Revenue:</span> Tracking outstanding fees via spreadsheets leads to missed payments and delayed cash flow.</p>
                </div>
                <div className={styles.listItem}>
                  <XCircle size={20} className={styles.listIcon} />
                  <p className={styles.listText}><span className={styles.highlight}>Manual Errors:</span> Re-entering student data across different software (Tally, Excel, WhatsApp) creates discrepancies.</p>
                </div>
                <div className={styles.listItem}>
                  <XCircle size={20} className={styles.listIcon} />
                  <p className={styles.listText}><span className={styles.highlight}>Poor Communication:</span> Relying on unmanaged WhatsApp groups for parent notifications is unprofessional and insecure.</p>
                </div>
                <div className={styles.listItem}>
                  <XCircle size={20} className={styles.listIcon} />
                  <p className={styles.listText}><span className={styles.highlight}>Blind Spots:</span> Administrators lack real-time visibility into daily attendance, staff presence, and academic health.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* The Vidyakrit Way */}
          <FadeIn delay={0.2}>
            <div className={`${styles.card} ${styles.cardNew}`}>
              <div className={`${styles.badge} ${styles.badgeNew}`}>The Vidyakrit Way</div>
              
              <div className={styles.cardHeader}>
                <div className={`${styles.iconWrap} ${styles.iconWrapNew}`}>
                  <ShieldCheck size={24} />
                </div>
                <h3 className={styles.title}>Unified Automation</h3>
              </div>
              
              <div className={styles.list}>
                <div className={styles.listItem}>
                  <CheckCircle2 size={20} className={styles.listIcon} />
                  <p className={styles.listText}><span className={styles.highlight}>Automated Collections:</span> Instant UPI/Card payment links with auto-generated receipts and SMS reminders.</p>
                </div>
                <div className={styles.listItem}>
                  <CheckCircle2 size={20} className={styles.listIcon} />
                  <p className={styles.listText}><span className={styles.highlight}>Single Source of Truth:</span> Enter data once. Admissions, exams, fees, and transport all pull from one secure database.</p>
                </div>
                <div className={styles.listItem}>
                  <CheckCircle2 size={20} className={styles.listIcon} />
                  <p className={styles.listText}><span className={styles.highlight}>Dedicated Parent App:</span> Professional, secure push notifications for homework, attendance, and exam results.</p>
                </div>
                <div className={styles.listItem}>
                  <CheckCircle2 size={20} className={styles.listIcon} />
                  <p className={styles.listText}><span className={styles.highlight}>Live Analytics:</span> Real-time dashboards showing daily collection metrics, GPS staff attendance, and exact student counts.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
