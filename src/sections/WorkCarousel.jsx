import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

// Import local assets
import animindImg from "../assets/Animind.png";
import brewQuestImg from "../assets/Brew-Quest-Light.png";
import recypeImg from "../assets/RecyPeCase-study.png";
import bahnAssistImg from "../assets/BahnAssist-Case-study.png";
import portfolioImg from "../assets/hero section image.jpg";
import verityImg from "../assets/verity-cover.png";


const BehanceIcon = ({ className }) => (
    <svg className={className} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.5 12V6H8.5C10.1569 6 11.5 7.34315 11.5 9C11.5 10.6569 10.1569 12 8.5 12C10.1569 12 11.5 13.3431 11.5 15C11.5 16.6569 10.1569 18 8.5 18H5.5V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M19.5 15C19.5 13.3431 18.1569 12 16.5 12C14.8431 12 13.5 13.3431 13.5 15H19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75V11.25ZM8.5 12.75C8.91421 12.75 9.25 12.4142 9.25 12C9.25 11.5858 8.91421 11.25 8.5 11.25V12.75ZM14.25 15C14.25 14.5858 13.9142 14.25 13.5 14.25C13.0858 14.25 12.75 14.5858 12.75 15L14.25 15ZM15.4295 17.8024L15.1619 18.5031L15.4295 17.8024ZM19.295 17.5C19.5712 17.1913 19.5447 16.7172 19.236 16.441C18.9273 16.1648 18.4532 16.1913 18.177 16.5L19.295 17.5ZM18.5 10.75C18.9142 10.75 19.25 10.4142 19.25 10C19.25 9.58579 18.9142 9.25 18.5 9.25V10.75ZM14.5 9.25C14.0858 9.25 13.75 9.58579 13.75 10C13.75 10.4142 14.0858 10.75 14.5 10.75V9.25ZM5.5 12.75H8.5V11.25H5.5V12.75ZM12.75 15C12.75 16.5548 13.7095 17.9483 15.1619 18.5031L15.6971 17.1018C14.8257 16.7689 14.25 15.9328 14.25 15L12.75 15ZM15.1619 18.5031C16.6143 19.0578 18.2584 18.6588 19.295 17.5L18.177 16.5C17.5551 17.1953 16.5686 17.4347 15.6971 17.1018L15.1619 18.5031ZM18.5 9.25H14.5V10.75H18.5V9.25Z" fill="currentColor" />
    </svg>
);

const projects = [
    {
        id: 6,
        title: "VERITY",
        description: "The Dashboard for Quiet Luxury. An AI-driven decision engine for high-end fashion merchants.",
        visual: verityImg,
        color: "#7B61FF",
        link: "/work/verity",
        tags: ['UX Design', 'SaaS Dashboard', 'AI']
    },
    {
        id: 4,
        title: "ANIMIND",
        description: "A social sanctuary to catalog, review, and curate your personal anime odyssey.",
        visual: animindImg,
        color: "#ba0000",
        link: "/work/animind",
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
        description: "A personal portfolio website that brings all my work together.",
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

const Card = ({ project, index, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    // Spotlight Gradient following mouse
    const spotlightLeft = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const spotlightTop = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    const onMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set((clientX - left) / width - 0.5);
        y.set((clientY - top) / height - 0.5);
    };

    const onMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Scale effect for the card itself as it stacks
    const scale = useTransform(progress, range, [1, targetScale]);

    // Smooth opacity transition if needed, but let's keep it solid for stacking
    // const opacity = useTransform(progress, range, [1, 0.5]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0 pointer-events-none">
            <motion.div
                style={{
                    scale,
                    top: `calc(10vh + ${index * 25}px)`
                }}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                className="relative flex flex-col-reverse md:flex-row h-[65vh] w-[90vw] md:w-[70vw] rounded-[30px] border border-white/10 bg-[#1a1a1a] overflow-hidden shadow-2xl origin-top group pointer-events-auto"
            >
                {/* Spotlight Overlay */}
                <motion.div
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                600px circle at ${spotlightLeft} ${spotlightTop}, 
                                ${project.color}20, 
                                transparent 80%
                            )
                        `,
                    }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-screen"
                />
                {/* Left Side: Content */}
                <div className="w-full h-[60%] md:h-full md:w-[45%] p-6 md:p-12 flex flex-col justify-center md:justify-start relative z-20 bg-[#1a1a1a]">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                            <span key={i} style={{ borderColor: project.color, color: project.color }} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border rounded-full bg-black/20">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-2xl min-[400px]:text-3xl md:text-5xl font-serif font-bold text-white mb-3 md:mb-4 leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-white/60 text-sm md:text-lg mb-6 leading-relaxed line-clamp-3 md:line-clamp-none">
                        {project.description}
                    </p>

                    <div className="mt-auto flex gap-4">
                        {project.customButtons ? (
                            project.customButtons.map((btn, i) => (
                                <a
                                    key={i}
                                    href={btn.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-bold uppercase tracking-wider hover:bg-[#FFC107] transition-colors"
                                    aria-label={`${btn.label} - ${project.title}`}
                                >
                                    {btn.label}
                                    <btn.icon className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" aria-hidden="true" />
                                </a>
                            ))
                        ) : (
                            <a
                                href={project.link}
                                className="group/btn flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-bold uppercase tracking-wider hover:bg-[#FFC107] transition-colors"
                                aria-label={`View Project - ${project.title}`}
                            >
                                View Project
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" aria-hidden="true" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full h-[40%] md:h-full md:w-[55%] relative overflow-hidden bg-black border-b md:border-b-0 md:border-l border-white/5">
                    <motion.div className="w-full h-full relative group">
                        <img
                            src={project.visual}
                            alt={`${project.title} - ${project.tags.join(', ')} project by Vaibhav Sharma`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-[#1a1a1a] opacity-50" />
                    </motion.div>

                    {/* Behance Badge if applicable */}
                    {project.platform === "behance" && (
                        <div className="absolute top-4 right-4 md:bottom-6 md:right-6 z-20">
                            <div className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/20">
                                <BehanceIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default function WorkCarousel() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} id="work" className="bg-[#0a0a0a] relative">
            <div className="py-20 px-6 max-w-7xl mx-auto mb-10">
                <SectionHeader title="Work and Projects" />
                <p className="text-white/50 text-center max-w-2xl mx-auto mt-4">
                    A curated selection of my design research and development work.
                </p>
            </div>

            <div className="mt-10 mb-[20vh]">
                {projects.map((project, index) => {
                    const targetScale = 1 - ((projects.length - index) * 0.05);
                    return (
                        <Card
                            key={index}
                            index={index}
                            project={project}
                            progress={scrollYProgress}
                            range={[index * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}
