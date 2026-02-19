import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < breakpoint);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, [breakpoint]);
    return isMobile;
};

const experiences = [
    {
        id: 1,
        type: "work",
        role: "UX Research Intern",
        org: "TeamViewer GmbH",
        date: "09/2025 – 02/2026",
        months: 6,
        highlights: [
            "Spearheaded AI integration and engineered a centralized AI Research Agent using historical data.",
            "Strategically redesigned the internal User Focus Program to enhance engagement.",
            "Executed mixed-method research (SUS, UEQ, Heuristic) to drive product decisions.",
            "Synthesized findings into actionable solutions for product teams.",
            "Managed and optimized the centralized UX knowledge repository by creating an UX Research department AI Agent."
        ]
    },
    {
        id: 2,
        type: "education",
        role: "MSc. Usability Engineering",
        org: "Rhine-Waal University",
        date: "09/2023 – Present",
        months: 29,
        context: "GPA 1.5",
        highlights: [
            "Focus: Human-centered design processes and UI/UX best practices.",
            "Specialization in HCI & Emerging Trends including AI and AR/VR technologies.",
            "UX Strategy & Project Management: Agile, design sprints, cross-functional collaboration."
        ]
    },
    {
        id: 3,
        type: "work",
        role: "UI/UX Design Intern",
        org: "eCommerce Simple",
        date: "08/2022 – 04/2023",
        months: 9,
        highlights: [
            "Designed high-conversion landing pages and responsive email templates.",
            "Created detailed wireframes and prototypes to streamline development.",
            "Collaborated closely with marketing and dev teams to ensure design consistency."
        ]
    },
    {
        id: 4,
        type: "education",
        role: "BA Psychology (Honors)",
        org: "University of Delhi",
        date: "2020 – 2023",
        months: 36,
        context: "GPA 8.02",
        highlights: [
            "Published research: 'Does social networking usage impact body self-image in late adolescents?'.",
            "Gained strong foundation in qualitative & quantitative research methods, statistics, and data analysis."
        ]
    },
    {
        id: 5,
        type: "work",
        role: "Psychology Intern",
        org: "IPAC",
        date: "07/2022 – 08/2022",
        months: 2,
        highlights: [
            "Administered Psychological Assessments",
            "Learned Cognitive Behavior Therapy",
            "Created content for social media platforms"
        ]
    }
];

// Proportional width: map months to a percentage of max container width
const maxMonths = Math.max(...experiences.map(e => e.months));

const colorConfig = {
    work: {
        accent: '#ffc107',
        bg: 'rgba(255, 193, 7, 0.08)',
        bgHover: 'rgba(255, 193, 7, 0.14)',
        border: 'rgba(255, 193, 7, 0.3)',
        borderHover: 'rgba(255, 193, 7, 0.6)',
        glow: 'rgba(255, 193, 7, 0.15)',
        label: 'Work',
    },
    education: {
        accent: '#38bdf8',
        bg: 'rgba(56, 189, 248, 0.08)',
        bgHover: 'rgba(56, 189, 248, 0.14)',
        border: 'rgba(56, 189, 248, 0.3)',
        borderHover: 'rgba(56, 189, 248, 0.6)',
        glow: 'rgba(56, 189, 248, 0.15)',
        label: 'Education',
    }
};

