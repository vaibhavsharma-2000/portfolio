import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Import all 8 high-fidelity visuals
import imgOverview from '../../assets/Verity Overview Page.png';
import imgCapital from '../../assets/Verity Capital Page.png';
import imgFulfillment from '../../assets/Verity Fulfillment Page.png';
import imgReach from '../../assets/Verity Reach Page.png';
import imgRelation from '../../assets/Verity Relation Page.png';
import imgSettings from '../../assets/Verity Settings Page.png';
import imgBillings from '../../assets/Verity Settings Billings page.png';
import imgIntel from '../../assets/Verity Settings Intelligence page.png';

const designs = [
    { src: imgOverview, title: 'Dashboard Overview' },
    { src: imgCapital, title: 'Capital Management' },
    { src: imgFulfillment, title: 'Fulfillment Tracker' },
    { src: imgReach, title: 'Reach & Ad Performance' },
    { src: imgRelation, title: 'Customer Relations' },
    { src: imgSettings, title: 'General Settings' },
    { src: imgBillings, title: 'Billings & Invoices' },
    { src: imgIntel, title: 'Intelligence Reports' },
];

export function HighFidelitySection() {
    const ref = useRef(null);
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
                    <p className="text-white/40 max-w-2xl mx-auto">
                        A comprehensive design system applied across 8 distinct modules, ensuring consistency in data visualization and interaction patterns.
                    </p>
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
                                <motion.img
                                    src={design.src}
                                    alt={design.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" // reduced scale to be subtle
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Label (appears on hover) */}
                                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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
