import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "../components/SEOHead";

// Import all section components
import { Hero } from "../components/animind/Hero";
import { ProblemSpace } from "../components/animind/ProblemSpace";
import { Research } from "../components/animind/Research";
import { Process } from "../components/animind/Process";
import { DesignSystem } from "../components/animind/DesignSystem";
import { Wireframing } from "../components/animind/Wireframing";
import { Solutions } from "../components/animind/Solutions";
import { HighFidelity } from "../components/animind/HighFidelity";
import { Outcome } from "../components/animind/Outcome";
import { Footer } from "../components/animind/Footer";

// Import Animind-specific styles
import "../styles/animind.css";

const ANIMIND_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "AniMind — Anime Discovery UX Case Study",
    "author": {
        "@type": "Person",
        "name": "Vaibhav Sharma",
        "url": "https://www.vaibhavsharma.de"
    },
    "description": "UX case study for AniMind, a social platform to catalog, review, and curate your personal anime journey. Featuring user research, design systems, and React front-end development.",
    "url": "https://www.vaibhavsharma.de/work/animind",
    "dateCreated": "2026",
    "genre": "UX Case Study",
    "keywords": "AniMind, anime app, UX case study, UX research, design system, React, Figma, product design",
    "tools": ["Figma", "React", "Gemini", "Google Stitch"],
    "inLanguage": "en"
};

export default function AnimindPage() {
    return (
        <main className="animind-page min-h-screen bg-[#050505] text-white font-sans">
            <SEOHead
                title="AniMind — Anime Discovery UX Case Study"
                description="UX case study for AniMind, a social platform to catalog, review, and curate your personal anime journey. Featuring user research, design systems, and React front-end development."
                url="/work/animind"
                keywords="AniMind, anime app, UX case study, UX research, design system, React, Figma, Vaibhav Sharma"
                jsonLd={ANIMIND_JSON_LD}
            />

            {/* Navigation - Floating Back Button */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="fixed top-8 left-8 z-50"
            >
                <Link to="/#work">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/20 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-bold tracking-widest uppercase">Back to Work</span>
                    </motion.button>
                </Link>
            </motion.div>

            {/* Page Content */}
            <article>
                <Hero />
                <ProblemSpace />
                <Research />
                <Process />
                <DesignSystem />
                <Wireframing />
                <Solutions />
                <HighFidelity />
                <Outcome />
            </article>
            <Footer />
        </main>
    );
}
