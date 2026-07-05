"use client";

import React from 'react';
import Image from 'next/image';

const showcases = [
  { 
    title: "Student Dashboard", 
    desc: "A comprehensive, 360-degree view of every student. Track attendance, academic performance, disciplinary records, and health information from one unified interface.",
    imgSrc: "/images/student_dashboard.webp"
  },
  { 
    title: "Fee Collection & Billing", 
    desc: "Automate invoice generation, send payment reminders, and process secure online transactions. Get real-time visibility into your institution's cash flow.",
    imgSrc: "/images/fee_collection.webp"
  },
  { 
    title: "Smart Attendance System", 
    desc: "Mark student attendance in seconds with bulk actions. For staff, our mobile app uses GPS geofencing to ensure they can only check in when physically present at the school campus.",
    imgSrc: "/images/attendance_system.webp"
  },
  { 
    title: "Analytics Dashboard", 
    desc: "Empower administrators with actionable data. Visualize attendance trends, financial health, and academic performance through interactive charts.",
    imgSrc: "/images/analytics_dashboard.webp"
  }
];

export const ProductShowcase = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
            Explore the Vidyakrit Platform
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            See how every module works together seamlessly to simplify school management, reduce administrative burden, and improve communication.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {showcases.map((showcase, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                style={{ 
                  display: 'flex', 
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  alignItems: 'center',
                  gap: '4rem',
                  flexWrap: 'wrap'
                }}
              >
                {/* Text Content */}
                <div style={{ flex: '1 1 400px', padding: '2rem 0' }}>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                    {showcase.title}
                  </h3>
                  <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {showcase.desc}
                  </p>
                </div>

                {/* Mockup Image */}
                <div 
                  style={{ 
                    flex: '1 1 500px', 
                    position: 'relative',
                    borderRadius: '24px',
                    padding: '8px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)',
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255,255,255,1)',
                    backdropFilter: 'blur(20px)',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255,255,255,1)';
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', background: '#f5f5f5', display: 'flex' }}>
                    {/* Placeholder fallback if image isn't uploaded yet */}
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', zIndex: 1 }}>
                      [Image: {showcase.imgSrc}]
                    </div>
                    <Image 
                      src={showcase.imgSrc} 
                      alt={`${showcase.title} Interface`}
                      width={1200}
                      height={800}
                      style={{ width: '100%', height: 'auto', objectFit: 'contain', zIndex: 2, position: 'relative' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
