import { Metadata } from 'next';
import { Button } from "@/components/ui/Button";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Website Developer in Patna | Custom Web Design & Software',
  description: 'Looking for a website developer near me? Vidyakrit is the premier software and website development company in Patna, Bihar. We build high-performance, custom websites and web apps.',
  keywords: ["Website Developer in Patna", "Website Developer near me", "Web Design Patna", "Software Company in Patna", "Ecommerce Developer Patna"],
};

export default function WebsiteDeveloperPatna() {
  return (
    <div style={{ padding: 'var(--spacing-3xl) 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          The #1 Website Developer in Patna
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
          Transform your local business with a world-class online presence. From stunning corporate websites to complex e-commerce platforms, we engineer solutions that drive growth for businesses across Bihar.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
          <Button size="lg" href="/contact">Get a Free Quote</Button>
          <Button size="lg" variant="secondary" href="/portfolio">View Our Work</Button>
        </div>
        
        <div style={{ textAlign: 'left', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--border-radius-lg)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why choose Vidyakrit?</h2>
          <ul style={{ lineHeight: 1.8, fontSize: '1.125rem' }}>
            <li><strong>Local Expertise:</strong> We understand the Patna market and consumer behavior.</li>
            <li><strong>Premium Design:</strong> We don't use cheap templates. Every site is custom-crafted.</li>
            <li><strong>SEO Optimized:</strong> Built from the ground up to rank on Google so customers can find you.</li>
            <li><strong>Lightning Fast:</strong> We use modern tech like Next.js for sub-second load times.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
