import { motion } from "motion/react";
import { Section } from "./Section";
import { Brain, LayoutTemplate, PenTool, Code2 } from "lucide-react";

export function Process() {
    const steps = [
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Strategy",
            tool: "Gemini",
            desc: "Ideation & Logic"
        },
        {
            icon: <LayoutTemplate className="w-6 h-6" />,
            title: "Wireframing",
            tool: "Google Stitch",
            desc: "Rapid Layouts"
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            title: "Refinement",
            tool: "Figma",
            desc: "Design System"
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Prototyping",
            tool: "React",
            desc: "Validating Data"
        }
    ];

    return (
        <Section className="bg-[#080808] border-y border-white/5">
            <div className="text-center mb-16">
                <h2 className="text-[#e63946] text-sm font-bold tracking-widest uppercase mb-4">
                    03 — The "Cyborg" Workflow
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    From Blank Canvas to High-Fidelity in 7 Days
                </h3>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#333] to-transparent -translate-y-1/2 z-0" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#121212] border border-white/5 p-6 rounded-xl flex flex-col items-center text-center hover:border-[#e63946]/50 transition-all hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white mb-4 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                {step.icon}
                            </div>
                            <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                            <div className="text-[#e63946] font-mono text-xs uppercase tracking-wide mb-2">
                                {step.tool}
                            </div>
                            <p className="text-[#b0b0b0] text-sm font-light">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
