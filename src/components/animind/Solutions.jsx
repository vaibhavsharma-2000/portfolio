import { motion } from "motion/react";
import { Section } from "./Section";
import { ExpandingGenreGrid } from "./ExpandingGenreGrid";
import IPhoneFrame from "./IPhoneFrame";
import imgVisualSearch from "../../assets/animind/96ed4535bfc2208e5cd5cf3617686b6da2df4481.png";
import imgSmartSearch from "../../assets/animind/e86714f821974b21b1a98526c354f47c10bec777.png";
import imgDataDossier from "../../assets/animind/cdd112d27107c992e8dcc003af8fba039a159d4c.png";

export function Solutions() {
    return (
        <Section className="bg-[#050505]">
            <div className="mb-20 text-center">
                <h2 className="text-[#e63946] text-sm font-bold tracking-widest uppercase mb-4">
                    06 — Key Solutions
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Designing the Solutions
                </h3>
                <p className="text-[#b0b0b0] max-w-2xl mx-auto text-lg">
                    Translating user needs into high-fidelity interface modules.
                </p>
            </div>

            <div className="space-y-32">
                {/* Solution 1 - Visual Search with iPhone Frame */}
                <SolutionBlock
                    number="01"
                    title='Visual "Vibe" Search'
                    goal="Reduce cognitive load for users who lack the vocabulary to describe complex art styles."
                    solution="A drag-and-drop interface powered by Gemini 2.5 Flash/Nano Banana. Users bypass text search entirely, utilizing screenshots to discover anime based on color palette and aesthetic similarity."
                    visual={
                        <div className="flex justify-center w-full">
                            <div className="relative w-full max-w-[300px]">
                                <div className="relative aspect-[460/996] w-full">
                                    {/* Screen content inside the frame */}
                                    <div className="absolute inset-[3%] rounded-[44px] overflow-hidden bg-black z-0">
                                        <img src={imgVisualSearch} alt="Visual Search UI" className="w-full h-full object-cover" />
                                    </div>
                                    {/* iPhone frame overlay */}
                                    <div className="absolute inset-0 z-10 pointer-events-none">
                                        <IPhoneFrame />
                                    </div>
                                    {/* Glass reflection effect */}
                                    <div className="absolute inset-[3%] bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[44px] z-20" />
                                </div>
                            </div>
                        </div>
                    }
                >
                    {/* Flow Diagram */}
                    <div className="mt-8 bg-[#121212] p-6 rounded-xl border border-white/10 w-full flex items-center justify-around relative overflow-hidden">
                        <div className="text-center z-10">
                            <div className="w-12 h-12 bg-[#222] rounded-lg mx-auto mb-3 border border-dashed border-white/20 flex items-center justify-center text-white/50 text-[10px] uppercase font-bold tracking-wider">
                                Upload
                            </div>
                            <p className="text-[10px] text-[#b0b0b0] uppercase tracking-widest">1. Input</p>
                        </div>
                        <div className="h-px w-8 bg-white/10" />
                        <div className="text-center z-10">
                            <div className="w-12 h-12 bg-[#222] rounded-full mx-auto mb-3 border border-[#e63946] flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-[#e63946]/20 animate-pulse rounded-full" />
                                <span className="relative text-[#e63946] font-bold text-xs">AI</span>
                            </div>
                            <p className="text-[10px] text-[#b0b0b0] uppercase tracking-widest">2. Analyze</p>
                        </div>
                        <div className="h-px w-8 bg-white/10" />
                        <div className="text-center z-10">
                            <div className="w-12 h-12 bg-[#222] rounded-lg mx-auto mb-3 border border-white/20 flex items-center justify-center text-white overflow-hidden">
                                <div className="grid grid-cols-2 gap-0.5 w-full h-full p-1">
                                    <div className="bg-[#ff4d6d]/20 rounded-[1px]" />
                                    <div className="bg-white/10 rounded-[1px]" />
                                    <div className="bg-white/10 rounded-[1px]" />
                                    <div className="bg-white/10 rounded-[1px]" />
                                </div>
                            </div>
                            <p className="text-[10px] text-[#b0b0b0] uppercase tracking-widest">3. Results</p>
                        </div>
                    </div>
                </SolutionBlock>

                {/* Solution 2 - Expanding Genre Grid */}
                <SolutionBlock
                    number="02"
                    title="The Expanding Genre Grid"
                    goal="Maintain user context and reduce bounce rates."
                    solution="An interactive 'Bento Grid' that expands in place. It creates a dedicated viewing portal within the current viewport, allowing users to browse sub-genres without a jarring page reload."
                    align="right"
                    visual={<ExpandingGenreGrid />}
                />

                {/* Solution 3: Predictive Smart Search */}
                <SolutionBlock
                    number="03"
                    title="Predictive Smart Search"
                    goal="Reduce friction and prevent errors by providing immediate visual confirmation during the query process."
                    solution='A real-time search engine that auto-populates results as the user types. Instead of a standard text-only dropdown, the interface renders "Micro-Cards" featuring the anime poster and release year. This allows users to instantly identify the correct show visually, even if they are unsure of the exact spelling, eliminating unnecessary page loads.'
                    align="left"
                    visual={
                        <div className="flex justify-center w-full">
                            <div className="relative w-full max-w-[663px]">
                                <img src={imgSmartSearch} alt="Smart Search Mockup" className="w-full h-auto rounded-2xl shadow-2xl border border-white/10" />
                            </div>
                        </div>
                    }
                />

                {/* Solution 4: Data Dossier */}
                <SolutionBlock
                    number="04"
                    title='The "Data Dossier" Detail Page'
                    goal="Present high-density metadata without visual clutter."
                    solution="A modular, dashboard-style layout. High-priority metrics (Score, Studio, Episodes) are grouped in a high-contrast grid, followed immediately by algorithmic 'Vibe Match' recommendations to sustain engagement."
                    align="right"
                    visual={
                        <div className="flex justify-center w-full">
                            <div className="relative w-full max-w-[800px]">
                                <img src={imgDataDossier} alt="Data Dossier Mockup" className="w-full h-auto rounded-2xl shadow-2xl border border-white/10" />
                            </div>
                        </div>
                    }
                />
            </div>
        </Section>
    );
}

function SolutionBlock({ number, title, goal, solution, visual, align = "left", children }) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${align === "right" ? "lg:flex-row-reverse" : ""}`}>
            <motion.div
                initial={{ opacity: 0, x: align === "right" ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={align === "right" ? "lg:order-2" : "lg:order-1"}
            >
                <span className="text-[#ff4d6d] font-mono text-xl mb-4 block">{number}</span>
                <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>

                <div className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-lg border-l-2 border-[#e63946]">
                        <span className="text-xs text-[#b0b0b0] uppercase tracking-widest block mb-2">The UX Goal</span>
                        <p className="text-white/90 font-light leading-relaxed">{goal}</p>
                    </div>

                    <div>
                        <span className="text-xs text-[#b0b0b0] uppercase tracking-widest block mb-2 font-bold">The Solution</span>
                        <p className="text-[#b0b0b0] font-light leading-relaxed">{solution}</p>
                    </div>

                    {children}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={align === "right" ? "lg:order-1" : "lg:order-2"}
            >
                {visual}
            </motion.div>
        </div>
    );
}
