import { motion } from 'framer-motion';
import { Zap, Palette, Code2, Rocket } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Marquee from '../components/Marquee';

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "Synthesizing market noise into sharp product strategies. I leverage AI to accelerate research, but human empathy and intuition drive the core insights.",
        icon: Zap,
        color: "#FFC107",
    },
    {
        number: "02",
        title: "Design",
        description: "Crafting bespoke interfaces where human creativity meets algorithmic speed. AI powers my rapid explorations, giving me the freedom to perfect every pixel.",
        icon: Palette,
        color: "#7B61FF",
    },
    {
        number: "03",
        title: "Build",
        description: "Translating sophisticated designs into flawless code. I orchestrate powerful AI agents to do the heavy lifting, delivering robust, production-ready architecture at startup speed.",
        icon: Code2,
        color: "#06B6D4",
    },
    {
        number: "04",
        title: "Launch",
        description: "Deployed, optimized, and live. Full websites and apps delivered in days, not months.",
        icon: Rocket,
        color: "#22C55E",
    },
];

const aiTools = [
    "Gemini", "Claude", "ChatGPT", "Higgsfield", "Antigravity", "Nano Banana", "Veo 3.1", "Figma Make",
    "Cursor", "Midjourney", "React", "Tailwind", "Framer Motion"
];

const StepCard = ({ step, index }) => {
    const Icon = step.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative group flex-1 min-w-[240px]"
        >
            <div className="relative h-full rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]">
                {/* Subtle glow on hover */}
                <div
                    className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at 50% 0%, ${step.color}15, transparent 70%)`
                    }}
                />

                {/* Step number */}
                <div className="relative z-10">
                    <span
                        className="text-5xl md:text-6xl font-serif font-bold opacity-10 group-hover:opacity-20 transition-opacity duration-500 absolute -top-2 -left-1"
                        style={{ color: step.color }}
                    >
                        {step.number}
                    </span>

                    <div className="pt-12 md:pt-14">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-110"
                            style={{
                                borderColor: `${step.color}30`,
                                background: `${step.color}10`,
                            }}
                        >
                            <Icon size={20} style={{ color: step.color }} />
                        </div>

                        <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3">
                            {step.title}
                        </h3>

                        <p className="text-white/50 text-sm md:text-base leading-relaxed font-sans">
                            {step.description}
                        </p>
                    </div>
                </div>

                {/* Connector line (hidden on last card and on mobile) */}
                {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-[1px] w-8 h-[1px] bg-gradient-to-r from-white/10 to-transparent translate-x-full z-20" />
                )}
            </div>
        </motion.div>
    );
};

const AIProcess = () => {
    return (
        <section id="ai-process" className="bg-[#0a0a0a] py-20 md:py-32 relative overflow-hidden">
            <div className="px-6 max-w-7xl mx-auto">
                <SectionHeader title="AI-Powered Rapid Development" />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white/50 text-center max-w-2xl mx-auto mt-4 mb-16 text-sm md:text-base"
                >
                    From concept to deployed product in days, not months. I leverage cutting-edge AI tools
                    to deliver production-quality websites and applications at startup speed.
                </motion.p>

                {/* Process Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
                    {steps.map((step, index) => (
                        <StepCard key={step.number} step={step} index={index} />
                    ))}
                </div>

                {/* AI Tools Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-center text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-4">
                        Powered by
                    </p>
                    <Marquee items={aiTools} speed={25} separator="✦" />
                </motion.div>
            </div>
        </section>
    );
};

export default AIProcess;
