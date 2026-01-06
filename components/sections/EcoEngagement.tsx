"use client";

import React from "react";
import { motion } from "framer-motion";

const EcoEngagement = () => {
    return (
        <section className="py-40 bg-paper border-t border-ink/5">
            <div className="container mx-auto px-8">
                <div className="flex flex-col lg:flex-row items-center gap-32">
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="w-10 h-px bg-rolex-gold"></span>
                            <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-gold font-bold">L'ENGAGEMENT</span>
                        </div>

                        <h2 className="text-6xl md:text-7xl font-serif text-ink mb-12 leading-[0.9] tracking-tighter italic text-rolex-green">
                            Demain s'écrit <br /> au présent.
                        </h2>

                        <p className="text-2xl text-ink/70 font-serif font-light mb-16 leading-relaxed italic">
                            "En 2014, nous avons entrepris de redéfinir le luxe : celui de vivre dans une maison centenaire capable de produire sa propre énergie."
                        </p>

                        <div className="grid grid-cols-2 gap-16 border-t border-ink/10 pt-16">
                            <div>
                                <span className="text-5xl font-serif italic text-rolex-green block mb-4">30</span>
                                <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-ink/50 font-bold leading-tight">
                                    PANNEAUX SOLAIRES <br />INTÉGRÉS AU TOIT
                                </p>
                            </div>
                            <div>
                                <span className="text-5xl font-serif italic text-rolex-green block mb-4">100%</span>
                                <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-ink/50 font-bold leading-tight">
                                    ISOLATION EN FIBRES <br />BIOLOGIQUES
                                </p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-1/2 relative aspect-square bg-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] flex items-center justify-center p-20 overflow-hidden"
                    >
                        {/* Minimalist technical illustration badge */}
                        <div className="absolute inset-0 border-[40px] border-paper"></div>
                        <div className="relative z-10 text-center">
                            <div className="w-24 h-24 border border-rolex-gold rounded-full mx-auto mb-10 flex items-center justify-center group">
                                <div className="w-16 h-16 bg-rolex-green rounded-full transition-transform group-hover:scale-90 duration-700"></div>
                            </div>
                            <span className="font-serif text-2xl italic text-ink/30 block mb-2">Since 1903</span>
                            <div className="h-px w-20 bg-rolex-gold mx-auto mb-10"></div>
                            <h3 className="text-3xl font-serif italic text-ink mb-4">HAUTE PERFORMANCE</h3>
                            <p className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-green font-bold">CERTIFIÉ POSITIF</p>
                        </div>

                        {/* Subtle grain texture specific to this box */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EcoEngagement;
