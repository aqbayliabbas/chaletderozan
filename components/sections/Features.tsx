"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";

const features = [
    {
        title: "PULSATION",
        subtitle: "Énergie Positive",
        image: "/photos/chalet/chalet (1).jpg",
        desc: "Plutôt que de consumer ses ressources, la demeure capte la course du soleil pour pulser sa propre énergie. Une symbiose totale.",
    },
    {
        title: "SOUFFLE",
        subtitle: "Piscine Biologique",
        image: "/photos/chalet/chalet (10).jpg",
        desc: "Une eau qui chante le récit des sommets, filtrée par le vivant, pour une immersion qui ressource l'âme autant que le corps.",
    },
    {
        title: "MÉMOIRE",
        subtitle: "Héritage 1903",
        image: "/photos/chalet/chalet (40).jpg",
        desc: "Les murs de pierre conservent la fraîcheur des siècles passés, tandis que le bois de pays insuffle une chaleur moderne et saine.",
    },
    {
        title: "ÉVEIL",
        subtitle: "Face au Belledonne",
        image: "/photos/chalet/chalet (70).jpg",
        desc: "Ouvrir les yeux sur la cime enneigée, là où l'aube embrasse les massifs avant de glisser vers la cité grenobloise.",
    },
];

const Features = () => {
    return (
        <section className="py-40 bg-paper relative overflow-hidden">
            {/* Decorative Parallax Text Background */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
                <span className="text-[40vw] font-serif italic text-ink whitespace-nowrap -rotate-12 translate-y-40">Rozan Domus</span>
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-1/3 sticky top-40"
                    >
                        <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-gold font-bold mb-10 block">PHILOSOPHIE DU LIEU</span>
                        <h2 className="text-6xl md:text-7xl font-serif text-ink mb-12 leading-[0.9] tracking-tighter">
                            Réinventer <br /> <span className="italic text-rolex-green">le luxe sauvage.</span>
                        </h2>
                        <div className="w-16 h-px bg-rolex-gold mb-12"></div>
                        <p className="text-2xl text-ink/70 font-serif font-light leading-relaxed italic">
                            "Rozan n'est pas un hôtel. C'est le sanctuaire de ceux qui pensent que la sobriété est la forme ultime de l'élégance."
                        </p>
                    </motion.div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="group"
                            >
                                <div className="relative aspect-video mb-12 overflow-hidden rounded-sm border-4 border-white shadow-xl rotate-[1deg] group-hover:rotate-0 transition-transform duration-700">
                                    <Image
                                        src={feature.image}
                                        alt={feature.subtitle}
                                        fill
                                        className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div className="flex items-center gap-6 mb-8 group-hover:translate-x-2 transition-transform duration-700">
                                    <span className="font-serif italic text-3xl text-rolex-gold/30">0{idx + 1}</span>
                                    <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-rolex-green font-bold">
                                        {feature.title}
                                    </span>
                                </div>
                                <h3 className="text-4xl font-serif text-ink mb-8 italic">{feature.subtitle}</h3>
                                <p className="text-xl text-ink/60 font-serif font-light leading-relaxed italic mb-8">{feature.desc}</p>
                                <div className="w-0 h-[2px] bg-rolex-gold group-hover:w-full transition-all duration-1000 origin-left" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
