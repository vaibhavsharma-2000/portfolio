import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Search, Layers, Brain, Code2, Compass, Languages, Wrench } from 'lucide-react';

const BentoCard = ({ title, subtitle, size, color, icon: Icon }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    // 3D Tilt - subtly rotates based on mouse position relative to center
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
    // We convert the normalized x/y back to pixel coords for the gradient
    const spotlightLeft = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const spotlightTop = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`${size} relative group rounded-3xl z-0`}
        >
            {/* Spotlight Border Container */}
            <div className="absolute inset-0 rounded-3xl bg-[#1a1a1a] overflow-hidden p-[1px]">
                {/* The Spotlight Gradient */}
                <motion.div
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                250px circle at ${spotlightLeft} ${spotlightTop}, 
                                ${color}, 
                                transparent 80%
                            )
                        `,
                    }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Inner Card Content */}
                <div className="relative h-full w-full bg-[#111111] rounded-[23px] overflow-hidden p-8 flex flex-col justify-end">

                    {/* Background Icon */}
                    <Icon
                        className="absolute bottom-[-20px] right-[-20px] text-white opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-300 transform -rotate-12"
                        size={200}
                        strokeWidth={1}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2 font-['SF_Pro_Display',sans-serif]">
                            {title}
                        </h3>
                        <p className="text-neutral-500 text-sm font-['SF_Pro_Text',sans-serif] leading-relaxed">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const BentoGrid = () => {
    const cards = [
        {
            title: "User Research",
            subtitle: <>SUS, UEQ, <span className="text-neutral-300 font-medium">JTBD & ODI</span>, User Interviews, <span className="text-neutral-300 font-medium">A/B Testing</span></>,
            size: "md:col-span-2 md:row-span-2",
            color: "#FFC107",
            icon: Search
        },
        {
            title: "UI/UX Design",
            subtitle: <><span className="text-neutral-300 font-medium">Figma</span>, Design Systems, <span className="text-neutral-300 font-medium">Prototyping</span>, Framer</>,
            size: "md:col-span-1 md:row-span-1",
            color: "#E2E8F0",
            icon: Layers
        },
        {
            title: "Front-end",
            subtitle: <>HTML, CSS, <span className="text-neutral-300 font-medium">JavaScript</span>, React, Tailwind, Git, Github,</>,
            size: "md:col-span-1 md:row-span-2",
            color: "#06B6D4",
            icon: Code2
        },
        {
            title: "Psychology & Data",
            subtitle: <><span className="text-neutral-300 font-medium">SPSS</span>, Jamovi, Mixed Methods</>,
            size: "md:col-span-1 md:row-span-1",
            color: "#A855F7",
            icon: Brain
        },
        {
            title: "Strategy",
            subtitle: <>Agile, Miro, Mural, Figjam, <span className="text-neutral-300 font-medium">Jira</span>, Notion</>,
            size: "md:col-span-1 md:row-span-1",
            color: "#FFFFFF",
            icon: Compass
        },
        {
            title: "Tools",
            subtitle: <>MS Office, Google Workspace, Looker Studio, Confluence, Adobe Creative Suite, Canva, Generative AI</>,
            size: "md:col-span-2 md:row-span-1",
            color: "#A3A3A3",
            icon: Wrench
        },
        {
            title: "Languages",
            subtitle: <>Hindi: Mother Tongue<br />English: Fluent<br />German: B1 (Learning)</>,
            size: "md:col-span-1 md:row-span-1",
            color: "#ae4141ff",
            icon: Languages
        },

    ];

    return (
        <section className="bg-[#0a0a0a] pb-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
                {cards.map((card, index) => (
                    <BentoCard key={index} {...card} />
                ))}
            </div>
        </section>
    );
};

export default BentoGrid;