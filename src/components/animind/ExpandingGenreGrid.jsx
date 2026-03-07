import { ChevronRight } from 'lucide-react';

export function ExpandingGenreGrid() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#121212] rounded-xl border border-white/10">
            {/* 1. Action Card (Collapsed State) */}
            <div className="
            relative rounded-2xl transition-all duration-500 ease-out cursor-pointer overflow-hidden border border-white/5
            col-span-1 row-span-1 bg-white/5 hover:bg-[#ff4d6d]/20 hover:border-[#ff4d6d]/50 hover:scale-[1.02] active:scale-95
            flex items-center justify-center min-h-[120px]
        ">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <h3 className="text-sm md:text-xl font-bold text-white uppercase tracking-widest text-center">
                        Action
                    </h3>
                </div>
            </div>

            {/* 2. Action Card (Expanded State) */}
            <div className="
            relative rounded-2xl transition-all duration-500 ease-out overflow-hidden border border-white/5
            col-span-1 md:col-span-3 row-span-1 md:row-span-2 bg-[#121212] border-[#e63946]/30 ring-1 ring-[#e63946]/20 z-10
        ">
                <div className="h-full flex flex-col p-3 md:p-8 pb-1">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-serif">Action</h2>
                            <div className="h-1 w-20 bg-[#e63946] rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                        <AnimeCard
                            title="Demon Slayer: Kimetsu no Yaiba"
                            img="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBl0ClmgYL.jpg"
                        />
                        <AnimeCard
                            title="My Hero Academia"
                            img="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-nYh85uj2Fuwr.jpg"
                        />
                        <AnimeCard
                            title="Hunter x Hunter (2011)"
                            img="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-y5gsT1hoHuHw.png"
                        />
                        <AnimeCard
                            title="ONE PIECE"
                            img="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg"
                        />
                        <AnimeCard
                            title="Fullmetal Alchemist: Brotherhood"
                            img="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5114-nSWCgQlmOMtj.jpg"
                        />
                    </div>

                    <div className="mt-auto pt-4 flex justify-end">
                        <a className="text-sm font-bold text-[#b0b0b0] hover:text-white uppercase tracking-widest flex items-center gap-1 transition-colors cursor-pointer">
                            View All Action <ChevronRight className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AnimeCard({ title, img }) {
    return (
        <div className="group relative rounded-lg overflow-hidden bg-[#121212] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#f80000] hover:ring-1 hover:ring-[#ff4d6d]">
            <div className="aspect-[2/3] w-full relative">
                <img alt={title} loading="lazy" className="w-full h-full object-cover" src={img} />
            </div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white font-bold truncate text-xs md:text-sm">{title}</h3>
            </div>
        </div>
    );
}
