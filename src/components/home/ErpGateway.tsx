"use client";

import React, { useState } from 'react';
import styles from './ErpGateway.module.css';
import { CreditCard, Users, MessageSquare, MapPin } from 'lucide-react';

export const ErpGateway = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      id: 0, 
      title: "Automated Billing", 
      desc: "Seamless payment gateways with auto-reminders and instant invoicing.", 
      icon: <CreditCard size={18} /> 
    },
    { 
      id: 1, 
      title: "Parent App", 
      desc: "Dedicated mobile portals for real-time communication and progress tracking.", 
      icon: <MessageSquare size={18} /> 
    },
    { 
      id: 2, 
      title: "Academic Engine", 
      desc: "Advanced scheduling, automated exam grading, and report card generation.", 
      icon: <Users size={18} /> 
    },
    { 
      id: 3, 
      title: "GPS Attendance", 
      desc: "Geofenced staff check-ins directly from their smartphones.", 
      icon: <MapPin size={18} /> 
    },
  ];

  return (
    <div className={styles.gatewayContainer}>
      {/* Interactive Tabs */}
      <div className={styles.tabsCol}>
        {tabs.map((tab, idx) => (
          <button 
            key={tab.id}
            type="button"
            className={`${styles.tabBtn} ${activeTab === idx ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            <div className={styles.tabIcon}>{tab.icon}</div>
            <div className={styles.tabText}>
              <h3 className={styles.tabTitle}>{tab.title}</h3>
              <p className={styles.tabDesc}>{tab.desc}</p>
            </div>
          </button>
        ))}
      </div>
      
      {/* Device Preview */}
      <div className={styles.previewCol}>
        <div className={styles.deviceFrame}>
          {/* Mockup Window Header */}
          <div className={styles.windowHeader}>
            <div className={styles.windowControls}>
              <span className={styles.dotClose} />
              <span className={styles.dotMin} />
              <span className={styles.dotMax} />
            </div>
            <span className={styles.windowTitle}>Vidyakrit Enterprise Console</span>
            <div style={{ width: '40px' }} />
          </div>
          
          {/* Active Preview Content */}
          <div className={styles.previewContent}>
            {activeTab === 0 && (
              <div className={styles.mockupUI}>
                <div className={styles.mockTitleRow}>
                  <h4 className={styles.mockTitle}>Fee Collection Status</h4>
                  <span className={styles.mockBadge}>UPI / RTGS Gateway</span>
                </div>
                
                <div className={styles.mockRow}>
                  <div className={styles.mockTextCol}>
                    <span className={styles.mockPrimaryText}>Arjun Kumar (Grade 10)</span>
                    <span className={styles.mockSecondaryText}>Inv #VK-2026-891 · Q3 Comprehensive Fee</span>
                  </div>
                  <span className={styles.mockStatusSuccess}>Paid via UPI</span>
                </div>

                <div className={styles.mockRow}>
                  <div className={styles.mockTextCol}>
                    <span className={styles.mockPrimaryText}>Neha Singh (Grade 8)</span>
                    <span className={styles.mockSecondaryText}>Inv #VK-2026-892 · Lab & Tuition</span>
                  </div>
                  <span className={styles.mockStatusSuccess}>Paid via Card</span>
                </div>

                <div className={styles.mockRow}>
                  <div className={styles.mockTextCol}>
                    <span className={styles.mockPrimaryText}>Rahul Verma (Grade 12)</span>
                    <span className={styles.mockSecondaryText}>Inv #VK-2026-893 · Board Examination Fee</span>
                  </div>
                  <span className={styles.mockStatusPending}>Pending Verification</span>
                </div>
              </div>
            )}
            
            {activeTab === 1 && (
              <div className={styles.mockupUI}>
                <div className={styles.mockTitleRow}>
                  <h4 className={styles.mockTitle}>Communication Log & Dispatches</h4>
                  <span className={styles.mockBadge}>Live Multi-channel</span>
                </div>

                <div className={styles.mockRow}>
                  <div className={styles.mockTextCol}>
                    <span className={styles.mockPrimaryText}>Mid-term results published</span>
                    <span className={styles.mockSecondaryText}>Automated PDF report cards delivered to portals</span>
                  </div>
                  <span className={styles.mockStatusSuccess}>Sent to 450 Parents</span>
                </div>

                <div className={styles.mockRow}>
                  <div className={styles.mockTextCol}>
                    <span className={styles.mockPrimaryText}>Notice: Tomorrow is a public holiday</span>
                    <span className={styles.mockSecondaryText}>Instant broadcast alert via App + SMS</span>
                  </div>
                  <span className={styles.mockStatusSuccess}>Sent to 800 Users</span>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className={styles.mockupUI}>
                <div className={styles.mockTitleRow}>
                  <h4 className={styles.mockTitle}>Academic Engine & Evaluation</h4>
                  <span className={styles.mockBadge}>Session 2026-27</span>
                </div>

                <div className={styles.academicSummary}>
                  <div className={styles.academicStatCard}>
                    <span className={styles.statVal}>84.6%</span>
                    <span className={styles.statTitle}>School Average</span>
                  </div>
                  <div className={styles.academicStatCard}>
                    <span className={styles.statVal}>99.4%</span>
                    <span className={styles.statTitle}>Pass Percentage</span>
                  </div>
                </div>

                <div className={styles.subjectProgressList}>
                  <div className={styles.subjectProgressItem}>
                    <div className={styles.subjectLabelRow}>
                      <span>Mathematics & Logic</span>
                      <span>88%</span>
                    </div>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressBar} style={{ width: '88%' }} />
                    </div>
                  </div>

                  <div className={styles.subjectProgressItem}>
                    <div className={styles.subjectLabelRow}>
                      <span>Computer Sciences</span>
                      <span>94%</span>
                    </div>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressBar} style={{ width: '94%' }} />
                    </div>
                  </div>

                  <div className={styles.subjectProgressItem}>
                    <div className={styles.subjectLabelRow}>
                      <span>Science & Physics</span>
                      <span>82%</span>
                    </div>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressBar} style={{ width: '82%' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className={styles.mockupUI}>
                <div className={styles.mockTitleRow}>
                  <h4 className={styles.mockTitle}>Staff Check-ins Today</h4>
                  <span className={styles.mockBadge}>Geofence Active</span>
                </div>

                <div className={styles.mockRow}>
                  <div className={styles.mockTextCol}>
                    <span className={styles.mockPrimaryText}>Mr. Sharma (Physics)</span>
                    <span className={styles.mockSecondaryText}>Verified within 25m · Academic Block</span>
                  </div>
                  <span className={styles.mockStatusSuccess}>07:45 AM - Campus A</span>
                </div>

                <div className={styles.mockRow}>
                  <div className={styles.mockTextCol}>
                    <span className={styles.mockPrimaryText}>Ms. Gupta (Math)</span>
                    <span className={styles.mockSecondaryText}>Verified within 15m · Science Wing</span>
                  </div>
                  <span className={styles.mockStatusSuccess}>07:52 AM - Campus A</span>
                </div>

                <div className={styles.mockRow}>
                  <div className={styles.mockTextCol}>
                    <span className={styles.mockPrimaryText}>Mr. Ali (Chemistry)</span>
                    <span className={styles.mockSecondaryText}>Verified within 30m · Senior Lab</span>
                  </div>
                  <span className={styles.mockStatusSuccess}>08:05 AM - Campus B</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
