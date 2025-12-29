import Hero from './sections/Hero';

function App() {
  return (
    <main className="bg-dark selection:bg-brand selection:text-dark">
      <Hero />
      {/* Spacer to allow scrolling */}
      <div className="h-screen flex items-center justify-center text-neutral-600">
        <p>Next: The Bento Grid Skills Section...</p>
      </div>
    </main>
  );
}

export default App;