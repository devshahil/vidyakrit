import React from 'react';

const faqs = [
  { q: "Is Vidyakrit cloud-based?", a: "Yes, our ERP is fully cloud-hosted on secure enterprise servers. There is no need to purchase, maintain, or secure on-premise hardware." },
  { q: "Can we access it from mobile phones?", a: "Absolutely. We offer a fully responsive web portal and a dedicated mobile application for staff, ensuring access from anywhere." },
  { q: "Can teachers use the system without technical knowledge?", a: "Yes. Our platform is designed with a premium, intuitive interface that requires almost zero technical expertise. If they can use a smartphone, they can use Vidyakrit." },
  { q: "How long does implementation take?", a: "Depending on your school's size and data complexity, a complete rollout usually takes between 2 to 4 weeks." },
  { q: "Can we migrate data from Excel or another ERP?", a: "Yes. Our engineering team handles the secure migration of your historical data, student records, and fee ledgers directly into the new platform." },
  { q: "Is staff training included?", a: "Yes. We provide comprehensive onboarding sessions for your administrators, accountants, and teachers to ensure a smooth transition." },
  { q: "Who owns the school data?", a: "Your institution retains 100% ownership of all data. We act strictly as a secure data processor and you can export your records at any time." },
  { q: "How secure is student information?", a: "We employ 256-bit encryption, role-based access controls, automatic daily backups, and strict mobile device approvals to guarantee data security." },
  { q: "Can the ERP be customized?", a: "Yes. We understand every school operates differently. We customize fee structures, grading systems, and reporting formats to match your exact workflows." },
  { q: "Does it support multiple campuses?", a: "Yes, our multi-tenant architecture allows you to manage multiple branches from a single centralized super-admin dashboard." },
  { q: "Can parents receive WhatsApp notifications?", a: "Yes. The system automatically sends instant WhatsApp and Email alerts for daily attendance, fee dues, and urgent school announcements." },
  { q: "Can online fee payments be enabled?", a: "Yes, we integrate with enterprise payment gateways (like Razorpay) allowing parents to pay via UPI, Credit/Debit cards, or Net Banking seamlessly." },
  { q: "Is technical support included?", a: "Yes. You receive dedicated technical support, continuous server monitoring, and guaranteed issue resolution as part of your partnership with us." },
  { q: "Will there be downtime during implementation?", a: "No. We run the migration in parallel with your existing systems, ensuring absolutely zero disruption to your daily school operations." },
  { q: "How are software updates delivered?", a: "Updates are delivered seamlessly over-the-air. You will always be running the latest, most secure version of Vidyakrit without any manual installations." }
];

export const ExtendedFaq = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Everything you need to know before choosing Vidyakrit.
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
                fontSize: '1.125rem',
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
              <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
