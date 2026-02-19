import { motion } from 'framer-motion';
import { TrendingUp, Shield, Star, Clock, Sparkles, Bell } from 'lucide-react';

const businessOutcomes = [
    {
        stat: '15%',
        label: 'Lift in Net Margins',
        description: 'By surfacing hidden marketplace commissions and gateway fees in a real-time waterfall, merchants stopped scaling unprofitable ad campaigns.',
        color: '#27F59F', // Capital Domain
        icon: TrendingUp,
    },
    {
        stat: '30%',
        label: 'Drop in Margin Leak',
        description: 'Through correlating returns with specific couriers and customer profiles, merchants flagged transit damage and serial wardrobing loops within days.',
        color: '#FF4D4D', // Fulfillment Domain
        icon: Shield,
    },
    {
        stat: '25%',
        label: 'Higher VIP Retention',
        description: 'Replacing generic email blasts with proactive, AI-triggered alerts for VIP milestones turned passive customer data into high-converting outreach.',
        color: '#7B61FF', // Relations Domain
        icon: Star,
    },
];

const uxOutcomes = [
    {
        stat: '30s',
        label: 'Decision Time Slashed',
        description: "Replacing 4 dispersed Shopify/Ad dashboards with a single 'True Profit' waterfall allowed merchants to authorize daily budgets instantly.",
        color: '#3B82F6', // Intelligence / Blue
        icon: Clock,
    },
    {
        stat: '100%',
        label: 'Zero-Click Discovery',
        description: 'The anticipatory intelligence layer surfaces anomalous return spikes automatically, eliminating the need to dig through complex filter trees.',
        color: '#F59E0B', // Amber
        icon: Sparkles,
    },
    {
        stat: 'Daily',
        label: 'Proactive Engagement',
        description: 'Clienteling shifted from end-of-month manual segmentation to daily automated triggers, completely transforming VIP customer interactions.',
        color: '#ec4899', // Pink
        icon: Bell,
    },
];

const OutcomeCard = ({ outcome, delay }) => {
    const Icon = outcome.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.7 }}
            className="verity-card-dark p-8 group hover:scale-[1.02] transition-transform duration-500 cursor-default"
            style={{ borderColor: `${outcome.color}12` }}
        >
            {/* Subtle top border glow on hover */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${outcome.color}, transparent)` }}
            />

            {/* Dynamic SVG Icon */}
            <div className="relative mb-8 w-12 h-12 flex items-center justify-center rounded-[14px] bg-white/[0.03] border border-white/10 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 origin-left">
                <div
                    className="absolute inset-0 rounded-[14px] blur-[8px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: outcome.color }}
                />
                {Icon && <Icon size={22} style={{ color: outcome.color }} className="relative z-10" />}
            </div>

            <div className="mb-4">
                <span
                    className="font-mono text-5xl font-bold block leading-none"
                    style={{ color: outcome.color }}
                >
                    {outcome.stat}
                </span>
                <p className="text-white/90 font-bold text-base mt-2 leading-tight uppercase tracking-wide">
                    {outcome.label}
                </p>
            </div>

            <p className="text-white/40 text-sm leading-relaxed">{outcome.description}</p>
        </motion.div>
    );
};

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
                {/* Phase 04 Label */}
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

                {/* Heading */}
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

                {/* --- Row 1: Business Impact --- */}
                <div className="w-full mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8 w-full justify-start md:justify-center"
                    >
                        <span className="text-white/50 font-bold tracking-[0.2em] uppercase text-xs">Business Impact</span>
                        <div className="h-[1px] flex-1 md:flex-none md:w-32 bg-white/10" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                        {businessOutcomes.map((outcome, i) => (
                            <OutcomeCard key={i} outcome={outcome} delay={i * 0.15} />
                        ))}
                    </div>
                </div>

                {/* --- Row 2: UX Impact --- */}
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8 w-full justify-start md:justify-center"
                    >
                        <span className="text-white/50 font-bold tracking-[0.2em] uppercase text-xs">UX Impact</span>
                        <div className="h-[1px] flex-1 md:flex-none md:w-32 bg-white/10" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                        {uxOutcomes.map((outcome, i) => (
                            <OutcomeCard key={i} outcome={outcome} delay={i * 0.15 + 0.3} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

