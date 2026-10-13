import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";
import { ArrowRight } from "lucide-react";
import { AnimatedServices } from "@/components/home/AnimatedServices";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FadeIn } from "@/components/ui/FadeIn";
import { ErpGateway } from "@/components/home/ErpGateway";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.centeredHero}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              We engineer high-performance systems for complex business operations.
            </h1>
            <p className={styles.heroSubtitle}>
              Vidyakrit is a premium software company. We build custom enterprise applications and our flagship School ERP—designed, coded, and deployed to run your organization flawlessly.
            </p>
            <div className={styles.heroActions}>
              <Button size="lg" href="/contact">Book Consultation</Button>
              <Button variant="secondary" size="lg" href="/products/school-erp">
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
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.sectionParchment}>
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Core Capabilities</span>
              <h2 className={styles.sectionTitle}>Comprehensive Technology Services</h2>
              <p className={styles.sectionSubtitle}>
                From custom software development to AI automation, we deliver solutions that scale with your business.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <AnimatedServices />
          </FadeIn>
        </div>
      </section>

      {/* Featured School ERP */}
      <section className={styles.sectionDark}>
        <div className="container">
          <FadeIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Flagship Platform</span>
              <h2 className={styles.sectionTitle}>The Flagship School ERP</h2>
              <p className={styles.sectionSubtitle}>
                A complete operating system for modern educational institutions. Manage attendance, fees, exams, and communication in one unified platform.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ErpGateway />
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className={styles.darkCtas}>
              <Button href="/products/school-erp" size="lg">
                Explore all Modules <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaPremium}>
        <div className="container">
          <FadeIn>
            <div className={styles.ctaCard}>
              <h2 className={styles.sectionTitle}>Ready to build something extraordinary?</h2>
              <p className={styles.sectionSubtitle}>
                Partner with Vidyakrit to engineer scalable software solutions that drive real business growth.
              </p>
              <div className={styles.ctaActions}>
                <Button size="lg" href="/contact">Get in Touch</Button>
                <Button variant="secondary" size="lg" href="/products/school-erp">View Demo</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
