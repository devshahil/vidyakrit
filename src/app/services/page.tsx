import { Metadata } from 'next';
import { ServicesEcosystem } from '@/components/brand/ServicesEcosystem';
import { IndustriesServed } from '@/components/brand/IndustriesServed';
import { InnovationRoadmap } from '@/components/brand/InnovationRoadmap';
import { PartnerValue } from '@/components/brand/PartnerValue';
import { CompanyValues } from '@/components/brand/CompanyValues';
import { CommunityEngagement } from '@/components/brand/CommunityEngagement';
import { FinalBrandStatement } from '@/components/brand/FinalBrandStatement';

export const metadata: Metadata = {
  title: 'Custom Website & Enterprise Software Services | Vidyakrit',
  description: 'Vidyakrit provides premium custom website development, enterprise software, UI/UX design, and mobile app development services globally.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="ambientGlow" style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.25rem', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.07 }}>
            Your Long-Term Digital Partner
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 1.8vw, 1.35rem)', color: 'var(--text-secondary)', lineHeight: 1.5, maxWidth: '750px', margin: '0 auto' }}>
            We don't just sell software. We provide a complete ecosystem of engineering services designed to transform how your organization operates.
          </p>
        </div>
      </section>

      {/* Brand Authority Components */}
      <ServicesEcosystem />
      <PartnerValue />
      <IndustriesServed />
      <InnovationRoadmap />
      <CompanyValues />
      <CommunityEngagement />
      <FinalBrandStatement />
    </>
  );
}
