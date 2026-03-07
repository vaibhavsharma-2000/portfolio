import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import siteLogo from '../assets/Vaibhav Portfolio Logo.png';

const Footer = () => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const socials = [
        {
            icon: <Linkedin size={24} />,
            url: "https://linkedin.com/in/vaibhavsharma2000",
            label: "LinkedIn"
        },
        {
            icon: <Github size={24} strokeWidth={2.5} />,
            url: "https://github.com/vaibhavsharma-2000",
            label: "GitHub"
        },
        {
            icon: <span className="font-serif text-xl font-bold">Be</span>,
            url: "https://behance.net/vaibhavsharma2000",
            label: "Behance"
        },
    ];

    return (
        <footer className="relative bg-dark pt-0 pb-12 px-6 overflow-hidden border-t border-white/5">

            {/* Massive Background Text */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 opacity-[0.02] whitespace-nowrap select-none pointer-events-none">
                <h2 className="text-[13vw] font-serif font-bold text-white uppercase">Get In Touch</h2>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 pt-20 md:pt-28">

                {/* Main content: headline + CTA on left, logo + socials on right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">

                    {/* Left Side: Headline + CTA */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
                        >
                            Let's build <br /> <span className="text-brand">something together.</span>
                        </motion.h3>

                        <p className="text-white/40 text-sm md:text-base mb-8 max-w-md leading-relaxed font-sans">
                            From concept to deployed website in days, not months. Whether you need a full redesign, a new product, or a rapid prototype.
                        </p>

                        {/* CTA Button */}
                        <motion.a
                            href="mailto:vb.vaibhav99@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative inline-flex items-center gap-3 px-8 py-4 bg-brand text-dark text-sm md:text-base font-sans font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,193,7,0.3)] group mb-8"
                        >
                            <motion.span
                                className="absolute inset-0 rounded-full border-2 border-brand/40"
                                animate={{
                                    scale: [1, 1.12, 1],
                                    opacity: [0.5, 0, 0.5],
                                }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                            Book a Free Consultation
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.a>

                        {/* Email */}
                        <a
                            href="mailto:vb.vaibhav99@gmail.com"
                            className="text-base md:text-lg font-sans text-neutral-500 hover:text-brand transition-colors flex items-center gap-3"
                            aria-label="Send email to vb.vaibhav99@gmail.com"
                        >
                            <Mail size={18} aria-hidden="true" /> vb.vaibhav99@gmail.com
                        </a>
                    </div>

                    {/* Right Side: Logo, Socials & Location */}
                    <div className="flex flex-col items-start md:items-end gap-12">
                        {/* Logo with tooltip */}
                        <div className="mb-4 md:mb-0">
                            <button
                                className="relative group cursor-help text-left outline-none"
                                onClick={() => setTooltipOpen(!tooltipOpen)}
                                onBlur={() => setTooltipOpen(false)}
                            >
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    src={siteLogo}
                                    alt="Vaibhav Sharma Logo"
                                    className="w-16 h-16 rounded-[4px] object-cover border border-white/10 transition-colors duration-300 group-hover:border-white/20 group-focus:border-white/20"
                                />

                                {/* Tooltip — BELOW on mobile, LEFT on desktop */}
                                {/* Mobile: below logo */}
                                <div className={`absolute top-full left-0 mt-4 transition-all duration-300 transform w-[260px] z-50 md:hidden
                                    ${tooltipOpen
                                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                                        : 'opacity-0 translate-y-2 pointer-events-none'
                                    }`}
                                >
                                    <div className="bg-[#111] border border-brand/20 rounded-xl p-4 shadow-2xl backdrop-blur-xl relative">
                                        {/* Triangle pointer — points UP toward logo */}
                                        <div className="absolute -top-1.5 left-6 w-3 h-3 bg-[#111] border-l border-t border-brand/20 rotate-45" />
                                        <p className="text-brand text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <Sparkles size={12} />
                                            Logo Design Rationale
                                        </p>
                                        <p className="text-white/70 text-xs leading-relaxed font-sans">
                                            A synthesis of neural pathways and digital circuits—representing the intersection where human psychology meets front-end architecture.
                                            <br /><br />
                                            <span className="italic text-white/40">...and definitely not just my initials 'V' and 'S' layered on top of each other.</span>
                                        </p>
                                    </div>
                                </div>
                                {/* Desktop: left of logo */}
                                <div className={`absolute top-1/2 -translate-y-1/2 right-full mr-6 transition-all duration-300 transform w-80 z-50 hidden md:block
                                    ${tooltipOpen
                                        ? 'opacity-100 translate-x-0 pointer-events-auto'
                                        : 'opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-focus:opacity-100 group-focus:translate-x-0'
                                    }`}
                                >
                                    <div className="bg-[#111] border border-brand/20 rounded-xl p-4 shadow-2xl backdrop-blur-xl relative">
                                        {/* Triangle pointer — points RIGHT toward logo */}
                                        <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-[#111] border-r border-t border-brand/20 rotate-45" />
                                        <p className="text-brand text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <Sparkles size={12} />
                                            Logo Design Rationale
                                        </p>
                                        <p className="text-white/70 text-xs leading-relaxed font-sans">
                                            A synthesis of neural pathways and digital circuits—representing the intersection where human psychology meets front-end architecture.
                                            <br /><br />
                                            <span className="italic text-white/40">...and definitely not just my initials 'V' and 'S' layered on top of each other.</span>
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </div>

                        <div className="flex gap-6" role="list" aria-label="Social media links">
                            {socials.map((social, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 group" role="listitem">
                                    <motion.a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white hover:text-brand hover:border-brand/50 transition-all flex items-center justify-center p-0"
                                        aria-label={`Visit ${social.label} profile`}
                                    >
                                        <span aria-hidden="true">{social.icon}</span>
                                    </motion.a>
                                    <span className="text-xs text-neutral-500 font-sans tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-1 group-hover:translate-y-0" aria-hidden="true">{social.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-right">
                            <p className="text-neutral-500 font-sans uppercase tracking-widest text-xs mb-2">Location</p>
                            <p className="text-white font-sans font-medium flex items-center gap-2 justify-end">
                                <MapPin size={16} className="text-brand" /> Göppingen, Germany
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 text-[10px] uppercase tracking-[0.2em] font-sans">
                    <p>© 2026 Vaibhav Sharma — All Rights Reserved </p>
                    <p>Designed on Figma & Coded with React and Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;