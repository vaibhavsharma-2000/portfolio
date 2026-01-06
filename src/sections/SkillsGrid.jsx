import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Search, Layers, Brain, Code2, Compass, Languages, Wrench } from 'lucide-react';

const Highlight = ({ children, color }) => (
    <span style={{ color: color, filter: 'brightness(1.5)', fontWeight: 600 }}>
        {children}
    </span>
);

const SkillCard = ({ title, subtitle, size, color, icon: Icon, index }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    // 3D Tilt - subtly rotates based on mouse position relative to center
    // Max 5 degrees as requested
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = ({ clientX, clientY }) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        // Calculate mouse position relative to card center (normalized -0.5 to 0.5)
        const mouseXRel = (clientX - rect.left) / width - 0.5;
        const mouseYRel = (clientY - rect.top) / height - 0.5;

        x.set(mouseXRel);
        y.set(mouseYRel);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Spotlight Gradient following mouse
    const spotlightLeft = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const spotlightTop = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
            }}
            className={`${size} relative group rounded-3xl z-0 transform-gpu cursor-default`}
        >
            {/* Glassmorphism Container */}
            <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">

                {/* Grain Texture Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none z-10"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E")' }}
                />

                {/* Spotlight Effect on Border */}
                <motion.div
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                300px circle at ${spotlightLeft} ${spotlightTop}, 
                                ${color}40, 
                                transparent 80%
                            )
                        `,
                    }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none mix-blend-overlay"
                />

                {/* Inner Content */}
                <div className="relative h-full w-full p-8 flex flex-col justify-end z-30">

                    {/* Background Icon - Subtle */}
                    <Icon
                        className="absolute top-8 right-8 text-white opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform"
                        size={120}
                        strokeWidth={1}
                        style={{ color: color }}
                    />

                    {/* Content */}
                    <div className="relative">
                        <motion.h3
                            className="text-3xl font-serif font-bold text-white mb-4 leading-tight tracking-wide"
                            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                        >
                            {title}
                        </motion.h3>
                        <p className="text-white/70 text-sm font-sans leading-relaxed tracking-wide">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SkillsGrid = () => {
    // Desaturated Jewel Tones as requested
    const colors = {
        gold: "#C5A059",
        teal: "#1D5D63",
        purple: "#6D5A7B",
        ruby: "#8A4B54",
        sapphire: "#3E5F76",
        silver: "#A3A3A3",
    };

    const cards = [
        {
            title: "User Research",
            subtitle: <>Methods include <Highlight color={colors.gold}>SUS</Highlight>, <Highlight color={colors.gold}>UEQ</Highlight>, <Highlight color={colors.gold}>JTBD</Highlight>, and deep-dive user interviews to uncover core needs.</>,
            size: "md:col-span-2 md:row-span-2 min-h-[350px]",
            color: colors.gold,
            icon: Search
        },
        {
            title: "UI/UX Design",
            subtitle: <>Crafting systems in <Highlight color={colors.ruby}>Figma</Highlight> and building high-fidelity prototypes in <Highlight color={colors.ruby}>Framer</Highlight>.</>,
            size: "md:col-span-1 md:row-span-1 min-h-[200px]",
            color: colors.ruby,
            icon: Layers
        },
        {
            title: "Front-end",
            subtitle: <>Bringing designs to life with <Highlight color={colors.teal}>React</Highlight>, <Highlight color={colors.teal}>Tailwind</Highlight>, and <Highlight color={colors.teal}>Framer Motion</Highlight>.</>,
            size: "md:col-span-1 md:row-span-2 min-h-[350px]",
            color: colors.teal,
            icon: Code2
        },
        {
            title: "Psychology & Data",
            subtitle: <>Analyzing behavior with <Highlight color={colors.purple}>SPSS</Highlight> and <Highlight color={colors.purple}>Jamovi</Highlight> to back decisions with data.</>,
            size: "md:col-span-1 md:row-span-1 min-h-[200px]",
            color: colors.purple,
            icon: Brain
        },
        {
            title: "Strategy",
            subtitle: <>Leading agile workflows using <Highlight color={colors.sapphire}>Jira</Highlight>, Miro, and Notion.</>,
            size: "md:col-span-1 md:row-span-1 min-h-[200px]",
            color: colors.sapphire,
            icon: Compass
        },
        {
            title: "Creative Tools",
            subtitle: <>Proficient in Adobe Creative Suite, Canva, and leveraging Generative AI for rapid ideation.</>,
            size: "md:col-span-2 md:row-span-1 min-h-[200px]",
            color: colors.silver,
            icon: Wrench
        },
        {
            title: "Languages",
            subtitle: <>Hindi (Native) • <Highlight color={colors.gold}>English (Fluent)</Highlight> • German (B1)</>,
            size: "md:col-span-1 md:row-span-1 min-h-[200px]",
            color: "#ae4141",
            icon: Languages
        },
    ];

    return (
        <section className="bg-[#0a0a0a] pb-32 px-6 max-w-7xl mx-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto"
            >
                {cards.map((card, index) => (
                    <SkillCard key={index} index={index} {...card} />
                ))}
            </motion.div>
        </section>
    );
};

export default SkillsGrid;