"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProductShowcase.module.css';
import { Monitor, Tablet, Smartphone } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

const showcases = [
  { 
    id: 'desktop',
    label: 'Desktop Admin',
    icon: <Monitor size={18} />,
    title: "Master Control Dashboard", 
    desc: "A comprehensive, 360-degree view of your entire institution. Handle massive bulk operations, complex scheduling, and deep financial analytics from a powerful desktop interface engineered for speed.",
    imgSrc: "/images/student_dashboard.webp",
    deviceClass: styles.desktop
  },
  { 
    id: 'tablet',
    label: 'Teacher Tablet',
    icon: <Tablet size={18} />,
    title: "Interactive Classroom Hub", 
    desc: "Optimized for the classroom. Teachers can take lightning-fast roll calls, grade assignments on the fly, and project interactive learning materials directly from their iPad or Android tablet.",
    imgSrc: "/images/fee_collection.webp",
    deviceClass: styles.tablet
  },
  { 
    id: 'mobile',
    label: 'Parent Mobile App',
    icon: <Smartphone size={18} />,
    title: "Real-Time Parent Portal", 
    desc: "A beautifully native mobile experience keeping parents in the loop. Push notifications for attendance, instant fee payment gateways, and live academic progress tracking in their pocket.",
    imgSrc: "/images/attendance_system.webp",
    deviceClass: styles.mobile
  }
];

export const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeShowcase = showcases[activeIndex];

  return (
    <section className={styles.container}>
      <div className="container">
        <FadeIn>
          <div className={styles.header}>
            <h2 className="display-section">One OS. Every Device.</h2>
            <p className="text-body-premium">
              Vidyakrit ERP is natively responsive. Whether it's the principal on a desktop, a teacher on a tablet, or a parent on a smartphone, the interface adapts perfectly to provide exactly what they need.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className={styles.tabs}>
            {showcases.map((showcase, index) => (
              <button
                key={showcase.id}
                onClick={() => setActiveIndex(index)}
                className={`${styles.tabBtn} ${activeIndex === index ? styles.tabActive : ''}`}
              >
                {showcase.icon} {showcase.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} key={activeIndex}>
          <div className={styles.showcaseArea}>
            <div className={styles.textContent}>
              <h3 className={styles.featureTitle}>{activeShowcase.title}</h3>
              <p className={styles.featureDesc}>{activeShowcase.desc}</p>
            </div>

            <div className={styles.deviceContainer}>
              <div className={`${styles.deviceWrapper} ${activeShowcase.deviceClass}`}>
                {activeShowcase.id === 'mobile' && <div className={styles.notch}></div>}
                <div className={styles.deviceScreen}>
                  <div className={styles.imgFallback}>[Image: {activeShowcase.imgSrc}]</div>
                  {/* Using standard img tag if images are missing, or Next Image if they exist. Using object-cover to fill frame. */}
                  <Image 
                    src={activeShowcase.imgSrc} 
                    alt={activeShowcase.title}
                    fill
                    style={{ objectFit: 'cover', zIndex: 2 }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
