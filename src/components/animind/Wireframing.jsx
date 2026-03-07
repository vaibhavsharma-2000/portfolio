import { motion } from "motion/react";
import { Section } from "./Section";
import { Layout, Palette } from "lucide-react";
import imgStitch from "../../assets/animind/be5cb8f5470717d0a58ea9e22499f7ed8868546e.png";
import imgFigma from "../../assets/animind/3243a4c00fea99ea662a044198bb309715cfe842.png";

export function Wireframing() {
    return (
        <Section className="bg-[#0a0a0a] border-t border-white/5">
            <div className="mb-20 text-center">
                <h2 className="text-[#e63946] text-sm font-bold tracking-widest uppercase mb-4">
                    05 — Wireframing & Refinement
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    From Blank Canvas to Design System
                </h3>
                <p className="text-[#b0b0b0] max-w-2xl mx-auto text-lg">
                    Using Google Stitch for speed and Figma for consistency.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Phase A */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#121212] p-8 rounded-xl border border-white/5 flex flex-col h-full"
                >
                    <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#e63946] mb-6 border border-white/10 shrink-0">
                        <Layout className="w-6 h-6" />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2">Phase A: Rapid Wireframing</h4>
                    <span className="text-xs font-mono text-[#b0b0b0] uppercase tracking-widest mb-6 block">Google Stitch</span>

                    <p className="text-[#b0b0b0] mb-6 leading-relaxed">
                        To solve the "Blank Canvas" paralysis, I used Google Stitch to generate initial high-fidelity layouts based on my user flow.
                    </p>

                    <div className="space-y-4 mb-8">
                        <div>
                            <span className="text-white font-bold text-sm block mb-1">The Value</span>
                            <p className="text-[#b0b0b0] text-sm font-light">
                                It provided immediate structural ideas for the "Data Dossier" page layout and predictive heatmaps for user attention.
                            </p>
                        </div>
                        <div>
                            <span className="text-white font-bold text-sm block mb-1">The Limitation</span>
                            <p className="text-[#b0b0b0] text-sm font-light">
                                The AI output lacked consistency. It generated conflicting navigation patterns across different pages (e.g., a "Netflix-style" home page vs. a "dashboard" profile page).
                            </p>
                        </div>
                    </div>

                    <div className="mt-auto w-full">
                        <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg relative group w-full">
                            <img src={imgStitch} alt="Google Stitch Wireframes" loading="lazy" className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </motion.div>

                {/* Phase B */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#121212] p-8 rounded-xl border border-white/5 flex flex-col h-full"
                >
                    <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#e63946] mb-6 border border-white/10 shrink-0">
                        <Palette className="w-6 h-6" />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2">Phase B: Systemizing in Figma</h4>
                    <span className="text-xs font-mono text-[#b0b0b0] uppercase tracking-widest mb-6 block">Figma Refinement</span>

                    <p className="text-[#b0b0b0] mb-6 leading-relaxed">
                        I imported the Stitch concepts into Figma to establish a cohesive visual language.
                    </p>

                    <div className="space-y-4 mb-8">
                        <div>
                            <span className="text-white font-bold text-sm block mb-1">Refinement</span>
                            <p className="text-[#b0b0b0] text-sm font-light">
                                I standardized the navigation, typography scales (Outfit), and the "Cyberpunk Red" color palette to ensure brand consistency across all screens.
                            </p>
                        </div>
                        <div>
                            <span className="text-white font-bold text-sm block mb-1">The Output</span>
                            <p className="text-[#b0b0b0] text-sm font-light">
                                A polished high-fidelity mockup that served as the "Source of Truth" for the development phase.
                            </p>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg relative group w-full">
                            <img src={imgFigma} alt="Figma Design System" loading="lazy" className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
