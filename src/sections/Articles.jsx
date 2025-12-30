import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const publications = [
    {
        id: "pub-1",
        title: "Does social networking usage impact body self-image in late adolescents?",
        reference: "Published in Mukt Shabd Journal, XIII(I), 1191-1202 (2024). DOI: 10.0014.MSJ.2024.V1311.0086781.12127.",
        description: "This research investigates the psychological impact of social networking on adolescent body image, leveraging quantitative methods and statistical analysis.",
        fullUrl: "https://drive.google.com/file/d/13rB0KUVFGhyOwCRZHVTHAiTwMQxmqQGT/view?usp=sharing"
    },
    /* 
    HOW TO ADD A NEW ARTICLE:
    1. Copy the template object below.
    2. Paste it after the last article object above.
    3. Update the fields:
        - id: Must be unique (e.g., "pub-2")
        - title: The headline of your research/article
        - reference: Journal name, volume, year, DOI, etc.
        - description: A short abstract or summary (appears in the modal)
        - fullUrl: Link to the PDF or publication website
    
    TEMPLATE:
    {
        id: "pub-x",
        title: "Your Future Article Title",
        reference: "Journal Name, Vol(Issue), Page Range (Year). DOI: XXXX",
        description: "Your abstract goes here. Describe the core investigation, methods, and findings in 1-3 sentences.",
        fullUrl: "https://your-link-here.com"
    },
    */
];

const MagneticButton = ({ children, url }) => {
    const ref = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        const magneticPower = 0.4;
        mouseX.set(distanceX * magneticPower);
        mouseY.set(distanceY * magneticPower);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-dark font-sans font-bold rounded-full transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(255,193,7,0.4)]"
        >
            {children}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                <path d="M3.64645 11.3536C3.45118 11.5488 3.45118 11.8655 3.64645 12.0607C3.84171 12.2559 4.15829 12.2559 4.35355 12.0607L3.64645 11.3536ZM11.1213 4.87868C11.1213 4.60254 10.8975 4.37868 10.6213 4.37868L6.12132 4.37868C5.84518 4.37868 5.62132 4.60254 5.62132 4.87868C5.62132 5.15482 5.84518 5.37868 6.12132 5.37868L10.1213 5.37868L10.1213 9.37868C10.1213 9.65482 10.3452 9.87868 10.6213 9.87868C10.8975 9.87868 11.1213 9.65482 11.1213 9.37868L11.1213 4.87868ZM4.35355 12.0607L10.9749 5.43934L10.2678 4.73223L3.64645 11.3536L4.35355 12.0607Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
            </svg>
        </motion.a>
    );
};

const Articles = () => {
    const [selectedId, setSelectedId] = useState(null);
    const selectedPub = publications.find(p => p.id === selectedId);

    return (
        <section className="pb-24 px-6 md:px-12 bg-dark">
            <div className="max-w-5xl mx-auto">
                {/* List */}
                <div className="space-y-12">
                    {publications.map((pub) => (
                        <motion.div
                            key={pub.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer border-b border-white/5 pb-12"
                            onClick={() => setSelectedId(pub.id)}
                        >
                            <div className="flex items-start gap-4">
                                <span className="mt-2 w-2 h-2 rounded-full bg-brand flex-shrink-0 shadow-[0_0_8px_#FFC107]" />
                                <motion.h3
                                    layoutId={`title-${pub.id}`}
                                    className="text-[18px] md:text-[24px] font-sans font-medium text-white group-hover:text-brand transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,193,7,0.3)] leading-tight max-w-4xl"
                                >
                                    {pub.title}
                                </motion.h3>
                            </div>
                            <div className="mt-4 ml-6 flex flex-col md:flex-row md:items-center gap-4 text-neutral-500 text-sm font-sans">
                                <span>{pub.reference.split('.')[0]}</span>
                                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
                                <span className="text-neutral-600">Click to read more</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal View */}
                <AnimatePresence>
                    {selectedId && selectedPub && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
                            />

                            <motion.div
                                layoutId={`container-${selectedPub.id}`}
                                className="relative w-full max-w-4xl bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl"
                            >
                                <motion.button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-8 right-8 text-neutral-400 hover:text-white transition-colors p-2"
                                    whileHover={{ rotate: 90 }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </motion.button>

                                <div className="space-y-8">
                                    <motion.h3
                                        layoutId={`title-${selectedPub.id}`}
                                        className="text-3xl md:text-4xl font-sans font-bold text-white leading-tight"
                                    >
                                        {selectedPub.title}
                                    </motion.h3>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="space-y-6"
                                    >
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                            <p className="text-brand font-medium text-sm mb-1 uppercase tracking-wider">Reference</p>
                                            <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed italic">
                                                {selectedPub.reference}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <p className="text-neutral-400 font-sans uppercase text-xs tracking-[0.2em] font-bold">Abstract</p>
                                            <p className="text-neutral-200 font-sans text-lg md:text-xl leading-relaxed">
                                                {selectedPub.description}
                                            </p>
                                        </div>

                                        <div className="pt-8 flex justify-center md:justify-start">
                                            <MagneticButton url={selectedPub.fullUrl}>
                                                View Full Publication
                                            </MagneticButton>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Articles;
