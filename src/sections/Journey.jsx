import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
    {
        title: "UX Research Intern",
        org: "TeamViewer GmbH",
        date: "09/2025 – Present",
        desc: <>Spearheaded <span className="text-brand">AI integration</span> and engineered a centralized AI Research Agent using historical data.</>,
        skills: ["AI Integration", "JTBD", "Figma"]
    },
    {
        title: "MSc. Usability Engineering",
        org: "Rhine-Waal University",
        date: "09/2023 – Present",
        desc: "Focusing on HCI, emerging trends in AI/AR, and maintaining a 1.5 GPA.",
        skills: ["HCI", "Agile", "Testing"]
    },
    {
        title: "BA Psychology (Honors)",
        org: "University of Delhi",
        date: "2020 – 2023",
        desc: "Published research on social networking and self-image in late adolescents.",
        skills: ["Statistics", "SPSS", "Research"]
    }
];

const Journey = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <section ref={ref} className="py-32 px-6 bg-dark relative overflow-hidden">
            <div className="max-w-5xl mx-auto grid grid-cols-[100px_auto_1fr] gap-8 md:gap-12 relative">

                {/* Left Column: Progress Line & Sticky context (abstract representation) */}
                <div className="col-start-2 flex flex-col items-center relative">
                    <div className="w-[2px] h-full bg-white/10 absolute top-0 left-1/2 -translate-x-1/2">
                        <motion.div style={{ scaleY }} className="absolute top-0 w-full bg-brand origin-top shadow-[0_0_15px_#FFC107]" />
                    </div>
                </div>

                {/* Content Area */}
                <div className="col-start-3 flex flex-col gap-24 py-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative"
                        >
                            {/* Date moved to left of card for desktop, or visual indicator */}
                            <div className="md:absolute md:-left-[calc(100px+3rem)] md:top-8 md:w-[100px] md:text-right mb-4 md:mb-0">
                                <span className="text-brand font-sans text-sm font-bold tracking-widest block">{exp.date}</span>
                            </div>

                            {/* Card */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors duration-300">
                                <h3 className="text-3xl font-serif text-white">{exp.title}</h3>
                                <p className="text-sm font-sans text-neutral-400 mb-4">{exp.org}</p>
                                <p className="text-neutral-300 leading-relaxed font-sans">
                                    {exp.desc}
                                </p>
                                <div className="flex gap-2 mt-6 flex-wrap">
                                    {exp.skills.map(s => (
                                        <span key={s} className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider border ${s === 'JTBD' || s === 'AI Integration' ? 'bg-brand/10 border-brand text-brand' : 'bg-white/5 border-white/10 text-neutral-400'}`}>
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Dot on timeline */}
                            <div className="hidden md:block absolute top-10 -left-[calc(3rem+1px)] w-3 h-3 rounded-full bg-dark border-2 border-brand z-10 box-content" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;