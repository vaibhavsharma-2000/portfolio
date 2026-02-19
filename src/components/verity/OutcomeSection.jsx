import { motion } from 'framer-motion';

const outcomes = [
    {
        stat: '30%',
        label: 'Reduction in Wardrobing Fraud',
        description: 'By surfacing return rate patterns per courier and customer flag, merchants detect fraud loops within days — not months.',
        color: '#27F59F',
        icon: '🎯',
        span: 'col-span-1 md:col-span-1',
    },
    {
        stat: '15%',
        label: 'Increase in Net Margins',
        description: 'Understanding true cost-per-channel ROAS enabled merchants to cut underperforming ad spend and reinvest in high-yield creatives.',
        color: '#7B61FF',
        icon: '📈',
        span: 'col-span-1 md:col-span-1',
    },
    {
        stat: '10 hrs',
        label: 'Saved per Week',
        description: 'Eliminated manual cross-referencing between Shopify, marketplace portals, and ad platforms. One view. One source of truth.',
        color: '#F59E0B',
        icon: '⏱',
        span: 'col-span-1 md:col-span-1',
    },
];

export function OutcomeSection() {
    return (
        <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background pattern */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(123,97,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6 justify-center"
                >
                    <div className="w-8 h-[1px] bg-[#27F59F]" />
                    <span className="text-[#27F59F] font-bold tracking-[0.3em] uppercase text-xs">Phase 04 — Deliver</span>
                    <div className="w-8 h-[1px] bg-[#27F59F]" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-6xl leading-tight mb-4 text-center"
                >
                    Outcomes.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/40 text-lg mb-20 max-w-2xl leading-relaxed mx-auto text-center"
                >
                    Measured against the three Jobs to Be Done that defined the design brief.
                </motion.p>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                    {outcomes.map((outcome, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.7 }}
                            className="verity-card-dark p-8 group hover:scale-[1.02] transition-transform duration-500 cursor-default"
                            style={{ borderColor: `${outcome.color}12` }}
                        >
                            <div
                                className="absolute top-0 left-0 right-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(90deg, ${outcome.color}, transparent)` }}
                            />

                            <span className="text-3xl mb-6 block">{outcome.icon}</span>

                            <div className="mb-3">
                                <span
                                    className="font-mono text-5xl font-bold block leading-none"
                                    style={{ color: outcome.color }}
                                >
                                    {outcome.stat}
                                </span>
                                <p className="text-white/80 font-semibold text-base mt-2 leading-tight">
                                    {outcome.label}
                                </p>
                            </div>

                            <p className="text-white/40 text-sm leading-relaxed">{outcome.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

