import React from 'react';
import { Metadata } from 'next';
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: 'Custom Website & Mobile App Development Services',
  description: 'Vidyakrit provides premium custom website development, enterprise software, UI/UX design, and mobile app development services globally.',
};
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";
import { servicesData } from './servicesData';

export default function ServicesPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', fontWeight: 700, letterSpacing: '-0.04em' }}>Our Services</h1>
          <p style={{ fontSize: 'clamp(1.125rem, 1.8vw, 1.25rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            We provide end-to-end technology solutions, from premium website design to complex enterprise software development.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="bentoGrid">
            {servicesData.map((service, index) => {
              const isLarge = index === 0;
              const variants = ["blue", "purple", "pink", "orange", "green"];
              const variant = variants[index % variants.length];
              
              return (
                <div key={index} className={isLarge ? "bentoLarge" : ""}>
                  <Card variant={variant as any} className={styles.serviceCard}>
                    <div className={styles.serviceIconBox}>
                      {service.icon}
                    </div>
                    <CardTitle style={{ fontSize: isLarge ? 'clamp(1.5rem, 3vw, 2rem)' : '1.5rem', marginBottom: '1rem' }}>
                      {service.title}
                    </CardTitle>
                    <CardDescription style={{ marginBottom: '1.5rem', fontSize: isLarge ? '1.125rem' : '1rem' }}>
                      {service.shortDescription}
                    </CardDescription>
                    
                    <ul className={styles.benefitList}>
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className={styles.benefitItem}>
                          <div className={styles.benefitDot} />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className={styles.cardFooter}>
                      <Button variant="link" href={`/services/${service.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: 0 }}>
                        Learn More <ArrowRight size={16} />
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Have a custom project in mind?</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Our engineering team is ready to help you build the next big thing. Let's discuss your requirements.
          </p>
          <Button size="lg" href="/contact">Book a Free Consultation</Button>
        </div>
      </section>
    </>
  );
}
