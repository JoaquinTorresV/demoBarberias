import type { Review } from "@/lib/site.types";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1 text-white/90">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4"
          fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  );
}

function Initial({ name }: { name: string }) {
  const i = name.trim().charAt(0).toUpperCase() || "•";
  return (
    <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-white/10 text-white/80 text-sm">
      {i}
    </span>
  );
}

export default function Reviews({ list }: { list: Review[] }) {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-16 band">
      <h2 className="text-2xl font-bold mb-6">Reseñas</h2>

      {/* Panel envolviendo el grid */}
      <div className="panel p-4 md:p-6">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {list.map((r, i) => (
            <blockquote key={i} className="relative rounded-xl border border-white/10 bg-white/[.04] p-5 md:p-6">
              <Stars n={r.rating} />
              <p className="mt-4 text-[15px] leading-7">“{r.text}”</p>
              <footer className="mt-5 flex items-center gap-3 text-sm text-white/70">
                <Initial name={r.name} />
                <span>— {r.name}</span>
              </footer>
              {/* comillas decorativas sutiles */}
              <span className="absolute right-4 top-2 text-3xl text-white/10 select-none">”</span>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
