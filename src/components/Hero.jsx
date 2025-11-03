import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient and vignette overlays to ensure foreground contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-white/0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.3)_100%)]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="backdrop-blur-sm bg-white/30 dark:bg-black/20 rounded-2xl p-6 sm:p-8 shadow-xl border border-white/40">
            <p className="uppercase tracking-widest text-xs sm:text-sm text-white/80">Urban Luxury • Interior Design</p>
            <h1 className="mt-2 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-sm">
              Design your perfect room
            </h1>
            <p className="mt-3 sm:mt-4 text-white/90 max-w-2xl">
              Experiment with layouts, palettes, and textures in a modern skyscraper suite. Visualize your ideas before you build.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#designer" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-2.5 font-semibold shadow hover:shadow-md transition">
                Start Designing
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white/20 text-white px-5 py-2.5 font-semibold backdrop-blur hover:bg-white/30 transition border border-white/40">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
