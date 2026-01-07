import { useRef, useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

// Import local assets
import animindImg from "../assets/Animind.png";
import brewQuestImg from "../assets/Brew-Quest-Light.png";
import recypeImg from "../assets/RecyPeCase-study.png";
import bahnAssistImg from "../assets/BahnAssist-Case-study.png";
import portfolioImg from "../assets/hero section image.jpg";

const BehanceIcon = ({ className }) => (
    <svg className={className} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.5 12V6H8.5C10.1569 6 11.5 7.34315 11.5 9C11.5 10.6569 10.1569 12 8.5 12C10.1569 12 11.5 13.3431 11.5 15C11.5 16.6569 10.1569 18 8.5 18H5.5V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M19.5 15C19.5 13.3431 18.1569 12 16.5 12C14.8431 12 13.5 13.3431 13.5 15H19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75V11.25ZM8.5 12.75C8.91421 12.75 9.25 12.4142 9.25 12C9.25 11.5858 8.91421 11.25 8.5 11.25V12.75ZM14.25 15C14.25 14.5858 13.9142 14.25 13.5 14.25C13.0858 14.25 12.75 14.5858 12.75 15L14.25
         15ZM15.4295 17.8024L15.1619 18.5031L15.4295 17.8024ZM19.295 17.5C19.5712 17.1913 19.5447 16.7172 19.236 16.441C18.9273 16.1648 18.4532 16.1913 18.177 16.5L19.295 17.5ZM18.5 10.75C18.9142 10.75 19.25 10.4142 19.25 10C19.25 9.58579 18.9142 9.25 18.5 9.25V10.75ZM14.5 9.25C14.0858
          9.25 13.75 9.58579 13.75 10C13.75 10.4142 14.0858 10.75 14.5 10.75V9.25ZM5.5 12.75H8.5V11.25H5.5V12.75ZM12.75 15C12.75 16.5548 13.7095 17.9483 15.1619 18.5031L15.6971 17.1018C14.8257 16.7689 14.25 15.9328 14.25 15L12.75 15ZM15.1619 18.5031C16.6143 19.0578 18.2584 18.6588 19.295 
          17.5L18.177 16.5C17.5551 17.1953 16.5686 17.4347 15.6971 17.1018L15.1619 18.5031ZM18.5 9.25H14.5V10.75H18.5V9.25Z" fill="currentColor" />
    </svg>
);

const projects = [
    {
        id: 4,
        title: "ANIMIND",
        description: "A social sanctuary to catalog, review, and curate your personal anime odyssey.",
        visual: animindImg,
        color: "#ba0000",
        customButtons: [
            { label: "View Website", link: "https://animind-v2.vercel.app/", icon: ArrowUpRight },
            { label: "View Code", link: "https://github.com/vaibhavsharma-2000/animind", icon: Github }
        ],
        tags: ['UX Design', 'Front-end', 'UX Research']
    },
    {
        id: 1,
        title: "BREWQUEST",
        description: "25+ Interviews bridging the homebrewing community.",
        visual: brewQuestImg,
        color: "#FFC107",
        link: "/work/brewquest",
        tags: ['UX Research', 'UX Design', 'Figma']
    },
    {
        id: 2,
        title: "RECY-PE",
        description: "AI algorithms optimizing recycled material sourcing.",
        visual: recypeImg,
        color: "#8076A3",
        customButtons: [
            { label: "View Project", link: "https://www.behance.net/gallery/218546301/Recy-pe-AI-Solutions-for-Recyclers-(UX-Case-Study)", icon: ArrowUpRight }
        ],
        platform: "behance",
        tags: ['UX Research', 'UI Design', 'Product Strategy']
    },
    {
        id: 5,
        title: "MY WEBSITE",
        description: "A personal portfolio website that brings all my work together, highlighting my design thinking and growing design and development skills.",
        visual: portfolioImg,
        color: "#FFC107",
        customButtons: [
            { label: "View Code", link: "https://github.com/vaibhavsharma-2000/portfolio", icon: Github }
        ],
        tags: ['UX Design', 'Front-end', 'Tailwind']
    },
    {
        id: 3,
        title: "BAHN ASSIST",
        description: "Predictive delay alerts for DB station operators.",
        visual: bahnAssistImg,
        color: "#EF4444",
        customButtons: [
            { label: "View Project", link: "https://www.behance.net/gallery/208525545/DB-BahnAssist-(UX-Research-Wireframing-Prototyping)", icon: ArrowUpRight }
        ],
        platform: "behance",
        tags: ['UX Research', 'UI Design', 'Figma']
    },
];

const HorizontalCard = ({ project, index, scrollYProgress }) => {
    const step = 0.2;
    const peak = 0.1 + (index * step);

    const start = Math.max(0, peak - 0.35);
    const plateauStart = Math.max(0, peak - 0.15);
    const plateauEnd = Math.min(1, peak + 0.15);
    const end = Math.min(1, peak + 0.35);

    const scale = useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], [0.85, 1.05, 1.05, 0.85]);
    const opacity = useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], [0.2, 1, 1, 0.2]);
    const blur = useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], ["10px", "0px", "0px", "10px"]);

    return (
        <motion.div
            style={{
                scale,
                opacity,
                filter: useTransform(blur, b => `blur(${b})`),
                zIndex: useTransform(scale, s => s > 1 ? 10 : 1)
            }}
            // Reduced height to 50vh to ensure dots fit below without overlap
            className="w-[85vw] max-w-[600px] h-[50vh] shrink-0 p-4 md:p-0 flex items-center justify-center snap-center"
        >
            <div className="w-full h-full relative rounded-[2rem] bg-[#1a1a1a] overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0">
                    <img
                        src={project.visual}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-[#1a1a1a]/50 to-transparent" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], [0, 1, 1, 0]),
                            y: useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], [-10, 0, 0, -10])
                        }}
                        className="absolute top-8 right-8 md:top-12 md:right-12 flex flex-row flex-wrap justify-end gap-2 max-w-[60%]"
                    >
                        {project.tags.map((tag, i) => (
                            <motion.span
                                key={i}
                                style={{
                                    color: useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], ["rgba(255,255,255,0.5)", project.color, project.color, "rgba(255,255,255,0.5)"]),
                                    borderColor: useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], ["rgba(255,255,255,0.1)", project.color, project.color, "rgba(255,255,255,0.1)"])
                                }}
                                className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] border rounded-lg bg-black/20 backdrop-blur-md"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div className="flex flex-col items-start">
                        <motion.span style={{ color: project.color }} className="text-xs font-bold tracking-widest uppercase mb-4">
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
                        {project.customButtons ? (
                            project.customButtons.map((btn, i) => (
                                <motion.a
                                    key={i}
                                    href={btn.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                    whileHover={{
                                        backgroundColor: `${project.color}40`,
                                        borderColor: project.color,
                                        scale: 1.05
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                                    className="group flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border text-white text-sm font-bold tracking-widest uppercase"
                                >
                                    {btn.label}
                                    <btn.icon className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                </motion.a>
                            ))
                        ) : (
                            <motion.a
                                href={project.link}
                                initial={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                whileHover={{
                                    backgroundColor: `${project.color}40`,
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
                        )}
                    </div>
                </div>

                {project.platform === "behance" && (
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], [0, 1, 1, 0]),
                            scale: useTransform(scrollYProgress, [start, plateauStart, plateauEnd, end], [0.8, 1, 1, 0.8])
                        }}
                        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20"
                    >
                        <div className="group relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full scale-150 group-hover:scale-[1.8] group-hover:bg-white/10 transition-transform duration-500" />
                            <BehanceIcon className="w-8 h-8 text-white relative z-10 transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg">
                                    <p className="text-[10px] text-white font-bold uppercase tracking-widest whitespace-nowrap">Hosted on Behance</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

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

// Component to render the navigation dots
const NavigationDots = ({ totalProjects, scrollYProgress }) => {
    return (
        <div className="flex justify-center gap-3 pb-8 z-30 shrink-0">
            {Array.from({ length: totalProjects }).map((_, index) => {
                const step = 0.2;
                const peak = 0.1 + (index * step);
                const start = Math.max(0, peak - 0.15);
                const end = Math.min(1, peak + 0.15);

                const opacity = useTransform(scrollYProgress, [start, peak, end], [0.3, 1, 0.3]);
                const scale = useTransform(scrollYProgress, [start, peak, end], [1, 1.5, 1]);
                const width = useTransform(scrollYProgress, [start, peak, end], ["8px", "24px", "8px"]);
                const backgroundColor = useTransform(scrollYProgress, [start, peak, end], ["rgba(255,255,255,0.2)", "rgba(255,255,255,1)", "rgba(255,255,255,0.2)"]);

                return (
                    <motion.div
                        key={index}
                        style={{
                            opacity,
                            scale,
                            width,
                            backgroundColor
                        }}
                        className="h-2 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                    />
                );
            })}
        </div>
    );
};

export default function WorkCarousel() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Delayed start: Animation begins at 0.2 (20% through the section)
    // This allows the user to scroll down, see the full layout/dots, and "pause" briefly before movement starts.
    const x = useTransform(scrollYProgress, [0.2, 0.9], ["10%", "-82%"]);
    const springX = useSpring(x, { stiffness: 50, damping: 20, mass: 0.5 });

    return (
        <section id="work" ref={containerRef} className="h-[500vh] bg-[#0a0a0a] relative">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
                <div className="w-full z-20 shrink-0 pt-10">
                    <SectionHeader title="Work and Projects" />
                </div>
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-900/20 blur-[150px] rounded-full mix-blend-screen" />
                </div>

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

                {/* Navigation Dots - Now part of flex flow at bottom */}
                <NavigationDots
                    totalProjects={projects.length}
                    scrollYProgress={scrollYProgress}
                />
            </div>
        </section>
    );
}

