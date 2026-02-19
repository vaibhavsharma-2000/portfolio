import { motion } from 'framer-motion';
import { BookOpen, Search, Users } from 'lucide-react';

export function ReflectionSection() {
    return (
        <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Reflection Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    <div>
                        <h3 className="font-serif text-3xl mb-6 text-white/90">Reflections</h3>
                        <div className="space-y-4 text-white/50 text-sm leading-relaxed">
                            <p>
                                The hardest design decision in VERITY wasn't visual. It was about <span className="text-white/70 font-medium">what to leave out</span>. Luxury merchants drown in dashboards that show everything. My research revealed that they don't need more data; they need fewer, higher-confidence signals. Every metric in this system earned its place through a specific user story, not a feature checklist.
                            </p>
                            <p>
                                The dual-mode design system (dark for focused evening analysis, light for morning business review) came directly from contextual inquiry. Merchants described reviewing numbers at night on personal devices. That insight shaped the entire color architecture. Dark mode isn't a trend choice here; it's a usage-context response.
                            </p>
                            <p>
                                If I were to iterate further, I'd run a diary study with 8 to 10 merchants over two weeks. The current designs are grounded in interview data, but longitudinal observation would reveal habitual patterns, like whether the "morning profit check" is truly the first action, or if there's an unspoken step we haven't designed for yet.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">What I'd Explore Next</h4>
                        {[
                            { title: 'Diary Study with Merchants', desc: 'Two-week longitudinal study to validate daily usage patterns and uncover latent needs', color: '#27F59F', icon: BookOpen },
                            { title: 'Accessibility Audit', desc: 'WCAG 2.1 AA compliance pass covering contrast ratios, screen reader flows, and keyboard navigation', color: '#7B61FF', icon: Search },
                            { title: 'Usability Testing at Scale', desc: 'Moderated sessions with 12+ luxury brand managers to validate information hierarchy', color: '#F59E0B', icon: Users },
                        ].map((next, i) => {
                            const Icon = next.icon;
                            return (
                                <div key={i} className="flex gap-4 p-4 bg-white/[0.02] rounded-2xl border border-white/5 group hover:border-white/10 transition-all duration-500 hover:bg-white/[0.04]">
                                    {/* Dynamic SVG Icon */}
                                    <div className="relative shrink-0 mt-0.5 w-10 h-10 flex items-center justify-center rounded-[12px] bg-white/[0.03] border border-white/10 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 origin-center">
                                        <div
                                            className="absolute inset-0 rounded-[12px] blur-[6px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                                            style={{ backgroundColor: next.color }}
                                        />
                                        {Icon && <Icon size={18} style={{ color: next.color }} className="relative z-10" />}
                                    </div>
                                    <div>
                                        <p className="text-white/70 font-semibold text-sm">{next.title}</p>
                                        <p className="text-white/35 text-xs mt-1">{next.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 p-8 verity-card-dark rounded-[32px] border border-white/5 bg-[#111]"
                >
                    <div className="text-center md:text-left">
                        <p className="font-serif text-2xl mb-1 text-white">Experience the interface</p>
                        <p className="text-white/40 text-sm">Interactive prototype active on the live site</p>
                    </div>
                    <a
                        href="https://yang-dull-27767610.figma.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#7B61FF] text-white font-bold rounded-full hover:bg-[#6848FF] transition-all duration-300 shadow-[0_4px_24px_rgba(123,97,255,0.4)] hover:shadow-[0_4px_40px_rgba(123,97,255,0.6)] whitespace-nowrap"
                    >
                        Open live site
                        <span>↗</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
