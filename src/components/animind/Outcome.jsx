import { Section } from "./Section";
import { Lightbulb, Rocket } from "lucide-react";

export function Outcome() {
    return (
        <Section className="bg-[#080808] border-t border-white/5">
            {/* Header Section - Full Width, Centered */}
            <div className="mb-16 text-center">
                <h2 className="text-[#e63946] text-sm font-bold tracking-widest uppercase mb-4">
                    08 — Outcome & Retrospective
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Outcome & Retrospective
                </h3>
                <p className="text-[#b0b0b0] max-w-2xl mx-auto text-lg">
                    Reflections on shipping an AI-Augmented product.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left Column: Outcome & Roadmap */}
                <div className="space-y-12">
                    <div>
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            The Outcome
                        </h4>
                        <div className="space-y-6">
                            <div className="bg-[#121212] p-6 rounded-lg border-l-2 border-[#e63946]">
                                <h5 className="text-white font-bold mb-2">Fully Deployed MVP</h5>
                                <p className="text-[#b0b0b0] font-light leading-relaxed text-sm">
                                    Successfully launched a responsive React application on Vercel in a single week sprint, bridging the gap between design concept and live product.
                                </p>
                            </div>

                            <div className="bg-[#121212] p-6 rounded-lg border-l-2 border-[#e63946]">
                                <h5 className="text-white font-bold mb-2">Concept Validation</h5>
                                <p className="text-[#b0b0b0] font-light leading-relaxed text-sm">
                                    Proved that Visual "Vibe" Search effectively solves the "Instagram Reel Problem," offering a more intuitive discovery path than traditional text-based databases.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            Future Roadmap
                            <Rocket className="w-5 h-5 text-[#e63946]" />
                        </h4>
                        <div className="bg-gradient-to-r from-[#121212] to-[#1a1a1a] p-6 rounded-lg border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e63946]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <p className="text-[#b0b0b0] font-light leading-relaxed relative z-10 text-sm">
                                To evolve AniMind from a local tracking tool to a social platform, the next phase involves integrating a full backend (Firebase) to support cloud-synced user accounts, shared watchlists, and community reviews.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Learnings */}
                <div className="bg-[#121212] p-8 rounded-2xl border border-white/5 relative">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Lightbulb className="w-20 h-20 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-6 relative z-10">Learnings</h3>

                    <div className="space-y-6 relative z-10">
                        <div>
                            <h4 className="text-[#ff4d6d] font-bold text-sm mb-1 uppercase">AI is for Speed, Humans are for Consistency</h4>
                            <p className="text-[#b0b0b0] font-light text-sm leading-relaxed">
                                Stitch was great for ideas, but Figma was required to fix navigation inconsistencies and enforce the Outfit typography scale.
                            </p>
                        </div>

                        <div className="w-full h-px bg-white/5" />

                        <div>
                            <h4 className="text-[#ff4d6d] font-bold text-sm mb-1 uppercase">Prototyping in Code</h4>
                            <p className="text-[#b0b0b0] font-light text-sm leading-relaxed">
                                Building in React allowed for realistic testing of data-heavy components (like the search dropdown) that are hard to fake in Figma.
                            </p>
                        </div>

                        <div className="w-full h-px bg-white/5" />

                        <div>
                            <h4 className="text-[#ff4d6d] font-bold text-sm mb-1 uppercase">Security Awareness</h4>
                            <p className="text-[#b0b0b0] font-light text-sm leading-relaxed">
                                Learned the importance of data privacy (API keys) when handing off designs to development environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
