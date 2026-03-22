import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
// Import local assets
import animindImg from "../assets/Animind.png";
import brewQuestImg from "../assets/Brew-Quest-Light.png";
import recypeImg from "../assets/RecyPeCase-study.png";
import bahnAssistImg from "../assets/BahnAssist-Case-study.png";
import portfolioImg from "../assets/My Portfolio cover.png";
const verityImg = "/assets/verity/verity-cover.png";

const BehanceIcon = ({ className }) => (
    <svg className={className} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.5 12V6H8.5C10.1569 6 11.5 7.34315 11.5 9C11.5 10.6569 10.1569 12 8.5 12C10.1569 12 11.5 13.3431 11.5 15C11.5 16.6569 10.1569 18 8.5 18H5.5V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M19.5 15C19.5 13.3431 18.1569 12 16.5 12C14.8431 12 13.5 13.3431 13.5 15H19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75V11.25ZM8.5 12.75C8.91421 12.75 9.25 12.4142 9.25 12C9.25 11.5858 8.91421 11.25 8.5 11.25V12.75ZM14.25 15C14.25 14.5858 13.9142 14.25 13.5 14.25C13.0858 14.25 12.75 14.5858 12.75 15L14.25 15ZM15.4295 17.8024L15.1619 18.5031L15.4295 17.8024ZM19.295 17.5C19.5712 17.1913 19.5447 16.7172 19.236 16.441C18.9273 16.1648 18.4532 16.1913 18.177 16.5L19.295 17.5ZM18.5 10.75C18.9142 10.75 19.25 10.4142 19.25 10C19.25 9.58579 18.9142 9.25 18.5 9.25V10.75ZM14.5 9.25C14.0858 9.25 13.75 9.58579 13.75 10C13.75 10.4142 14.0858 10.75 14.5 10.75V9.25ZM5.5 12.75H8.5V11.25H5.5V12.75ZM12.75 15C12.75 16.5548 13.7095 17.9483 15.1619 18.5031L15.6971 17.1018C14.8257 16.7689 14.25 15.9328 14.25 15L12.75 15ZM15.1619 18.5031C16.6143 19.0578 18.2584 18.6588 19.295 17.5L18.177 16.5C17.5551 17.1953 16.5686 17.4347 15.6971 17.1018L15.1619 18.5031ZM18.5 9.25H14.5V10.75H18.5V9.25Z" fill="currentColor" />
    </svg>
);



const projects = [
    {
        id: 4,
        title: "ANIMIND",
        description: "A social sanctuary to catalog, review, and curate your personal anime odyssey.",
        image: animindImg,
        color: "#ba0000",
        link: "/work/animind",
        tags: ['UX Design', 'Front-end', 'UX Research'],
        category: "UX & Engineering",
    },
    {
        id: 6,
        title: "VERITY",
        description: "The Dashboard for Quiet Luxury. An AI-driven decision engine for high-end fashion merchants.",
        image: verityImg,
        color: "#7B61FF",
        link: "/work/verity",
        tags: ['UX Design', 'SaaS Dashboard', 'AI'],
        category: "Full-Stack Design",
    },
    {
        id: 1,
        title: "BREWQUEST",
        description: "25+ Interviews bridging the homebrewing community.",
        image: brewQuestImg,
        color: "#FFC107",
        link: "/work/brewquest",
        tags: ['UX Research', 'UX Design', 'Figma'],
        category: "UX Research",
    },
    {
        id: 2,
        title: "RECY-PE",
        description: "AI algorithms optimizing recycled material sourcing.",
        image: recypeImg,
        color: "#8076A3",
        customButtons: [
            { label: "View Project", link: "https://www.behance.net/gallery/218546301/Recy-pe-AI-Solutions-for-Recyclers-(UX-Case-Study)", icon: ArrowUpRight }
        ],
        platform: "behance",
        tags: ['UX Research', 'UI Design', 'Product Strategy'],
        category: "Product Strategy",
    },
    {
        id: 5,
        title: "MY WEBSITE",
        description: "A personal portfolio website that brings all my work together.",
        image: portfolioImg,
        color: "#FFC107",
        customButtons: [
            { label: "View Code", link: "https://github.com/vaibhavsharma-2000/portfolio", icon: Github }
        ],
        tags: ['UX Design', 'Front-end', 'Tailwind'],
        category: "Front-end Development",
    },
    {
        id: 3,
        title: "BAHN ASSIST",
        description: "Predictive delay alerts for DB station operators.",
        image: bahnAssistImg,
        color: "#EF4444",
        customButtons: [
            { label: "View Project", link: "https://www.behance.net/gallery/208525545/DB-BahnAssist-(UX-Research-Wireframing-Prototyping)", icon: ArrowUpRight }
        ],
        platform: "behance",
        tags: ['UX Research', 'UI Design', 'Figma'],
        category: "UX Research",
    },
];

