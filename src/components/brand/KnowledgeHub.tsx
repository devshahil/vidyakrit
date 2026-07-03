import React from 'react';
import { ArrowRight } from 'lucide-react';

const articles = [
  { category: "Administration", time: "5 min read", title: "How School ERP Improves Administration", desc: "Discover how moving from paper to cloud-based systems transforms daily operations." },
  { category: "Strategy", time: "7 min read", title: "Digital Transformation for Schools", desc: "A practical guide to modernizing your educational institution step by step." },
  { category: "Finance", time: "4 min read", title: "Benefits of Online Fee Collection", desc: "Why digital payment gateways reduce late fees and simplify accounting." },
  { category: "Communication", time: "6 min read", title: "Improving Parent Communication", desc: "Using automated alerts and portals to keep parents engaged and informed." },
  { category: "Technology", time: "8 min read", title: "Protecting Student Data", desc: "Understanding cloud security, encryption, and role-based access controls." },
  { category: "Compliance", time: "5 min read", title: "Preparing Schools for NEP 2020", desc: "How modern software helps align your school with the latest national policies." }
];

export const KnowledgeHub = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Insights & Resources
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Educational articles and guides to help you navigate technology in education.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {articles.map((article, i) => (
            <div key={i} style={{ 
              background: 'var(--bg-primary)', 
              borderRadius: '20px', 
              border: '1px solid var(--border-color)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-sm)'
            }}>
              {/* Image Placeholder */}
              <div style={{ width: '100%', height: '200px', background: '#e4e4e7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa' }}>
                [Featured Image]
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.875rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--color-primary-action)' }}>{article.category}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{article.time}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.4 }}>{article.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1, lineHeight: 1.6 }}>{article.desc}</p>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Read Article <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
