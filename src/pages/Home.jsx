import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Bridge from '../sections/Bridge';
import BentoGrid from '../sections/BentoGrid';
import Journey from '../sections/Journey';
import Articles from '../sections/Articles';
import WorkCarousel from "../sections/WorkCarousel";

import SectionHeader from '../components/SectionHeader';
import Footer from '../components/Footer';

function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Short delay to ensure components are mounted and layout is stable
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <>
            {/* Skip to main content link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand text-dark px-4 py-2 rounded z-50 font-bold">
                Skip to main content
            </a>
            <main className="bg-dark selection:bg-brand selection:text-dark antialiased">
                <Navbar />
                <header id="home" role="banner">
                    <Hero />
                </header>
                <Bridge />
                <section id="experience" aria-label="Experience and Qualifications">
                    <SectionHeader title="Experience & Qualifications" />
                    <Journey />
                </section>

                <WorkCarousel />

                <section id="skills" aria-label="Skills and Toolkit">
                    <SectionHeader title="Skills" />
                    <div id="toolkit" role="main" aria-label="Main content">
                        <BentoGrid />
                    </div>
                </section>

                <section id="articles" aria-label="Articles and Publications">
                    <SectionHeader title="Articles & Publications" />
                    <Articles />
                </section>

                {/* Footer / Contact */}
                <footer id="contact" role="contentinfo">
                    <Footer />
                </footer>
            </main>
        </>
    );
}

export default Home;
