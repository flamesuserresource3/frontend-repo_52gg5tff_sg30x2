import { useMemo, useState } from 'react';
import { Palette, Grid3x3, Sofa } from 'lucide-react';

const palettes = [
  { name: 'Warm Oak', value: '#C7A17A' },
  { name: 'Cool Concrete', value: '#A7B0B7' },
  { name: 'Noir', value: '#1F1F1F' },
  { name: 'Ivory', value: '#F6F3EE' },
];

const layouts = [
  { name: 'Open Lounge', code: 'open' },
  { name: 'Cozy Corner', code: 'corner' },
  { name: 'Entertainer', code: 'island' },
];

const textures = [
  { name: 'Linen', value: 'Linen' },
  { name: 'Bouclé', value: 'Boucle' },
  { name: 'Leather', value: 'Leather' },
];

export default function Configurator() {
  const [selectedPalette, setSelectedPalette] = useState(palettes[0]);
  const [selectedLayout, setSelectedLayout] = useState(layouts[0]);
  const [selectedTexture, setSelectedTexture] = useState(textures[0]);

  const previewText = useMemo(() => {
    return `${selectedLayout.name} • ${selectedTexture.name} • ${selectedPalette.name}`;
  }, [selectedLayout, selectedTexture, selectedPalette]);

  return (
    <section id="designer" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-slate-50 to-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center"><Sofa className="h-5 w-5" /></div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Live Preview</h3>
                <p className="text-slate-600 text-sm">A high-level snapshot of your current configuration</p>
              </div>
            </div>

            <div className="mt-6 aspect-video rounded-xl border border-slate-200 bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest text-slate-500">Preview</div>
                <div className="mt-2 text-2xl font-bold text-slate-900">{previewText}</div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-slate-700">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedPalette.value }} />
                  <span className="text-xs">Color Accent</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900">Quick Config</h4>
            <p className="text-slate-600 text-sm">Tweak the look and feel. These are just UI controls for this demo.</p>

            <div className="mt-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Palette className="h-4 w-4"/> Palette</label>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {palettes.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => setSelectedPalette(p)}
                      className={`group flex items-center gap-3 rounded-xl border p-3 transition ${selectedPalette.name === p.name ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                      <span className="w-5 h-5 rounded-full ring-1 ring-black/10" style={{ backgroundColor: p.value }} />
                      <span className="text-sm font-medium">{p.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Grid3x3 className="h-4 w-4"/> Layout</label>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {layouts.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setSelectedLayout(l)}
                      className={`rounded-xl border p-3 text-sm font-medium transition ${selectedLayout.code === l.code ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Sofa className="h-4 w-4"/> Texture</label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {textures.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setSelectedTexture(t)}
                      className={`rounded-full border px-4 py-2 text-sm transition ${selectedTexture.value === t.value ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
