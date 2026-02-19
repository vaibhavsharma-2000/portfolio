import { motion } from 'framer-motion';

const insights = [
    {
        label: 'The Hidden Bleed',
        stat: '15–25%',
        statLabel: 'Invisible Commission',
        color: '#FF4D4D',
        description:
            'Selling on luxury marketplaces like Farfetch incurs 15–25% commissions that never appear in standard Shopify dashboards — silently eroding margins.',
    },
    {
        label: '"Wardrobing" Fraud',
        stat: '~30%',
        statLabel: 'Return Fraud Rate',
        color: '#F59E0B',
        description:
            'Customers buy high-end items for photoshoots and return them. Standard "Return Rate" metrics hide this behavior entirely.',
    },
    {
        label: 'Disconnected Logic',
        stat: '0%',
        statLabel: 'Real-time Correlation',
        color: '#7B61FF',
        description:
            'Ad spend (Reach) is never correlated with Logistics (Fulfillment) in real-time. Merchants fly blind across every channel.',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export function ProblemSection() {
    return (
        <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] relative overflow-hidden">
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="w-8 h-[1px] bg-[#FF4D4D]" />
                    <span className="text-[#FF4D4D] font-bold tracking-[0.3em] uppercase text-xs">Phase 01 — Discover</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-6xl leading-tight mb-4 max-w-3xl"
                >
                    Luxury merchants are data-rich but truth-poor.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/40 text-lg max-w-2xl mb-20 leading-relaxed"
                >
                    Based on real-world interviews with high-end designer clothing merchants — three critical blind spots emerged.
                </motion.p>

                {/* Insights Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
                >
                    {insights.map((insight, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className="relative p-8 verity-card-dark group hover:border-white/15 transition-colors duration-500"
                            style={{ borderColor: `${insight.color}20` }}
                        >
                            {/* Accent line */}
                            <div
                                className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
                                style={{ background: `linear-gradient(90deg, ${insight.color}, transparent)` }}
                            />

                            <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: insight.color }}>
                                {insight.label}
                            </p>

                            <div className="mb-6">
                                <span className="font-mono text-5xl font-bold" style={{ color: insight.color }}>
                                    {insight.stat}
                                </span>
                                <p className="text-white/30 text-xs uppercase tracking-widest mt-1">{insight.statLabel}</p>
                            </div>

                            <p className="text-white/50 text-sm leading-relaxed">{insight.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Profit Waterfall Visualization */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-bold">The True Cost of a Sale</p>
                        <h3 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
                            Every sale hides a story of silent deductions.
                        </h3>
                        <p className="text-white/50 leading-relaxed text-base mb-6">
                            A merchant sees €10,000 in Shopify sales. What they <em>don't</em> see: after marketplace commissions, fraud returns, and gateway fees — their true pocket is barely €3,300.
                        </p>
                        <p className="text-white/30 text-sm leading-relaxed">
                            VERITY makes this visible at a glance — before a merchant ever makes their next spending decision.
                        </p>
                    </motion.div>

                    {/* CSS Waterfall Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="verity-card-dark p-8"
                    >
                        <p className="text-xs text-white/30 uppercase tracking-widest font-bold mb-6">Net Profit Waterfall</p>
                        <div className="space-y-3">
                            {[
                                { label: 'Gross Sales', value: '€100,000', pct: 100, color: '#27F59F', type: 'start' },
                                { label: 'Returns & Fraud', value: '−€20,000', pct: 20, color: '#FF4D4D', type: 'deduct' },
                                { label: 'Cost of Goods', value: '−€30,000', pct: 30, color: '#FF4D4D', type: 'deduct' },
                                { label: 'Marketplace Fees', value: '−€15,000', pct: 15, color: '#FF4D4D', type: 'deduct', alert: true },
                                { label: 'Gateway Fees', value: '−€2,000', pct: 2, color: '#F59E0B', type: 'deduct' },
                                { label: 'Net Profit', value: '€33,000', pct: 33, color: '#3B82F6', type: 'end' },
                            ].map((row, i) => (
                                <div key={i} className="relative">
                                    <div className="flex items-center justify-between mb-1.5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-white/50">{row.label}</span>
                                            {row.alert && (
                                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#7B61FF]/20 text-[#7B61FF] border border-[#7B61FF]/30 font-bold uppercase tracking-wide">
                                                    AI Alert
                                                </span>
                                            )}
                                        </div>
                                        <span
                                            className="font-mono text-xs font-bold"
                                            style={{ color: row.type === 'start' ? '#27F59F' : row.type === 'end' ? '#3B82F6' : row.color }}
                                        >
                                            {row.value}
                                        </span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${row.pct}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: row.color }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* AI annotation */}
                        <div className="mt-6 flex items-start gap-3 p-3 bg-[#7B61FF]/8 border border-[#7B61FF]/20 rounded-xl">
                            <div className="w-5 h-5 rounded-full bg-[#7B61FF] flex items-center justify-center shrink-0 mt-0.5">
                                <span className="text-white text-[9px] font-bold">AI</span>
                            </div>
                            <p className="text-xs text-white/50 leading-relaxed">
                                <span className="text-[#7B61FF] font-semibold">Insight: </span>
                                Marketplace fees spiked 5% vs. last month due to category reclassification.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
