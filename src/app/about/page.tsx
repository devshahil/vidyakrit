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
      <section className="ambientGlow" style={{ paddingTop: '10rem', paddingBottom: '6rem', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            Building the Future of Educational Technology
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 1.8vw, 1.5rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
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
