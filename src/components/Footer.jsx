import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react';

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
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 10h5" /><path d="M18 6h3" />
                    <path d="M22 6c0-2.5-2-4.5-4.5-4.5H6C3.5 1.5 1.5 3.5 1.5 6v12c0 2.5 2 4.5 4.5 4.5h11.5c2.5 0 4.5-2 4.5-4.5V6zM7.5 7h4M7.5 12h5" />
                    <path d="M7.5 17h3" />
                    {/* Simplified Behance-like shapes or just use generic link if complexity is high, but let's try a custom B approx */}
                    <path d="M14 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    <path d="M14 13.5h0c2 0 3.5 1 3.5 3.5v.5h-7v-.5c0-2.5 1.5-3.5 3.5-3.5z" />
                </svg>
            ),
            // Better Behance SVG path approximation or just use text 'Be'
            icon: (
                <span className="font-serif text-xl font-bold">Be</span>
            ),
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">

                    {/* Left Side: Direct Contact */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif text-white mb-8"
                        >
                            Let’s build <br /> <span className="text-brand">something human.</span>
                        </motion.h3>
                        <a
                            href="mailto:vb.vaibhav99@gmail.com"
                            className="text-lg md:text-xl font-sans text-neutral-400 hover:text-brand transition-colors flex items-center gap-3"
                        >
                            <Mail size={20} /> vb.vaibhav99@gmail.com
                        </a>
                    </div>

                    {/* Right Side: Socials & Location */}
                    <div className="flex flex-col items-start md:items-end gap-12">
                        <div className="flex gap-6">
                            {socials.map((social, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 group">
                                    <motion.a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white hover:text-brand hover:border-brand/50 transition-all flex items-center justify-center p-0"
                                    >
                                        {social.icon}
                                    </motion.a>
                                    <span className="text-xs text-neutral-500 font-sans tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-1 group-hover:translate-y-0">{social.label}</span>
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