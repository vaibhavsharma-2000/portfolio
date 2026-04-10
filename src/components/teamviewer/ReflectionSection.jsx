import { motion } from 'framer-motion';

export function ReflectionSection() {
    return (
        <>
            <section className="py-28 px-6 md:px-20 bg-[#0a0a0a] relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 mb-14"
                    >
                        <div className="w-8 h-[1px] bg-[#4361EE]" />
                        <span className="text-[#4361EE] font-bold tracking-[0.3em] uppercase text-xs">Reflection</span>
                        <div className="w-8 h-[1px] bg-[#4361EE]" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-white/90 mb-14"
                    >
                        A great researcher catches what even the most talented designer might{' '}
                        <span className="text-[#4361EE]">scroll past</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-left max-w-2xl mx-auto space-y-6"
                    >
                        <p className="text-white/45 text-lg leading-relaxed">
                            My internship at TeamViewer taught me something design school doesn't always say out loud —
                            the research function is a strategic lever, not a support function.
                        </p>
                        <p className="text-white/45 text-lg leading-relaxed">
                            When you bring objective frameworks to subjective debates, ego leaves the room and the work
                            gets better. When you automate the boring parts, you free the team to focus on the fascinating ones.
                            And when you make past research searchable, you turn every study into a compounding asset.
                        </p>
                        <p className="text-white/45 text-lg leading-relaxed">
                            These weren't just lessons in methodology — they were lessons in how to make research
                            impossible to ignore.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4361EE]/5 blur-[250px] rounded-full pointer-events-none" />
            </section>

            {/* Footer strip */}
            <div className="border-t border-white/5 py-12 px-6 md:px-20 text-center bg-[#0a0a0a]">
                <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
                    TeamViewer · UX Research Intern · Vaibhav Sharma · 2025–2026
                </p>
            </div>
        </>
    );
}
