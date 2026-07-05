"use client";

import React from 'react';
import styles from './ErpHeroVisual.module.css';
import { CreditCard, Bell, Calendar } from 'lucide-react';

export const ErpHeroVisual = () => {
  return (
    <div className={styles.visualContainer}>
      {/* Background Browser Dashboard */}
      <div className={styles.browserFrame}>
        <div className={styles.browserHeader}>
          <div className={`${styles.dot} ${styles.dotClose}`}></div>
          <div className={`${styles.dot} ${styles.dotMin}`}></div>
          <div className={`${styles.dot} ${styles.dotMax}`}></div>
        </div>
        <div className={styles.browserContent}>
          <div className={styles.mockNav}>
            <div className={styles.mockNavLine}></div>
          </div>
          <div className={styles.mockGrid}>
            <div className={styles.mockCard}>
              <div className={styles.mockCardLine}></div>
              <div className={styles.mockCardLine}></div>
              <div className={styles.mockCardLine}></div>
              <div className={styles.mockCardLine}></div>
            </div>
            <div className={styles.mockCard}>
              <div className={styles.mockCardLine}></div>
              <div className={styles.mockCardLine}></div>
              <div className={styles.mockCardLine}></div>
            </div>
            <div className={styles.mockCard}>
              <div className={styles.mockCardLine}></div>
              <div className={styles.mockCardLine}></div>
            </div>
            <div className={styles.mockCard}>
              <div className={styles.mockCardLine}></div>
              <div className={styles.mockCardLine}></div>
              <div className={styles.mockCardLine}></div>
              <div className={styles.mockCardLine}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Foreground Mobile App */}
      <div className={styles.mobileFrame}>
        <div className={styles.mobileNotch}></div>
        <div className={styles.mobileContent}>
          <div className={styles.mobileAppCard}>
            <div className={styles.mobileAppIcon} style={{ color: '#27c93f', background: 'rgba(39, 201, 63, 0.1)' }}>
              <CreditCard size={18} />
            </div>
            <div className={styles.mobileAppLines}>
              <div className={styles.mobileLine}></div>
              <div className={styles.mobileLine}></div>
            </div>
          </div>
          <div className={styles.mobileAppCard}>
            <div className={styles.mobileAppIcon} style={{ color: '#ffbd2e', background: 'rgba(255, 189, 46, 0.1)' }}>
              <Bell size={18} />
            </div>
            <div className={styles.mobileAppLines}>
              <div className={styles.mobileLine}></div>
              <div className={styles.mobileLine}></div>
            </div>
          </div>
          <div className={styles.mobileAppCard}>
            <div className={styles.mobileAppIcon}>
              <Calendar size={18} />
            </div>
            <div className={styles.mobileAppLines}>
              <div className={styles.mobileLine}></div>
              <div className={styles.mobileLine}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
