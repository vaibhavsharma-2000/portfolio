import { useRef, useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Import local assets
import animindImg from "../assets/Animind.png"; // Import Animind
import brewQuestImg from "../assets/Brew-Quest-Light.png";
import recypeImg from "../assets/RecyPeCase-study.png";
import bahnAssistImg from "../assets/BahnAssist-Case-study.png";

const projects = [
    {
        id: 4,
        title: "ANIMIND",
        description: "A social sanctuary to catalog, review, and curate your personal anime odyssey.",
        visual: animindImg,
        color: "#ba0000", // White accent
        link: "#",
        tags: ['UX Design', 'Front-end', 'UI Design']
    },
    {
        id: 1,
        title: "BREWQUEST",
        description: "25+ Interviews bridging the homebrewing community.",
        visual: brewQuestImg,
        color: "#FFC107", // Misted Marigold
        link: "#",
        tags: ['UX Research', 'UX Design', 'Figma']
    },
    {
        id: 2,
        title: "RECY-PE",
        description: "AI algorithms optimizing recycled material sourcing.",
        visual: recypeImg,
        color: "#8076A3", // Purple Majesty
        link: "#",
        tags: ['UX Research', 'UI Design', 'Product Strategy']
    },
    {
        id: 3,
        title: "BAHNASSIST",
        description: "Predictive delay alerts for DB station operators.",
        visual: bahnAssistImg,
        color: "#EF4444", // DB Red
        link: "https://www.behance.net/gallery/208525545/DB-BahnAssist-(UX-Research-Wireframing-Prototyping)",
        isExternal: true,
        tags: ['UX Research', 'UI Design', 'Figma']
    },
    // {
    //   id: 5,
    //   title: "NEW PROJECT",
    //   description: "Description of the new project.",
    //   visual: bahnAssistImg, // Replace with new image import
    //   color: "#3B82F6", // Custom accent color
    //   link: "#",
    //   tags: ['Tag 1', 'Tag 2']
    // },
];

const HorizontalCard = ({ project, index, scrollYProgress }) => {
    // Mapping logic:
    // We have 3 cards.
    // Card 1 is "Active" at start (0 - 0.2)
    // Card 2 is "Active" around middle (0.4 - 0.6)
    // Card 3 is "Active" at end (0.8 - 1.0)

    // Create ranges based on index
    // Total scroll 0..1
    // Step per card approx 0.33
    // Card 0 peak: 0.1
    // Card 1 peak: 0.5
    // Card 2 peak: 0.9

    // NOTE: If adding more cards, decrease this step size.
    // Formula: 1 / number_of_cards (approx)
    // e.g., for 4 cards, use 0.25
    const step = 0.25;
    const peak = 0.1 + (index * step);

    // Range for "Active Focus": [peak - 0.2, peak, peak + 0.2]
    // We clamp 0 and 1

    // FIX: Widen the focus window using a plateau so content stays clear longer.
    // Instead of a single peak, we have a range [plateauStart, plateauEnd] where values are optimal.
    const start = Math.max(0, peak - 0.35);
    const plateauStart = Math.max(0, peak - 0.15); // Stays clear from here...
    const plateauEnd = Math.min(1, peak + 0.15);   // ...to here
    const end = Math.min(1, peak + 0.35);

    const scale = useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], [0.85, 1.05, 1.05, 0.85]);
    const opacity = useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], [0.2, 1, 1, 0.2]);
    const blur = useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], ["10px", "0px", "0px", "10px"]); // Harder blur on edges, mostly clear in middle

    return (
        <motion.div
            style={{
                scale,
                opacity,
                filter: useTransform(blur, b => `blur(${b})`),
                zIndex: useTransform(scale, s => s > 1 ? 10 : 1) // Active on top
            }}
            className="w-[85vw] max-w-[600px] h-[60vh] shrink-0 p-4 md:p-0 flex items-center justify-center snap-center"
        >
            {/* Card Container */}
            <div className="w-full h-full relative rounded-[2rem] bg-[#1a1a1a] overflow-hidden border border-white/10 shadow-2xl">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src={project.visual}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-[#1a1a1a]/50 to-transparent" />
                </div>

                {/* Content */}
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">

                    {/* Tags Container - Moved to Top Right */}
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], [0, 1, 1, 0]),
                            y: useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], [-10, 0, 0, -10]) // Slide down into place
                        }}
                        className="absolute top-8 right-8 md:top-12 md:right-12 flex flex-row flex-wrap justify-end gap-2 max-w-[60%]"
                    >
                        {project.tags.map((tag, i) => (
                            <motion.span
                                key={i}
                                style={{
                                    color: useTransform(
                                        scrollYProgress,
                                        [start, plateauStart, plateauEnd, end],
                                        ["rgba(255,255,255,0.5)", project.color, project.color, "rgba(255,255,255,0.5)"]
                                    ),
                                    borderColor: useTransform(
                                        scrollYProgress,
                                        [start, plateauStart, plateauEnd, end],
                                        ["rgba(255,255,255,0.1)", project.color, project.color, "rgba(255,255,255,0.1)"]
                                    )
                                }}
                                className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] border rounded-lg bg-black/20 backdrop-blur-md"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-start"
                    >
                        <motion.span
                            style={{ color: project.color }}
                            className="text-xs font-bold tracking-widest uppercase mb-4"
                        >
                            Project 0{index + 1}
                        </motion.span>

                        <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                            {project.title}
                        </h3>
                    </motion.div>

                    <p className="text-white/70 text-base md:text-lg mb-8 max-w-md line-clamp-3">
                        {project.description}
                    </p>

                    <div className="flex gap-4">
                        <motion.a
                            href={project.link}
                            target={project.isExternal ? "_blank" : undefined}
                            rel={project.isExternal ? "noopener noreferrer" : undefined}
                            initial={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            whileHover={{
                                backgroundColor: `${project.color}40`, // ~25% opacity of project color
                                borderColor: project.color,
                                scale: 1.05
                            }}
                            transition={{ duration: 0.3 }}
                            style={{ borderColor: "rgba(255,255,255,0.1)" }}
                            className="group flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border text-white text-sm font-bold tracking-widest uppercase"
                        >
                            View Project
                            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </motion.a>
                    </div>
                </div>

                {/* Subtle Glow */}
                <div
                    className="absolute inset-0 -z-10 pointer-events-none opacity-30 mix-blend-screen bg-gradient-to-tr from-transparent"
                    style={{
                        backgroundImage: `radial-gradient(circle at bottom right, ${project.color}, transparent 60%)`
                    }}
                />
            </div>
        </motion.div>
    );
};

import SectionHeader from "../components/SectionHeader"; // Import SectionHeader

export default function WorkCarousel() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Total horizontal scroll distance
    // We want to move from 0% to approximately -(TotalWidth - ViewportWidth)
    // 3 cards * 85vw + gaps
    // Let's approximate a smooth translation range

    // NOTE: If adding more cards, you need to adjust two things:
    // 1. The 'step' value in HorizontalCard component (approx 1 / number_of_cards)
    // 2. The destination value below ("-60%"). 
    //    - For 3 cards: -60%
    //    - For 4 cards: -80% (approx)
    //    - For 5 cards: -100% (approx)

    // FIX: Added buffers [0.1, 0.9] so the animation doesn't start/end immediately.
    // This prevents the "rushed" feel at the very top and bottom of the section.
    // 4 Cards -> Go to -80%
    const x = useTransform(scrollYProgress, [0.1, 0.9], ["10%", "-80%"]);
    // '10%' start gives a bit of padding before first card hits edge
    // '-60%' end ensures the last card (index 2) is fully centered/viewable by end

    const springX = useSpring(x, { stiffness: 50, damping: 20, mass: 0.5 });

    return (
        // FIX: Increased to 500vh to make the scroll slower and more deliberate
        <section id="work" ref={containerRef} className="h-[500vh] bg-[#0a0a0a] relative">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

                {/* Section Header - Natural Flow (No Overlap) */}
                <div className="w-full z-20 shrink-0 pt-10">
                    <SectionHeader title="Work and Projects" />
                </div>

                {/* Background Ambience */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-900/20 blur-[150px] rounded-full mix-blend-screen" />
                </div>

                {/* Horizontal Track - Fills remaining space and centers cards */}
                <motion.div
                    style={{ x: springX }}
                    className="flex-1 flex items-center gap-[5vw] px-[10vw] w-max"
                >
                    {projects.map((project, index) => (
                        <HorizontalCard
                            key={project.id}
                            project={project}
                            index={index}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
