"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
    Users, ArrowsOut, Tree, Mountains,
    CookingPot, Television, ArrowLeft
} from "@phosphor-icons/react";
import Link from "next/link";

const features = [
    { icon: <Users size={18} weight="thin" />, label: "CAPACITÉ", detail: "2 HÔTES" },
    { icon: <ArrowsOut size={18} weight="thin" />, label: "SURFACE", detail: "28 M²" },
    { icon: <Tree size={18} weight="thin" />, label: "EXTÉRIEUR", detail: "TERRASSE PRIVATIVE" },
    { icon: <Mountains size={18} weight="thin" />, label: "HORIZON", detail: "CHAÎNE DE BELLEDONNE" },
    { icon: <CookingPot size={18} weight="thin" />, label: "ART DE VIVRE", detail: "CUISINE ÉQUIPÉE" },
    { icon: <Television size={18} weight="thin" />, label: "DÉTENTE", detail: "SMART TV 4K" },
];

const StudioPage = () => {
    return (
        <main className="bg-paper min-h-screen selection:bg-rolex-green selection:text-paper">
            <Navbar />

            {/* High-End Header */}
            <section className="pt-48 pb-24">
                <div className="container mx-auto px-8">
                    <Link href="/" className="inline-flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.4em] text-ink/30 font-bold mb-16 hover:text-rolex-gold transition-colors group">
                        <ArrowLeft size={16} weight="thin" className="group-hover:-translate-x-2 transition-transform" />
                        RETOUR AU DOMAINE
                    </Link>

                    <div className="max-w-5xl mb-24">
                        <span className="font-sans text-[12px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">HÉBERGEMENT // I</span>
                        <h1 className="text-7xl md:text-[120px] font-serif text-ink mb-14 leading-[0.85] tracking-tighter italic">Le Studio <br /><span className="text-rolex-green">Éco-chalet.</span></h1>
                        <div className="w-32 h-px bg-rolex-gold" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-8 relative aspect-[16/9] rounded-sm overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[10px] border-white"
                        >
                            <Image src="/photos/chalet/chalet (24).jpg" alt="Le Studio" fill className="object-cover" />
                        </motion.div>
                        <div className="lg:col-span-4 self-center">
                            <p className="text-3xl font-serif text-ink italic leading-[1.3] mb-12 opacity-80">
                                "Une immersion dans l'essence alpine, où chaque fibre de bois raconte le respect de la terre."
                            </p>
                            <div className="flex items-center gap-6">
                                <span className="font-sans text-[10px] uppercase tracking-widest text-rolex-gold font-bold">ORIENTÉ SUD</span>
                                <div className="w-1.5 h-1.5 bg-rolex-green rounded-full" />
                                <span className="font-sans text-[10px] uppercase tracking-widest text-rolex-gold font-bold">VUE 4 MASSIFS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="py-40 bg-white border-y border-ink/5">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">

                        {/* Features Grid */}
                        <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-6 gap-16 mb-40 border-b border-ink/5 pb-32 text-center">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center gap-8 group"
                                >
                                    <div className="text-rolex-gold transition-transform group-hover:scale-110 duration-500">{f.icon}</div>
                                    <div>
                                        <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink font-bold mb-3">{f.label}</h4>
                                        <p className="font-serif italic text-xl text-rolex-green">{f.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="lg:col-span-7">
                            <h2 className="text-5xl font-serif text-ink mb-16 italic text-rolex-green">L'Âme de l'Espace</h2>
                            <div className="font-serif text-2xl font-light text-ink/70 leading-relaxed space-y-12 italic">
                                <p>
                                    Inauguré lors de la métamorphose du domaine en 2018, ce studio indépendant de 28m² est un hommage à la construction originelle. Ici, le béton n'a pas droit de cité. Nous avons privilégié les enduits à la terre, les isolants en fibre de bois et le mélèze local.
                                </p>
                                <div className="h-px w-20 bg-rolex-gold/30" />
                                <p>
                                    Directement ouvert sur une terrasse privée, l'espace abolit la frontière entre intérieur et extérieur. Le matin, la chaîne du Belledonne s'invite à votre table pour un réveil en apesanteur.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-1"></div>

                        <div className="lg:col-span-4">
                            <div className="apple-glass p-14 rounded-sm border border-ink/5 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-rolex-green" />
                                <h4 className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-gold font-bold mb-10">CONFORT & SERVICES</h4>
                                <ul className="space-y-8 font-serif text-xl italic text-ink/80">
                                    <li className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-rolex-green rounded-full" />
                                        Literie d'Exception (160x200)
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-rolex-green rounded-full" />
                                        Cuisine Signature Compacte
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-rolex-green rounded-full" />
                                        Douche en Pierre Naturelle
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-rolex-green rounded-full" />
                                        WiFi 6 & Connectivité Pro
                                    </li>
                                </ul>

                                <div className="mt-20 pt-16 border-t border-ink/5">
                                    <div className="flex justify-between items-end mb-10">
                                        <span className="text-5xl font-serif italic text-ink">95€</span>
                                        <span className="font-sans text-[10px] uppercase tracking-widest text-ink/30 font-bold mb-2">PAR NUITÉE</span>
                                    </div>
                                    <button className="rolex-button w-full uppercase text-[11px] tracking-[0.4em] rounded-sm">
                                        VÉRIFIER LES DATES
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default StudioPage;
