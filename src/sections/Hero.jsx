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

                {/* --- BACKGROUND SWEEP ANIMATION --- */}
                <motion.div
                    initial={{ y: '-100%' }}
                    animate={{ y: '0%' }}
                    transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1] // Expo out
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-b from-[#FFC107]/10 via-[#0a0a0a] to-[#0a0a0a]"
                />

                {/* --- OLD IMAGE BACKGROUND (Commented Out) --- */}
                {/* 
                <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                    <img
                        src={heroImg}
                        alt="Vaibhav Sharma"
                        className="w-full h-full object-cover grayscale opacity-50 brightness-75 contrast-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark" />
                </motion.div> 
                */}

                {/* --- HERO CONTENT --- */}
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.3,
                                    delayChildren: 0.8
                                }
                            }
                        }}
                    >
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="inline-block mb-6 px-3 py-1 border border-brand/30 rounded-full text-[12px] uppercase tracking-widest text-brand font-bold bg-brand/5 backdrop-blur-sm"
                        >
                            UX Researcher & Front-end Developer
                        </motion.span>
                        <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-none mb-2">
                            <motion.span
                                className="block"
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                                }}
                            >
                                Vaibhav
                            </motion.span>
                            <motion.span
                                className="block"
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                                }}
                            >
                                Sharma
                            </motion.span>
                        </h1>
                    </motion.div>
                </div>

                {/* --- SCROLL INDICATOR --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em] font-light">Scroll</span>
                    <motion.div
                        className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
                        animate={{
                            scaleY: [1, 1.5, 1],
                            opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;