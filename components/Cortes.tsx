import Image from "next/image";
import type { CutItem } from "@/lib/site.types";

// Emoji “logo” según el servicio
function emojiFor(name: string) {
  const n = name.toLowerCase();
  if (n.includes("barba")) return "🧔‍♂️";
  if (n.includes("fade")) return "✂️";
  if (n.includes("crop")) return "💈";
  if (n.includes("textur")) return "🪮";
  if (n.includes("clásico") || n.includes("clasico")) return "👔";
  return "✨";
}

// Icono SVG cuando no hay imagen ni logo
function CutIcon({ name }: { name: string }) {
  const n = name.toLowerCase();
  if (n.includes("barba"))
    return (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-white/85" fill="currentColor">
        <path d="M12 22c6.075 0 11-4.925 11-11V7a3 3 0 0 0-3-3h-2a2 2 0 1 0-4 0H10a2 2 0 1 0-4 0H4a3 3 0 0 0-3 3v4c0 6.075 4.925 11 11 11Zm-7-13h2v3a1 1 0 0 0 2 0v-3h6v3a1 1 0 0 0 2 0v-3h2v4c0 4.971-4.029 9-9 9s-9-4.029-9-9v-4Z"/>
      </svg>
    );
  // tijeras genéricas
  return (
    <svg viewBox="0 0 24 24" className="h-16 w-16 text-white/85" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
      <path d="M8.5 7.5 21 12M8.5 16.5 21 12M10 12 6 12"/>
    </svg>
  );
}

export default function Cortes({ items }: { items: CutItem[] }) {
  return (
    <section id="cuts" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-bold mb-6">Cortes & Servicios</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {items.map((c) => (
          <article
            key={c.name}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            {/* Media */}
            <div className="relative aspect-square">
              {c.image ? (
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 90vw"
                  quality={85}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : c.logo ? (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/60">
                  <Image src={c.logo} alt={c.name} width={84} height={84} className="opacity-90" />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/60">
                  <CutIcon name={c.name} />
                </div>
              )}

              {/* emoji “logo” */}
              <div className="absolute top-2 left-2 rounded-full bg-black/50 backdrop-blur px-2 py-1 text-sm text-white shadow">
                <span aria-hidden>{emojiFor(c.name)}</span>
              </div>

              {/* degradado para legibilidad del texto */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Nombre + precio (sin botón) */}
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-white font-semibold leading-tight">{c.name}</p>
              <p className="text-xs text-white/80">{c.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
