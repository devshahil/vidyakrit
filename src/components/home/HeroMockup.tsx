"use client";

import React, { useState } from 'react';
import { Shield, CreditCard, CheckCircle, Search, MapPin, Activity } from 'lucide-react';
import styles from './HeroMockup.module.css';

export const HeroMockup = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'fees' | 'attendance'>('overview');

  return (
    <div className={styles.mockupContainer}>
      {/* OS Style Header Bar */}
      <div className={styles.windowHeader}>
        <div className={styles.trafficLights}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </div>
        <div className={styles.urlBar}>
          <Search size={11} /> erp.vidyakrit.in
        </div>
        <div className={styles.headerSpacer}>
          <div className={styles.secureBadge}>
            <Shield size={10} /> TLS 1.3
          </div>
        </div>
      </div>

      {/* Mobile Segmented Control */}
      <div className={styles.mobileTabs}>
        <button
          type="button"
          onClick={() => setActiveTab('overview')}
          className={`${styles.mobileTabBtn} ${activeTab === 'overview' ? styles.mobileTabBtnActive : ''}`}
        >
          Overview
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('fees')}
          className={`${styles.mobileTabBtn} ${activeTab === 'fees' ? styles.mobileTabBtnActive : ''}`}
        >
          Fees
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('attendance')}
          className={`${styles.mobileTabBtn} ${activeTab === 'attendance' ? styles.mobileTabBtnActive : ''}`}
        >
          GPS Attendance
        </button>
      </div>

      {/* Main Body */}
      <div className={styles.mockupBody}>
        {/* Desktop Sidebar */}
        <aside className={styles.sidebar}>
          <span className={styles.sidebarLabel}>Modules</span>
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`${styles.sidebarBtn} ${activeTab === 'overview' ? styles.sidebarBtnActive : ''}`}
          >
            <Activity size={14} /> Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('fees')}
            className={`${styles.sidebarBtn} ${activeTab === 'fees' ? styles.sidebarBtnActive : ''}`}
          >
            <CreditCard size={14} /> Fee Collection
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('attendance')}
            className={`${styles.sidebarBtn} ${activeTab === 'attendance' ? styles.sidebarBtnActive : ''}`}
          >
            <MapPin size={14} /> GPS Attendance
          </button>

          <div className={styles.sidebarFooter}>
            <Shield size={12} color="#15803d" />
            <span>Audited OS</span>
          </div>
        </aside>

        {/* Content Area */}
        <main className={styles.contentArea}>
          {activeTab === 'overview' && (
            <>
              <div className={styles.contentHeader}>
                <h4 className={styles.contentTitle}>Vidyakrit OS Dashboard</h4>
                <span className={styles.liveIndicator}>
                  <span className={styles.liveDot} /> Live Sync
                </span>
              </div>

              {/* Responsive Metrics Row */}
              <div className={styles.metricsGrid}>
                <div className={styles.metricCard}>
                  <span className={styles.metricSub}>Expected Fee</span>
                  <span className={styles.metricVal}>₹14,50,000</span>
                </div>
                <div className={styles.metricCard}>
                  <span className={styles.metricSub}>Live Attendance</span>
                  <span className={`${styles.metricVal} ${styles.metricValGreen}`}>96.8%</span>
                </div>
                <div className={styles.metricCard}>
                  <span className={styles.metricSub}>Total Students</span>
                  <span className={styles.metricVal}>1,480</span>
                </div>
              </div>

              {/* Status Activity List */}
              <div className={styles.activitySection}>
                <span className={styles.sectionHeading}>Recent Operations</span>
                <div className={styles.activityList}>
                  <div className={styles.activityRow}>
                    <span className={styles.activityDot} style={{ background: '#16a34a' }} />
                    <span className={styles.activityTag}>Class 10-A</span>
                    <span className={styles.activityText}>marked attendance successfully</span>
                  </div>
                  <div className={styles.activityRow}>
                    <span className={styles.activityDot} style={{ background: '#2563eb' }} />
                    <span className={styles.activityTag}>Admissions Desk</span>
                    <span className={styles.activityText}>processed new registration</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'fees' && (
            <>
              <div className={styles.contentHeader}>
                <h4 className={styles.contentTitle}>Instant Fee Collection</h4>
                <CreditCard size={18} color="#2563eb" />
              </div>

              <div className={styles.feeCard}>
                <div className={styles.feeHeader}>
                  <div>
                    <span className={styles.feeStudentName}>Aarav Sharma</span>
                    <span className={styles.feeStudentMeta}>Admission #20260408 · Class 8-B</span>
                  </div>
                  <span className={styles.feeAmount}>₹6,500</span>
                </div>

                <div className={styles.feePills}>
                  <span className={styles.feePillPrimary}>Tuition Fee</span>
                  <span className={styles.feePillSecondary}>Bus Route A</span>
                </div>
              </div>

              <div className={styles.feeBannerSuccess}>
                <CheckCircle size={16} style={{ flexShrink: 0 }} />
                <span>Collection cleared. WhatsApp receipt triggered to parent automatically.</span>
              </div>
            </>
          )}

          {activeTab === 'attendance' && (
            <>
              <div className={styles.contentHeader}>
                <h4 className={styles.contentTitle}>Staff Geofenced Attendance</h4>
                <MapPin size={18} color="#15803d" />
              </div>

              {/* Map & GPS Visual */}
              <div className={styles.mapCard}>
                <div className={styles.mapGridBackground} />
                <div className={styles.geofenceRing} />
                <div className={styles.campusPin}>
                  <MapPin size={22} color="#dc2626" />
                  <span className={styles.pinLabel}>Main Campus</span>
                </div>
              </div>

              {/* GPS logs */}
              <div className={styles.attendanceStatusRow}>
                <div>
                  <span className={styles.staffName}>Teacher Rakesh Sen</span>
                  <span className={styles.staffMeta}>Verified within 40m boundary</span>
                </div>
                <span className={styles.checkInBadge}>
                  <span className={styles.liveDot} /> Check In Passed
                </span>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};
