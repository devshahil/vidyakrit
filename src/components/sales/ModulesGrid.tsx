"use client";

import React from 'react';
import { 
  Users, CalendarCheck, CreditCard, UserCog, 
  FileBadge, PieChart, ClipboardList, BellRing, ShieldCheck, Smartphone 
} from 'lucide-react';

const modules = [
  { icon: <PieChart size={24} />, title: "Campus Dashboard", desc: "A simple screen showing your school's daily activities at a glance." },
  { icon: <Users size={24} />, title: "Student Management", desc: "Keep all student details and ID cards organized in one place." },
  { icon: <UserCog size={24} />, title: "Staff Management", desc: "Easily manage staff profiles, roles, and daily working hours." },
  { icon: <CalendarCheck size={24} />, title: "Attendance Tracking", desc: "Quickly mark student attendance and track staff with location-based check-ins." },
  { icon: <CreditCard size={24} />, title: "Fee Management", desc: "Collect fees easily and send digital receipts to parents." },
  { icon: <Smartphone size={24} />, title: "Staff Mobile App", desc: "A dedicated app for your staff to manage daily school tasks from anywhere." },
  { icon: <ShieldCheck size={24} />, title: "Safe & Secure", desc: "Control who can see your data and approve devices safely." },
  { icon: <BellRing size={24} />, title: "Alerts & Messages", desc: "Keep parents updated with instant WhatsApp and email alerts." },
  { icon: <ClipboardList size={24} />, title: "Reports & Analytics", desc: "Download simple reports to see how your school is doing." },
  { icon: <FileBadge size={24} />, title: "Certificates", desc: "Create and print important school documents in just one click." },
];

export const ModulesGrid = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            A Complete Operating System
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Every module you need to run your institution, seamlessly integrated into a single unified platform.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {modules.map((mod, i) => (
            <div 
              key={i} 
              style={{ 
                background: 'var(--bg-primary)', 
                padding: '1.5rem', 
                borderRadius: '16px', 
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'all 0.2s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--color-primary-action)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div style={{ color: 'var(--color-primary-action)' }}>{mod.icon}</div>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>{mod.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
