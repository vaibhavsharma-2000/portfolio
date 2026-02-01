import { Section } from "./Section";
import { Search, Bell, ScanEye } from "lucide-react";

export function DesignSystem() {
    return (
        <Section className="bg-[#050505] overflow-hidden">
            <div className="mb-16 text-center">
                <h2 className="text-[#e63946] text-sm font-bold tracking-widest uppercase mb-4">
                    04 — The Design System
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    "Neural UI" Language
                </h3>
                <p className="text-[#b0b0b0] max-w-2xl mx-auto">
                    A "Dark Mode First" identity that uses neon accents and glassmorphism to guide user attention without overwhelming the dense information.
                </p>
            </div>

            {/* Typography */}
            <div className="mb-24">
                <h4 className="text-white text-lg font-bold mb-8 border-b border-white/10 pb-2">Typography</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <div className="space-y-8">
                            <div>
                                <p className="text-[#b0b0b0] text-xs uppercase tracking-widest mb-2">Primary Font — Outfit</p>
                                <div className="text-white text-5xl md:text-6xl font-black tracking-tighter">
                                    Aa Bb Cc
                                </div>
                            </div>
                            <div>
                                <p className="text-[#b0b0b0] text-xs uppercase tracking-widest mb-2">Secondary Font — Playfair Display</p>
                                <div className="text-white text-4xl md:text-5xl font-serif italic">
                                    Aa Bb Cc
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <TypeSpec label="Main Headings" weight="Black (900)" style="Tight Tracking" example="ANIMIND" className="font-black tracking-tighter text-3xl text-white" />
                        <TypeSpec label="Body & Sub" weight="Light (300)" style="Regular" example="The quick brown fox jumps over the lazy dog." className="font-light text-white/80" />
                        <TypeSpec label="UI Elements" weight="Bold (700)" style="Uppercase" example="ANALYZE VIBE" className="font-bold uppercase tracking-widest text-[#e63946]" />
                    </div>
                </div>
            </div>

            {/* Color Palette */}
            <div className="mb-24">
                <h4 className="text-white text-lg font-bold mb-8 border-b border-white/10 pb-2">Color Palette</h4>
                <div className="p-8 rounded-xl bg-[rgb(26,26,26)] border border-white/5">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <ColorSwatch name="Anime Black" hex="#050505" bg="bg-[#050505]" text="text-white" />
                        <ColorSwatch name="Anime Card" hex="#121212" bg="bg-[#121212]" text="text-white" />
                        <ColorSwatch name="Anime Red" hex="#e63946" bg="bg-[#e63946]" text="text-white" />
                        <ColorSwatch name="Anime Glow" hex="#ff4d6d" bg="bg-[#ff4d6d]" text="text-black" />
                        <ColorSwatch name="Anime Gray" hex="#b0b0b0" bg="bg-[#b0b0b0]" text="text-black" />
                    </div>
                </div>
            </div>

            {/* Components */}
            <div>
                <h4 className="text-white text-lg font-bold mb-8 border-b border-white/10 pb-2">Component Library</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Smart Search Bar */}
                    <div className="bg-[#0a0a0a] p-8 rounded-xl border border-white/5 flex flex-col justify-center items-center gap-6">
                        <span className="text-[#b0b0b0] text-xs uppercase tracking-widest self-start">Smart Search Bar</span>
                        <div className="w-full">
                            <div className="mb-2 text-xs text-[#555]">Default</div>
                            <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center text-[#b0b0b0] text-sm">
                                <Search className="w-4 h-4 mr-2" /> Search for anime...
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="mb-2 text-xs text-[#555]">Active</div>
                            <div className="bg-black border border-[#ff4d6d] shadow-[0_0_15px_rgba(255,77,109,0.2)] rounded-full px-4 py-2 flex items-center text-white text-sm">
                                <Search className="w-4 h-4 mr-2 text-[#ff4d6d]" /> Cyberpunk|
                            </div>
                        </div>
                    </div>

                    {/* Notification Bell */}
                    <div className="bg-[#0a0a0a] p-8 rounded-xl border border-white/5 flex flex-col justify-center items-center gap-6">
                        <span className="text-[#b0b0b0] text-xs uppercase tracking-widest self-start">Notification Bell</span>
                        <div className="flex gap-12 items-start justify-center w-full">
                            {/* Idle State */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="text-xs text-[#555]">Idle</div>
                                <button className="p-2.5 rounded-full text-[#b0b0b0] hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 relative group">
                                    <Bell className="w-5 h-5 transform transition-transform group-hover:rotate-12" strokeWidth={2} />
                                </button>
                            </div>

                            {/* Hover State (Simulated) */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="text-xs text-[#555]">Hover</div>
                                <button className="p-2.5 rounded-full text-white bg-white/10 scale-110 relative group cursor-default">
                                    <Bell className="w-5 h-5 rotate-12" strokeWidth={2} />
                                </button>
                            </div>

                            {/* Active State */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="text-xs text-[#555]">Active</div>
                                <button className="p-2.5 rounded-full text-[#b0b0b0] hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 relative group">
                                    <Bell className="w-5 h-5 transform transition-transform group-hover:rotate-12" strokeWidth={2} />
                                    <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#e63946] text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-[#050505]">
                                        2
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Vision Button */}
                    <div className="bg-[#0a0a0a] p-8 rounded-xl border border-white/5 flex flex-col justify-center items-center gap-6">
                        <span className="text-[#b0b0b0] text-xs uppercase tracking-widest self-start">Vision Button</span>
                        <div className="flex flex-col gap-6 w-full items-center">
                            {/* Idle State */}
                            <div className="flex items-center gap-4 w-full justify-between px-8 border-b border-white/5 pb-4">
                                <div className="text-xs text-[#555] w-12">Idle</div>
                                <button className="text-sm font-medium transition-all duration-300 hover:scale-110 active:scale-95 text-gray-400 hover:text-white flex items-center gap-2">
                                    <ScanEye className="w-[18px] h-[18px]" strokeWidth={2} />
                                    Vision
                                </button>
                            </div>

                            {/* Hover State (Simulated) */}
                            <div className="flex items-center gap-4 w-full justify-between px-8 border-b border-white/5 pb-4">
                                <div className="text-xs text-[#555] w-12">Hover</div>
                                <button className="text-sm font-medium transition-all duration-300 scale-110 text-white flex items-center gap-2 cursor-default">
                                    <ScanEye className="w-[18px] h-[18px]" strokeWidth={2} />
                                    Vision
                                </button>
                            </div>

                            {/* Active State */}
                            <div className="flex items-center gap-4 w-full justify-between px-8">
                                <div className="text-xs text-[#555] w-12">Active</div>
                                <button className="text-sm transition-all duration-300 text-[#e63946] font-bold flex items-center gap-2 cursor-default">
                                    <ScanEye className="w-[18px] h-[18px]" strokeWidth={2} />
                                    Vision
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

function TypeSpec({ label, weight, style, example, className }) {
    return (
        <div className="border-l-2 border-white/10 pl-4">
            <div className="flex justify-between text-xs text-[#b0b0b0] mb-1">
                <span>{label}</span>
                <span>{weight} / {style}</span>
            </div>
            <div className={className}>{example}</div>
        </div>
    );
}

function ColorSwatch({ name, hex, bg }) {
    return (
        <div className="group">
            <div className={`h-24 rounded-lg mb-3 ${bg} border border-white/10 shadow-lg`} />
            <div className="text-white font-bold text-sm">{name}</div>
            <div className="text-[#b0b0b0] text-xs font-mono">{hex}</div>
        </div>
    );
}
