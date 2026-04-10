import { motion } from 'framer-motion';

const impactItems = [
    {
        icon: '🔗',
        headline: 'Bridged the Gap',
        detail: 'Connected rigorous qualitative methods with fast, scalable AI operations — two things that rarely live in the same sentence.',
    },
    {
        icon: '📊',
        headline: 'Data Beats Opinion',
        detail: 'Pushed back on subjective design decisions using hard, objective frameworks. Numbers don\'t argue.',
    },
    {
        icon: '⚡',
        headline: 'Automated the Boring Stuff',
        detail: 'Turned multi-hour manual analysis into automated weekly pipelines. The best system is one that runs without you.',
    },
    {
        icon: '📡',
        headline: 'Navigated the Silos',
        detail: 'Internal communication gaps between departments quietly kill good UX decisions. Learned to spot it early and keep research moving through the noise.',
    },
];

export function ImpactSection() {
    return (
        <section className="py-28 px-6 md:px-20 bg-[#111] relative overflow-hidden">
            <div className="max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="section-line w-8 h-[1px] bg-[#4361EE]" />
                    <span className="text-[#4361EE] font-bold tracking-[0.3em] uppercase text-xs">Overall Impact</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-6xl text-white mb-16"
                >
                    What I Took Away.
                </motion.h2>

                {/* 2×2 grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {impactItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="group relative p-7 md:p-8 bg-white/[0.04] rounded-2xl border border-white/5 hover:border-[#4361EE]/25 transition-colors overflow-hidden cursor-default"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4361EE]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Top accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4361EE]/0 via-[#4361EE]/50 to-[#4361EE]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <span className="text-3xl mb-4 block">{item.icon}</span>
                                <h3 className="text-lg font-bold text-white mb-2">{item.headline}</h3>
                                <p className="text-white/45 text-sm leading-relaxed">{item.detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#4361EE]/5 blur-[200px] rounded-full pointer-events-none" />
        </section>
    );
}
