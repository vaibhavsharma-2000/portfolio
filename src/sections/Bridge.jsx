import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';

const Word = ({ children, progress, range, isHighlight }) => {
    // Normalizing the range to allow for a smoother fade-in/out window
    // We want the word to start lighting up slightly before it hits the center
    const opacity = useTransform(progress, range, [0.2, 1]);
    const scale = useTransform(progress, range, [0.95, 1]);

    return (
        <span className="relative inline-block mx-[0.15em] my-[0.1em]">
            <motion.span
                style={{ opacity, scale }}
                className={`inline-block font-sans ${isHighlight ? 'text-[#FFC107] font-bold' : 'text-white/90 font-medium'}`}
            >
                {children}
            </motion.span>


        </span>
    );
};

const Bridge = () => {
    const containerRef = useRef(null);

    // Total scroll progress for the section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.5"] // Reveal triggers much earlier (when top hits bottom 20% of screen)
    });

    const paragraphs = [
        "I design by understanding people first. With a foundation in Psychology and an MSc in Usability Engineering, I approach problems through human behavior and system thinking.",
        "Currently working in UX Research at TeamViewer, I use mixed-method research and AI-driven insights to uncover real user needs.",
        "I collaborate closely with designers and engineers to ensure research leads to real product impact, not just documentation."
    ];

    const highlightWords = [
        "psychology", "usability", "engineering", "human", "behavior", "system",
        "thinking", "ux", "research", "teamviewer", "mixed-method",
        "ai-driven", "insights", "real", "user", "needs", "product", "impact"
    ];

    // Flatten all words to calculate their individual scroll ranges
    const allWords = useMemo(() => {
        return paragraphs.flatMap(p => p.split(" "));
    }, [paragraphs]);

    let wordCounter = 0;

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative min-h-[300vh] bg-[#0a0a0a]"
        >
            {/* PHILOSOPHY Watermark Background */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-0">
                <motion.h2
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.02, 0.08, 0.02]),
                        scale: useTransform(scrollYProgress, [0, 1], [0.9, 1.1]),
                        y: useTransform(scrollYProgress, [0, 1], [50, -50])
                    }}
                    className="text-[18vw] font-serif font-black uppercase text-white/50 tracking-tight leading-none pointer-events-none select-none"
                >
                    Philosophy
                </motion.h2>
            </div>

            {/* Scrollytelling Text Container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center z-10">
                <div className="max-w-4xl px-8 md:px-12 text-center py-40">
                    <div className="text-base md:text-xl font-sans leading-[1.8] md:leading-[1.8] tracking-tight">
                        {paragraphs.map((p, pIdx) => (
                            <p key={pIdx} className="mb-8 md:mb-12 last:mb-0">
                                {p.split(" ").map((word, i) => {
                                    const total = allWords.length;
                                    // Compress animation to finish early (at 80% scroll) 
                                    // so the last line stays visible for the final 20%
                                    const ANIMATION_END_LIMIT = 0.8;
                                    const start = (wordCounter / total) * ANIMATION_END_LIMIT;
                                    const end = start + (1.5 / total);

                                    const cleanWord = word.toLocaleLowerCase().replace(/[.,]/g, "");
                                    const isHighlight = highlightWords.includes(cleanWord);

                                    wordCounter++;

                                    return (
                                        <Word
                                            key={`${pIdx}-${i}`}
                                            progress={scrollYProgress}
                                            range={[start, end]}
                                            isHighlight={isHighlight}
                                        >
                                            {word}
                                        </Word>
                                    );
                                })}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bridge;
