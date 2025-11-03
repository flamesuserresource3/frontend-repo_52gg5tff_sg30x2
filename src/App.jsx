import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Configurator from './components/Configurator';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <FeatureGrid />
      <Configurator />
      <Gallery />
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Room Designer. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#designer" className="hover:text-slate-900">Designer</a>
            <a href="#" className="hover:text-slate-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
