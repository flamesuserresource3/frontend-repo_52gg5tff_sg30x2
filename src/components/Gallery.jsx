export default function Gallery() {
  const items = [
    {
      title: 'Minimal Luxe',
      img: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Warm Neutrals',
      img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Marble + Wood',
      img: 'https://images.unsplash.com/photo-1616594039963-9b75092aecd4?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Inspiration gallery</h2>
            <p className="text-slate-600 mt-2">Explore moodboards and styles to get started faster.</p>
          </div>
          <a href="#designer" className="hidden sm:inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition">Start designing</a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <figure key={it.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="p-4">
                <div className="text-slate-900 font-semibold">{it.title}</div>
                <div className="text-slate-600 text-sm">Tap to adapt colors and textures</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
