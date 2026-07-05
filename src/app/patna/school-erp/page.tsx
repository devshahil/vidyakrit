import { Metadata } from 'next';
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ShieldCheck, MapPin, Smartphone, Receipt, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: 'School ERP in Patna | Best Campus Management Software India',
  description: 'Looking for the best School ERP in Patna? Vidyakrit offers a comprehensive, cloud-based school management system tailored for educational institutions in Bihar. Get local, on-ground support.',
  keywords: ["School ERP in Patna", "School Management Software Patna", "Best ERP for Schools in Bihar", "Vidyakrit ERP", "Education Software Patna"],
};

export default function SchoolERPPatna() {
  return (
    <>
      {/* Hero Section */}
      <section className="ambientGlow hero-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <FadeIn>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(0, 102, 204, 0.1)', color: 'var(--color-primary-action)', borderRadius: '99px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '24px' }}>
              <MapPin size={16} /> Engineered & Supported in Patna, Bihar
            </div>
            <h1 className="display-hero">
              The Ultimate School ERP for Modern Campuses in Patna
            </h1>
            <p className="text-body-premium" style={{ marginBottom: '40px', maxWidth: '750px', marginInline: 'auto' }}>
              Digitize your entire campus with Vidyakrit OS. Purpose-built to solve the specific administrative, fee collection, and academic challenges faced by growing schools across Bihar.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button size="lg" href="/contact">Book a Local Demo</Button>
              <Button size="lg" variant="secondary" href="/products/school-erp">View Full Feature List</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Local Advantage Bento Grid */}
      <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto' }}>
              <h2 className="display-section">Why Top Patna Schools Choose Vidyakrit</h2>
              <p className="text-body-premium">We don't just sell software; we partner with you. Enjoy enterprise-grade technology with the peace of mind that your engineering team is right down the road.</p>
            </div>
          </FadeIn>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            <FadeIn delay={0.1}>
              <div style={{ background: 'var(--bg-primary)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-color)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Receipt size={32} color="var(--color-primary-action)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>Automated UPI Fee Collection</h3>
                <p className="text-body-premium" style={{ fontSize: '1rem' }}>Stop chasing delayed payments. Generate instant UPI links, auto-reconcile transactions, and send WhatsApp payment reminders effortlessly to parents.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{ background: 'var(--bg-primary)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-color)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <ShieldCheck size={32} color="var(--color-primary-action)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>BSEB & CBSE Compliance</h3>
                <p className="text-body-premium" style={{ fontSize: '1rem' }}>Generate report cards, transfer certificates, and administrative documents perfectly aligned with local Bihar School Examination Board (BSEB) and CBSE standards.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div style={{ background: 'var(--bg-tile-dark)', color: '#fff', padding: '40px', borderRadius: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <MapPin size={32} color="#27c93f" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: '#fff' }}>On-Ground Local Support</h3>
                <p style={{ color: '#a1a1a6', fontSize: '1rem', lineHeight: 1.5 }}>Never get stuck on hold with a distant call center again. Our dedicated engineering and support team is physically located in Patna, providing immediate, in-person troubleshooting when you need it most.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div style={{ background: 'var(--bg-primary)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-color)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Smartphone size={32} color="var(--color-primary-action)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>Dedicated Parent App</h3>
                <p className="text-body-premium" style={{ fontSize: '1rem' }}>Replace messy WhatsApp groups. Give parents a professional, secure mobile app to track live attendance, homework, and exam results natively on iOS and Android.</p>
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
                  q: "Can you migrate our existing data from our old software?",
                  a: "Absolutely. Our local deployment team in Patna will handle the complete migration of your student records, fee histories, and staff data from Excel, Tally, or any legacy ERP—ensuring zero downtime."
                },
                {
                  q: "How long does it take to implement Vidyakrit OS in our school?",
                  a: "Because we have an on-ground presence in Bihar, our standard deployment, staff training, and data migration takes under 7 days. We physically visit your campus to train your administrative staff."
                },
                {
                  q: "Is the software compliant with Bihar education board standards?",
                  a: "Yes. Our grading modules, report card generators, and attendance registers are highly customizable and fully support both BSEB and CBSE formatting requirements natively."
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
