import { motion } from 'framer-motion';

const Navbar = () => {
    const navItems = ['Home', 'Work', 'Skills', 'About', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center px-2 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
        >
            <div className="flex items-center gap-1">
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

                {/* Animated Download CV Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="ml-2 px-5 py-2 bg-brand text-dark text-sm font-sans font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] transition-all"
                >
                    CV
                </motion.button>
            </div>
        </motion.nav>
    );
};

export default Navbar;