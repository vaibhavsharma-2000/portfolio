import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const experiences = [
    {
        id: 1,
        role: "UX Research Intern",
        org: "TeamViewer GmbH",
        date: "09/2025 – Present",
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
        role: "MSc. Usability Engineering",
        org: "Rhine-Waal University",
        date: "09/2023 – Present",
        context: "GPA 1.5",
        highlights: [
            "Focus: Human-centered design processes and UI/UX best practices.",
            "Specialization in HCI & Emerging Trends including AI and AR/VR technologies.",
            "UX Strategy & Project Management: Agile, design sprints, cross-functional collaboration."
        ]
    },
    {
        id: 3,
        role: "UI/UX Design Intern",
        org: "eCommerce Simple",
        date: "08/2022 – 04/2023",
        highlights: [
            "Designed high-conversion landing pages and responsive email templates.",
            "Created detailed wireframes and prototypes to streamline development.",
            "Collaborated closely with marketing and dev teams to ensure design consistency."
        ]
    },
    {
        id: 4,
        role: "BA Psychology (Honors)",
        org: "University of Delhi",
        date: "2020 – 2023",
        context: "GPA 8.02",
        highlights: [
            "Published research: 'Does social networking usage impact body self-image in late adolescents?'.",
            "Gained strong foundation in qualitative & quantitative research methods, statistics, and data analysis."
        ]
    },
    {
        id: 5,
        role: "Psychology Intern",
        org: "IPAC- Institute of Psychometric Assessment and Counseling",
        date: "07/2022 – 08/2022",
        highlights: [
            "Administered Psychological Assessments",
            "Learned Cognitive Behavior Therapy",
            "Created content for social media platforms"
        ]
    }
];

const ExperienceCard = ({ exp, isInView }) => {
    return (
        <motion.div
            animate={{
                opacity: isInView ? 1 : 0.3,
                scale: isInView ? 1 : 0.95,
                filter: isInView ? "blur(0px)" : "blur(2px)"
            }}
            transition={{ duration: 0.5 }}
            className={`relative p-8 rounded-3xl border transition-colors duration-500
                ${isInView ? 'bg-white/10 border-brand/50 shadow-[0_0_30px_rgba(255,193,7,0.1)]' : 'bg-white/5 border-white/10'}
                backdrop-blur-xl w-full max-w-2xl mx-auto`}
        >
            {/* Header */}
            <div className="flex flex-col mb-4 gap-1">
                <h3 className="text-2xl md:text-3xl font-serif text-white">{exp.role}</h3>
                <p className="text-brand font-sans font-medium">{exp.org}</p>
                {exp.context && <span className="block text-xs text-neutral-500 font-sans mt-1">{exp.context}</span>}
            </div>

            {/* Expandable Content - Always rendered to prevent scroll jank */}
            <div className="overflow-hidden">
                <ul className="space-y-3 pt-4 border-t border-white/10">
                    {exp.highlights.map((point, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                            className="flex items-start gap-3 text-neutral-300 font-sans leading-relaxed text-sm md:text-base"
                        >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                            {point}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Journey = () => {
    return (
        <section className="py-20 bg-dark relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-8">

                {/* Spacing Column (Line removed) */}
                <div className="relative pointer-events-none" />

                {/* Scrollable Cards */}
                <div className="flex flex-col gap-24 py-10">
                    {experiences.map((exp) => {
                        const cardRef = useRef(null);
                        const isInView = useInView(cardRef, { amount: 0.6, margin: "-10% 0px -10% 0px" });

                        return (
                            <div key={exp.id} className="relative min-h-[40vh] flex items-center">
                                {/* Date (Absolute positioned relative to the row) */}
                                <div className={`absolute -left-[calc(80px+2rem)] md:-left-[calc(120px+2rem)] w-[80px] md:w-[120px] text-right pr-6 transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-30'}`}>
                                    <span className="text-sm md:text-base font-sans font-bold text-white tracking-wider block">{exp.date.split(' – ')[0]}</span>
                                    <span className="text-xs text-neutral-500 font-sans block">{exp.date.split(' – ')[1] || 'Present'}</span>
                                </div>

                                {/* Milestone Dot indicator */}
                                <div className={`absolute -left-[calc(2rem-1px)] md:-left-[calc(2rem-1px)] w-3 h-3 rounded-full border-2 transition-all duration-500 z-10 bg-dark ${isInView ? 'border-brand scale-125 shadow-[0_0_10px_#FFC107]' : 'border-white/20'}`} />

                                <div ref={cardRef} className="w-full">
                                    <ExperienceCard exp={exp} isInView={isInView} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Journey;