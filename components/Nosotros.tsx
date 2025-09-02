import Image from "next/image";
// Make sure AboutData is exported from "@/lib/site.types" or update to the correct type name
// Example fix if the type is actually named 'About' in site.types:
import type { About } from "@/lib/site.types";

export default function Nosotros({ data }: { data: About }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 grid gap-6 md:grid-cols-2">
      <div>
        <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
        <p className="opacity-80">{data.text}</p>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={data.image || "/images/about-modern.jpg"}
          alt={data.title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority={false}
        />
      </div>
    </section>
  );
}
