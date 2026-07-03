import React from 'react';

export const OurStory = () => {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.03em' }}>
          Our Story
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <p>
            Traditional school management is still heavily dependent on paperwork, fragmented spreadsheets, and disconnected software systems. For years, educators and administrators have been forced to adapt to tools that are slow, complex, and frustrating to use.
          </p>
          <p>
            We realized that schools don't need more complex software—they need better software. They need tools that simply work out of the box.
          </p>
          <p>
            Vidyakrit exists to simplify these operations. We design modern software that is lightning-fast, enterprise-secure, and remarkably easy to use for administrators, teachers, parents, and students alike. Our goal is to handle the technological heavy lifting so educators can focus entirely on what matters most: student success.
          </p>
        </div>
      </div>
    </section>
  );
};
