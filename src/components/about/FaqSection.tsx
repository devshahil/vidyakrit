import React from 'react';

const faqs = [
  { q: "Is the ERP cloud-based?", a: "Yes, our ERP is 100% cloud-hosted on secure enterprise servers. You don't need any on-premise hardware, allowing staff to securely access data from any device." },
  { q: "Can it be customized for our school?", a: "Absolutely. We understand every institution has unique fee structures, grading systems, and reporting requirements. We customize the platform to fit your exact workflows." },
  { q: "Who owns the school data?", a: "You do. Your school retains 100% ownership of all data. We act solely as a secure data processor. You can export your data at any time." },
  { q: "How secure is the platform?", a: "We utilize 256-bit SSL encryption, granular role-based access controls, automatic daily backups, and strict device approvals to ensure military-grade security for student data." },
  { q: "Can teachers use it on mobile devices?", a: "Yes, we provide dedicated Android (and soon iOS) mobile applications designed specifically for staff to quickly mark attendance and access records on the go." },
  { q: "Is training included?", a: "Yes, every implementation includes comprehensive onboarding and training sessions for your administrators and staff to ensure they are fully comfortable using the platform." },
  { q: "How long does implementation take?", a: "Depending on the size of your school and the required customizations, deployment typically takes between 2 to 4 weeks, including complete data migration." },
  { q: "Can we migrate from Excel?", a: "Yes, we handle the heavy lifting of importing your existing student records, fee ledgers, and staff details directly from Excel or legacy systems." },
  { q: "Do parents receive notifications?", a: "Yes, the system is fully integrated with WhatsApp and Email APIs to send automated instant alerts for daily attendance, fee reminders, and urgent announcements." },
  { q: "Is technical support available after deployment?", a: "We focus on long-term partnerships. You receive priority technical support, continuous server monitoring, and free regular feature updates as part of your subscription." }
];

export const FaqSection = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Transparent answers to common questions about our platform and process.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <details 
              key={i} 
              style={{
                background: 'var(--bg-primary)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                overflow: 'hidden'
              }}
            >
              <summary style={{
                padding: '1.5rem',
                fontSize: '1.25rem',
                fontWeight: 600,
                cursor: 'pointer',
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                {faq.q}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </summary>
              <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7, borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
