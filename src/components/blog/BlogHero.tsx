export default function BlogHero() {
  return (
    <section
      className="pt-16 pb-12 px-5"
      style={{ background: '#faf9f7', borderBottom: '1px solid #d8d0c8' }}
    >
      <div className="max-w-6xl mx-auto px-2">
        <p
          className="text-[11px] font-semibold tracking-widest uppercase mb-4"
          style={{ color: '#1d3557', letterSpacing: '0.18em' }}
        >
          Biblioteca · Inversave
        </p>
        <h1
          className="text-[2.4rem] sm:text-[3rem] font-semibold leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#1a1a1a', letterSpacing: '-0.01em' }}
        >
          Blog
        </h1>
        <p
          className="text-[1.05rem] leading-relaxed max-w-xl"
          style={{ color: '#4a4a4a', fontWeight: 300 }}
        >
          Artículos sobre jubilación, sistema previsional, ahorro e inversión.
          Con datos, sin jerga.
        </p>
      </div>
    </section>
  );
}
