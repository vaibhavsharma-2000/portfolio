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
    "name": "TeamViewer — UX Research Internship Report & Case Study",
    "author": {
        "@type": "Person",
        "name": "Vaibhav Sharma",
        "url": "https://www.vaibhavsharma.de",
        "jobTitle": "UX Designer & UX Researcher"
    },
    "description": "6-month UX Research internship at TeamViewer GmbH. Covers AI-driven customer feedback pipelines using JTBD/ODI, strategic prototype validation using Nielsen's 10 Heuristics, a knowledge retrieval AI agent for Research Operations, and foundational user research with opportunity gap mapping.",
    "url": "https://www.vaibhavsharma.de/work/teamviewer",
    "dateCreated": "2025",
    "datePublished": "2026",
    "genre": "UX Case Study",
    "keywords": "TeamViewer, UX research internship, AI prompt engineering, JTBD, Jobs To Be Done, ODI, Outcome-Driven Innovation, heuristic evaluation, Nielsen heuristics, usability testing, knowledge management, AI agent, research operations, ReOps, UEQ+, SUS, Vaibhav Sharma",
    "inLanguage": "en",
    "hasPart": [
        {
            "@type": "CreativeWork",
            "name": "AI-Driven Customer Feedback Analysis",
            "description": "Automated multi-hour manual analysis into weekly pipelines using AI prompt engineering and JTBD syntax in Microsoft Copilot."
        },
        {
            "@type": "CreativeWork",
            "name": "Strategic Validation of TeamViewer ONE",
            "description": "Objective A–F grading system for prototype evaluation using Problem-Solution Assessment Matrix and Nielsen's 10 Heuristics."
        },
        {
            "@type": "CreativeWork",
            "name": "Knowledge Retrieval AI Agent",
            "description": "Built a UXRchive AI agent trained exclusively on TeamViewer's proprietary UX research repository for self-service knowledge retrieval."
        },
        {
            "@type": "CreativeWork",
            "name": "Foundational Research & Usability Testing",
            "description": "Ran structured user interviews with enterprise IT admins using ODI opportunity gap mapping to prioritize roadmap features for TIA Copilot."
        }
    ]
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
                title="TeamViewer UX Research Internship — Case Study"
                description="6-month UX Research Internship at TeamViewer GmbH. AI-driven feedback pipelines, prototype validation with Nielsen's Heuristics, a knowledge retrieval AI agent, and ODI-based user research. By Vaibhav Sharma."
                url="/work/teamviewer"
                image="https://www.vaibhavsharma.de/assets/teamviewer/teamviewer-cover-new.png"
                keywords="TeamViewer, UX research, internship, AI prompt engineering, JTBD, Jobs To Be Done, ODI, heuristic evaluation, Nielsen heuristics, usability testing, knowledge management, research operations, ReOps, Vaibhav Sharma"
                jsonLd={TEAMVIEWER_JSON_LD}
                ogType="article"
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
