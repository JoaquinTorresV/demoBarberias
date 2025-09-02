import Map from "@/components/Map";

function Icon({ name }: { name: "wa" | "phone" | "ig" | "mail" | "fb" }) {
  if (name === "wa") return <svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M20.5 3.5A11 11 0 0 0 3 17l-1 4 4-1A11 11 0 1 0 20.5 3.5ZM12 20a8 8 0 0 1-4.06-1.1l-.29-.17-2.37.59.63-2.31-.19-.3A8 8 0 1 1 12 20Z"/></svg>;
  if (name === "phone") return <svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M6.54 5a1 1 0 0 1 1.06-.27l2.42.81a1 1 0 0 1 .66.74l.5 2.37a1 1 0 0 1-.28.93L9.6 11.15a12.1 12.1 0 0 0 3.25 3.25l1.57-1.3a1 1 0 0 1 .93-.28l2.37.5a1 1 0 0 1 .74.66l.81 2.42a1 1 0 0 1-.27 1.06 3 3 0 0 1-2.15.89A16 16 0 0 1 5.65 7.15 3 3 0 0 1 6.54 5Z"/></svg>;
  if (name === "ig")   return <svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.07..."/></svg>;
  if (name === "mail") return <svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 0 8 6 8-6"/></svg>;
  return <svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M13 22v-8h3l.5-4H13V8.5c0-1.1.3-1.8 1.8-1.8H17V3.1c-.3 0-1.4-.1-2.6-.1C11.7 3 10 4.5 10 7.3V10H7v4h3v8h3Z"/></svg>;
}

export default function Contact({
  data,
  brand,
}: {
  data: { title: string; subtitle?: string; mapQuery?: string };
  brand: { phone?: string; whatsapp?: string; instagram?: string; email?: string; facebook?: string; address?: string; city?: string };
}) {
  const query = data.mapQuery || `${brand.address || ""} ${brand.city || ""}`.trim();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 band">
      <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
      {data.subtitle && <p className="opacity-70 mb-6">{data.subtitle}</p>}

      {/* Panel unificado con dos columnas */}
      <div className="panel p-4 md:p-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(360px,420px)_1fr]">
          {/* Columna izquierda */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {brand.whatsapp && (
                <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" className="chip chip-wa">
                  <Icon name="wa" /> WhatsApp
                </a>
              )}
              {brand.instagram && (
                <a href={`https://instagram.com/${brand.instagram}`} target="_blank" className="chip chip-dark">
                  <Icon name="ig" /> Instagram
                </a>
              )}
              {brand.email && (
                <a href={`mailto:${brand.email}`} className="chip chip-dark">
                  <Icon name="mail" /> Email
                </a>
              )}
              {brand.facebook && (
                <a href={`https://facebook.com/${brand.facebook}`} target="_blank" className="chip chip-dark">
                  <Icon name="fb" /> Facebook
                </a>
              )}
            </div>

            {brand.phone && (
              <a className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                 href={`tel:${brand.phone.replace(/\s+/g, "")}`}>
                <span className="flex items-center gap-3"><Icon name="phone" /> {brand.phone}</span>
                <span className="text-sm opacity-70">Llamar</span>
              </a>
            )}

            {(brand.address || brand.city) && (
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-sm">{brand.address}{brand.city ? `, ${brand.city}` : ""}</p>
              </div>
            )}
          </div>

          {/* Columna derecha: mapa con el mismo look del panel */}
          <div className="overflow-hidden rounded-xl border border-white/10">
            <Map query={query || "Viña del Mar"} />
          </div>
        </div>
      </div>
    </section>
  );
}
