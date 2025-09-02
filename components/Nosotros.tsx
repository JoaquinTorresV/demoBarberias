export default function About({ data }: { data: { title: string; text: string; image?: string } }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-bold mb-3">{data.title}</h2>
        <p className="opacity-80">{data.text}</p>
      </div>
      <div className="rounded-2xl overflow-hidden bg-neutral-900">
        {data.image && <img src={data.image} alt="About" className="w-full h-full object-cover grayscale" />}
      </div>
    </section>
  );
}
