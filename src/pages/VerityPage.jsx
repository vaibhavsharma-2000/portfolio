import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Toaster } from 'sonner';
import { Hero } from '../components/verity/Hero';
import { ProblemSection } from '../components/verity/ProblemSection';
import { DefineSection } from '../components/verity/DefineSection';
import { AISearch } from '../components/verity/AISearch';
import { DashboardShowcase } from '../components/verity/DashboardShowcase';
import { DesignSystemSection } from '../components/verity/DesignSystemSection';
import { OutcomeSection } from '../components/verity/OutcomeSection';
import { HighFidelitySection } from '../components/verity/HighFidelitySection';
import { ReflectionSection } from '../components/verity/ReflectionSection';
import { motion } from 'framer-motion';
import '../styles/verity.css';

export default function VerityPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="verity-page bg-[#0a0a0a] min-h-screen text-white"
        >
            {/* Toaster for AI Search feedback */}
            <Toaster
                theme="dark"
                position="top-right"
                toastOptions={{
                    style: {
                        background: '#1E1E1E',
                        border: '1px solid rgba(123, 97, 255, 0.3)',
                        color: '#fff',
                        borderRadius: '16px',
                    },
                }}
            />

            {/* Back button */}
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
            {/* Page Sections - Develop Phase Reordered */}
            <Hero />
            <ProblemSection />
            <DefineSection />
            {/* Phase 03: Consolidated Solutions Wrapper */}
            <section className="bg-[#0a0a0a] pt-32 pb-0 relative">
                <div className="max-w-7xl mx-auto px-8 md:px-20 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-8 h-[1px] bg-[#7B61FF]" />
                        <span className="text-[#7B61FF] font-bold tracking-[0.3em] uppercase text-xs">Phase 03 — Develop</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-6xl leading-tight text-white mb-6"
                    >
                        The Complete Solution.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/40 text-lg max-w-2xl leading-relaxed"
                    >
                        From the executive dashboard to the logistics layer, every screen was built for clarity, speed, and quiet luxury.
                    </motion.p>
                </div>

                {/* 1. Dashboard Hub (Includes Fulfillment & Ecosystem now) */}
                <DashboardShowcase />

                {/* 4. Intelligence */}
                <AISearch />

                {/* 5. System */}
                <DesignSystemSection />
            </section>

            {/* Outcomes & Review */}
            <OutcomeSection />
            <HighFidelitySection />
            <ReflectionSection />

            {/* Footer strip */}
            <div className="border-t border-white/5 py-12 px-8 md:px-20 text-center">
                <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
                    VERITY — Designed by Vaibhav Sharma · 2026
                </p>
            </div>
        </motion.div>
    );
}
