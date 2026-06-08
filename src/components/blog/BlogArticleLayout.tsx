import Link from 'next/link';
import { BlogPost } from '@/data/blog';

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
      <circle cx="6.5" cy="6.5" r="5.5" stroke="#8a8a8a" strokeWidth="1.2" />
      <path d="M6.5 3.5v3l2 1.5" stroke="#8a8a8a" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function BlogArticleLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  const dateFormatted = new Date(post.date).toLocaleDateString('es-UY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="article-page">
      {/* Wrap principal — ancho completo */}
      <div className="article-wrap" style={{ paddingBottom: 0 }}>

        {/* Back link + meta */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[0.82rem] font-medium mb-10 hover:underline"
            style={{ color: '#1d3557' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver al Blog
          </Link>

          {/* Article meta header */}
          <div className="mb-8">
            <div className="flex items-center gap-3" style={{ color: '#8a8a8a' }}>
              <time dateTime={post.date} className="text-[0.82rem]">{dateFormatted}</time>
              <span className="text-[#d8d0c8]">·</span>
              <span className="flex items-center gap-1 text-[0.82rem]">
                <ClockIcon />
                {post.readingTime} min de lectura
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article content — ancho completo, CSS controla las columnas */}
      <div className="article-wrap" style={{ paddingTop: 0 }}>
        {children}

        {/* CTA at the bottom */}
        <div
          className="mt-16 p-10 rounded-2xl text-center"
          style={{ background: '#e8eef4', border: '1px solid #c8d8e8' }}
        >
          <p
            className="text-[0.85rem] font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#1d3557', letterSpacing: '0.15em' }}
          >
            Seguí explorando
          </p>
          <p className="text-[0.95rem] mb-7" style={{ color: '#4a4a4a', fontWeight: 300, maxWidth: '480px', margin: '0 auto 1.75rem' }}>
            Podés simular distintos escenarios o conocer cómo funciona un plan de ahorro mensual de largo plazo.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/simulador"
              className="inline-flex items-center gap-2 text-[0.88rem] font-semibold px-6 py-2.5 rounded-full transition-all hover:opacity-80"
              style={{ background: '#1d3557', color: '#fff' }}
            >
              Simulá tu futuro
            </Link>
            <Link
              href="/dominion"
              className="inline-flex items-center gap-2 text-[0.88rem] font-semibold px-6 py-2.5 rounded-full transition-all hover:opacity-80"
              style={{ background: 'transparent', color: '#1d3557', border: '1.5px solid #1d3557' }}
            >
              Conocé el plan
            </Link>
          </div>
        </div>

        {/* Back to blog */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="text-[0.85rem] font-medium hover:underline"
            style={{ color: '#1d3557' }}
          >
            ← Ver todos los artículos
          </Link>
        </div>
      </div>
    </div>
  );
}