const Pill = ({ exp, index, totalCount }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isMobile = useIsMobile();
    const config = colorConfig[exp.type];
    const Icon = exp.type === 'work' ? Briefcase : GraduationCap;

    // Width: minimum 40%, max 100%, proportional to months (desktop only)
    const widthPercent = 40 + (exp.months / maxMonths) * 60;

    // Stagger offset: each pill shifts further right (desktop only)
    const staggerOffset = (index / (totalCount - 1)) * 100; // 0% to 100%

    const pillWidth = isMobile || isExpanded ? '100%' : `min(${widthPercent}%, 100%)`;

    return (
        <motion.div
            initial={{ opacity: 0, x: -60, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full"
            style={{
                paddingLeft: isMobile ? '0px' : `clamp(0px, ${staggerOffset * 0.5}%, 45%)`,
            }}
        >
            <motion.div
                onClick={() => setIsExpanded(!isExpanded)}
                className="relative cursor-pointer group"
                style={{
                    width: pillWidth,
                }}
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
                {/* Pill Container */}
                <motion.div
                    className="relative rounded-full overflow-hidden backdrop-blur-xl transition-all duration-500"
                    style={{
                        background: isExpanded ? config.bgHover : config.bg,
                        border: `1px solid ${isExpanded ? config.borderHover : config.border}`,
                        boxShadow: isExpanded
                            ? `0 0 40px ${config.glow}, 0 8px 32px rgba(0,0,0,0.3)`
                            : `0 4px 20px rgba(0,0,0,0.2)`,
                        borderRadius: isExpanded ? '24px' : '999px',
                    }}
                    layout
                >
                    {/* Main Pill Content - always visible */}
                    <div className="flex items-center gap-4 px-6 py-4 md:px-8 md:py-5">
                        {/* Icon Badge */}
                        <div
                            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                            style={{
                                background: `${config.accent}20`,
                                border: `1px solid ${config.accent}40`,
                            }}
                        >
                            <Icon size={18} style={{ color: config.accent }} />
                        </div>

                        {/* Role & Org */}
                        <div className="flex-1 min-w-0">
                            <h3
                                className={`text-white font-serif text-lg md:text-xl font-semibold leading-tight ${isExpanded ? 'whitespace-normal' : 'truncate'
                                    }`}
                                title={exp.role}
                            >
                                {exp.role}
                            </h3>
                            <p
                                className={`text-neutral-400 font-sans text-sm ${isExpanded ? 'whitespace-normal' : 'truncate'
                                    }`}
                                title={`${exp.org}${exp.context ? ` · ${exp.context}` : ''}`}
                            >
                                {exp.org}
                                {exp.context && <span className="text-neutral-500 ml-2">· {exp.context}</span>}
                            </p>
                        </div>

                        {/* Date - Desktop: two-line stacked, Mobile: compact inline */}
                        <div className="flex-shrink-0 text-right">
                            {/* Desktop format */}
                            <span
                                className="hidden sm:block text-sm font-sans font-bold tracking-wider"
                                style={{ color: config.accent }}
                            >
                                {exp.date.split(' – ')[0]}
                            </span>
                            <span className="hidden sm:block text-xs text-neutral-500 font-sans">
                                {exp.date.split(' – ')[1] || 'Present'}
                            </span>
                            {/* Mobile format - compact */}
                            <span
                                className="sm:hidden text-xs font-sans font-bold tracking-wider"
                                style={{ color: config.accent }}
                            >
                                {exp.date}
                            </span>
                        </div>

                        {/* Expand Indicator */}
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ color: config.accent }}
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 5 7 9 11 5" />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="overflow-hidden"
                            >
                                {/* Mobile date (visible on small screens when expanded) */}
                                <div className="sm:hidden px-8 pb-2">
                                    <span
                                        className="text-sm font-sans font-bold tracking-wider"
                                        style={{ color: config.accent }}
                                    >
                                        {exp.date}
                                    </span>
                                </div>

                                <ul className="px-8 pb-6 space-y-3 border-t border-white/10 pt-4 mx-4">
                                    {exp.highlights.map((point, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.08, duration: 0.3 }}
                                            className="flex items-start gap-3 text-neutral-300 font-sans leading-relaxed text-sm"
                                        >
                                            <span
                                                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                style={{ background: config.accent }}
                                            />
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Journey = () => {
    return (
        <section className="py-16 md:py-24 bg-dark relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                {/* Legend */}
                <div className="flex items-center gap-6 mb-12 md:mb-16">
                    {Object.entries(colorConfig).map(([type, config]) => (
                        <div key={type} className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ background: config.accent }}
                            />
                            <span className="text-sm font-sans text-neutral-400 tracking-wide">
                                {config.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Staggered Pills */}
                <div className="flex flex-col gap-5 md:gap-6">
                    {experiences.map((exp, index) => (
                        <Pill
                            key={exp.id}
                            exp={exp}
                            index={index}
                            totalCount={experiences.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
