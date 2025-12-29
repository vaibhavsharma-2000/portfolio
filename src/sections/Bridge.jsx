import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Sentence = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);

    return (
        <motion.span style={{ opacity }} className="inline-block transition-opacity duration-300">
            {children}
        </motion.span>
    );
};

const Bridge = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const sentences = [
        {
            text: ["With a foundation in ", <span key="psy" className="text-brand">Psychology</span>, " and an MSc. in ", <span key="ue" className="text-brand">Usability Engineering</span>, " (GPA 1.5), I bridge the gap between the human 'why' and the technical 'how'."]
        },
        {
            text: ["Currently at ", <span key="tv" className="text-brand">TeamViewer</span>, ", I leverage AI and mixed-method research to solve complex user problems."]
        },
        {
            text: ["I don't just hand off research; I bridge the gap between concept and code."]
        },
        {
            text: ["I define the destination before I draw the map."]
        }
    ];

    return (
        <section ref={containerRef} className="relative min-h-[150vh] bg-dark">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 md:px-12">
                <div className="max-w-3xl text-center md:text-left py-12">
                    <p className="text-xl md:text-2xl font-sans font-medium leading-[1.6] md:leading-[1.7] tracking-tight text-white">
                        {sentences.map((sentence, idx) => {
                            // Sharpen the reveal: shorter range for a more distinct "active" state
                            const start = (idx / sentences.length) * 0.7 + 0.15;
                            const end = start + 0.1;
                            const range = [start, end];

                            return (
                                <span key={idx} className="block mb-6 md:mb-8">
                                    <Sentence progress={scrollYProgress} range={range}>
                                        {sentence.text}
                                    </Sentence>
                                </span>
                            );
                        })}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Bridge;
