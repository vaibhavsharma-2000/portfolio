import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Bridge from './sections/Bridge';
import BentoGrid from './sections/BentoGrid';
import Journey from './sections/Journey';
import Articles from './sections/Articles';
import TheLab from './sections/TheLab';
import SectionHeader from './components/SectionHeader';
import Footer from './components/Footer';


function App() {
  return (
    <main className="bg-dark selection:bg-brand selection:text-dark antialiased">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Bridge />
      <SectionHeader title="Experience & Qualifications" />
      <Journey />
      <SectionHeader title="Skills" />
      <div id="toolkit">
        <BentoGrid />
      </div>
      <SectionHeader title="Articles & Publications" />
      <Articles />
      {/* 
        [THE LAB - FUTURE SECTION]
        Description: A playground for experimental projects (AI Agents, Animation Libs). 
        Features: Horizontal scrolling, hover-to-play interactions, and draggable cards.
        
        <SectionHeader title="The Lab" />
        <TheLab />
      */}
      {/* Footer / Contact Placeholder */}
      <Footer />
    </main>
  );
}

export default App;