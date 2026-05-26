import { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import BlogCard from '@/components/blog/BlogCard';
import { BLOG_POSTS } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog financiero | Sistema previsional, ahorro e inversión — Inversave',
  description:
    'Artículos y análisis sobre jubilación, sistema previsional uruguayo, ahorro, inversión de largo plazo, mercado y educación financiera.',
};

export default function BlogPage() {
  return (
    <div style={{ background: '#faf9f7', minHeight: '100vh' }}>
      <BlogHero />

      <main className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
