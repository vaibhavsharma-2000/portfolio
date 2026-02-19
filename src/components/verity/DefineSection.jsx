import { motion } from 'framer-motion';

const jobs = [
    {
        number: '01',
        domain: 'Capital',
        color: '#27F59F',
        situation: 'When I check my morning sales report on Shopify,',
        motivation: 'I want to see my Net Profit after marketplace commissions, returns, and gateway fees,',
        outcome: 'so I can know whether my business actually made money yesterday before deciding what to spend today.',
    },
    {
        number: '02',
        domain: 'Fulfillment',
        color: '#FF4D4D',
        situation: 'When I see a spike in returns from a specific region or platform,',
        motivation: 'I want to identify exactly which courier or handling partner is causing damage during transit,',
        outcome: 'so I can switch providers before losing another luxury garment and a customer relationship.',
    },
    {
        number: '03',
        domain: 'Relations',
        color: '#7B61FF',
        situation: "When a VIP customer's birthday or anniversary is approaching,",
        motivation: 'I want to be proactively alerted with a one-click offer trigger,',
        outcome: 'so I can retain high-value clients through personal moments, not generic email blasts.',
    },
];

export function DefineSection() {
    return (
        <section className="py-32 px-8 md:px-20 bg-[#111] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Phase label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="w-8 h-[1px] bg-[#27F59F]" />
                    <span className="text-[#27F59F] font-bold tracking-[0.3em] uppercase text-xs">Phase 02 — Define</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-6xl leading-tight mb-4 max-w-3xl"
                >
                    Jobs To Be Done
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/40 text-lg max-w-2xl mb-24 leading-relaxed"
                >
                    From interviews with luxury merchants, three recurring frustrations emerged. Each became a design brief.
                </motion.p>

                {/* Stacked JTBD entries — editorial / narrative layout */}
                <div className="space-y-0 divide-y divide-white/6">
                    {jobs.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.7 }}
                            className="py-14 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
                        >
                            {/* Left: Number + Domain tag */}
                            <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4 md:gap-3 md:pt-1">
                                <span
                                    className="text-5xl font-serif font-bold leading-none"
                                    style={{ color: `${job.color}50` }}
                                >
                                    {job.number}
                                </span>
                                <span
                                    className="text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border"
                                    style={{ color: job.color, borderColor: `${job.color}30`, backgroundColor: `${job.color}08` }}
                                >
                                    {job.domain}
                                </span>
                            </div>

                            {/* Right: Full JTBD statement */}
                            <div className="md:col-span-10">
                                <p className="text-white/80 text-xl md:text-2xl leading-relaxed mb-8">
                                    <span className="text-white/45">{job.situation} </span>
                                    <span className="text-white font-medium">{job.motivation} </span>
                                    <span className="text-white/45">{job.outcome}</span>
                                </p>

                                {/* Accent rule */}
                                <div
                                    className="h-[2px] w-12 rounded-full"
                                    style={{ backgroundColor: job.color }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
