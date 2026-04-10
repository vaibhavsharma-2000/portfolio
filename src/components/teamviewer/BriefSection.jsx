import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Animated counter hook
function useCounter(target, duration = 1.8) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!inView) return;
        let start = null;
        const step = (ts) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [inView, target, duration]);

    return { count, ref };
}

const stats = [
    { value: 4, label: 'Key', sub: 'Initiatives', suffix: '' },
    { value: 6, label: 'Months', sub: 'Full-Time', suffix: '' },
    { value: 3, label: 'AI', sub: 'Pipelines', suffix: '' },
];

function StatCard({ value, label, sub, suffix, delay }) {
    const { count, ref } = useCounter(value);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center md:items-start text-center md:text-left w-full"
        >
            {/* Ghost number background */}
            <div className="ghost-num absolute -top-8 md:-top-12 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 select-none z-0" aria-hidden>
                {value}{suffix}
            </div>

            {/* Foreground number */}
            <div
                className="stat-num relative z-10 text-7xl md:text-8xl lg:text-9xl font-black text-[#4361EE] leading-none"
                style={{ fontVariantNumeric: 'tabular-nums' }}
            >
                {count}{suffix}
            </div>

            {/* Labels */}
            <div className="relative z-10 mt-6 md:mt-8">
                <p className="text-white text-sm md:text-base font-bold tracking-widest uppercase">{label}</p>
                <p className="text-white/40 text-xs md:text-sm tracking-widest uppercase mt-1.5">{sub}</p>
            </div>

            {/* Bottom accent line */}
            <div className="relative z-10 mt-5 w-12 h-[2px] bg-gradient-to-r from-[#4361EE] to-transparent rounded-full mx-auto md:ml-0" />
        </motion.div>
    );
}

export function BriefSection() {
    return (
        <section className="py-28 px-6 md:px-20 bg-[#111] relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-14"
                >
                    <div className="section-line w-8 h-[1px] bg-[#4361EE]" />
                    <span className="text-[#4361EE] font-bold tracking-[0.3em] uppercase text-xs">The Brief</span>
                </motion.div>

                {/* Pull Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="pull-quote mb-16"
                >
                    <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-white/90">
                        Bridging rigorous qualitative research with{' '}
                        <span className="text-[#4361EE]">scalable AI operations</span>.
                    </p>
                </motion.div>

                {/* Stacked Layout: Text on top, Stats horizontally below */}
                <div className="flex flex-col gap-20">

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.7 }}
                        className="text-white/55 text-lg md:text-xl leading-relaxed max-w-4xl"
                    >
                        As a UX Research Intern at TeamViewer, I operated at the intersection of
                        traditional UX research and modern AI tooling — turning scattered feedback data
                        into structured insight engines, validating flagship prototypes against
                        objective frameworks, and building knowledge systems that made past research
                        permanently accessible.
                    </motion.p>

                    {/* Stats — Horizontal Row */}
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-20 md:gap-12 pt-12 border-t border-white/5">
                        {stats.map((s, i) => (
                            <StatCard key={i} {...s} delay={0.2 + i * 0.15} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative background */}
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4361EE]/6 blur-[200px] rounded-full pointer-events-none" />
        </section>
    );
}
