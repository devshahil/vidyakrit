"use client";

import React, { useState } from 'react';
import styles from './ErpGateway.module.css';
import { CreditCard, Users, MessageSquare, Cloud } from 'lucide-react';

export const ErpGateway = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "Automated Billing", desc: "Seamless payment gateways with auto-reminders and instant invoicing.", icon: <CreditCard size={20} /> },
    { id: 1, title: "Parent App", desc: "Dedicated mobile portals for real-time communication and progress tracking.", icon: <MessageSquare size={20} /> },
    { id: 2, title: "Academic Engine", desc: "Advanced scheduling, automated exam grading, and report card generation.", icon: <Users size={20} /> },
    { id: 3, title: "GPS Attendance", desc: "Geofenced staff check-ins directly from their smartphones.", icon: <Cloud size={20} /> },
  ];

  return (
    <div className={styles.gatewayContainer}>
      <div className={styles.tabsCol}>
        {tabs.map((tab, idx) => (
          <button 
            key={tab.id}
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
      
      <div className={styles.previewCol}>
        <div className={styles.deviceFrame}>
          {/* Mockup Window Header */}
          <div className={styles.windowHeader}>
            <div className={styles.windowControls}>
              <span className={styles.dotClose}></span>
              <span className={styles.dotMin}></span>
              <span className={styles.dotMax}></span>
            </div>
          </div>
          
          {/* Active Preview Content */}
          <div className={styles.previewContent}>
            {activeTab === 0 && (
              <div className={styles.mockupUI}>
                <div className={styles.mockTitle}>Fee Collection Status</div>
                <div className={styles.mockRow}>
                  <span className={styles.mockText}>Arjun Kumar - Grade 10</span>
                  <span className={styles.mockStatus}>Paid via UPI</span>
                </div>
                <div className={styles.mockRow}>
                  <span className={styles.mockText}>Neha Singh - Grade 8</span>
                  <span className={styles.mockStatus}>Paid via Card</span>
                </div>
                <div className={styles.mockRow}>
                  <span className={styles.mockText}>Rahul Verma - Grade 12</span>
                  <span className={styles.mockStatus} style={{ background: 'rgba(255, 189, 46, 0.15)', color: '#ffbd2e' }}>Pending</span>
                </div>
              </div>
            )}
            
            {activeTab === 1 && (
              <div className={styles.mockupUI}>
                <div className={styles.mockTitle}>Communication Log</div>
                <div className={styles.mockRow}>
                  <span className={styles.mockText}>Message: Mid-term results published.</span>
                  <span className={styles.mockStatus}>Sent to 450 Parents</span>
                </div>
                <div className={styles.mockRow}>
                  <span className={styles.mockText}>Message: Tomorrow is a public holiday.</span>
                  <span className={styles.mockStatus}>Sent to 800 Users</span>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className={styles.mockupUI}>
                <div className={styles.mockTitle}>Academic Performance</div>
                <div className={styles.mockChart}>
                  <div className={styles.mockBar} style={{ height: '40%' }}></div>
                  <div className={styles.mockBar} style={{ height: '60%' }}></div>
                  <div className={styles.mockBar} style={{ height: '80%' }}></div>
                  <div className={styles.mockBar} style={{ height: '95%' }}></div>
                  <div className={styles.mockBar} style={{ height: '70%' }}></div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className={styles.mockupUI}>
                <div className={styles.mockTitle}>Staff Check-ins Today</div>
                <div className={styles.mockRow}>
                  <span className={styles.mockText}>Mr. Sharma (Physics)</span>
                  <span className={styles.mockStatus}>07:45 AM - Campus A</span>
                </div>
                <div className={styles.mockRow}>
                  <span className={styles.mockText}>Ms. Gupta (Math)</span>
                  <span className={styles.mockStatus}>07:52 AM - Campus A</span>
                </div>
                <div className={styles.mockRow}>
                  <span className={styles.mockText}>Mr. Ali (Chemistry)</span>
                  <span className={styles.mockStatus}>08:05 AM - Campus B</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
