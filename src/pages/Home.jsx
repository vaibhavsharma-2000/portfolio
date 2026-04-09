import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Bridge from '../sections/Bridge';
import BentoGrid from '../sections/BentoGrid';
import Journey from '../sections/Journey';
import Articles from '../sections/Articles';
import WorkCarousel from "../sections/WorkCarousel";
import AIProcess from "../sections/AIProcess";
import Marquee from "../components/Marquee";

import SectionHeader from '../components/SectionHeader';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const skillsMarquee = [
    "React", "Figma", "Tailwind CSS", "JavaScript", "Framer",
    "SPSS", "Jira", "UX Design", "User Research", "Prototyping",
    "Design Systems", "A/B Testing", "Usability Testing", "Confluence",
    "HTML", "CSS", "Git", "GitHub", "Responsive Design",
    "Wireframing", "Information Architecture", "Interaction Design",
    "Qualitative Research", "Quantitative Research", "Data Analysis"
];

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
            <SEOHead
                title="Vaibhav Sharma — UX Designer & Working Student at PwC"
                description="Vaibhav Sharma — UX Designer & Working Student at PwC Deutschland in Stuttgart. MSc Usability Engineering. UX research, human-centered design, Figma, and React portfolio."
                keywords="Vaibhav Sharma, UX Designer, UX Researcher, Working Student, PwC Deutschland, Stuttgart, Germany, Usability Engineering, UI/UX Design, User Research, Figma, React, Portfolio, Human-Centered Design, Product Design"
                url="/"
                ogType="website"
            />
            {/* Skip to main content link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand text-dark px-4 py-2 rounded z-50 font-bold">
                Skip to main content
            </a>
            <main className="bg-dark selection:bg-brand selection:text-dark antialiased">
                <Navbar />
                <header id="home" role="banner">
                    <Hero />
                </header>

                {/* Skills Marquee */}
                <div className="bg-[#0a0a0a] py-6 md:py-8">
                    <Marquee items={skillsMarquee} speed={35} separator="·" />
                </div>

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

                <AIProcess />

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
