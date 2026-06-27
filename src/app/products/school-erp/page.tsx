import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";
import { Users, CreditCard, BookOpen, UserCircle, Bus, Building, FileText, CheckCircle2, MessageSquare, PieChart, Calendar, Bell } from "lucide-react";

export default function SchoolERPPage() {
  const modules = [
    { icon: <Users size={20} color="var(--color-blue)" />, title: "Student Management", desc: "Complete student lifecycle management from admission to alumni status." },
    { icon: <CreditCard size={20} color="var(--color-green)" />, title: "Fee Management", desc: "Automated fee collection, receipt generation, and real-time payment tracking." },
    { icon: <BookOpen size={20} color="var(--color-purple)" />, title: "Examination", desc: "Configure grading systems, generate report cards, and analyze academic performance." },
    { icon: <UserCircle size={20} color="var(--color-orange)" />, title: "Parent Portal", desc: "Dedicated access for parents to track attendance, fees, and academic progress." },
    { icon: <FileText size={20} color="var(--text-primary)" />, title: "Teacher Portal", desc: "Empower educators with tools for attendance, lesson planning, and grading." },
    { icon: <Bus size={20} color="var(--color-pink)" />, title: "Transport", desc: "Route management, vehicle tracking, and transport fee integration." },
    { icon: <Building size={20} color="var(--color-blue)" />, title: "Hostel", desc: "Room allocation, fee management, and visitor tracking for boarding schools." },
    { icon: <MessageSquare size={20} color="var(--color-green)" />, title: "Communication", desc: "Integrated SMS, email, and push notifications for announcements." },
    { icon: <PieChart size={20} color="var(--color-purple)" />, title: "Analytics & Reports", desc: "Comprehensive dashboards providing actionable insights for administrators." },
    { icon: <Calendar size={20} color="var(--color-orange)" />, title: "Attendance", desc: "Biometric and manual attendance tracking for both students and staff." },
    { icon: <Bell size={20} color="var(--text-primary)" />, title: "Notice Board", desc: "Digital notice boards for instant school-wide announcements." },
    { icon: <CheckCircle2 size={20} color="var(--color-pink)" />, title: "Compliance", desc: "Automated generation of statutory reports required by educational boards." }
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>The Operating System for Modern Schools</h1>
            <p className={styles.heroSubtitle}>
              Unify your entire campus operations. From admissions and fees to academics and communication, Vidyakrit School ERP brings everything together in one premium platform.
            </p>
            <div className={styles.heroActions}>
              <Button size="lg" href="/contact">Request a Demo</Button>
              <Button variant="secondary" size="lg" href="#modules">Explore Features</Button>
            </div>
          </div>

          <div className={`${styles.heroImageWrapper} float-animation`}>
            <img 
              src="/erp_hero.png" 
              alt="Vidyakrit School ERP Dashboard Showcase" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="sectionDark">
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.04em', textAlign: 'center', marginBottom: '3rem', color: '#ffffff' }}>Comprehensive Modules</h2>
          
          <div className={styles.modulesDarkGrid}>
            {modules.map((mod, i) => (
              <div key={i} className={styles.moduleDarkCard}>
                <div className={styles.moduleDarkIcon}>
                  {mod.icon}
                </div>
                <div>
                  <h3 className="featureTextDark">{mod.title}</h3>
                  <p className="featureDescDark">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className={styles.comparisonSection}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Why Vidyakrit ERP?</h2>
          
          <div className={styles.desktopTable}>
            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Traditional Systems</th>
                    <th>Vidyakrit ERP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "User Interface", trad: "Cluttered & Outdated", erp: "Premium, Clean, Intuitive" },
                    { feature: "Parent Portal", trad: "Limited or None", erp: "Full-featured Native App & Web" },
                    { feature: "Data Analytics", trad: "Basic Export", erp: "Real-time Actionable Insights" },
                    { feature: "Deployment", trad: "On-premise / Slow Cloud", erp: "High-performance Cloud Architecture" },
                    { feature: "Updates", trad: "Manual & Disruptive", erp: "Seamless & Automatic" },
                  ].map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.feature}</td>
                      <td style={{ color: 'var(--text-secondary)' }}>{item.trad}</td>
                      <td style={{ fontWeight: 500, color: 'var(--color-primary-action)' }}>{item.erp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.mobileAccordion}>
            <div className={styles.accordionContainer}>
              {[
                { feature: "User Interface", trad: "Cluttered & Outdated", erp: "Premium, Clean, Intuitive" },
                { feature: "Parent Portal", trad: "Limited or None", erp: "Full-featured Native App & Web" },
                { feature: "Data Analytics", trad: "Basic Export", erp: "Real-time Actionable Insights" },
                { feature: "Deployment", trad: "On-premise / Slow Cloud", erp: "High-performance Cloud Architecture" },
                { feature: "Updates", trad: "Manual & Disruptive", erp: "Seamless & Automatic" },
              ].map((item, idx) => (
                <details key={idx} className={styles.accordionItem}>
                  <summary className={styles.accordionSummary}>
                    {item.feature}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.chevron}>
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </summary>
                  <div className={styles.accordionContent}>
                    <div className={styles.accordionRow}>
                      <span className={styles.accordionLabelTrad}>Traditional Systems</span>
                      <span className={styles.accordionValueTrad}>{item.trad}</span>
                    </div>
                    <div className={styles.accordionDivider}></div>
                    <div className={styles.accordionRow}>
                      <span className={styles.accordionLabelErp}>Vidyakrit ERP</span>
                      <span className={styles.accordionValueErp}>{item.erp}</span>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
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

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>See Vidyakrit ERP in Action</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Schedule a personalized demo to see how our platform can streamline your school's operations.
          </p>
          <Button size="lg" href="/contact">Book a Free Demo</Button>
        </div>
      </section>
    </>
  );
}
