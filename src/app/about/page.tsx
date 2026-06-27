import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            Building the Future of Digital Experiences
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 1.8vw, 1.5rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Vidyakrit is a premium software engineering firm dedicated to creating exceptional digital products, 
            with a specialized focus on transforming educational administration through our flagship School ERP.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
            
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 600 }}>Our Mission</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                To empower organizations with scalable, high-performance software solutions that drive growth. 
                We believe that great software is a combination of engineering excellence, intuitive design, and deep 
                understanding of business needs. Our School ERP embodies this philosophy, bringing enterprise-grade 
                technology to educational institutions.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 600 }}>Design Philosophy</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                We believe in the power of simplicity. Our interfaces are designed with meticulous attention to detail, 
                generous whitespace, and clear typography. We avoid unnecessary complexity and focus on what truly matters: 
                the user's ability to accomplish their tasks efficiently and enjoyably.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
               <div style={{ padding: '2rem', background: 'var(--bg-primary)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--border-color)' }}>
                 <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Craftsmanship</h3>
                 <p style={{ color: 'var(--text-secondary)' }}>We treat code and design as a craft, ensuring high quality and maintainability in everything we build.</p>
               </div>
               <div style={{ padding: '2rem', background: 'var(--bg-primary)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--border-color)' }}>
                 <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Partnership</h3>
                 <p style={{ color: 'var(--text-secondary)' }}>We don't just build software; we build long-term partnerships with our clients to ensure their continuous success.</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Join our journey</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Whether you want to work with us on your next project or join our team, we'd love to hear from you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Button size="lg" href="/contact">Contact Us</Button>
            <Button variant="secondary" size="lg" href="/careers">View Openings</Button>
          </div>
        </div>
      </section>
    </>
  );
}
