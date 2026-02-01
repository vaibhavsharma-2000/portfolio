import { Section } from "./Section";
import { Github, ExternalLink, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/10 py-20">
            <Section>
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">

                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-black text-white tracking-tighter mb-2">ANIMIND</h2>
                        <p className="text-[#555] text-sm">© 2026. Designed & Built by Vaibhav Sharma.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <a href="https://animind-v2.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#e63946] hover:bg-[#ff4d6d] text-white font-bold uppercase tracking-widest text-sm rounded-full transition-colors">
                            View Live Project <ExternalLink className="w-4 h-4" />
                        </a>
                        <a href="https://github.com/vaibhavsharma-2000/animind" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-full transition-colors border border-white/10">
                            View GitHub <Github className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="flex gap-6 text-[#b0b0b0]">
                        <a href="https://www.linkedin.com/in/vaibhavsharma2000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="mailto:vb.vaibhav99@gmail.com" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                    </div>

                </div>
            </Section>
        </footer>
    );
}
