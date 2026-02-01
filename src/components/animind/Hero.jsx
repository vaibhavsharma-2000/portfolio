import { motion } from "motion/react";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";
import imgHeroDevices from "../../assets/animind/17fbb2d3c41305a9a293ceaaec5c03a1b3a7af5f.png";

export function Hero() {
    return (
        <Section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-32 pb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e63946]/5 rounded-full blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 space-y-6 flex flex-col items-center"
                >
                    <h1 className="text-6xl md:text-9xl font-serif tracking-tight leading-none text-white select-none">
                        AniMind
                    </h1>

                    <div className="flex flex-col md:flex-row gap-6 items-center mt-8">
                        <a
                            href="https://animind-v2.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-[#e63946] hover:bg-[#ff4d6d] text-white font-bold uppercase tracking-widest text-sm rounded-full transition-colors"
                        >
                            View Live Project{" "}
                            <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                            href="https://github.com/vaibhavsharma-2000/animind"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-full transition-colors border border-white/10"
                        >
                            View GitHub <Github className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                {/* Project Meta-Data */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 w-full max-w-5xl border-y border-white/10 py-8"
                >
                    <div className="text-center md:text-left">
                        <h3 className="text-[#b0b0b0] text-sm uppercase tracking-widest mb-1">
                            Role
                        </h3>
                        <p className="text-white font-medium">
                            Product Designer
                        </p>
                        <p className="text-[#b0b0b0] text-sm">
                            Research, UI, Prototyping
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-[#b0b0b0] text-sm uppercase tracking-widest mb-1">
                            Timeline
                        </h3>
                        <p className="text-white font-medium">1 Week</p>
                        <p className="text-[#b0b0b0] text-sm">
                            Design Sprint
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-[#b0b0b0] text-sm uppercase tracking-widest mb-1">
                            Tools
                        </h3>
                        <p className="text-white font-medium">
                            Figma, React
                        </p>
                        <p className="text-[#b0b0b0] text-sm">
                            Gemini, Google Stitch
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-[#b0b0b0] text-sm uppercase tracking-widest mb-1">
                            Platform
                        </h3>
                        <p className="text-white font-medium">Web App</p>
                        <p className="text-[#b0b0b0] text-sm">Responsive</p>
                    </div>
                </motion.div>

                {/* Hero Devices Visual - Replaced with scalable image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-5xl mx-auto px-4"
                >
                    <img
                        src={imgHeroDevices}
                        alt="AniMind Devices Mockup"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </div>
        </Section>
    );
}
