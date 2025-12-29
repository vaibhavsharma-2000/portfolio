import { motion } from 'framer-motion';

const BentoGrid = () => {
    const cards = [
        { title: "User Research", subtitle: "SUS, UEQ, JTBD & Interviews", size: "md:col-span-2 md:row-span-2", color: "bg-brand/10" },
        { title: "UI/UX Design", subtitle: "Figma Design Systems", size: "md:col-span-1 md:row-span-1", color: "bg-white/5" },
        { title: "Front-end", subtitle: "HTML, CSS, React, JS, Tailwind", size: "md:col-span-1 md:row-span-2", color: "bg-blue-500/10" },
        { title: "Psychology & Data", subtitle: "SPSS, Jamovi, Mixed Methods", size: "md:col-span-1 md:row-span-1", color: "bg-white/5" },
        { title: "Strategy", subtitle: "Agile & Product Management", size: "md:col-span-2 md:row-span-1", color: "bg-white/5" },
    ];

    return (
        <section className="pb-24 px-6 max-w-7xl mx-auto bg-dark">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`${card.size} ${card.color} border border-white/10 rounded-3xl p-8 flex flex-col justify-end backdrop-blur-sm relative overflow-hidden group`}
                    >
                        {/* Glassmorphism Highlight */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-brand/20 transition-colors" />

                        <h3 className="text-xl font-sans font-semibold text-white mb-1">{card.title}</h3>
                        <p className="text-neutral-400 text-sm">{card.subtitle}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BentoGrid;