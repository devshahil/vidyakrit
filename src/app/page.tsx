import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import styles from "./page.module.css";
import { ArrowRight, Code, Layout, Smartphone, Settings, BarChart, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { MobileCarousel } from "@/components/ui/MobileCarousel";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={`section ${styles.heroSection}`}>
        <div className={`container ${styles.splitHero}`}>
          <div className={styles.splitContent}>
            <h1 className={styles.heroTitle}>
              We Build Software That Solves Real Business Problems.
            </h1>
            <p className={styles.heroSubtitle}>
              We build premium software solutions and enterprise-grade applications. Discover our flagship School ERP designed to transform educational institutions.
            </p>
            <div className={styles.heroActions}>
              <Button size="lg" href="/contact" className={styles.heroBtn}>Book Consultation</Button>
              <Button variant="secondary" size="lg" href="/products/school-erp" className={styles.heroBtn}>
                Explore School ERP
              </Button>
            </div>
          </div>
          <div className={`${styles.heroImageWrapper} float-animation`}>
            <img 
              src="/3d_character.png" 
              alt="3D Character working on software" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section section-light">
        <div className="container">
          <h2 className={styles.sectionTitle}>Comprehensive Technology Services</h2>
          <p className={styles.sectionSubtitle}>
            From custom software development to AI automation, we deliver solutions that scale with your business.
          </p>

          <MobileCarousel className={styles.bentoGrid}>
            <div className={styles.bentoLarge} style={{ height: '100%' }}>
              <Card style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div className={styles.iconWrapper}>
                    <Code size={24} color="var(--text-primary)" />
                  </div>
                  <CardTitle>Custom Enterprise Software</CardTitle>
                  <CardDescription>
                    Tailored enterprise solutions designed to digitize and scale your unique workflows.
                  </CardDescription>
                </div>
              </Card>
            </div>
            <Card style={{ height: '100%' }}>
              <div className={styles.iconWrapper}>
                <Layout size={24} color="var(--text-primary)" />
              </div>
              <CardTitle>Web Applications</CardTitle>
              <CardDescription>
                High-performance web applications engineered with modern, secure technologies.
              </CardDescription>
            </Card>
            <Card style={{ height: '100%' }}>
              <div className={styles.iconWrapper}>
                <Smartphone size={24} color="var(--text-primary)" />
              </div>
              <CardTitle>Mobile Development</CardTitle>
              <CardDescription>
                Native and cross-platform mobile experiences built to maximize user engagement.
              </CardDescription>
            </Card>
          </MobileCarousel>
        </div>
      </section>

      {/* Featured School ERP */}
      <section className={styles.sectionDark}>
        <div className="container">
          <h2 className={styles.sectionTitle}>The Flagship School ERP</h2>
          <p className={styles.sectionSubtitle}>
            A complete operating system for modern educational institutions. Manage attendance, fees, exams, and communication in one unified platform.
          </p>

          <MobileCarousel className={styles.featureListDark}>
            {[
              { title: "Student Information System", desc: "Centralized database for all student records and academics." },
              { title: "Automated Fee Collection", desc: "Seamless payment gateways with auto-reminders and invoicing." },
              { title: "Academic Management", desc: "Advanced scheduling, exam grading, and report card generation." },
              { title: "Parent & Teacher Portals", desc: "Dedicated mobile-friendly portals for real-time communication." },
            ].map((feature, i) => (
              <div key={i} className={styles.featureItemDark}>
                <CheckCircle2 size={24} color="var(--color-primary-action)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 className={styles.featureTextDark}>{feature.title}</h3>
                  <p className={styles.featureDescDark}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </MobileCarousel>

          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Button href="/products/school-erp" size="lg" style={{ background: '#ffffff', color: 'var(--text-primary)' }}>
              Explore all Modules <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaPremium}>
        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 10 }}>
          <h2 className={styles.sectionTitle}>Ready to build something extraordinary?</h2>
          <p className={styles.sectionSubtitle}>
            Partner with Vidyakrit to engineer scalable software solutions that drive real business growth.
          </p>
          <Button size="lg" href="/contact">Get in Touch</Button>
        </div>
      </section>
    </>
  );
}
