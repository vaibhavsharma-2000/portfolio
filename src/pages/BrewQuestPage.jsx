import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrewQuestPage = () => {
    const [isPrototypeLoaded, setIsPrototypeLoaded] = useState(false);

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-[#FFC107] selection:text-black">
            {/* Navigation - Floating Back Button */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="fixed top-8 left-8 z-50"
            >
                <Link to="/">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/20 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-bold tracking-widest uppercase">Back to Work</span>
                    </motion.button>
                </Link>
            </motion.div>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto w-full z-10 mt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8"
                    >
                        BrewQuest
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-12"
                    >
                        <a
                            href="https://www.behance.net/gallery/224541349/BrewQuest-UX-Design-Project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#FFC107] border border-[#FFC107]/30 px-6 py-2 rounded-full hover:bg-[#FFC107]/10 transition-colors uppercase tracking-widest text-xs font-bold"
                        >
                            View on Behance <ArrowLeft className="w-3 h-3 rotate-135" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm tracking-widest uppercase text-white/60 border-t border-white/10 pt-8"
                    >
                        <div>
                            <h3 className="text-white mb-2">Role</h3>
                            <p>UX Research &<br />Lead Designer</p>
                        </div>
                        <div>
                            <h3 className="text-white mb-2">Timeline</h3>
                            <p>2023</p>
                        </div>
                        <div>
                            <h3 className="text-white mb-2">Tools</h3>
                            <p>Figma, Notion,<br />Google Forms</p>
                        </div>
                        <div>
                            <h3 className="text-white mb-2">Team</h3>
                            <p>Team BrewQuest</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Hero Mockup Parallax */}
            <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full flex items-center justify-center relative z-20"
                >
                    {/* iPhone Frame */}
                    <div className="relative w-[320px] h-[650px] border-[14px] border-[#1a1a1a] rounded-[3rem] bg-black shadow-2xl overflow-hidden ring-1 ring-white/10">
                        {/* Dynamic Notch/Island */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-[#1a1a1a] rounded-b-[1rem] z-30 flex items-center justify-center">
                            <div className="w-16 h-1.5 bg-neutral-800 rounded-full opacity-50" />
                        </div>

                        {/* Figma Embed Container */}
                        <div className="w-full h-full bg-[#050505] flex flex-col items-center justify-center">
                            {!isPrototypeLoaded ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center p-8 text-center"
                                >
                                    <span className="text-white/20 text-4xl mb-6">🍺</span>
                                    <p className="text-white/60 text-sm mb-6 uppercase tracking-widest">Interactive Prototype</p>
                                    <motion.button
                                        onClick={() => setIsPrototypeLoaded(true)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-[#FFC107] text-black font-bold uppercase tracking-widest text-xs rounded-full shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-shadow"
                                    >
                                        Load Prototype
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <iframe
                                    className="w-full h-full animate-in fade-in duration-1000"
                                    title="BrewQuest Prototype"
                                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWazGPjEhPbaiOhz3u1GPpu%2FARPA%3Fnode-id%3D487-748%26p%3Df%26viewport%3D401%252C421%252C0.13%26t%3DQu18AfE1HaBlRfza-0%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D487%253A750%26show-proto-sidebar%3D1"
                                    allowFullScreen
                                    style={{ border: 'none' }}
                                />
                            )}
                        </div>
                    </div>
                </motion.div>
                {/* Background Glow */}
                <div className="absolute inset-0 bg-amber-500/10 blur-[150px] mix-blend-screen z-0" />
            </section>

            {/* THE PROBLEM section */}
            <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] relative">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[#FFC107] font-bold tracking-widest uppercase mb-4 block"
                        >
                            The Problem
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                            Germany’s beer culture: 8.4 billion liters consumed annually, yet homebrewing remains fragmented.
                        </h2>
                        <p className="text-lg text-white/60 leading-relaxed">
                            Despite a rich history, hobby brewers face a disconnected ecosystem. Information is scattered across outdated forums, and local communities lack a centralized platform for discovery and exchange.
                        </p>
                    </div>

                    {/* Counter Animation */}
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, type: "spring" }}
                                viewport={{ once: true }}
                                className="text-[12rem] font-bold text-white/5 leading-none"
                            >
                                8.4
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center text-6xl md:text-8xl font-serif text-[#FFC107]"
                            >
                                8.4B
                            </motion.div>
                            <p className="text-center text-white/40 mt-4 tracking-widest uppercase">Liters / Year</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE RESEARCH section */}
            <section className="py-32 px-8 md:px-20 bg-[#111] relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-20">
                        <motion.span className="text-[#FFC107] font-bold tracking-widest uppercase mb-4 block">The Research</motion.span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-8">Discover Phase</h2>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/5 flex-1">
                                <h3 className="text-2xl font-bold mb-2">20/80 Rule</h3>
                                <p className="text-white/60">Prioritizing the 20% of features that deliver 80% of value.</p>
                            </div>
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/5 flex-1">
                                <h3 className="text-2xl font-bold mb-2">25+ Interviews</h3>
                                <p className="text-white/60">In-depth conversations with novice and expert brewers.</p>
                            </div>
                        </div>
                    </div>

                    {/* Bar Charts */}
                    <div className="space-y-8 max-w-3xl">
                        {[
                            { label: 'Personalized Discovery', value: '92%' },
                            { label: 'Event Notifications', value: '78%' },
                            { label: 'Recipe Sharing', value: '65%' }
                        ].map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-sm uppercase tracking-widest mb-2 text-white/80">
                                    <span>{item.label}</span>
                                    <span>{item.value}</span>
                                </div>
                                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: item.value }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="h-full bg-[#FFC107] rounded-full relative"
                                    >
                                        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/50 shadow-[0_0_10px_white]" />
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* USER PERSONA section */}
            <section className="py-32 px-8 md:px-20 bg-[#0a0a0a]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#1a1a1a] rounded-[2.5rem] p-8 md:p-12 border border-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden"
                    >
                        {/* Visual */}
                        <div className="w-full md:w-1/3 aspect-[3/4] bg-neutral-800 rounded-2xl relative overflow-hidden group">
                            {/* Placeholder for Profile Image */}
                            <div className="absolute inset-0 bg-neutral-700 flex items-center justify-center text-white/20">
                                <span className="uppercase tracking-widest font-bold">Lukas<br />Profile</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#FFC107]/20 to-transparent opacity-60" />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-center">
                            <span className="text-[#FFC107] font-bold tracking-widest uppercase mb-6">User Persona</span>
                            <h2 className="text-4xl font-serif mb-2">Lukas Weber</h2>
                            <p className="text-white/50 text-sm uppercase tracking-widest mb-8">Age 26 • Software Engineer • Munich</p>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-lg font-bold mb-2 text-white/90">Goals</h4>
                                    <p className="text-white/60">Wants to find local brewing events effortlessly and connect with peers without scouring multiple forums.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2 text-white/90">Frustrations</h4>
                                    <p className="text-white/60">"Information is too fragmented. I spend more time searching for events than actually brewing or attending them."</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="h-40" />
        </div>
    );
};

export default BrewQuestPage;
