import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'work', label: 'Work' },
        { id: 'skills', label: 'Skills' },
        { id: 'articles', label: 'Articles' },
        // { id: 'lab', label: 'Lab' }, // Commented out for future use
        { id: 'contact', label: 'Contact' },
    ];

    // Refs for mobile menu click-outside
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100; // Offset for better triggering

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveTab(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobile Menu Click Outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Offset for fixed navbar
                behavior: 'smooth'
            });
            setActiveTab(id);
            setIsOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-2 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl w-[90%] max-w-fit"
            >
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1 relative">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 z-10 ${activeTab === item.id ? 'text-brand' : 'text-neutral-400 hover:text-white'}`}
                        >
                            {activeTab === item.id && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white/10 border border-white/5 rounded-full -z-10 shadow-[0_0_15px_rgba(255,193,7,0.15)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item.label}</span>
                        </button>
                    ))}

                    <motion.a
                        href="https://drive.google.com/uc?export=download&id=12n5l42mpqFmr74iw_JX_Sy4fkp2iIoSt"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="ml-2 px-5 py-2 bg-brand text-dark text-sm font-sans font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] transition-all"
                    >
                        CV
                    </motion.a>
                </div>

                {/* Mobile Header (Home Icon + Toggle) */}
                <div className="flex md:hidden items-center justify-between w-full gap-4 px-2">
                    <button onClick={() => scrollToSection('home')} className="text-white hover:text-brand transition-colors">
                        <Home size={20} />
                    </button>

                    <div className="flex items-center gap-3">
                        <motion.a
                            href="https://drive.google.com/uc?id=16napEIFHbp_fYi7lzlUotGun0RQDBMZ9&export=download"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-1.5 bg-brand text-dark text-xs font-sans font-bold rounded-full"
                        >
                            CV
                        </motion.a>
                        <button
                            ref={buttonRef}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-white/80 hover:text-white transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {navItems.map((item, i) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`p-4 text-center text-lg font-serif rounded-2xl transition-all ${activeTab === item.id ? 'text-brand bg-white/5' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;