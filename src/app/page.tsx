import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import styles from "./page.module.css";
import { ArrowRight, Code, Layout, Smartphone, Settings, BarChart, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { MobileCarousel } from "@/components/ui/MobileCarousel";
import { AnimatedServices } from "@/components/home/AnimatedServices";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroMockup } from "@/components/home/HeroMockup";
import { ErpGateway } from "@/components/home/ErpGateway";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.splitHero}`}>
          <div className={styles.splitContent}>
            <h1 className={styles.heroTitle}>
              We engineer high-performance systems for complex business operations.
            </h1>
            <p className={styles.heroSubtitle}>
              Vidyakrit is a premium software lab. We build custom enterprise applications and our flagship School ERP—designed, coded, and deployed to run your organization flawlessly.
            </p>
            <div className={styles.heroActions}>
              <Button size="lg" href="/contact" className={styles.heroBtn}>Book Consultation</Button>
              <Button variant="secondary" size="lg" href="/products/school-erp" className={styles.heroBtn}>
                Explore School ERP
              </Button>
            </div>
            
            {/* Trust Metrics Row */}
            <div className={styles.heroMetrics}>
              <div className={styles.metricItem}>
                <span className={styles.metricValue}>10k+</span>
                <span className={styles.metricLabel}>Students Managed</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricValue}>99.9%</span>
                <span className={styles.metricLabel}>System Uptime</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricValue}>100%</span>
                <span className={styles.metricLabel}>Audited Codebase</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* Services Overview — parchment tile (alternates with white hero) */}
      <section className={`section ${styles.sectionParchment}`}>
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

      {/* Featured School ERP — Apple product-tile-dark (#272729) */}
      <section className={styles.sectionDark}>
        <div className="container">
          <FadeIn>
            <h2 className={styles.sectionTitle}>The Flagship School ERP</h2>
            <p className={styles.sectionSubtitle}>
              A complete operating system for modern educational institutions. Manage attendance, fees, exams, and communication in one unified platform.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ErpGateway />
          </FadeIn>

          <FadeIn delay={0.4}>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <Button href="/products/school-erp" size="lg">
                Explore all Modules <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA — parchment tile */}
      <section className={styles.ctaPremium}>
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
