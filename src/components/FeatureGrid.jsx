import { Home, Ruler, Palette, Share2 } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Smart Layouts',
    desc: 'Snap furniture into balanced compositions with spacing guidance.',
  },
  {
    icon: Ruler,
    title: 'Accurate Scale',
    desc: 'Visualize true-to-size pieces with adjustable room dimensions.',
  },
  {
    icon: Palette,
    title: 'Live Palettes',
    desc: 'Try curated color schemes and materials in one click.',
  },
  {
    icon: Share2,
    title: 'One-Click Share',
    desc: 'Export moodboards and share previews with clients instantly.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to plan the perfect space</h2>
          <p className="mt-3 text-gray-600">Intuitive tools crafted for interior designers, realtors, and homeowners.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
