import { Metadata } from 'next';
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: 'School ERP in Patna | Best School Management Software',
  description: 'Looking for the best School ERP in Patna? Vidyakrit offers a comprehensive, cloud-based school management system tailored for educational institutions in Bihar.',
  keywords: ["School ERP in Patna", "School Management Software Patna", "Best ERP for Schools in Bihar", "Vidyakrit ERP", "Education Software Patna"],
};

export default function SchoolERPPatna() {
  return (
    <div style={{ padding: 'var(--spacing-3xl) 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          The Ultimate School ERP in Patna
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
          Digitize your campus with Vidyakrit School ERP. Designed to solve the specific administrative, academic, and fee collection challenges faced by schools in Patna and across Bihar.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
          <Button size="lg" href="/contact">Request a Local Demo</Button>
          <Button size="lg" variant="secondary" href="/products/school-erp">See All Features</Button>
        </div>
        
        <div style={{ textAlign: 'left', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--border-radius-lg)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Built for Schools in Bihar</h2>
          <ul style={{ lineHeight: 1.8, fontSize: '1.125rem' }}>
            <li><strong>Automated Fee Collection:</strong> Streamline fee tracking and send automated SMS reminders to parents.</li>
            <li><strong>BSEB & CBSE Compliance:</strong> Generate report cards and documents aligned with local education board standards.</li>
            <li><strong>Parent Communication:</strong> Keep parents in the loop with a dedicated portal for attendance and academic updates.</li>
            <li><strong>Local Support:</strong> Get dedicated customer support from our team based right here in Patna.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
