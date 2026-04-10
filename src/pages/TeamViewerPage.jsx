import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Hero } from '../components/teamviewer/Hero';
import { BriefSection } from '../components/teamviewer/BriefSection';
import { ProjectShowcase } from '../components/teamviewer/ProjectShowcase';
import { ImpactSection } from '../components/teamviewer/ImpactSection';
import { ReflectionSection } from '../components/teamviewer/ReflectionSection';
import '../styles/teamviewer.css';

const TEAMVIEWER_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "TeamViewer — UX Research Internship Case Study",
    "author": {
        "@type": "Person",
        "name": "Vaibhav Sharma",
        "url": "https://www.vaibhavsharma.de"
    },
    "description": "UX Research internship case study at TeamViewer GmbH. AI-driven feedback pipelines, strategic prototype validation with Nielsen's Heuristics, knowledge retrieval AI agent, and foundational user research with ODI opportunity gap mapping.",
    "url": "https://www.vaibhavsharma.de/work/teamviewer",
    "dateCreated": "2025-2026",
    "genre": "UX Case Study",
    "keywords": "TeamViewer, UX research, internship, AI prompt engineering, JTBD, ODI, heuristic evaluation, usability testing, knowledge management, case study",
    "tools": ["Microsoft Copilot", "UEQ+", "SUS", "Nielsen's Heuristics", "JTBD", "ODI"],
    "inLanguage": "en"
};

export default function TeamViewerPage() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="teamviewer-page bg-[#0a0a0a] min-h-screen text-white"
        >
            <SEOHead
                title="TeamViewer — UX Research Internship Case Study"
                description="UX Research internship case study at TeamViewer. AI-driven feedback pipelines, strategic prototype validation, knowledge retrieval agent, and foundational user research."
                url="/work/teamviewer"
                keywords="TeamViewer, UX research, internship, AI, JTBD, heuristic evaluation, usability testing, Vaibhav Sharma"
                jsonLd={TEAMVIEWER_JSON_LD}
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

            {/* Page Sections */}
            <article>
                <Hero />
                <BriefSection />
                <ProjectShowcase />
                <ImpactSection />
                <ReflectionSection />
            </article>
        </motion.main>
    );
}
