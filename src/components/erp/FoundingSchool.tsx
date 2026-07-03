import React from 'react';
import { Button } from '@/components/ui/Button';
import { Crown, HeartHandshake, Percent, Sparkles, Lightbulb, UserCheck } from 'lucide-react';

const benefits = [
  { title: "Priority Support", icon: <HeartHandshake size={24} strokeWidth={1.5} /> },
  { title: "Founder Access", icon: <Crown size={24} strokeWidth={1.5} /> },
  { title: "Discounted Pricing", icon: <Percent size={24} strokeWidth={1.5} /> },
  { title: "Early Feature Access", icon: <Sparkles size={24} strokeWidth={1.5} /> },
  { title: "Product Influence", icon: <Lightbulb size={24} strokeWidth={1.5} /> },
  { title: "Dedicated Onboarding", icon: <UserCheck size={24} strokeWidth={1.5} /> }
];

export const FoundingSchool = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
          Become One of Our Founding Schools
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '4rem' }}>
          We are currently onboarding a limited number of schools as our founding partners. Founding schools receive priority support, discounted pricing, direct communication with the development team, and the opportunity to influence future product features.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {benefits.map((benefit, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              padding: '2rem',
              background: 'var(--bg-secondary)',
              borderRadius: '24px',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ color: 'var(--color-primary-action)' }}>
                {benefit.icon}
              </div>
              <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>{benefit.title}</span>
            </div>
          ))}
        </div>

        <Button size="lg" href="/contact" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
          Schedule a Demo
        </Button>
      </div>
    </section>
  );
};
