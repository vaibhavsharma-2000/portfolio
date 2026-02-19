import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const tokens = [
    { label: 'Background', dark: '#121212', light: '#F5F5F7' },
    { label: 'Card', dark: '#1E1E1E', light: '#FFFFFF' },
    { label: 'Accent', dark: '#7B61FF', light: '#7B61FF' },
    { label: 'Success', dark: '#27F59F', light: '#16A085' },
    { label: 'Alert', dark: '#FF4D4D', light: '#E53E3E' },
];

export function DesignSystemSection() {
    const [isDark, setIsDark] = useState(true);

    const bg = isDark ? '#121212' : '#F5F5F7';
    const cardBg = isDark ? '#1E1E1E' : '#FFFFFF';
    const textPrimary = isDark ? '#FFFFFF' : '#1A1A1A';
    const textMuted = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
    const cardShadow = isDark
        ? 'inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.3)'
        : '0 8px 30px rgba(0,0,0,0.08)';

    return (
        <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="w-8 h-[1px] bg-[#F59E0B]" />
                    <span className="text-[#F59E0B] font-bold tracking-[0.3em] uppercase text-xs">Design System</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-6xl leading-tight mb-4"
                >
                    Adaptive by Design.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-white/40 text-lg mb-16 max-w-2xl leading-relaxed"
                >
                    VERITY ships with a dual-mode system: a deep dark UI built for focus, and a clean light UI for daytime business review. Both modes are fully built in Figma with component-level overrides.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left: Toggle + Live preview */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Mode toggle */}
                        <div className="flex items-center gap-4 mb-8">
                            <button
                                onClick={() => setIsDark(true)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${isDark
                                    ? 'bg-[#7B61FF] text-white shadow-[0_0_20px_rgba(123,97,255,0.4)]'
                                    : 'bg-white/5 text-white/40 hover:bg-white/10'
                                    }`}
                            >
                                <Moon size={15} />
                                Dark Mode
                            </button>
                            <button
                                onClick={() => setIsDark(false)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${!isDark
                                    ? 'bg-[#7B61FF] text-white shadow-[0_0_20px_rgba(123,97,255,0.4)]'
                                    : 'bg-white/5 text-white/40 hover:bg-white/10'
                                    }`}
                            >
                                <Sun size={15} />
                                Light Mode
                            </button>
                        </div>

                        {/* Live Card Preview */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isDark ? 'dark' : 'light'}
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-2xl overflow-hidden"
                                style={{ background: bg, padding: '24px' }}
                            >
                                {/* Mini dashboard card */}
                                <div
                                    className="rounded-2xl p-5 mb-4"
                                    style={{
                                        background: cardBg,
                                        border: `1px solid ${borderColor}`,
                                        boxShadow: cardShadow,
                                    }}
                                >
                                    <p className="text-[10px] uppercase tracking-widest font-bold mb-3" style={{ color: textMuted }}>
                                        True Profit Card
                                    </p>
                                    <p className="font-mono text-2xl font-bold mb-1" style={{ color: '#27F59F' }}>
                                        €33,000
                                    </p>
                                    <p className="text-xs" style={{ color: textMuted }}>Net profit after all deductions</p>
                                    <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ background: isDark ? '#2A2A2A' : '#E5E5E5' }}>
                                        <div className="h-full rounded-full" style={{ width: '33%', background: '#27F59F' }} />
                                    </div>
                                </div>

                                {/* Sidebar pill preview */}
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 rounded-2xl flex flex-col items-center py-3 gap-3"
                                        style={{
                                            background: cardBg,
                                            border: `1px solid ${borderColor}`,
                                            boxShadow: cardShadow,
                                        }}
                                    >
                                        {[0, 1, 2, 3].map((j) => (
                                            <div
                                                key={j}
                                                className="w-4 h-4 rounded-md"
                                                style={{ background: j === 0 ? '#7B61FF' : isDark ? '#2A2A2A' : '#E5E5E5' }}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="rounded-xl p-3" style={{ background: cardBg, border: `1px solid ${borderColor}` }}>
                                            <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: '#FF4D4D' }}>Marketplace Fees</p>
                                            <p className="font-mono text-sm font-bold" style={{ color: '#FF4D4D' }}>-€2,100</p>
                                        </div>
                                        <div className="rounded-xl p-3" style={{ background: cardBg, border: `1px solid ${borderColor}` }}>
                                            <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: textMuted }}>Return Rate</p>
                                            <p className="font-mono text-sm font-bold" style={{ color: textPrimary }}>12.4%</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-4 text-center text-[9px] uppercase tracking-widest font-bold" style={{ color: textMuted }}>
                                    {isDark ? '— Dark Mode —' : '— Light Mode —'}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Effect specs — moved here to balance column heights */}
                        <div className="mt-8">
                            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Visual Effects</p>
                            <div className="space-y-2">
                                {[
                                    { mode: 'Dark', name: 'Glassmorphism Cards', spec: 'backdrop-filter: blur(20px) · border: 1px rgba(255,255,255,0.08)' },
                                    { mode: 'Light', name: 'Flat + Drop Shadow', spec: 'box-shadow: 0 8px 30px rgba(0,0,0,0.08) · no blur' },
                                ].map((fx, i) => (
                                    <div key={i} className="flex gap-3 p-3 bg-white/3 rounded-xl border border-white/5">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B61FF] shrink-0 mt-0.5 w-10">{fx.mode}</span>
                                        <div>
                                            <p className="text-white/60 text-sm font-medium">{fx.name}</p>
                                            <p className="text-white/25 text-[10px] leading-relaxed">{fx.spec}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Token table */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Color tokens */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Color Tokens</p>
                            <div className="space-y-3">
                                {tokens.map((token, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="flex gap-2">
                                            <div
                                                className="w-8 h-8 rounded-lg border border-white/10"
                                                style={{ backgroundColor: token.dark }}
                                                title={`Dark: ${token.dark}`}
                                            />
                                            <div
                                                className="w-8 h-8 rounded-lg border border-white/10"
                                                style={{ backgroundColor: token.light }}
                                                title={`Light: ${token.light}`}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white/70 text-sm font-medium">{token.label}</p>
                                            <p className="text-white/25 text-[10px] font-mono">{isDark ? token.dark : token.light}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Typography */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Typography</p>
                            <div className="space-y-4">
                                <div className="verity-card-dark p-6">
                                    <div className="flex justify-between items-end mb-4 pb-4 border-b border-white/5">
                                        <div>
                                            <p className="font-sans text-3xl font-semibold text-white">SF Pro Display</p>
                                            <p className="text-white/40 text-xs mt-1">Primary Face · Headings & UI</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/50 font-mono">Aa</span>
                                        </div>
                                    </div>

                                    {/* Type Scale Visual */}
                                    <div className="space-y-3">
                                        <div className="flex items-baseline justify-between group">
                                            <p className="text-white/90 text-2xl font-bold">Headline 1</p>
                                            <p className="text-white/20 text-[10px] font-mono group-hover:text-[#7B61FF] transition-colors">48px / Bold</p>
                                        </div>
                                        <div className="flex items-baseline justify-between group">
                                            <p className="text-white/80 text-xl font-semibold">Headline 2</p>
                                            <p className="text-white/20 text-[10px] font-mono group-hover:text-[#7B61FF] transition-colors">32px / Semibold</p>
                                        </div>
                                        <div className="flex items-baseline justify-between group">
                                            <p className="text-white/70 text-base">Body Text</p>
                                            <p className="text-white/20 text-[10px] font-mono group-hover:text-[#7B61FF] transition-colors">16px / Regular</p>
                                        </div>
                                        <div className="flex items-baseline justify-between group">
                                            <p className="text-white/50 text-xs uppercase tracking-widest font-bold">Caption / Label</p>
                                            <p className="text-white/20 text-[10px] font-mono group-hover:text-[#7B61FF] transition-colors">12px / Bold / Caps</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="verity-card-dark p-4 flex items-center justify-between">
                                    <div>
                                        <p className="font-mono text-lg text-[#27F59F]">JetBrains Mono</p>
                                        <p className="text-white/30 text-xs mt-1">Data Tables & Financials</p>
                                    </div>
                                    <div className="text-right space-y-1">
                                        <p className="text-white/50 text-xs font-mono">1,234.56</p>
                                        <p className="text-[#FF4D4D] text-xs font-mono">-12.5%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
