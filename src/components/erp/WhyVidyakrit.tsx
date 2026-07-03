import React from 'react';
import { MapPin, Cloud, Users, MessageSquare, CreditCard, Shield, Zap, RefreshCw } from 'lucide-react';

const reasons = [
  { title: "At-a-Glance Dashboard", desc: "See your total student strength, today's live attendance, and expected fee revenue the moment you log in.", icon: <MapPin size={20} strokeWidth={1.5} /> },
  { title: "One-Click Fee Collection", desc: "Collect fees instantly via cash, UPI, or cards. The system automatically sends digital receipts to parents.", icon: <CreditCard size={20} strokeWidth={1.5} /> },
  { title: "Automated WhatsApp Alerts", desc: "Keep parents in the loop effortlessly. Automatically send WhatsApp messages for absent students or pending fees.", icon: <MessageSquare size={20} strokeWidth={1.5} /> },
  { title: "GPS Staff Attendance", desc: "Our dedicated mobile app ensures staff can only check-in when they are physically inside the school campus boundaries.", icon: <Cloud size={20} strokeWidth={1.5} /> },
  { title: "Smart Student Profiles", desc: "Manage the entire student journey. Automatically generate student IDs and handle year-end class promotions in bulk.", icon: <Users size={20} strokeWidth={1.5} /> },
  { title: "Strict Device Security", desc: "Keep your school's data safe. Every new staff mobile device must be explicitly approved by an admin before they can log in.", icon: <Shield size={20} strokeWidth={1.5} /> },
  { title: "Export to Excel", desc: "Need your data offline? Easily download complete student records and financial reports to Excel for your administrative audits.", icon: <Zap size={20} strokeWidth={1.5} /> },
  { title: "Built for Indian Schools", desc: "We understand local challenges. The system seamlessly integrates your holiday calendar to pause attendance marking automatically.", icon: <RefreshCw size={20} strokeWidth={1.5} /> },
];

export const WhyVidyakrit = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Why Schools Choose Vidyakrit
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Designed specifically for modern educational institutions that value simplicity, speed, security, and long-term growth.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '2rem',
                background: 'var(--bg-secondary)',
                borderRadius: '24px',
              }}
            >
              <div style={{ 
                background: 'var(--bg-primary)', 
                padding: '12px', 
                borderRadius: '12px',
                color: 'var(--color-primary-action)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                {reason.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {reason.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
