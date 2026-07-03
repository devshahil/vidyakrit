import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog & Case Studies | Vidyakrit Software Engineering',
  description: 'Insights, architectural case studies, and engineering strategies from the team at Vidyakrit.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="ambientGlow">
      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            Engineering Insights
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 1.8vw, 1.5rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Deep dives into architecture, scaling enterprise software, and our journey building the ultimate School ERP.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: '8rem', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article className="blogCard">
                  <div style={{ color: 'var(--color-primary-action)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>
                    {post.date}
                  </div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.3 }}>
                    {post.title}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>
                    {post.description}
                  </p>
                  <div style={{ marginTop: '2rem', color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.875rem' }}>
                    By {post.author}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
