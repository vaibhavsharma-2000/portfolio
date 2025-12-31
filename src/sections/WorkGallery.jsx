import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Import local generated assets
import brewQuestImg from "../assets/generated/Brew-Quest-Light.png";
import recypeImg from "../assets/generated/RecyPeCase-study.png";
import bahnAssistImg from "../assets/generated/BahnAssist-Case-study.png";

const projects = [
    {
        id: 1,
        title: "BREWQUEST",
        description: "Bridging the gap in the German homebrewing community through user-centered recipe sharing",
        hook: "25+ In-depth interviews & 20/80 rule prioritization",
        visual: brewQuestImg,
        link: "#",
        cta: "View Case Study",
        isExternal: false,
        color: "#FFC107", // Amber
    },
    {
        id: 2,
        title: "RECY-PE",
        description: "AI-powered solutions for recycled plastic formulations and sustainable material sourcing",
        hook: "Simulating material properties to optimize R&D lifecycle and material selection",
        visual: recypeImg,
        link: "#",
        cta: "View Case Study",
        isExternal: false,
        color: "#A855F7", // Purple
    },
    {
        id: 3,
        title: "BAHNASSIST",
        description: "A re-imagined desktop portal for Deutsche Bahn station operators enhancing efficiency with AI-driven insights",
        hook: "Real-time platform congestion updates and predictive delay alerts",
        visual: bahnAssistImg,
        link: "https://www.deutschebahn.com", // Example external link
        cta: "External Case Study",
        isExternal: true,
        color: "#EF4444", // Red
    },
];

// Magnetic Button Component
const MagneticButton = ({ children, className }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.button>
    );
};

// Extracted ProjectCard Component to safely use hooks
const ProjectCard = ({ project, index, isDesktop, scrollYProgress }) => {
    // Parallax Logic: Only meaningful on desktop.
    // We can unconditionally call useTransform and just conditionally apply the result in style.
    // Adjusted range to match the new scroll timing
    const parallaxX = useTransform(scrollYProgress, [0.25, 1], [0, (index + 1) * -100]);

    return (
        <div
            style={{ backgroundColor: !isDesktop ? project.color : 'transparent' }} // Mobile Card Color
            className={`
                relative flex shrink-0 items-center justify-center p-6
                ${isDesktop ? 'h-full w-screen p-20' : 'min-h-screen w-full flex-col py-20'}
            `}
        >
            <div className="grid h-full w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 md:items-center">

                {/* Visual Side */}
                <div className="relative flex h-full max-h-[50vh] w-full flex-col items-center justify-center rounded-3xl bg-white/10 p-4 shadow-2xl backdrop-blur-sm md:order-2 md:max-h-[80vh]">
                    <img
                        src={project.visual}
                        alt={project.title}
                        className="h-full w-full object-contain rounded-xl"
                    />
                </div>

                {/* Text Side */}
                <motion.div
                    className="relative z-10 flex flex-col justify-center gap-4 text-white md:order-1 md:gap-6"
                    style={{ x: isDesktop ? parallaxX : 0 }}
                >
                    {/* Title */}
                    <h2
                        className="font-playfair text-4xl font-bold uppercase tracking-tighter text-transparent md:text-8xl lg:text-9xl"
                        style={{
                            WebkitTextStroke: "2px white",
                        }}
                    >
                        {project.title}
                    </h2>

                    <div className="space-y-4">
                        <p className="text-xl font-medium leading-relaxed opacity-90 md:text-2xl">
                            {project.description}
                        </p>
                        <div className="border-l-4 border-white pl-4 italic opacity-80">
                            <p className="font-serif text-base md:text-lg">"{project.hook}"</p>
                        </div>
                    </div>

                    <MagneticButton className="group pointer-events-auto relative mt-6 flex w-fit items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-base font-bold text-black transition-transform hover:scale-105 md:mt-8 md:px-8 md:py-4 md:text-lg">
                        <span>{project.cta}</span>
                        {project.isExternal && <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />}
                        <div className="absolute inset-0 -z-10 translate-y-[100%] bg-black transition-transform duration-300 group-hover:translate-y-0" />
                        <span className="absolute inset-0 flex items-center justify-center gap-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {project.cta} {project.isExternal && <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />}
                        </span>
                    </MagneticButton>
                </motion.div>
            </div>
        </div>
    );
};

export default function WorkGallery() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        // Adjust offset to trigger animations nicely
        offset: ["start end", "end start"]
    });

    // State to track if we are on mobile/tablet (less than md breakpoint roughly)
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 768); // 768px is Tailwind 'md'
        };

        checkIsDesktop();
        window.addEventListener("resize", checkIsDesktop);
        return () => window.removeEventListener("resize", checkIsDesktop);
    }, []);

    // Vertical Scroll -> Horizontal Translation (0% to -75%) - ONLY for Desktop
    // FIX: Start the translation *after* a bit of scrolling (0.25) to keep the first card in view longer.
    const rawX = useTransform(scrollYProgress, [0.25, 1], ["0%", "-75%"]);

    // Add Spring Physics for "Automatic" smooth scrolling feel requested by user
    const x = useSpring(rawX, { stiffness: 100, damping: 20, mass: 0.5 });

    // Color Shift for background
    const backgroundColor = useTransform(
        scrollYProgress,
        [0.25, 0.45, 0.8], // Adjusted start to match scroll
        ["#FFC107", "#A855F7", "#EF4444"]
    );

    return (
        <section
            id="work"
            ref={targetRef}
            // Mobile: auto height (natural flow)
            // Desktop: 400vh for the scroll distance + snap container
            className={`relative ${isDesktop ? 'h-[400vh]' : 'h-auto'} bg-dark`}
        >
            {/* Ghost Snap Points (Desktop Only) to enforce "auto scroll" stops */}
            {isDesktop && (
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* 4 Sections matching the 400vh total. 
                        We snap to the center of each to ensure the user lands on a card state.
                    */}
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="h-[100vh] w-full"
                            style={{ scrollSnapAlign: "center" }} // Snap to the center of these viewports
                        />
                    ))}
                </div>
            )}

            <motion.div
                style={{ backgroundColor: isDesktop ? backgroundColor : 'transparent' }}
                className={`
            ${isDesktop ? 'sticky top-0 h-screen overflow-hidden' : 'relative h-auto flex flex-col'}
        `}
            >
                {/* Progress Bar - Only Desktop */}
                {isDesktop && (
                    <motion.div
                        style={{ scaleX: scrollYProgress }}
                        className="absolute bottom-0 left-0 h-2 w-full origin-left bg-white/50 z-50"
                    />
                )}

                {/* Container */}
                {/* Mobile: w-full flex-col */}
                {/* Desktop: w-[400vw] flex-row with x transform */}
                <motion.div
                    style={{ x: isDesktop ? x : 0 }}
                    className={`flex ${isDesktop ? 'h-full w-[400vw] flex-row' : 'w-full flex-col'}`}
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isDesktop={isDesktop}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}

                    {/* Spacer for desktop horizontal completion */}
                    {isDesktop && (
                        <div className="flex h-full w-screen items-center justify-center" />
                    )}
                </motion.div>
            </motion.div>
        </section>
    );
}
