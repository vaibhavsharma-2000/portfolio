import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const designs = [
    { darkSrc: '/assets/verity/overview-dark.png', lightSrc: '/assets/verity/overview-light.png', title: 'Dashboard Overview' },
    { darkSrc: '/assets/verity/capital-dark.png', lightSrc: '/assets/verity/capital-light.png', title: 'Capital Management' },
    { darkSrc: '/assets/verity/fulfillment-dark.png', lightSrc: '/assets/verity/fulfillment-light.png', title: 'Fulfillment Tracker' },
    { darkSrc: '/assets/verity/reach-dark.png', lightSrc: '/assets/verity/reach-light.png', title: 'Reach & Ad Performance' },
    { darkSrc: '/assets/verity/relation-dark.png', lightSrc: '/assets/verity/relation-light.png', title: 'Customer Relations' },
    { darkSrc: '/assets/verity/settings-dark.png', lightSrc: '/assets/verity/settings-light.png', title: 'General Settings' },
    { darkSrc: '/assets/verity/billings-dark.png', lightSrc: '/assets/verity/billings-light.png', title: 'Billings & Invoices' },
    { darkSrc: '/assets/verity/intelligence-dark.png', lightSrc: '/assets/verity/intelligence-light.png', title: 'Intelligence Reports' },
];

export function HighFidelitySection() {
    const ref = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the whole section
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={ref} className="py-32 px-4 md:px-12 bg-[#050505] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-[#050505] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">High Fidelity Designs.</h2>
                    <p className="text-white/40 max-w-2xl mx-auto mb-10">
                        A comprehensive design system applied across 8 distinct modules, ensuring consistency in data visualization and interaction patterns.
                    </p>

                    {/* Dark/Light Mode Toggle */}
                    <div className="flex items-center justify-center">
                        <div className="relative flex items-center bg-[#1a1a1a] rounded-full p-1 border border-white/10 shadow-inner">
                            {/* Sliding pill background */}
                            <motion.div
                                className="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-[#333] rounded-full shadow-md z-0"
                                animate={{ x: isDarkMode ? 0 : '100%' }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />

                            <button
                                onClick={() => setIsDarkMode(true)}
                                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 w-32 ${isDarkMode ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
                            >
                                Dark Mode
                            </button>
                            <button
                                onClick={() => setIsDarkMode(false)}
                                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 w-32 ${!isDarkMode ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
                            >
                                Light Mode
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Creative 2-Column Grid (Staggered) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
                    {designs.map((design, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`group relative ${i % 2 === 1 ? 'md:mt-24' : ''}`}
                        >
                            <div className="relative rounded-[20px] overflow-hidden border border-white/10 shadow-2xl bg-[#111] aspect-[16/10]">
                                {/* Dark Mode Image */}
                                <motion.img
                                    src={design.darkSrc}
                                    alt={`${design.title} Dark`}
                                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                                    initial={false}
                                    animate={{ opacity: isDarkMode ? 1 : 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                                {/* Light Mode Image */}
                                <motion.img
                                    src={design.lightSrc}
                                    alt={`${design.title} Light`}
                                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                                    initial={false}
                                    animate={{ opacity: isDarkMode ? 0 : 1 }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                                {/* Label (appears on hover) */}
                                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                    <p className="text-white font-serif text-xl">{design.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
