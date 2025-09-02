// components/Map.tsx
export default function Map({ query }: { query: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return <iframe className="w-full h-72 md:h-[420px]" loading="lazy" src={src} />;
}
