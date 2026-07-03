import React from 'react';
import { Headphones, DownloadCloud, Bug, Sparkles, BookOpen, MessageSquare } from 'lucide-react';

const supportFeatures = [
  { title: "Technical Support", desc: "Fast, reliable issue resolution.", icon: <Headphones size={24} /> },
  { title: "Software Updates", desc: "Continuous, seamless improvements.", icon: <DownloadCloud size={24} /> },
  { title: "Bug Fixes", desc: "Proactive and reliable maintenance.", icon: <Bug size={24} /> },
  { title: "Feature Enhancements", desc: "Regular product evolution.", icon: <Sparkles size={24} /> },
  { title: "Training Assistance", desc: "Ongoing help for all your staff.", icon: <BookOpen size={24} /> },
  { title: "Dedicated Communication", desc: "Direct channels to our engineers.", icon: <MessageSquare size={24} /> }
];

export const DedicatedSupport = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
            Support That Continues After Deployment
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Implementation is only the beginning. We partner with you for the long term.
          </p>
        </div>

        {/* Workflow */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          background: 'var(--bg-primary)',
          padding: '2rem 3rem',
          borderRadius: '24px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '5rem',
          flexWrap: 'wrap',
          gap: '1rem',
          textAlign: 'center'
        }}>
          {['Issue Reported', 'Acknowledged', 'Assigned', 'Resolved', 'Verified', 'Closed'].map((step, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)' }}>{step}</div>
              {i < arr.length - 1 && <div style={{ color: 'var(--color-primary-action)' }}>➔</div>}
            </React.Fragment>
          ))}
        </div>

        {/* Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {supportFeatures.map((item, i) => (
            <div key={i} style={{ 
              background: 'var(--bg-primary)', 
              padding: '2rem', 
              borderRadius: '20px', 
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ color: 'var(--color-primary-action)', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
