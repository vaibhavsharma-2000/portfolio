import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ['Home', 'Work', 'Skills', 'About', 'Contact'];

    // Refs for click click-outside detection
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

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

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-3 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl w-[90%] max-w-fit"
            >
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2 text-sm font-sans font-medium text-neutral-300 hover:text-white rounded-full transition-colors"
                        >
                            {item}
                        </motion.a>
                    ))}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="ml-2 px-5 py-2 bg-brand text-dark text-sm font-sans font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] transition-all"
                    >
                        CV
                    </motion.button>
                </div>

                {/* Mobile Header (Brand + Toggle) */}
                <div className="flex md:hidden items-center justify-between w-full gap-4 px-2">
                    <a href="#home" className="text-white hover:text-brand transition-colors">
                        <Home size={20} />
                    </a>

                    <div className="flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-1.5 bg-brand text-dark text-xs font-sans font-bold rounded-full"
                        >
                            CV
                        </motion.button>
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
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="p-4 text-center text-lg font-serif text-white/80 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;