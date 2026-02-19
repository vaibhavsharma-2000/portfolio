import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, X, ExternalLink, Play, Monitor } from 'lucide-react';

import verityMockupImg from '../../assets/Verity Overview Page.png';

const FIGMA_SITE = 'https://yang-dull-27767610.figma.site/';

const MockupSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]); // Tilts up from 15deg to 0deg
    const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

    return (
        <section ref={ref} className="relative px-8 md:px-20 pb-12 perspective-[2000px]">
            <motion.div
                style={{ opacity, scale, rotateX, y, transformStyle: 'preserve-3d' }}
                className="max-w-7xl mx-auto w-full"
            >
                {/* MacBook Pro CSS Frame */}
                <div className="relative mx-auto max-w-[1000px] group">
                    {/* Shadow Glow */}
                    <div className="absolute -inset-10 bg-[#7B61FF]/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    {/* Lid */}
                    <div className="relative bg-[#0d0d0d] rounded-t-[20px] p-[2%] border-[2px] border-[#333] border-b-0 shadow-2xl z-10">
                        {/* Camera Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[12%] h-[4%] bg-[#0d0d0d] rounded-b-md z-20 flex justify-center items-center">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#1a1a1a] shadow-inner" />
                        </div>

                        {/* Screen Content */}
                        <div className="relative overflow-hidden rounded-[6px] bg-black aspect-[16/10]">
                            <img
                                src={verityMockupImg}
                                alt="VERITY Dashboard Overview"
                                className="w-full h-full object-cover"
                            />
                            {/* Screen Glare */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none mix-blend-overlay" />
                        </div>
                    </div>

                    {/* Base */}
                    <div className="relative h-[18px] bg-[#1a1a1a] rounded-b-[20px] border border-[#333] border-t-0 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-10">
                        {/* Thumb notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[40%] bg-[#2a2a2a] rounded-b-md" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export function Hero() {
    const [protoOpen, setProtoOpen] = useState(false);
    const protoRef = useRef(null);

    return (
        <>
            {/* ── Hero Title ─────────────────────────────────────── */}
            <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#7B61FF]/6 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#27F59F]/4 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto w-full z-10 mt-20">
                    {/* Tag */}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block text-[#7B61FF] font-bold tracking-[0.3em] uppercase text-xs mb-6 border border-[#7B61FF]/30 px-4 py-1.5 rounded-full bg-[#7B61FF]/5"
                    >
                        SaaS Dashboard Design
                    </motion.span>

                    {/* Heading — uses global font-serif = Playfair Display */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8"
                    >
                        VERITY
                    </motion.h1>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-12 flex items-center gap-4 flex-wrap"
                    >
                        <motion.button
                            onClick={() => {
                                setProtoOpen(true);
                                setTimeout(() => protoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7B61FF] text-white font-bold uppercase tracking-widest text-xs rounded-full shadow-[0_0_20px_rgba(123,97,255,0.35)] hover:shadow-[0_0_32px_rgba(123,97,255,0.55)] transition-shadow"
                        >
                            <Play className="w-3 h-3 fill-white" />
                            Try Interactive Prototype
                        </motion.button>

                        <motion.a
                            href={FIGMA_SITE}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                            <ExternalLink className="w-3 h-3 text-white" />
                            Visit Live Website
                        </motion.a>
                    </motion.div>

                    {/* Meta grid — exact BrewQuest structure */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm tracking-widest uppercase text-white/60 border-t border-white/10 pt-8"
                    >
                        <div>
                            <h3 className="text-white mb-2">Role</h3>
                            <p>UX Researcher &<br />Lead Designer</p>
                        </div>
                        <div>
                            <h3 className="text-white mb-2">Timeline</h3>
                            <p>2026</p>
                        </div>
                        <div>
                            <h3 className="text-white mb-2">Tools</h3>
                            <p>Figma, React,<br />Tailwind, Framer Motion</p>
                        </div>
                        <div>
                            <h3 className="text-white mb-2">Platform</h3>
                            <p>SaaS Dashboard<br />Web App</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Hero Visual: Browser frame with launch-to-reveal pattern ─── */}
            <section ref={protoRef} className="relative overflow-hidden px-8 md:px-20 pb-16">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 40 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                    className="max-w-7xl mx-auto w-full relative z-20"
                >
                    {/* Browser chrome */}
                    <div className="rounded-[20px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
                        {/* Top bar */}
                        <div className="flex items-center gap-2 px-5 py-3.5 bg-[#1a1a1a] border-b border-white/8">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#FF4D4D]/70" />
                                <div className="w-3 h-3 rounded-full bg-[#F59E0B]/70" />
                                <div className="w-3 h-3 rounded-full bg-[#27F59F]/70" />
                            </div>
                            <div className="flex-1 mx-4 bg-black/30 rounded-lg px-4 py-1.5 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#27F59F]" />
                                <span className="text-white/30 text-xs">yang-dull-27767610.figma.site</span>
                            </div>
                            <a
                                href={FIGMA_SITE}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-white/30 hover:text-white/70 transition-colors text-xs"
                            >
                                <ExternalLink size={12} />
                                Open
                            </a>
                        </div>

                        {/* Content area — gated behind a launch button */}
                        <div className="relative bg-[#121212]" style={{ height: '70vh' }}>
                            {!protoOpen ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center gap-6"
                                >
                                    {/* Blurred preview hint */}
                                    <div className="absolute inset-0 bg-[#7B61FF]/4" />

                                    <span className="relative text-5xl">✦</span>
                                    <p className="relative text-white/40 text-sm uppercase tracking-widest">
                                        Interactive Prototype
                                    </p>
                                    <motion.button
                                        onClick={() => setProtoOpen(true)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-[#7B61FF] text-white font-bold uppercase tracking-widest text-xs rounded-full shadow-[0_0_24px_rgba(123,97,255,0.4)] hover:shadow-[0_0_40px_rgba(123,97,255,0.6)] transition-shadow"
                                    >
                                        <Play className="w-3 h-3 fill-white" />
                                        Launch Site
                                    </motion.button>
                                    <p className="relative text-white/20 text-[10px] uppercase tracking-widest">
                                        Loads an embedded Figma site
                                    </p>
                                </motion.div>
                            ) : (
                                <AnimatePresence>
                                    <motion.div
                                        key="iframe"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                        className="absolute inset-0"
                                    >
                                        <iframe
                                            src={FIGMA_SITE}
                                            title="VERITY — Live Figma Site"
                                            className="w-full h-full border-0"
                                            allow="fullscreen"
                                        />
                                        {/* Close / dismiss button */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setProtoOpen(false);
                                            }}
                                            className="absolute top-3 right-3 z-50 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/15 rounded-full text-white/60 hover:text-white hover:bg-black/80 text-xs font-bold uppercase tracking-wider transition-all"
                                        >
                                            <X size={12} />
                                            Close
                                        </button>
                                    </motion.div>
                                </AnimatePresence>
                            )}
                        </div>
                    </div>

                    <p className="text-center text-white/20 text-xs uppercase tracking-widest mt-4">
                        {protoOpen
                            ? 'Interact directly above — or close to continue reading'
                            : 'Click Launch Site to interact with the full prototype'}
                    </p>
                </motion.div>

                <div className="absolute inset-0 bg-[#7B61FF]/5 blur-[150px] mix-blend-screen z-0 pointer-events-none" />
            </section>




        </>
    );
}
