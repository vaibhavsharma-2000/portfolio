import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const experiences = [
    {
        id: 6,
        type: "work",
        role: "Working Student – UX Design",
        org: "PwC Deutschland",
        date: "2026 – Present",
        period: "04/2026 – Present",
        year: "2026",
        location: "Stuttgart",
        highlights: [
            "Supporting the Internal Firm Services (IFS) team in researching, designing, and improving internal applications used across the company.",
            "Collaborating with development teams and cross-functional departments to contribute UX research and design thinking to ongoing product improvement efforts.",
            "Assisting in exploring how AI can be integrated into internal UX and design workflows."
        ],
        tags: ["UX Design", "UX Research", "AI", "Internal Tools", "Cross-functional"]
    },
    {
        id: 1,
        type: "work",
        role: "UX Research Intern",
        org: "TeamViewer GmbH",
        date: "2025 – 2026",
        period: "09/2025 – 02/2026",
        year: "2025",
        highlights: [
            "Spearheaded AI integration and engineered a centralized AI Research Agent using historical data.",
            "Strategically redesigned the internal User Focus Program to enhance engagement.",
            "Executed mixed-method research (SUS, UEQ, Heuristic) to drive product decisions.",
            "Synthesized findings into actionable solutions for product teams.",
            "Managed and optimized the centralized UX knowledge repository by creating an UX Research department AI Agent."
        ],
        tags: ["AI", "UX Research", "Mixed Methods", "HCI", "Product Strategy"]
    },
    {
        id: 2,
        type: "education",
        role: "MSc. Usability Engineering",
        org: "Rhine-Waal University",
        date: "2023 – Present",
        period: "09/2023 – Present",
        year: "2023",
        context: "GPA 1.5",
        highlights: [
            "Focus: Human-centered design processes and UI/UX best practices.",
            "Specialization in HCI & Emerging Trends including AI and AR/VR technologies.",
            "UX Strategy & Project Management: Agile, design sprints, cross-functional collaboration."
        ],
        tags: ["HCI", "Usability Engineering", "AI", "Agile", "AR/VR"]
    },
    {
        id: 3,
        type: "work",
        role: "UI/UX Design Intern",
        org: "eCommerce Simple",
        date: "2022 – 2023",
        period: "08/2022 – 04/2023",
        year: "2022",
        highlights: [
            "Designed high-conversion landing pages and responsive email templates.",
            "Created detailed wireframes and prototypes to streamline development.",
            "Collaborated closely with marketing and dev teams to ensure design consistency."
        ],
        tags: ["UI/UX", "Figma", "Web Design", "Prototyping", "Branding"]
    },
    {
        id: 5,
        type: "work",
        role: "Psychology Intern",
        org: "IPAC",
        date: "2022 – 2022",
        period: "07/2022 – 08/2022",
        year: "2022",
        highlights: [
            "Administered Psychological Assessments",
            "Learned Cognitive Behavior Therapy",
            "Created content for social media platforms"
        ],
        tags: ["Psychology", "Assessments", "CBT", "Social Media"]
    },
    {
        id: 4,
        type: "education",
        role: "BA Psychology (Honors)",
        org: "University of Delhi",
        date: "2020 – 2023",
        period: "2020 – 2023",
        year: "2020",
        context: "GPA 8.02",
        highlights: [
            "Published research: 'Does social networking usage impact body self-image in late adolescents?'.",
            "Gained strong foundation in qualitative & quantitative research methods, statistics, and data analysis."
        ],
        tags: ["Psychology", "Statistics", "Data Analysis", "Research Methods"]
    }
];

const colorConfig = {
    work: {
        accent: '#ffc107',
        bgGlow: 'rgba(255, 193, 7, 0.05)',
        label: 'Work',
        icon: Briefcase
    },
    education: {
        accent: '#38bdf8',
        bgGlow: 'rgba(56, 189, 248, 0.05)',
        label: 'Education',
        icon: GraduationCap
    }
};

