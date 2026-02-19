import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, DollarSign, TrendingUp, Users, BarChart3, Package, Target, Sparkles, Layers } from 'lucide-react';
import { toast } from 'sonner';

const suggestions = [
    { icon: DollarSign, label: "What's my true profit this week?", color: '#27F59F' },
    { icon: TrendingUp, label: 'Compare Google vs Meta ROAS', color: '#7B61FF' },
    { icon: Users, label: 'Identify at-risk VIP customers', color: '#F59E0B' },
    { icon: BarChart3, label: 'Show top performing creatives', color: '#3B82F6' },
    { icon: Package, label: 'Analyze return rate trends', color: '#FF4D4D' },
    { icon: Target, label: 'Forecast Q2 revenue', color: '#27F59F' },
];

export function AISearch() {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const handleSuggestionClick = (label) => {
        setValue('');
        setIsFocused(false);
        inputRef.current?.blur();
        toast('Verity AI is thinking...', {
            description: `Analyzing: "${label}"`,
            duration: 3000,
        });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && value.trim()) {
            toast('Verity AI is thinking...', {
                description: `Analyzing: "${value}"`,
                duration: 3000,
            });
            setValue('');
        }
        if (e.key === 'Escape') {
            setIsFocused(false);
            inputRef.current?.blur();
        }
    };

    return (
        <section className="py-32 px-8 md:px-20 bg-[#111] relative overflow-hidden">
            {/* Purple glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7B61FF]/8 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl relative z-10">
                {/* Label removed - moved to parent container */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="w-8 h-[1px] bg-[#7B61FF]" />
                    <span className="text-[#7B61FF] font-bold tracking-[0.3em] uppercase text-xs">Intelligence Layer</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-6xl leading-tight mb-4"
                >
                    Intelligence, on Demand.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/40 text-lg mb-16 leading-relaxed"
                >
                    A global command center that predicts intent. The search bar reveals AI-powered actions when focused, eliminating the need to navigate between dashboards.
                </motion.p>

                {/* Interactive Search Demo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                >
                    {/* Context label */}
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-white/30 text-xs uppercase tracking-widest font-bold">↓ Try it: click the search bar</p>
                        <div className="flex items-center gap-1.5 text-white/20 text-xs font-mono">
                            <kbd className="px-2 py-0.5 rounded bg-white/5 border border-white/10">⌘K</kbd>
                            <span>to focus</span>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className={`relative group transition-all duration-300 ${isFocused ? 'verity-glow' : ''}`}>
                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                            <Search
                                size={18}
                                className="transition-colors duration-300"
                                style={{ color: isFocused ? '#7B61FF' : 'rgba(255,255,255,0.3)' }}
                            />
                        </div>

                        <input
                            ref={inputRef}
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask Verity to analyze..."
                            className={`w-full h-14 md:h-16 bg-[#1A1A1A] border pl-14 pr-20 text-white placeholder:text-white/25 focus:outline-none transition-all duration-300 font-mono text-base ${isFocused
                                ? 'rounded-t-2xl rounded-b-none border-[#7B61FF]/50 border-b-transparent bg-[#1E1E1E]'
                                : 'rounded-2xl border-white/8 hover:border-white/15'
                                }`}
                        />

                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <div className="px-2 py-1 rounded-lg bg-white/5 border border-white/8 text-[10px] text-white/30 font-mono">
                                {isFocused ? 'ESC' : '⌘K'}
                            </div>
                        </div>
                    </div>

                    {/* Dropdown */}
                    <AnimatePresence>
                        {isFocused && !value && (
                            <motion.div
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.15 }}
                                className="absolute left-0 right-0 top-full rounded-b-2xl border border-t-0 border-[#7B61FF]/50 bg-[#1E1E1E]/98 backdrop-blur-xl z-50 overflow-hidden shadow-2xl"
                            >
                                {/* Dropdown header */}
                                <div className="px-5 pt-4 pb-2 flex items-center gap-2">
                                    <Sparkles size={12} className="text-[#7B61FF]" />
                                    <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                                        Try asking Verity AI
                                    </span>
                                </div>

                                {/* Suggestions */}
                                <div className="px-2 pb-2 space-y-0.5">
                                    {suggestions.map((suggestion, i) => (
                                        <button
                                            key={i}
                                            /* *** Race condition fix: onMouseDown + e.preventDefault() *** */
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                handleSuggestionClick(suggestion.label);
                                            }}
                                            className="flex items-center gap-3 w-full px-3 py-3 rounded-xl text-left transition-all duration-150 hover:bg-white/5 group/item"
                                        >
                                            <div
                                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-110"
                                                style={{ backgroundColor: `${suggestion.color}15`, color: suggestion.color }}
                                            >
                                                <suggestion.icon size={15} />
                                            </div>
                                            <span className="text-sm text-white/50 group-hover/item:text-white transition-colors font-mono">
                                                {suggestion.label}
                                            </span>
                                            <span className="ml-auto text-[10px] text-white/20 font-mono opacity-0 group-hover/item:opacity-100 transition-opacity">
                                                Enter
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="px-5 py-3 flex items-center justify-between border-t border-white/5 bg-white/[0.02]">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#27F59F] animate-pulse" />
                                        <span className="text-[10px] text-white/25 font-mono">
                                            Powered by Verity Intelligence
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-white/25 font-mono">Tab</kbd>
                                        <span className="text-[9px] text-white/20">to navigate</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Technical note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { title: 'Flattened Architecture', desc: 'Replaces deep, multi-level menus with a global command layer, letting users jump directly to insights.', icon: Layers },
                        { title: 'Anticipatory Design', desc: 'Contextual suggestions appear before typing, predicting high-value Jobs To Be Done to reduce cognitive load.', icon: Sparkles },
                        { title: 'In-Context Resolution', desc: 'Inline feedback eliminates page reloads, preserving focus so merchants can decide without losing their place.', icon: Target },
                    ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 group hover:border-[#7B61FF]/30 transition-all duration-500 hover:bg-white/[0.04]">
                                {/* Dynamic SVG Icon */}
                                <div className="relative mb-6 w-10 h-10 flex items-center justify-center rounded-[12px] bg-white/[0.03] border border-white/10 group-hover:scale-110 group-hover:border-[#7B61FF]/40 transition-all duration-500 origin-left">
                                    <div
                                        className="absolute inset-0 rounded-[12px] blur-[6px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-[#7B61FF]"
                                    />
                                    {Icon && <Icon size={18} className="relative z-10 text-[#7B61FF]" />}
                                </div>

                                <h4 className="font-bold text-white/90 mb-2 text-sm uppercase tracking-[0.15em]">{item.title}</h4>
                                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
