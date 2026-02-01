import { motion } from "motion/react";
import { Section } from "./Section";
import { Globe, Eye, Instagram, HelpCircle } from "lucide-react";

export function ProblemSpace() {
    return (
        <Section className="relative bg-[#080808] border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                {/* Header */}
                <div className="md:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="sticky top-32"
                    >
                        <h2 className="text-[#e63946] text-sm font-bold tracking-widest uppercase mb-4">
                            01 — The Problem Space
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                            Escaping the Algorithmic Walled Garden
                        </h3>
                        <p className="text-[#b0b0b0] text-lg font-light leading-relaxed">
                            Why current discovery tools are biased and fragmented.
                        </p>
                    </motion.div>
                </div>

                {/* Content Cards */}
                <div className="md:col-span-7 space-y-8">
                    <ProblemCard
                        icon={<Globe className="w-6 h-6 text-[#e63946]" />}
                        title="The Platform Bias"
                        description="Streaming algorithms are designed to keep you inside their app. Netflix won't recommend a Crunchyroll exclusive, creating a 'Walled Garden.' Users need an unbiased, platform-agnostic guide that recommends the best content regardless of who owns the license."
                    />

                    <ProblemCard
                        icon={<Eye className="w-6 h-6 text-[#ff4d6d]" />}
                        title="Text Tags vs. Visual Vibes"
                        description="Rigid tags like 'Sci-Fi' fail to capture aesthetic atmosphere. A user looking for the gritty, hand-drawn look of Cowboy Bebop gets recommended the glossy 3D Trigun Stampede just because they share a tag. Text search lacks visual nuance."
                    />

                    <ProblemCard
                        icon={<Instagram className="w-6 h-6 text-[#e63946]" />}
                        title="The 'Instagram Reel' Gap"
                        description="Social media feeds users striking anime clips without context. Users find an art style they love but lack the vocabulary to search for it, leading to a discovery dead end."
                    />

                    <ProblemCard
                        icon={<HelpCircle className="w-6 h-6 text-white" />}
                        title="The Challenge (HMW)"
                        highlight
                        description="How might we create a centralized, unbiased discovery platform that breaks down streaming silos, while allowing users to discover content based on aesthetic preference rather than just text?"
                    />
                </div>
            </div>
        </Section>
    );
}

function ProblemCard({ icon, title, description, highlight = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl border ${highlight
                    ? "bg-[#121212] border-[#e63946]/30 shadow-[0_0_30px_rgba(230,57,70,0.1)]"
                    : "bg-[#0a0a0a] border-white/10"
                }`}
        >
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${highlight ? "bg-[#e63946]/10" : "bg-white/5"}`}>
                    {icon}
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
                    <p className="text-[#b0b0b0] font-light leading-relaxed">{description}</p>
                </div>
            </div>
        </motion.div>
    );
}
