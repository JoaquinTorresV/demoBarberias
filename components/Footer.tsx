import cfg from "@/lib/site.config";

function Icon({ name }: { name: "wa" | "ig" | "fb" }) {
  if (name === "wa")
    return <svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M20.5 3.5A11 11 0 0 0 3 17l-1 4 4-1A11 11 0 1 0 20.5 3.5ZM12 20a8 8 0 0 1-4.06-1.1l-.29-.17-2.37.59.63-2.31-.19-.3A8 8 0 1 1 12 20Z"/></svg>;
  if (name === "ig")
    return <svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.07 1.9.25 2.4.42a4.8 4.8 0 0 1 1.7 1.1 4.8 4.8 0 0 1 1.1 1.7c.17.5.35 1.2.42 2.4.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.07 1.2-.25 1.9-.42 2.4a4.8 4.8 0 0 1-1.1 1.7 4.8 4.8 0 0 1-1.7 1.1c-.5.17-1.2.35-2.4.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.07-1.9-.25-2.4-.42A4.8 4.8 0 0 1 3.79 3a4.8 4.8 0 0 1 1.7-1.1c.5-.17 1.2-.35 2.4-.42C8.2 1.4 8.6 1.4 11.8 1.4h.4Z"/></svg>;
  return <svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M13 22v-8h3l.5-4H13V8.5c0-1.1.3-1.8 1.8-1.8H17V3.1c-.3 0-1.4-.1-2.6-.1C11.7 3 10 4.5 10 7.3V10H7v4h3v8h3Z"/></svg>;
}

export default function Footer() {
  const { brand } = cfg;

  return (
    <footer className="mt-12 border-t border-[color:var(--hairline)]">
      {/* bloque principal: se apila en móvil, 3 columnas en md+ */}
      <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Marca */}
        <div className="flex items-center gap-3 justify-center md:justify-start">
          {brand.logo ? (
            <img src={brand.logo} alt={brand.name} className="h-5 w-auto opacity-90" />
          ) : (
            <span className="text-sm font-medium">{brand.name ?? "Barbería"}</span>
          )}
          <span className="sr-only">{brand.name ?? "Barbería"}</span>
        </div>

        {/* Nav: centrado y hace wrap en móvil */}
        <nav className="flex justify-center flex-wrap gap-x-4 gap-y-2 text-sm text-white/70">
          <a href="#cuts" className="hover:text-white">Cortes</a>
          <a href="#specialists" className="hover:text-white">Especialistas</a>
          <a href="#reviews" className="hover:text-white">Reseñas</a>
          <a href="#contact" className="hover:text-white">Contacto</a>
        </nav>

        {/* Redes: wrap + centrado en móvil, a la derecha en md+ */}
        <div className="flex justify-center md:justify-end gap-2 flex-wrap">
          {brand.whatsapp && (
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-wa"
              aria-label="WhatsApp"
            >
              <Icon name="wa" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          )}
          {brand.instagram && (
            <a
              href={`https://instagram.com/${brand.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-dark"
              aria-label="Instagram"
            >
              <Icon name="ig" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          )}
          {brand.facebook && (
            <a
              href={`https://facebook.com/${brand.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-dark"
              aria-label="Facebook"
            >
              <Icon name="fb" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
          )}
        </div>
      </div>

      {/* Línea inferior: stack en móvil */}
      <div className="mx-auto max-w-6xl px-4 pb-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
        <span>© {new Date().getFullYear()} {brand.name ?? "Barbería"}</span>
        <a href="#hero" className="hover:text-white/80">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
