"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Sun, Wind, Heart, Lightning, Mountains, Tree, HouseLine } from "@phosphor-icons/react";

const HistoirePage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <main ref={containerRef} className="bg-paper min-h-screen selection:bg-rolex-green selection:text-paper overflow-x-hidden">
            <Navbar isLightBackground />

            {/* Hero Section - Vertical Title & Archive Image */}
            <section className="relative min-h-screen pt-40 pb-20 overflow-hidden">
                <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-5 z-20">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="font-sans text-[11px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-8 block"
                        >
                            LA GENÈSE DU DOMAINE
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[100px] md:text-[180px] font-serif text-ink italic leading-[0.75] tracking-tighter mb-12"
                        >
                            His <br /> toire.
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-4"
                        >
                            <span className="font-serif text-3xl text-rolex-green block italic">La Tronche, métropole de Grenoble.</span>
                            <div className="flex items-center gap-4 text-ink/30 italic font-serif text-xl border-l border-rolex-gold pl-6 py-2">
                                <Mountains size={20} weight="thin" />
                                <span>Contreforts de la Chartreuse, Isère.</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        style={{ y }}
                        className="lg:col-span-7 relative z-10"
                    >
                        <div className="relative aspect-[4/5] lg:aspect-square rounded-sm overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.4)] border-[15px] border-white rotate-2 group">
                            <Image
                                src="/photos/cabane.webp"
                                alt="Le Chalet de Rozan - Fondation 1903"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]"
                            />
                            <div className="absolute top-6 left-6 apple-glass px-4 py-2 border border-white/20 rounded-full z-20">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-ink">ARCHIVE // 1903</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative background text */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[40vw] font-serif italic whitespace-nowrap -rotate-90">Fondation</span>
                </div>
            </section>

            {/* Section 1: L'Architecture Bioclimatique d'Antan */}
            <section className="py-40 bg-ink text-paper relative">
                <div className="container mx-auto px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
                            <div>
                                <h2 className="text-6xl font-serif italic mb-12 leading-tight">
                                    Une maison ancienne, <br />
                                    <span className="text-rolex-green brightness-150">saine et modernisée.</span>
                                </h2>
                                <p className="text-2xl font-serif italic text-paper/60 leading-relaxed mb-16">
                                    Notre maison a été construite en 1903 avec tout le bon sens des maisons anciennes de caractère. Les concepts modernes de maisons bioclimatiques semblent avoir été respectés avant l'heure !
                                </p>

                                <ul className="space-y-12">
                                    {[
                                        { icon: <HouseLine size={32} weight="thin" />, text: "Façade Nord enterrée pour la fraîcheur l'été et la douceur l'hiver." },
                                        { icon: <Sun size={32} weight="thin" />, text: "Baies vitrées plein Sud protégées par l'avancée du toit l'été et bien exposées l'hiver lorsque le soleil est plus bas." },
                                        { icon: <Tree size={32} weight="thin" />, text: "Arbres feuillus côté soleil et persistants côté Ouest." }
                                    ].map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="flex gap-8 group"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-rolex-gold/20 group-hover:border-rolex-gold transition-all duration-700">
                                                <div className="text-rolex-gold">{item.icon}</div>
                                            </div>
                                            <p className="text-xl font-serif italic text-paper/40 group-hover:text-paper transition-colors duration-700 self-center">
                                                {item.text}
                                            </p>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative pt-20">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative aspect-[3/4] rounded-sm overflow-hidden border-[1px] border-white/10 shadow-2xl"
                                >
                                    <Image src="/photos/chalet/chalet (14).jpg" alt="Détail Intérieur" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000" />
                                </motion.div>
                                <div className="absolute top-0 right-0 p-12 bg-white shadow-2xl rounded-sm italic font-serif text-xl text-ink max-w-[250px] rotate-3">
                                    "Dans les années 60, la « cave » a été convertie en salon et cuisine, accessible par un petit escalier sombre qu’on a rapidement rafraîchi !"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Le Pari Énergétique */}
            <section className="py-60 bg-paper">
                <div className="container mx-auto px-8 text-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="font-sans text-[11px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">TRANSFORMATION // 2014 — 2018</span>
                        <h2 className="text-6xl md:text-7xl font-serif italic text-ink leading-[0.85] tracking-tighter mb-12">
                            Le pari <br />de <span className="text-rolex-green">l'éco-conception.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div className="space-y-12 font-serif text-2xl italic text-ink/70 leading-relaxed font-light">
                        <p>
                            Durant nos innombrables travaux de rénovation de 2014 à 2018, nous nous sommes efforcés de respecter la structure de la maison et sa forte personnalité.
                        </p>
                        <p>
                            Un énorme travail d’isolation par l’intérieur a été réalisé (fenêtres, portes, toit, murs) avec un maximum de matériaux biologiques (fibre de bois, aluminium, bois).
                        </p>
                        <div className="p-12 bg-ink text-paper rounded-sm border-l-8 border-rolex-gold shadow-2xl">
                            <Lightning size={44} weight="thin" className="text-rolex-gold mb-8" />
                            <p className="text-3xl mb-6">30 panneaux photovoltaïques ont remplacé les tuiles du toit.</p>
                            <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-rolex-green brightness-150">RÉSULTAT</span>
                            <h4 className="text-4xl mt-2 italic text-paper font-serif">Maison à énergie positive en 2018.</h4>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-square rounded-sm overflow-hidden border-[15px] border-white shadow-2xl -rotate-1">
                            <Image src="/photos/chalet/chalet (1).jpg" alt="Le Chalet de Rozan" fill className="object-cover" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-rolex-gold/20 rounded-full animate-spin-slow pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Section 3: Pourquoi le Gîte ? */}
            <section className="py-40 bg-ink text-paper overflow-hidden">
                <div className="container mx-auto px-8 relative">
                    <div className="flex flex-col lg:flex-row gap-32 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-gold font-bold mb-10 block">POURQUOI ACCUEILLIR ?</span>
                            <h2 className="text-6xl md:text-7xl font-serif italic mb-16 leading-[0.9] tracking-tighter">
                                Le bonheur <br /><span className="text-rolex-green brightness-150">ne vaut que s'il est partagé.</span>
                            </h2>
                            <article className="font-serif text-2xl italic text-paper/50 leading-relaxed space-y-12 font-light">
                                <p>
                                    Citadins en appartement depuis toujours, nous concevons la maison comme un lieu d’accueil et de partage, ouverte aux voyageurs de passage.
                                </p>
                                <p className="text-paper/80">
                                    Pourquoi occuper 1300m² de surface et une grande maison rien que pour nous ?
                                </p>
                                <p>
                                    Et cette maison nous procure tant de bonheur : du lever de soleil sur le massif de Belledonne au coucher sur le Vercors, un jardin merveilleux, une vue dont on ne se lasse toujours pas, des planchas sur la terrasse et des baignades dans l’eau limpide.
                                </p>
                                <p className="italic underline decoration-rolex-gold/40 underline-offset-8">
                                    Ne serait-il pas dommage de garder tout ça pour soi ?
                                </p>
                            </article>
                        </div>

                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border-[1px] border-white/10 group">
                                <Image src="/photos/chalet/chalet (10).jpg" alt="Le Bassin Bio" fill className="object-cover group-hover:scale-110 transition-transform duration-[4s]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-12 left-12 right-12">
                                    <p className="text-2xl font-serif italic text-paper leading-tight">
                                        "Les revenus générés contribuent au financement et à la compensation carbone du projet."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Vos Hôtes */}
            <section className="py-60 bg-paper relative overflow-hidden">
                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="md:w-1/3 relative"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[80px_10px_80px_10px] border-[12px] border-white shadow-2xl rotate-2">
                                <Image src="/photos/céline et denis.webp" alt="Céline & Denis" fill className="object-cover" />
                            </div>
                            <div className="absolute -top-6 -left-6 bg-rolex-gold text-paper font-serif italic p-6 rounded-sm shadow-xl z-20">
                                Vos hôtes
                            </div>
                        </motion.div>

                        <div className="md:w-2/3">
                            <span className="font-sans text-[11px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">RENCONTRE</span>
                            <h2 className="text-7xl font-serif text-ink italic mb-12 tracking-tighter leading-none">Céline et Denis.</h2>
                            <article className="font-serif text-2xl italic text-ink/70 leading-relaxed font-light space-y-8">
                                <p>
                                    Nous sommes installés à Grenoble depuis 2014 et ça n’est pas pour rien ! Fans de montagne, de nature et de savoir vivre, nous souhaitons que le chalet de Rozan vive au grés des saisons et de ses occupants.
                                </p>
                                <p className="text-rolex-green brightness-75">
                                    Pour nous, l’écologie, c’est du concret et on a bien l’intention de contribuer à replacer l’homme dans la nature.
                                </p>
                                <div className="flex items-center gap-6 pt-10">
                                    <div className="h-[1px] w-12 bg-rolex-gold" />
                                    <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-ink/30 italic">97% de nos visiteurs ont semblé convaincus</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute bottom-0 right-0 p-40 opacity-[0.03] select-none pointer-events-none">
                    <span className="text-[20vw] font-serif italic -rotate-12 translate-y-20">Bienvenue</span>
                </div>
            </section>

            {/* Final CTA Archive Image */}
            <section className="py-40 bg-ink">
                <div className="container mx-auto px-8 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative w-full max-w-4xl aspect-[21/9] rounded-sm overflow-hidden group cursor-pointer"
                    >
                        <Image src="/photos/histoire/cta.png" alt="Découvrir l'histoire complète" fill className="object-cover transition-transform duration-[3s] group-hover:scale-110 opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-4xl md:text-5xl font-serif italic text-paper tracking-wider decoration-rolex-gold underline underline-offset-[20px] decoration-1">
                                L'Univers du Domaine —
                            </h3>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default HistoirePage;
