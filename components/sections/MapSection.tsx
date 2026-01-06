"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, FirstAid, NavigationArrow, Mountains, Compass } from "@phosphor-icons/react";

const locations = [
    { icon: <FirstAid size={18} weight="thin" />, title: "CHU Grenoble", dist: "5' en voiture" },
    { icon: <NavigationArrow size={18} weight="thin" />, title: "Centre Ville", dist: "15' en voiture" },
    { icon: <Mountains size={18} weight="thin" />, title: "Stations de Ski", dist: "35' en voiture" },
    { icon: <Compass size={18} weight="thin" />, title: "Randonnées", dist: "Départ immédiat" },
];

const MapSection = () => {
    return (
        <section className="py-40 bg-paper border-t border-ink/5 overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="flex flex-col lg:flex-row gap-32 items-center">
                    <div className="lg:w-1/2">
                        <span className="font-sans text-[11px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">ACCÈS & SITUATION</span>
                        <h2 className="text-6xl md:text-8xl font-serif text-ink mb-14 leading-[0.85] tracking-tighter italic text-rolex-green">Entre ville <br /> & cimes.</h2>
                        <p className="text-2xl text-ink/70 font-serif font-light mb-20 leading-relaxed italic">
                            "Sur les hauteurs de La Tronche, le chalet offre un refuge silencieux tout en restant connecté au cœur battant de la métropole grenobloise."
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            {locations.map((loc, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-8 py-6 border-b border-ink/5 group"
                                >
                                    <div className="text-rolex-gold transition-transform group-hover:scale-110 duration-500">
                                        {loc.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-sans text-[11px] uppercase tracking-[0.3em] text-ink font-bold mb-1">{loc.title}</h4>
                                        <p className="font-serif italic text-ink/40">{loc.dist}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Minimal Map Illustration - Apple style shadow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-1/2 relative w-full aspect-square bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-sm overflow-hidden flex items-center justify-center border border-ink/5"
                    >
                        {/* Subtle Cartography background */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none grayscale">
                            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="0.5" fill="none" />
                                <circle cx="50" cy="50" r="30" stroke="black" strokeWidth="0.5" fill="none" />
                                <line x1="50" y1="0" x2="50" y2="100" stroke="black" strokeWidth="0.5" />
                                <line x1="0" y1="50" x2="100" y2="50" stroke="black" strokeWidth="0.5" />
                            </svg>
                        </div>

                        <div className="relative text-center">
                            <div className="w-20 h-20 bg-rolex-green rounded-full mx-auto flex items-center justify-center text-paper mb-8 shadow-2xl relative">
                                <div className="absolute inset-0 bg-rolex-green rounded-full animate-ping opacity-20" />
                                <MapPin size={32} weight="thin" />
                            </div>
                            <h3 className="text-4xl font-serif text-ink mb-3 italic">Le Domaine de Rozan</h3>
                            <p className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-gold font-bold">38700 LA TRONCHE, FRANCE</p>
                        </div>

                        {/* Corner deco */}
                        <div className="absolute top-10 right-10 flex flex-col items-end gap-2 text-[10px] uppercase font-bold text-ink/20 tracking-widest">
                            <span>LAT 45.2155 N</span>
                            <span>LON 5.7483 E</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
