import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import styles from "./page.module.css";
import { ArrowRight, Code, Layout, Smartphone, Settings, BarChart, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImg from "../../public/3d_character.png";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { AnimatedServices } from "@/components/home/AnimatedServices";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow}></div>
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
            <Image 
              src={heroImg} 
              alt="Vidyakrit Software Engineering and Website Development Company in Patna" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section section-light ambientGlow">
        <div className="container">
          <FadeIn>
            <h2 className={styles.sectionTitle}>Comprehensive Technology Services</h2>
            <p className={styles.sectionSubtitle}>
              From custom software development to AI automation, we deliver solutions that scale with your business.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <AnimatedServices />
          </FadeIn>
        </div>
      </section>

      {/* Featured School ERP */}
      <section className={styles.sectionDark}>
        <div className="container">
          <FadeIn>
            <h2 className={styles.sectionTitle}>The Flagship School ERP</h2>
            <p className={styles.sectionSubtitle}>
              A complete operating system for modern educational institutions. Manage attendance, fees, exams, and communication in one unified platform.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
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
          </FadeIn>

          <FadeIn delay={0.4}>
            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
              <Button href="/products/school-erp" size="lg" style={{ background: '#ffffff', color: 'var(--text-primary)' }}>
                Explore all Modules <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${styles.ctaPremium} ambientGlow`}>
        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 10 }}>
          <FadeIn>
            <h2 className={styles.sectionTitle}>Ready to build something extraordinary?</h2>
            <p className={styles.sectionSubtitle}>
              Partner with Vidyakrit to engineer scalable software solutions that drive real business growth.
            </p>
            <Button size="lg" href="/contact">Get in Touch</Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
