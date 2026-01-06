import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Bridge from '../sections/Bridge';
import BentoGrid from '../sections/BentoGrid';
import Journey from '../sections/Journey';
import Articles from '../sections/Articles';
import WorkCarousel from "../sections/WorkCarousel";
import TheLab from '../sections/TheLab';
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
        <main className="bg-dark selection:bg-brand selection:text-dark antialiased">
            <Navbar />
            <div id="home">
                <Hero />
            </div>
            <div id="about">
                <Bridge />
            </div>
            <div id="experience">
                <SectionHeader title="Experience & Qualifications" />
                <Journey />
            </div>

            <WorkCarousel />

            <div id="skills">
                <SectionHeader title="Skills" />
                <div id="toolkit">
                    <BentoGrid />
                </div>
            </div>

            <div id="articles">
                <SectionHeader title="Articles & Publications" />
                <Articles />
            </div>

            {/* Footer / Contact Placeholder */}
            <div id="contact">
                <Footer />
            </div>
        </main>
    );
}

export default Home;
