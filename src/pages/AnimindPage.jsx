import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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

export default function AnimindPage() {
    return (
        <div className="animind-page min-h-screen bg-[#050505] text-white font-sans">
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
            <Hero />
            <ProblemSpace />
            <Research />
            <Process />
            <DesignSystem />
            <Wireframing />
            <Solutions />
            <HighFidelity />
            <Outcome />
            <Footer />
        </div>
    );
}
