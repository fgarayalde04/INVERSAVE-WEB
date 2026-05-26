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

export default function BlogCard({ post }: { post: BlogPost }) {
  const dateFormatted = new Date(post.date).toLocaleDateString('es-UY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white border border-[#d8d0c8] rounded-2xl p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
    >
      {/* Category badge */}
      <span
        className="inline-block text-[10.5px] font-semibold tracking-widest uppercase mb-3 px-2.5 py-1 rounded-full"
        style={{ color: '#1d3557', background: '#e8eef4', letterSpacing: '0.15em' }}
      >
        {post.categoryLabel}
      </span>

      {/* Title */}
      <h2
        className="text-[1.15rem] font-semibold leading-snug mb-3 group-hover:text-[#1d3557] transition-colors"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#1a1a1a' }}
      >
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-[0.92rem] leading-relaxed mb-4" style={{ color: '#4a4a4a', fontWeight: 300 }}>
        {post.excerpt}
      </p>

      {/* Footer: date + reading time + arrow */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#e8e4df]">
        <div className="flex items-center gap-3 text-[0.78rem]" style={{ color: '#8a8a8a' }}>
          <time dateTime={post.date}>{dateFormatted}</time>
          <span className="flex items-center gap-1">
            <ClockIcon />
            {post.readingTime} min de lectura
          </span>
        </div>
        <span
          className="text-[0.82rem] font-semibold group-hover:underline"
          style={{ color: '#1d3557' }}
        >
          Leer →
        </span>
      </div>
    </Link>
  );
}
