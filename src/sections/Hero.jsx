import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
    const containerRef = useRef(null);

    // Tracks scroll progress of this specific section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Mapping scroll progress (0 to 1) to animation values
    const y = useTransform(scrollYProgress, [0, 0.4], ["0%", "25%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

    return (
        <section ref={containerRef} className="relative h-[150vh] bg-dark">
            {/* The Sticky Wrapper keeps content visible while scrolling the 150vh */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Background Image Layer: Grayscale & Darkened for 2025 aesthetic */}
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/your-photo.jpg"
                        alt="Vaibhav Sharma"
                        className="w-full h-full object-cover grayscale opacity-40 contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark" />
                </motion.div>

                {/* Text Content: Kinetic Staggered Entrance */}
                <motion.div
                    style={{ scale }}
                    className="relative z-10 px-6 text-center"
                >
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-serif text-white tracking-tighter"
                    >
                        Vaibhav Sharma
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-xl md:text-2xl font-sans text-neutral-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        I apply <span className="text-brand font-medium">Psychology</span> and <span className="text-white font-medium">Code</span> to solve complex user problems.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;