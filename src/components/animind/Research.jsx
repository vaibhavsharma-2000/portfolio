import { motion } from "motion/react";
import { Section } from "./Section";
import { ImageWithFallback } from "./ImageWithFallback";

export function Research() {
    return (
        <Section className="relative bg-[#050505]">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-[#e63946] text-sm font-bold tracking-widest uppercase mb-4">
                    02 — Research & Strategy
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Synthesizing User Needs with AI
                </h3>
                <p className="text-[#b0b0b0] text-lg">
                    Leveraging Gemini 3 Thinking to rapidly analyze community patterns.
                </p>
                <p className="text-[#b0b0b0] mt-4 max-w-2xl mx-auto font-light leading-relaxed">
                    To accelerate the sprint timeline, I utilized Gemini 3 Thinking as a Lead Researcher.
                    By analyzing aggregated discussion patterns, we synthesized two distinct user archetypes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <PersonaCard
                    name="Sarah"
                    title="The Mood Watcher"
                    archetype="Casual Viewer / The 'Vibe' Seeker"
                    avatar="https://images.unsplash.com/photo-1612180767923-91c5b42d84dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBwb3J0cmFpdCUyMG5lb24lMjBsaWdodGluZyUyMGN5YmVycHVuayUyMHN0eWxlfGVufDF8fHx8MTc2OTkwNzQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    goal="Wants to find a show with a specific visual atmosphere instantly."
                    frustrations={[
                        "Overwhelmed by massive catalogs",
                        "Hates starting shows with art styles she dislikes",
                        "Stuck in 'recommendation loops'"
                    ]}
                />
                <PersonaCard
                    name="Kenji"
                    title="The Archivist"
                    archetype="Power User / The Seasoned Otaku"
                    avatar="https://images.unsplash.com/photo-1649325886587-ffd6c08762d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwcG9ydHJhaXQlMjBnbGFzc2VzJTIwbmVvbiUyMGxpZ2h0aW5nJTIwY3liZXJwdW5rJTIwc3R5bGV8ZW58MXx8fHwxNzY5OTA3NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    goal="A centralized dashboard to track progress and discover deep-cut recommendations based on data, not hype."
                    frustrations={[
                        "Watchlist scattered across 3 apps",
                        "Loses track of seasonal progress",
                        "Generic 'Top 10' lists offer no value"
                    ]}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#121212] to-[#0a0a0a] border border-white/10 p-10 md:p-16 rounded-2xl text-center relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e63946] to-[#ff4d6d]" />

                <h4 className="text-sm font-bold text-[#b0b0b0] uppercase tracking-widest mb-6">
                    Job Story (JTBD)
                </h4>

                <blockquote className="text-xl md:text-2xl italic text-white leading-relaxed">
                    "When I crave a new anime with a specific visual aesthetic, <span className="text-[#ff4d6d]">I want to visually scan the entire global catalog and bypass limited subscription algorithms</span> so that I can discover the perfect stylistic match regardless of which platform owns the license."
                </blockquote>
            </motion.div>
        </Section>
    );
}

function PersonaCard({ name, title, archetype, avatar, goal, frustrations }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#121212] border border-white/5 p-8 rounded-xl hover:border-[#e63946]/50 transition-colors group flex flex-col h-full"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#e63946]/50 transition-colors shrink-0 relative">
                    <ImageWithFallback
                        src={avatar}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-white flex flex-col md:block">
                        {name} <span className="text-[#b0b0b0] font-light text-lg md:ml-2">({title})</span>
                    </h4>
                    <p className="text-[#ff4d6d] font-mono text-xs uppercase tracking-wider mt-1">{archetype}</p>
                </div>
            </div>

            <div className="space-y-6 flex-grow">
                <div>
                    <span className="text-xs text-[#b0b0b0] uppercase tracking-widest block mb-2 font-bold">Goal</span>
                    <p className="text-white font-light leading-relaxed">{goal}</p>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div>
                    <span className="text-xs text-[#b0b0b0] uppercase tracking-widest block mb-2 font-bold">Frustrations</span>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-white font-light leading-relaxed">
                        {frustrations.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
