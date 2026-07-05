import { Metadata } from 'next';
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";
import { CheckCircle2 } from "lucide-react";

import { SoftwareApplicationSchema } from "@/components/seo/SoftwareApplicationSchema";
import { TrustedTech } from "@/components/erp/TrustedTech";
import { WhyVidyakrit } from "@/components/erp/WhyVidyakrit";
import { ProductShowcase } from "@/components/erp/ProductShowcase";
import { EnterpriseStats } from "@/components/erp/EnterpriseStats";
import { RoadmapTimeline } from "@/components/erp/RoadmapTimeline";
import { ErpHeroVisual } from "@/components/erp/ErpHeroVisual";
import { ProblemSolution } from "@/components/erp/ProblemSolution";
import { MemorableClosing } from "@/components/erp/MemorableClosing";
import { FadeIn } from "@/components/ui/FadeIn";

// Sales Enablement Components (Priority 3)
import { ModulesGrid } from "@/components/sales/ModulesGrid";
import { FeatureComparison } from "@/components/sales/FeatureComparison";
import { OperationalRoi } from "@/components/sales/OperationalRoi";
import { ImplementationTimeline } from "@/components/sales/ImplementationTimeline";
import { DataSecurity } from "@/components/sales/DataSecurity";
import { DedicatedSupport } from "@/components/sales/DedicatedSupport";
import { ExtendedFaq } from "@/components/sales/ExtendedFaq";

export const metadata: Metadata = {
  title: 'School ERP in Patna | Best Campus Management Software India',
  description: 'Unify your campus operations with Vidyakrit School ERP. The most comprehensive cloud-based operating system for modern schools in Patna, Bihar, and across India. Request a demo today.',
  keywords: ["School ERP in Patna", "Best School ERP in Bihar", "School Management System", "Campus Management Software", "Vidyakrit ERP"],
};

export default function SchoolERPPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      {/* Hero */}
      <section className={`${styles.hero} ambientGlow`}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>The Operating System for Modern Schools</h1>
            <p className={styles.heroSubtitle}>
              Reduce outstanding fees by 40%, automate parent communication, and run your daily operations from a single dashboard. Installed and migrated in under 7 days.
            </p>
            <div className={styles.heroActions}>
              <Button size="lg" href="/contact">Request a Demo</Button>
              <Button variant="secondary" size="lg" href="#showcase">Explore Features</Button>
            </div>
          </div>

          <div className={styles.heroImageWrapper}>
            <ErpHeroVisual />
          </div>
        </div>
      </section>

      {/* Problem -> Solution Flow */}
      <ProblemSolution />

      {/* Trust & Conversion Layer */}
      <FadeIn>
        <TrustedTech />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <WhyVidyakrit />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <OperationalRoi />
      </FadeIn>

      <div id="showcase">
        <ProductShowcase />
      </div>
      
      <FadeIn>
        <ModulesGrid />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <EnterpriseStats />
      </FadeIn>
      
      <FadeIn>
        <DataSecurity />
      </FadeIn>

      <FadeIn delay={0.1}>
        <FeatureComparison />
      </FadeIn>

      <FadeIn>
        <RoadmapTimeline />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <ImplementationTimeline />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <DedicatedSupport />
      </FadeIn>
      
      <FadeIn>
        <ExtendedFaq />
      </FadeIn>

      {/* Pricing Section */}
      <FadeIn>
        <section id="pricing" className="section section-light">
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>Tailored Enterprise Pricing</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
              Every educational institution is unique. We don't believe in rigid, one-size-fits-all pricing tiers that force you to pay for modules you don't need.
            </p>

            <div style={{ background: 'var(--bg-primary)', padding: '3rem', borderRadius: 'var(--border-radius-xl)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-premium)', textAlign: 'left' }}>
               <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>Custom Quote</h3>
               <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6, fontSize: '1.125rem' }}>
                 Our pricing scales intelligently based on your school's specific requirements, selected modules, and deployment complexity. Contact our engineering team for a comprehensive audit and a transparent, customized quote.
               </p>
               <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500, fontSize: '1.125rem' }}>
                    <CheckCircle2 size={24} color="var(--color-primary-action)" /> No hidden per-user licensing fees
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500, fontSize: '1.125rem' }}>
                    <CheckCircle2 size={24} color="var(--color-primary-action)" /> Pay only for the modules you activate
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500, fontSize: '1.125rem' }}>
                    <CheckCircle2 size={24} color="var(--color-primary-action)" /> Free seamless data migration included
                  </li>
               </ul>
               <Button size="lg" href="/contact" style={{ width: '100%', justifyContent: 'center' }}>Request a Custom Quote</Button>
            </div>
          </div>
        </section>
      </FadeIn>

      <MemorableClosing />
    </>
  );
}
