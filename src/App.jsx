import Hero from './sections/Hero';
import BentoGrid from './sections/BentoGrid';

function App() {
  return (
    <main className="bg-dark selection:bg-brand selection:text-dark">
      <Hero />
      <BentoGrid />
      {/* Next: Project Preview Section */}
      <div className="h-[50vh]" />
    </main>
  );
}

export default App;