import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Bridge from './sections/Bridge';
import BentoGrid from './sections/BentoGrid';
import Journey from './sections/Journey';

function App() {
  return (
    <main className="bg-dark selection:bg-brand selection:text-dark antialiased">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Bridge />
      <div id="toolkit">
        <BentoGrid />
      </div>
      <Journey />
      {/* Footer / Contact Placeholder */}
      <footer className="py-20 text-center text-neutral-600 border-t border-white/5">
        <p className="font-sans text-sm tracking-widest uppercase">
          Vaibhav Sharma • 2025
        </p>
      </footer>
    </main>
  );
}

export default App;