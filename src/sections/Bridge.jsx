import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';
import SectionHeader from '../components/SectionHeader';

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
        offset: ["start 0.9", "end 0.4"] // Start when top hits 90% of viewport, end when bottom hits 40%
    });

    const paragraphs = [
        "I design by understanding people first, whether that's through a deep-dive research session or a conversation over a meal I've just cooked. With a foundation in Psychology and an MSc in Usability Engineering, I look past the visual layer to solve for human behavior and system logic.",
        "I am a firm believer that the future of design is not found in static prototypes but in living, working applications. Currently at TeamViewer, I use mixed-method research and AI-driven insights to ensure our work leads to real product impact instead of just documentation.",
        "When I'm not at my desk, you'll likely find me traveling to gain new perspectives or cooking with the same trial and error logic I use in design. I'm an outgoing collaborator who believes the best products and the best stories are built together."
    ];

    const highlightWords = [
        "psychology", "usability", "engineering", "human", "behavior", "system",
        "logic", "deep-dive", "research", "teamviewer", "mixed-method",
        "ai-driven", "insights", "product", "impact", "design",
        "prototypes", "applications", "collaborator", "perspectives",
        "trial", "error"
    ];

    // Flatten all words to calculate their individual scroll ranges
    const allWords = useMemo(() => {
        return paragraphs.flatMap(p => p.split(" "));
    }, [paragraphs]);
    // Fade out everything at the very end to prevent overlap with the next section
    const contentOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);

    let wordCounter = 0;

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative min-h-[400vh] bg-[#0a0a0a]"
        >
            {/* Scrollytelling Text Container */}
            <motion.div
                style={{ opacity: contentOpacity }}
                className="sticky top-0 h-screen w-full flex flex-col items-center z-10"
            >
                <div className="w-full z-20">
                    <SectionHeader title="About me" />
                </div>

                <div className="flex-1 flex flex-col items-center justify-start -mt-[72px]">
                    <div className="max-w-4xl px-8 md:px-12 text-center pb-20">
                        <div className="text-base md:text-xl font-sans leading-[1.8] md:leading-[1.8] tracking-tight">
                            {paragraphs.map((p, pIdx) => (
                                <p key={pIdx} className="mb-8 md:mb-12 last:mb-0">
                                    {p.split(" ").map((word, i) => {
                                        const total = allWords.length;
                                        // Compress animation to finish early (at 75% scroll) 
                                        // so the last line stays visible for the final 25%
                                        const ANIMATION_END_LIMIT = 0.75;
                                        const start = (wordCounter / total) * ANIMATION_END_LIMIT;
                                        const end = start + (3 / total);

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
            </motion.div>
        </section>
    );
};

export default Bridge;
