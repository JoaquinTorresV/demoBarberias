import cfg from "@/lib/site.config";
import Image, { type StaticImageData } from "next/image";
import heroDefault from "@/public/images/hero-modern.png";

type HeroData = {
  title: string;
  subtitle?: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
};
type Brand = { logo?: string; name: string };

export default function Hero({
  data = cfg.content.hero,
  brand = cfg.brand,
}: {
  data?: HeroData;
  brand?: Brand;
}) {
  const heroSrc: string | StaticImageData = data?.image || heroDefault;
  const isStatic = typeof heroSrc !== "string";

  const ctaHref =
    data?.ctaHref || "https://cal.com/joaquin-tv-cqioat/agendar-corte-de-pelo";
  const ctaLabel = data?.ctaLabel || "Agendar ahora";

  return (
    <section id="hero" className="relative -mt-16">
      <div className="relative h-[65vh] min-h-[420px] w-full">
        <Image
          src={heroSrc}
          alt="Hero"
          fill
          priority
          sizes="100vw"
          quality={90}
          placeholder={isStatic ? "blur" : "empty"}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 h-full flex flex-col justify-center">
          {/* etiqueta sutil de marca (opcional) */}
          {brand?.name && (
            <span className="inline-block text-white/70 text-xs tracking-wide uppercase mb-2">
              {brand.name}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {data?.title}
          </h1>
          {data?.subtitle && (
            <p className="mt-3 text-white/85">{data.subtitle}</p>
          )}

          {/* CTA */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-full px-5 py-2.5"
            >
              {ctaLabel}
            </a>
            <a
              href="#cuts"
              className="btn btn-outline rounded-full px-5 py-2.5"
            >
              Ver cortes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
