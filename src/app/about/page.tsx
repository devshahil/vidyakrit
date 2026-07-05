import { Metadata } from 'next';
import { FounderSection } from '@/components/about/FounderSection';
import { TeamSection } from '@/components/about/TeamSection';
import { OurStory } from '@/components/about/OurStory';
import { DevPhilosophy } from '@/components/about/DevPhilosophy';
import { TechExpertise } from '@/components/about/TechExpertise';
import { EngineeringStandards } from '@/components/about/EngineeringStandards';
import { ImplementationJourney } from '@/components/about/ImplementationJourney';
import { FaqSection } from '@/components/about/FaqSection';
import { CtaSection } from '@/components/about/CtaSection';

export const metadata: Metadata = {
  title: 'About Us | Vidyakrit Software Engineering',
  description: 'Learn about Vidyakrit, the premium software engineering firm behind the ultimate School ERP. Discover our story, technology stack, and engineering philosophy.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="ambientGlow hero-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="display-hero">
            Building the Future of Educational Technology
          </h1>
          <p className="text-body-premium">
            We are a premium software engineering firm dedicated to replacing outdated manual processes with modern, secure, and intuitive enterprise applications.
          </p>
        </div>
      </section>

      {/* Brand Narrative & Trust Layers */}
      {/* <FounderSection /> */}
      {/* <TeamSection /> */}
      <OurStory />
      <DevPhilosophy />
      <TechExpertise />
      <EngineeringStandards />
      <ImplementationJourney />
      <FaqSection />
      <CtaSection />
    </>
  );
}
