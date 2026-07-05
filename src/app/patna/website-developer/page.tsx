import { Metadata } from 'next';
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Rocket, PenTool, Search, Zap, MapPin, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: 'Top Website Developer in Patna | Custom Web Design & Software',
  description: 'Looking for a website developer near me? Vidyakrit is the premier software and website development company in Patna, Bihar. We build high-performance, custom websites and web apps.',
  keywords: ["Website Developer in Patna", "Website Developer near me", "Web Design Patna", "Software Company in Patna", "Ecommerce Developer Patna"],
};

export default function WebsiteDeveloperPatna() {
  return (
    <>
      {/* Hero Section */}
      <section className="ambientGlow hero-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <FadeIn>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(0, 102, 204, 0.1)', color: 'var(--color-primary-action)', borderRadius: '99px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '24px' }}>
              <MapPin size={16} /> The #1 Software Engineering Firm in Bihar
            </div>
            <h1 className="display-hero">
              Transform Your Patna Business with a World-Class Website
            </h1>
            <p className="text-body-premium" style={{ marginBottom: '40px', maxWidth: '750px', marginInline: 'auto' }}>
              We don't use cheap templates or outsource your project. From stunning corporate websites to complex e-commerce platforms, our local Patna engineering team builds lightning-fast solutions that drive real revenue.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button size="lg" href="/contact">Get a Free Local Quote</Button>
              <Button size="lg" variant="secondary" href="/portfolio">View Our Work</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Local Advantage Bento Grid */}
      <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto' }}>
              <h2 className="display-section">Why Bihar's Top Brands Choose Us</h2>
              <p className="text-body-premium">Your digital presence is your first impression. We combine Silicon Valley engineering standards with deep knowledge of the local Patna market.</p>
            </div>
          </FadeIn>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            <FadeIn delay={0.1}>
              <div style={{ background: 'var(--bg-primary)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-color)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <PenTool size={32} color="var(--color-primary-action)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>Custom Premium Design</h3>
                <p className="text-body-premium" style={{ fontSize: '1rem' }}>We refuse to use slow, bloated WordPress templates. Every website is custom-designed in Figma to match your exact brand identity and stand out in the local market.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{ background: 'var(--bg-primary)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-color)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Search size={32} color="var(--color-primary-action)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>Engineered for Google SEO</h3>
                <p className="text-body-premium" style={{ fontSize: '1rem' }}>A beautiful website is useless if no one finds it. Our platforms are built with advanced on-page SEO architectures to ensure you rank #1 for local searches in Patna.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div style={{ background: 'var(--bg-tile-dark)', color: '#fff', padding: '40px', borderRadius: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Rocket size={32} color="#27c93f" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: '#fff' }}>Local In-Person Strategy</h3>
                <p style={{ color: '#a1a1a6', fontSize: '1rem', lineHeight: 1.5 }}>Skip the confusing Zoom calls with offshore freelancers. Our core team is based right here in Patna. We meet with you, understand your business, and map out a digital strategy tailored for Bihar.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div style={{ background: 'var(--bg-primary)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-color)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Zap size={32} color="var(--color-primary-action)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>Lightning Fast Tech Stack</h3>
                <p className="text-body-premium" style={{ fontSize: '1rem' }}>We build using Next.js and React—the exact same technologies powering Netflix and Apple. This guarantees sub-second load times on mobile connections.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Local FAQ (AEO) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeIn>
            <h2 className="display-section" style={{ textAlign: 'center', marginBottom: '48px' }}>Frequently Asked Questions</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  q: "How much does a custom website cost in Patna?",
                  a: "Pricing depends on complexity. A premium corporate landing page is highly affordable, while a massive e-commerce platform with custom local payment gateways (like UPI/PhonePe) requires a larger engineering budget. We provide transparent, custom quotes after a free consultation."
                },
                {
                  q: "Do you outsource the coding to other agencies?",
                  a: "Never. 100% of the design, engineering, and deployment is handled by our in-house team located in Patna. This ensures maximum quality control and allows us to provide rapid, on-ground support."
                },
                {
                  q: "Will my website work well on slow mobile networks in Bihar?",
                  a: "Yes. Because we use Next.js instead of bloated CMS platforms, our websites achieve perfect Core Web Vitals scores. Your site will load in milliseconds, even on a slow 3G mobile connection in rural areas."
                }
              ].map((faq, index) => (
                <details key={index} style={{ 
                  background: 'var(--bg-secondary)', 
                  padding: '24px', 
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer'
                }}>
                  <summary style={{ fontSize: '1.125rem', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                    {faq.q}
                    <ChevronDown size={20} color="var(--color-primary-action)" />
                  </summary>
                  <p style={{ marginTop: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
