import { motion } from 'framer-motion';

const SectionHeader = ({ title }) => {
    return (
        <section className="relative py-24 flex flex-col items-center justify-center overflow-hidden">
            <div className="relative inline-block overflow-hidden pb-4 px-4">
                {/* Text Reveal Container */}
                <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-5xl md:text-7xl font-serif font-medium text-white tracking-tighter text-center">
                        {title}
                    </h2>
                </motion.div>

                {/* Glow Underline */}
                <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-brand shadow-[0_0_15px_#FFC107]"
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.6,
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                />

                {/* Secondary bloom glow */}
                <motion.div
                    className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 h-[8px] bg-brand/30 blur-md"
                    initial={{ width: 0 }}
                    whileInView={{ width: "110%" }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.8,
                        duration: 1.4,
                        ease: "circOut"
                    }}
                />
            </div>
        </section>
    );
};

export default SectionHeader;
