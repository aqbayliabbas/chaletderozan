"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowSquareOut, Compass } from "@phosphor-icons/react";

const activities = [
    {
        category: "L'HORIZON",
        title: "Fort du Saint-Eynard",
        desc: "Un balcon naturel suspendu à 1300m d'altitude, accessible à pied depuis le domaine.",
        image: "/photos/chalet/chalet (2).jpg",
    },
    {
        category: "L'ALTITUDE",
        title: "Massif de Chamrousse",
        desc: "Le royaume du ski et des panoramas flamboyants sur le Vercors au soleil couchant.",
        image: "/photos/chalet/chalet (12).jpg",
    },
    {
        category: "L'ESPRIT",
        title: "Musée de Grenoble",
        desc: "Une escale de culture urbaine classée parmi les plus riches pinacothèques d'Europe.",
        image: "/photos/chalet/chalet (30).jpg",
    },
    {
        category: "L'ASCENSION",
        title: "Les Bulles de la Bastille",
        desc: "Survolez l'Isère pour rejoindre les fortifications et dominer la cité alpine.",
        image: "/photos/chalet/chalet (10).jpg",
    },
];

const ActivitesPage = () => {
    return (
        <main className="bg-paper min-h-screen selection:bg-rolex-green selection:text-paper">
            <Navbar isLightBackground />

            <section className="pt-48 pb-40">
                <div className="container mx-auto px-8">
                    <div className="max-w-5xl mb-40">
                        <span className="font-sans text-[12px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">EXPLORATIONS LOCALES</span>
                        <h1 className="text-7xl md:text-[130px] font-serif text-ink italic leading-[0.8] tracking-tighter mb-16">Le temps de <br /><span className="text-rolex-green">l'émerveillement.</span></h1>
                        <p className="text-3xl font-serif italic text-ink/40 leading-relaxed max-w-3xl font-light">
                            "Entre la rudesse bienveillante des cimes et l'élégance du centre historique, le Domaine de Rozan est le point d'équilibre parfait."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-48">
                        {activities.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="group flex flex-col"
                            >
                                <div className="relative aspect-[16/10] mb-16 overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border-[10px] border-white group-hover:shadow-[0_50px_100px_-25px_rgba(0,61,36,0.25)] transition-all duration-1000">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover grayscale-[0.2] transition-transform duration-[1.5s] group-hover:scale-105"
                                    />
                                    <div className="absolute top-10 left-10 apple-glass py-3 px-8 border border-white/20 rounded-full shadow-xl">
                                        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-rolex-green font-bold">{item.category}</span>
                                    </div>
                                </div>

                                <h3 className="text-5xl font-serif text-ink mb-8 italic tracking-tight">{item.title}</h3>
                                <p className="font-serif italic text-ink/60 text-2xl leading-relaxed mb-12 flex-1 font-light">{item.desc}</p>

                                <div className="pt-10 border-t border-ink/5 flex justify-between items-center mt-auto">
                                    <button className="font-sans text-[11px] uppercase tracking-[0.4em] text-rolex-gold font-bold hover:text-rolex-green transition-all flex items-center gap-4 group/btn">
                                        DÉCOUVRIR —
                                        <ArrowSquareOut size={16} weight="thin" className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ActivitesPage;
