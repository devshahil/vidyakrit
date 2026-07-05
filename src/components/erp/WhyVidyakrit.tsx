"use client";

import React from 'react';
import { MapPin, Cloud, Users, MessageSquare, CreditCard, Shield, Zap, RefreshCw, CheckCircle2 } from 'lucide-react';
import styles from './WhyVidyakrit.module.css';

export const WhyVidyakrit = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Why Schools Choose Vidyakrit
          </h2>
          <p className={styles.subtitle}>
            Designed specifically for modern educational institutions that value simplicity, speed, security, and long-term growth.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* Card 1: Dashboard (Spans 2 columns) */}
          <div className={`${styles.card} ${styles.colSpan2}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Users size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>At-a-Glance Dashboard</h3>
            </div>
            <p className={styles.cardDesc}>
              See your total student strength, today's live attendance, and expected fee revenue the moment you log in. No complicated navigation or queries required.
            </p>
            <div className={styles.mockupArea}>
              <div className={styles.chartMockup}>
                <div className={styles.chartBar} style={{ height: '35%' }}></div>
                <div className={styles.chartBar} style={{ height: '55%' }}></div>
                <div className={styles.chartBar} style={{ height: '75%' }}></div>
                <div className={`${styles.chartBar} ${styles.chartBarActive}`} style={{ height: '90%' }}></div>
                <div className={styles.chartBar} style={{ height: '65%' }}></div>
              </div>
            </div>
          </div>

          {/* Card 2: Fee Collection */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <CreditCard size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>One-Click Fees</h3>
            </div>
            <p className={styles.cardDesc}>
              Collect fees instantly via cash, UPI, or cards. The system automatically reconciles accounts and generates receipts.
            </p>
            <div className={styles.mockupArea}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '10px 14px', fontSize: '12px' }}>
                <span style={{ fontWeight: 600 }}>UPI Clear</span>
                <span style={{ color: '#27c93f', fontWeight: 600 }}>$120.00</span>
              </div>
            </div>
          </div>

          {/* Card 3: WhatsApp Alerts */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <MessageSquare size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>WhatsApp Alerts</h3>
            </div>
            <p className={styles.cardDesc}>
              Keep parents in the loop. Automatically send WhatsApp messages for absent students or fee due reminders.
            </p>
            <div className={styles.mockupArea}>
              <div className={styles.smsMockup}>
                <div className={styles.smsDot}></div>
                <span>Receipt sent to Rahul's father.</span>
              </div>
            </div>
          </div>

          {/* Card 4: GPS Attendance (Spans 2 columns) */}
          <div className={`${styles.card} ${styles.colSpan2}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Cloud size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>GPS Staff Attendance</h3>
            </div>
            <p className={styles.cardDesc}>
              Our dedicated mobile application ensures staff can only check in when they are physically inside the geofenced school campus boundaries.
            </p>
            <div className={styles.mockupArea}>
              <div className={styles.gpsMockup}>
                <div className={styles.gpsRadius}></div>
                <MapPin size={20} color="#27c93f" style={{ position: 'relative', zIndex: 2 }} />
              </div>
            </div>
          </div>

          {/* Card 5: Smart Profiles */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Users size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>Student Profiles</h3>
            </div>
            <p className={styles.cardDesc}>
              Manage the entire student journey, auto-generate school ID cards, and handle bulk class promotions seamlessly.
            </p>
          </div>

          {/* Card 6: Device Security */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Shield size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>Device Security</h3>
            </div>
            <p className={styles.cardDesc}>
              Keep data safe. New staff login devices must be explicitly approved by an administrator before access is granted.
            </p>
          </div>

          {/* Card 7: Export to Excel */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <Zap size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>Export to Excel</h3>
            </div>
            <p className={styles.cardDesc}>
              Need data offline? Download student lists, fee ledgers, and attendance charts to Excel with a single click.
            </p>
          </div>

          {/* Card 8: Built for Local Schools */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <RefreshCw size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>Built for India</h3>
            </div>
            <p className={styles.cardDesc}>
              Designed for local challenges. Integrates holiday calendars to pause auto-alerts and supports custom regional settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
