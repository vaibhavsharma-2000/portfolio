import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const experiments = [
    {
        id: 1,
        title: "AI Research Agent",
        category: "Intelligence",
        description: "Democratizing insights at TeamViewer with autonomous logic.",
        type: "code",
        codeSnippet: "> Initiating Neural Link...\n> Analyzing User Patterns...\n> Insight: 98% Correlation Found.\n> Optimization Complete."
    },
    {
        id: 2,
        title: "React Animation Lib",
        category: "Visuals",
        description: "Custom micro-interaction hooks for delight.",
        type: "animation"
    },
    {
        id: 3,
        title: "Psych Data Visualizer",
        category: "Data",
        description: "SPSS/Jamovi logic ported to the browser.",
        type: "chart"
    }
];

const TypingEffect = ({ text }) => {
    return (
        <div className="font-mono text-xs text-brand/80 leading-relaxed p-4">
            {text.split('\n').map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.4, duration: 0.3 }}
                >
                    {line}
                </motion.div>
            ))}
        </div>
    );
};

const BouncingShape = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <motion.div
                className="w-12 h-12 bg-brand rounded-xl"
                animate={{
                    y: [-20, 20, -20],
                    rotate: [0, 180, 360],
                    borderRadius: ["20%", "50%", "20%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity
                }}
            />
        </div>
    );
};

const LiveChart = () => {
    return (
        <div className="flex items-end justify-center gap-2 h-full pb-8 px-4">
            {[1, 2, 3, 4, 5].map((bar) => (
                <motion.div
                    key={bar}
                    className="w-4 bg-brand/80 rounded-t-sm"
                    animate={{
                        height: [20 + Math.random() * 20, 80 + Math.random() * 20, 40 + Math.random() * 20]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: bar * 0.1
                    }}
                />
            ))}
        </div>
    );
};

const ExperimentCard = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative min-w-[300px] md:min-w-[350px] h-[400px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden cursor-pointer group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -10 }}
        >
            {/* Visual Header */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-dark/50 backdrop-blur-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Default State Icon/Placeholder */}
                <div className="text-6xl font-serif text-white/10 font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    {data.id < 10 ? `0${data.id}` : data.id}
                </div>

                {/* Hover Interaction Layer */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {isHovered && data.type === 'code' && <TypingEffect text={data.codeSnippet} />}
                    {isHovered && data.type === 'animation' && <BouncingShape />}
                    {isHovered && data.type === 'chart' && <LiveChart />}
                </div>
            </div>

            {/* Content Body */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 p-8 flex flex-col justify-end">
                <div className="mb-auto">
                    <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-brand mb-4">
                        {data.category}
                    </span>
                </div>

                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-brand transition-colors">
                    {data.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                    {data.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 group-hover:text-white transition-colors">
                    <span>Explore Experiment</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                        <path d="M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 1L11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
};

const TheLab = () => {
    const carouselRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    return (
        <section className="bg-dark pb-32 overflow-hidden">
            <div className="pl-6 md:pl-[max(10vw,2rem)]">
                <motion.div
                    ref={carouselRef}
                    className="cursor-grab active:cursor-grabbing overflow-hidden"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-8"
                    >
                        {experiments.map((exp) => (
                            <ExperimentCard key={exp.id} data={exp} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TheLab;