const ExperienceCard = ({ exp }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { margin: "-40% 0px -40% 0px" });
    const config = colorConfig[exp.type];

    return (
        <motion.div
            ref={cardRef}
            layout
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`relative pl-6 md:pl-10 py-10 md:py-8 border-l-2 transition-all duration-700 group ${isInView ? 'border-primary' : 'border-neutral-800'
                }`}
            style={{
                borderColor: isInView ? config.accent : undefined
            }}
        >
            {/* Ambient Glow */}
            <AnimatePresence>
                {isInView && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute -left-12 top-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none z-0"
                        style={{ background: config.bgGlow }}
                    />
                )}
            </AnimatePresence>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <p className="font-mono text-xs md:text-sm uppercase tracking-widest flex items-center gap-2 transition-colors duration-500"
                        style={{ color: isInView ? config.accent : '#71717A' }}>
                        {isInView && <motion.span
                            layoutId={`dot-${exp.id}`}
                            className="w-2 h-2 rounded-full bg-primary animate-pulse"
                            style={{ background: config.accent }} />}
                        {exp.period}
                    </p>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-tighter"
                        style={{
                            background: `${config.accent}15`,
                            border: `1px solid ${config.accent}30`,
                            color: config.accent
                        }}>
                        {config.label}
                    </span>
                </div>

                <h3 className={`font-serif text-xl md:text-3xl font-medium mb-2 tracking-tight transition-colors duration-500 ${isInView ? 'text-white' : 'text-neutral-600'
                    }`}>
                    {exp.role}
                </h3>
                <h4 className={`text-sm md:text-base mb-6 font-sans font-normal transition-colors duration-500 ${isInView ? 'text-neutral-400' : 'text-neutral-700'
                    }`}>
                    {exp.org}{exp.location && <span className="text-neutral-500 ml-1"> · {exp.location}</span>}{exp.context && <span className="text-neutral-500 ml-1">· {exp.context}</span>}
                </h4>

                <div className={`space-y-4 mb-8 max-w-2xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-2'}`}>
                    {exp.highlights.map((point, i) => (
                        <p key={i} className="text-neutral-400 text-sm md:text-lg leading-relaxed flex items-start gap-4">
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500" style={{ background: isInView ? config.accent : '#404040' }} />
                            {point}
                        </p>
                    ))}
                </div>

                <div className={`flex flex-wrap gap-2 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-20'}`}>
                    {exp.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs text-neutral-400 font-mono hover:border-primary/50 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Journey = () => {
    const [filter, setFilter] = useState('all');
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const filteredExperiences = experiences.filter(exp => {
        if (filter === 'all') return true;
        if (filter === 'current') return exp.period.toLowerCase().includes('present');
        return exp.type === filter;
    });

    const scrollToCard = (id) => {
        const element = document.getElementById(`exp-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <section id="experience" ref={containerRef} className="relative bg-[#0a0a0a] pt-8 md:pt-12">
            <div className="max-w-6xl mx-auto px-6 pb-32 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">

                    {/* Left: Sticky Filter & Timeline */}
                    <div className="md:w-64 shrink-0">
                        <div className="md:sticky md:top-48 space-y-16">
                            {/* Filter Nav */}
                            <div className="space-y-6">
                                <p className="hidden md:block text-[10px] font-mono text-neutral-600 uppercase tracking-[0.2em] mb-4">
                                    Navigation / Filters
                                </p>
                                <nav className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                                    {['all', 'current', 'work', 'education'].map((f) => (
                                        <button
                                            key={f}
                                            onClick={() => {
                                                setFilter(f);
                                                setActiveIndex(0);
                                            }}
                                            className={`group relative flex items-center px-4 md:px-5 py-2.5 md:py-3 rounded-full text-left font-mono text-[10px] md:text-xs tracking-widest uppercase transition-all duration-500 whitespace-nowrap ${filter === f
                                                ? 'text-white'
                                                : 'text-neutral-500 hover:text-neutral-200'
                                                }`}
                                        >
                                            <span className="relative z-10 transition-colors duration-500">
                                                {f}
                                            </span>
                                            {filter === f && (
                                                <motion.div
                                                    layoutId="filter-pill"
                                                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                                />
                                            )}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Timeline Track (Visible on desktop) */}
                            <div className="hidden md:block relative h-64 w-full pl-6">
                                <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-neutral-800">
                                    <motion.div
                                        style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                                        className="w-full bg-primary/40 shadow-[0_0_15px_rgba(255,193,7,0.2)]"
                                    />
                                </div>
                                
                                {/* Mapping dots to filtered content */}
                                <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-between py-2 -translate-x-1/2">
                                    {filteredExperiences.map((exp, idx) => (
                                        <button
                                            key={`dot-${exp.id}`}
                                            onClick={() => scrollToCard(exp.id)}
                                            className="group relative cursor-pointer outline-none"
                                            aria-label={`Scroll to ${exp.role}`}
                                        >
                                            <motion.div
                                                animate={{
                                                    scale: activeIndex === idx ? 1.4 : 1,
                                                    backgroundColor: activeIndex === idx 
                                                        ? (exp.type === 'work' ? '#ffc107' : '#38bdf8')
                                                        : '#262626'
                                                }}
                                                className={`w-3.5 h-3.5 rounded-full border-[3px] border-[#0a0a0a] shadow-xl transition-colors duration-500`}
                                            />
                                            {/* Hover Tooltip */}
                                            <div className="absolute left-6 top-1/2 -translate-y-1/2 px-3 py-1 bg-white/5 border border-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                <p className="text-[10px] font-mono text-neutral-300 uppercase tracking-tighter">
                                                    {exp.date}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Scrolling Experience List */}
                    <div className="flex-1 md:pt-0 pt-8">
                        <div className="flex flex-col gap-24 md:gap-48">
                            <AnimatePresence mode="popLayout">
                                {filteredExperiences.length > 0 ? (
                                    filteredExperiences.map((exp, idx) => (
                                        <CardObserver key={exp.id} onEnter={() => setActiveIndex(idx)}>
                                            <div id={`exp-${exp.id}`} className="md:px-0">
                                                <ExperienceCard exp={exp} />
                                            </div>
                                        </CardObserver>
                                    ))
                                ) : (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-neutral-500 font-mono text-center pt-20"
                                    >
                                        No recent items found in this category.
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Simple intermediate component to observe active card
const CardObserver = ({ children, onEnter }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

    useEffect(() => {
        if (isInView) {
            onEnter();
        }
    }, [isInView, onEnter]);

    return <div ref={ref}>{children}</div>;
};

export default Journey;
