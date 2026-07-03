import { Metadata } from 'next';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: `${post.title} | Vidyakrit Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    }
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '8rem' }}>
      <div className="ambientGlow" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', pointerEvents: 'none' }} />
      
      <article className="container" style={{ maxWidth: '768px', margin: '0 auto', position: 'relative', paddingTop: '8rem', zIndex: 1 }}>
        <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-action)', textDecoration: 'none', fontWeight: 600, marginBottom: '3rem' }}>
          <ArrowLeft size={20} /> Back to Blog
        </Link>
        
        <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--color-primary-action)', fontWeight: 600, marginBottom: '1rem' }}>
            {post.date} &bull; {post.author}
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            {post.title}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {post.description}
          </p>
        </header>

        <div style={{ 
          fontSize: '1.125rem', 
          lineHeight: 1.8, 
          color: 'var(--text-secondary)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }} {...props} />,
              h2: ({node, ...props}) => <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }} {...props} />,
              h3: ({node, ...props}) => <h4 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '1.5rem', marginBottom: '0.75rem' }} {...props} />,
              p: ({node, ...props}) => <p style={{ marginBottom: '1.5rem' }} {...props} />,
              ul: ({node, ...props}) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} {...props} />,
              li: ({node, ...props}) => <li {...props} />,
              a: ({node, ...props}) => <a style={{ color: 'var(--color-primary-action)', textDecoration: 'underline' }} {...props} />,
              strong: ({node, ...props}) => <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }} {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
