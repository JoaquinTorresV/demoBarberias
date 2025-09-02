import Image from "next/image";
import type { Specialist } from "@/lib/site.types";

// Fallback de iniciales si no hay foto
function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
}

export default function Specialists({ list }: { list: Specialist[] }) {
  return (
    <section id="specialists" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-bold mb-6">Especialistas</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {list.map((s) => (
          <article
            key={s.name}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center
                       transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,.35)]"
          >
            {/* brillo sutil */}
            <div className="pointer-events-none absolute inset-0 opacity-[.03] bg-[radial-gradient(1200px_400px_at_50%_-20%,_white_0%,_transparent_60%)]" />

            {/* Avatar */}
            <div className="relative mx-auto mb-4 h-28 w-28 rounded-full overflow-hidden ring-1 ring-white/15 shadow-md bg-neutral-900">
              {s.photo ? (
                <Image src={s.photo} alt={s.name} fill sizes="112px" className="object-cover" />
              ) : (
                <div className="grid h-full w-full place-items-center text-white/85 text-2xl font-semibold">
                  {initials(s.name)}
                </div>
              )}
            </div>

            {/* Nombre + rol */}
            <h3 className="font-semibold text-white">{s.name}</h3>
            {s.role && <p className="text-sm text-white/70 mt-1">{s.role}</p>}

            {/* Botón blanco con texto negro */}
            {s.bookingUrl && (
              <a
                href={s.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-full !text-black px-4 py-2 mt-4 shadow-sm hover:shadow-md
                           focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label={`Agendar con ${s.name}`}
              >
                Agendar
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
