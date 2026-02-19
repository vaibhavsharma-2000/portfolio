import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import siteLogo from '../assets/Vaibhav Portfolio Logo.png';

const Footer = () => {
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
        <footer className="relative bg-dark pt-32 pb-12 px-6 overflow-hidden border-t border-white/5">
            {/* Massive Background Text */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-[0.02] whitespace-nowrap select-none pointer-events-none">
                <h2 className="text-[13vw] font-serif font-bold text-white uppercase">Get In Touch</h2>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 flex justify-start">
                    {/* Button wrapper ensures it can receive focus on mobile tap */}
                    <button className="relative group cursor-help text-left outline-none">
                        {/* Logo */}
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            src={siteLogo}
                            alt="Vaibhav Sharma Logo"
                            className="w-16 h-16 rounded-[4px] object-cover border border-white/10 transition-colors duration-300 group-hover:border-white/20 group-focus:border-white/20"
                        />

                        {/* Tooltip */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-full ml-4 md:ml-6 opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 group-focus:translate-x-0 w-[260px] md:w-80 z-50">
                            <div className="bg-[#111] border border-brand/20 rounded-xl p-4 shadow-2xl backdrop-blur-xl relative">
                                {/* Triangle pointer */}
                                <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-3 bg-[#111] border-l border-b border-brand/20 rotate-45" />

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">

                    {/* Left Side: Direct Contact */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif text-white mb-8"
                        >
                            Let's build <br /> <span className="text-brand">something together.</span>
                        </motion.h3>
                        <a
                            href="mailto:vb.vaibhav99@gmail.com"
                            className="text-lg md:text-xl font-sans text-neutral-400 hover:text-brand transition-colors flex items-center gap-3"
                            aria-label="Send email to vb.vaibhav99@gmail.com"
                        >
                            <Mail size={20} aria-hidden="true" /> vb.vaibhav99@gmail.com
                        </a>
                    </div>

                    {/* Right Side: Socials & Location */}
                    <div className="flex flex-col items-start md:items-end gap-12">
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