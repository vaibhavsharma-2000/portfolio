import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const toolkitData = [
    {
        category: 'Frameworks & Tests',
        icon: '📐',
        items: ['UEQ+', 'SUS', 'Mixed-Format Surveys', 'JTBD', 'ODI', "Nielsen's Heuristics"],
    },
    {
        category: 'Research Ops',
        icon: '🤖',
        items: ['AI Prompt Engineering', 'Data Pipeline Automation', 'Centralized Knowledge Management'],
    },
    {
        category: 'Execution',
        icon: '⚙️',
        items: ['Usability Testing', 'Prototyping Evaluation', 'Problem-Solution Matrices'],
    },
];

const meta = [
    { label: 'Role',      value: 'UX Research\nIntern' },
    { label: 'Timeline',  value: 'Sept 2025 –\nFeb 2026' },
    { label: 'Company',   value: 'TeamViewer\nGmbH' },
    { label: 'Duration',  value: '6 Months\nFull-Time' },
];

export function Hero() {
    const sectionRef = useRef(null);

    // Mouse-follow hero glow
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const move = (e) => {
            const rect = el.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            el.style.setProperty('--mouse-x', `${x}%`);
            el.style.setProperty('--mouse-y', `${y}%`);
        };
        el.addEventListener('mousemove', move);
        return () => el.removeEventListener('mousemove', move);
    }, []);

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
    };
    const itemVariants = {
        hidden:  { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden"
        >
            {/* Mouse-follow glow overlay */}
            <div className="hero-glow absolute inset-0 z-0" />

            {/* Static corner glows */}
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#4361EE]/10 blur-[180px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-[#060451]/60 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full z-10 pt-28 pb-16">

                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#4361EE] font-bold tracking-[0.35em] uppercase text-xs md:text-sm mb-6 flex items-center gap-3"
                >
                    <span className="inline-block w-8 h-[1px] bg-[#4361EE]" />
                    UX Research Internship · TeamViewer GmbH
                </motion.p>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="font-serif text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tight mb-10"
                >
                    Team<span className="text-[#4361EE]">Viewer</span>
                </motion.h1>

                {/* Metadata row */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8 mb-16"
                >
                    {meta.map(({ label, value }) => (
                        <motion.div key={label} variants={itemVariants}>
                            <p className="text-[#4361EE]/80 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">{label}</p>
                            {value.split('\n').map((line, i) => (
                                <p key={i} className="text-white/70 text-sm tracking-wide">{line}</p>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── UX Toolkit ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase">UX Toolkit</span>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                    </div>

                    <div className="space-y-6">
                        {toolkitData.map((group, gi) => (
                            <motion.div
                                key={gi}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.65 + gi * 0.12, duration: 0.5 }}
                                className="flex flex-col sm:flex-row sm:items-start gap-3"
                            >
                                {/* Category label */}
                                <div className="flex items-center gap-2 sm:min-w-[210px] md:min-w-[240px]">
                                    <span className="text-xl md:text-2xl">{group.icon}</span>
                                    <span className="text-[#4361EE] text-base md:text-lg font-bold tracking-wide">
                                        {group.category}
                                    </span>
                                </div>

                                {/* Pills */}
                                <div className="flex flex-wrap gap-2.5">
                                    {group.items.map((item, ii) => (
                                        <motion.span
                                            key={ii}
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.7 + gi * 0.1 + ii * 0.04 }}
                                            className="toolkit-pill px-5 py-2.5 text-sm md:text-base font-medium text-white/75 border border-white/10 rounded-full bg-white/[0.04] cursor-default"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