/* ─── Single Rolodex Card ─── */
const RolodexCard = ({ project, index, scrollYProgress, total }) => {
    // Each card gets a segment with dead space (gap) between cards
    // Layout: [enter flip][hold][exit flip][gap][next card...]
    const gapFraction = 0.03; // blank gap between cards
    const usablePerCard = (1 - gapFraction * (total - 1)) / total;
    const start = index * (usablePerCard + gapFraction);
    const end = start + usablePerCard;

    const enterEnd = start + usablePerCard * 0.2;    // 20% of card time for enter flip
    const exitStart = end - usablePerCard * 0.2;     // 20% of card time for exit flip

    // 3D Rolodex flip — NO fade, fully visible at all angles
    // Enter: rotateX 90° → 0° | Hold: 0° | Exit: 0° → -90°
    const rotateX = useTransform(
        scrollYProgress,
        [start, enterEnd, exitStart, end],
        [90, 0, 0, -90]
    );

    // Visibility: hard on/off (no fade) — card appears at start, disappears at end
    // Use a step function: invisible outside range, fully visible inside
    const visibility = useTransform(
        scrollYProgress,
        [start - 0.001, start, end, end + 0.001],
        [0, 1, 1, 0]
    );

    const getLink = () => {
        if (project.customButtons) return project.customButtons[0].link;
        return project.link;
    };

    const isExternal = !!project.customButtons;
    const linkProps = isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

    return (
        <motion.div
            style={{
                rotateX,
                opacity: visibility,
                transformOrigin: "center center",
            }}
            className="absolute inset-0 flex flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-[#141414] shadow-2xl"
        >
            {/* Image Wrapper - Centered and Contained */}
            <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex items-center justify-center">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    draggable={false}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                />
            </div>

            {/* Bottom Gradient for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />

            {/* Behance Badge */}
            {project.platform === "behance" && (
                <div className="absolute top-5 right-5 z-20">
                    <div className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/20">
                        <BehanceIcon className="w-5 h-5 text-white" />
                    </div>
                </div>
            )}

            {/* Card Content */}
            <div className="relative z-20 flex flex-col md:flex-row w-full items-end justify-between p-6 md:p-10 lg:p-12 gap-6">
                <div className="flex-1">


                    {/* Title */}
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-2 leading-tight">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm md:text-base max-w-md leading-relaxed hidden md:block">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                style={{ borderColor: `${project.color}50`, color: `${project.color}` }}
                                className="px-3 py-1 text-[8px] md:text-[9px] font-bold uppercase tracking-widest border rounded-full bg-black/30 backdrop-blur-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <a
                    href={getLink()}
                    {...linkProps}
                    className="group/btn flex items-center gap-3 rounded-full bg-white px-6 md:px-8 py-3 md:py-4 text-sm font-bold text-black uppercase tracking-wider transition-all hover:bg-brand hover:scale-105 hover:shadow-[0_0_25px_rgba(255,193,7,0.3)] shrink-0"
                    aria-label={`${project.customButtons ? project.customButtons[0].label : "Explore Case Study"} — ${project.title}`}
                >
                    {project.customButtons ? project.customButtons[0].label : "Explore Case Study"}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
            </div>
        </motion.div>
    );
};

/* ─── Main Section ─── */
export default function WorkCarousel() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });



    return (
        <section
            ref={containerRef}
            id="work"
            className="relative bg-[#0a0a0a]"
            style={{ height: `${(projects.length + 1) * 100}vh` }}
        >
            {/* The Sticky Viewport — locks to screen while user scrolls */}
            <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">



                {/* Section Header */}
                <div className="absolute top-0 w-full z-30 pointer-events-none">
                    <SectionHeader title="Work & Projects" />
                </div>

                {/* Layer 2: The 3D Card Stack */}
                <div
                    className="relative z-10 w-[92vw] md:w-[85vw] lg:w-full lg:max-w-5xl aspect-[3/4] md:aspect-video mt-32 md:mt-40"
                    style={{ perspective: '1200px' }}
                >
                    {projects.map((project, index) => (
                        <RolodexCard
                            key={project.id}
                            project={project}
                            index={index}
                            scrollYProgress={scrollYProgress}
                            total={projects.length}
                        />
                    ))}
                </div>

                {/* Progress Indicator */}
                <div className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-30">
                    {projects.map((project, index) => {
                        const total = projects.length;
                        const gapFraction = 0.03;
                        const usablePerCard = (1 - gapFraction * (total - 1)) / total;
                        const start = index * (usablePerCard + gapFraction);
                        const end = start + usablePerCard;

                        return (
                            <motion.div
                                key={project.id}
                                style={{
                                    opacity: useTransform(
                                        scrollYProgress,
                                        [start - 0.01, start + 0.02, end - 0.02, end + 0.01],
                                        [0.2, 1, 1, 0.2]
                                    ),
                                    scale: useTransform(
                                        scrollYProgress,
                                        [start - 0.01, start + 0.02, end - 0.02, end + 0.01],
                                        [0.5, 1, 1, 0.5]
                                    ),
                                }}
                                className="w-2 h-2 rounded-full bg-brand"
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
