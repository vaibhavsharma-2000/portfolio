import { useRef, useState } from "react";
import { Section } from "./Section";
import { Code, Play, Terminal, ExternalLink } from "lucide-react";
import imgAntigravity from "../../assets/animind/a9ee5152eb2c86bb7f932a8e814bb0cbcb9cd1b7.png";

export function HighFidelity() {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <Section className="bg-[#050505]">
            {/* Header Section - Moved out and centered */}
            <div className="mb-20 text-center">
                <h2 className="text-[#e63946] text-sm font-bold tracking-widest uppercase mb-4">
                    07 — High-Fidelity Prototyping
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Validating with Code
                </h3>
                <p className="text-[#b0b0b0] leading-relaxed text-lg max-w-2xl mx-auto">
                    Using "Vibe Coding" to bridge the gap between design and reality.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column Content */}
                <div>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-white text-xl font-bold mb-2">The Gap in Static Design</h4>
                            <p className="text-[#b0b0b0] font-light leading-relaxed">
                                Figma established the visual hierarchy, but static mocks couldn't validate the intelligence of the application. I transitioned to React to stress-test the complex logic that flat designs can't simulate.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white text-xl font-bold mb-2">The "Code as Design" Approach</h4>
                            <p className="text-[#b0b0b0] font-light leading-relaxed mb-4">
                                Using my Figma mockups as the blueprint, I utilized Google Antigravity to build a functional prototype. This allowed me to fine-tune the UX in the browser:
                            </p>
                            <ul className="space-y-4 pl-4 border-l border-white/10">
                                <li>
                                    <strong className="text-white block text-sm">Real-Time Data Orchestration</strong>
                                    <span className="text-[#b0b0b0] font-light">
                                        I integrated the Gemini AI and AniList APIs to verify that visual inputs actually translated into accurate, high-quality anime recommendations, ensuring the "Vibe Search" delivered on its user promise.
                                    </span>
                                </li>
                                <li>
                                    <strong className="text-white block text-sm">Motion Physics</strong>
                                    <span className="text-[#b0b0b0] font-light">
                                        I iterated on the "Spotlight" hero animation using Framer Motion, smoothing out the easing curves to ensure the "System Scan" effect felt organic, not robotic.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#121212] p-6 rounded-lg border border-white/10">
                            <h4 className="text-[#e63946] font-bold text-sm uppercase tracking-widest mb-2">The Result</h4>
                            <p className="text-white/90 font-light text-sm italic mb-4">
                                "A fully responsive, deployed application that functions exactly as designed—proving that Vibe Coding is a powerful, viable pathway for designers to build the products they envision without relying solely on developer handoffs."
                            </p>

                            <div className="pt-4 border-t border-white/10">
                                <a
                                    href="https://animind-v2.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#e63946] text-sm font-bold uppercase tracking-widest hover:text-[#ff4d6d] transition-colors group w-fit"
                                >
                                    Check out the live site
                                    <ExternalLink className="w-4 h-4 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Interactive Demo Area */}
                <div className="sticky top-24 space-y-8">
                    {/* Spotlight Demo */}
                    <div>
                        <div className="relative mb-4">
                            <div className="absolute -top-4 -left-4 bg-[#121212] border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 z-20 shadow-xl">
                                <Code className="w-4 h-4 text-[#e63946]" />
                                <span className="text-xs text-white font-mono uppercase">Live Interaction Demo</span>
                            </div>
                        </div>

                        <div
                            ref={containerRef}
                            onMouseMove={handleMouseMove}
                            className="w-full aspect-square md:aspect-video bg-[#080808] rounded-xl border border-white/10 relative overflow-hidden group cursor-crosshair shadow-2xl"
                        >
                            {/* The Spotlight Effect */}
                            <div
                                className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                                style={{
                                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(230, 57, 70, 0.15), transparent 40%)`
                                }}
                            />

                            {/* Grid Pattern */}
                            <div className="absolute inset-0 opacity-20"
                                style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                            />

                            {/* Content to Reveal */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-8 border border-white/5 bg-[#050505]/80 backdrop-blur-md rounded-2xl max-w-xs">
                                    <div className="w-12 h-12 bg-[#e63946] rounded-full mx-auto mb-4 flex items-center justify-center shadow-[0_0_20px_#e63946]">
                                        <Play className="w-6 h-6 text-white ml-1" />
                                    </div>
                                    <h4 className="text-white font-bold mb-2">System Scan</h4>
                                    <p className="text-xs text-[#b0b0b0]">Hover to test the spotlight physics.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-[#b0b0b0] text-xs uppercase tracking-widest">Framer Motion • React • Tailwind</p>
                        </div>
                    </div>

                    {/* Antigravity Image */}
                    <div className="relative">
                        <div className="absolute -top-3 -right-3 bg-[#121212] border border-white/10 px-3 py-1 rounded-md flex items-center gap-2 z-20 shadow-xl">
                            <Terminal className="w-3 h-3 text-[#e63946]" />
                            <span className="text-[10px] text-white font-mono uppercase">Antigravity Editor</span>
                        </div>
                        <div className="bg-[#121212] p-1 rounded-xl border border-white/10 overflow-hidden">
                            <img src={imgAntigravity} alt="Google Antigravity Editor" loading="lazy" className="w-full h-auto rounded-lg opacity-90 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
