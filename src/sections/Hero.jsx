import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
// If using Vite and image is in src/assets:
import heroImg from '../assets/hero section image.jpg';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 0.4], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[150vh] bg-dark overflow-hidden">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">

                {/* Updated Background Image Layer */}
                <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                    <img
                        src={heroImg}
                        alt="Vaibhav Sharma"
                        className="w-full h-full object-cover grayscale opacity-50 brightness-75 contrast-90"
                    />
                    {/* Subtle gradient to blend into the background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark" />
                </motion.div>

                {/* Narrative Text Layer */}
                <div className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block mb-4 px-5 py-1 border border-brand/30 rounded-full text-[12px] uppercase tracking-widest text-brand font-bold bg-brand/5"
                    >
                        UX Researcher & Frontend Developer
                    </motion.span>
                    <motion.h1
                        className="text-7xl md:text-9xl font-serif text-white tracking-tighter leading-none"
                    >
                        Vaibhav <br /> Sharma
                    </motion.h1>
                </div>

            </div>
        </section>
    );
};

export default Hero;