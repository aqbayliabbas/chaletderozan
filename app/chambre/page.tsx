"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
    Users, Coffee, WifiHigh, Mountains,
    Television, ShieldCheck, ArrowLeft, CheckCircle
} from "@phosphor-icons/react";
import Link from "next/link";

const features = [
    { icon: <Users size={18} weight="thin" />, label: "CAPACITÉ", detail: "2 HÔTES" },
    { icon: <Coffee size={18} weight="thin" />, label: "ACCUEIL", detail: "PETIT DÉJEUNER BIO" },
    { icon: <WifiHigh size={18} weight="thin" />, label: "CONNECTIVITÉ", detail: "FIBRE HAUTE DENSITÉ" },
    { icon: <Mountains size={18} weight="thin" />, label: "HORIZON", detail: "VUE BELLEDONNE" },
    { icon: <Television size={18} weight="thin" />, label: "ÉQUIPEMENT", detail: "SMART TV 43\"" },
    { icon: <ShieldCheck size={18} weight="thin" />, label: "EXPÉRIENCE", detail: "PISCINE BIOLOGIQUE" },
];

const ChambrePage = () => {
    return (
        <main className="bg-paper min-h-screen selection:bg-rolex-green selection:text-paper">
            <Navbar />

            {/* Hero Header */}
            <section className="pt-48 pb-24">
                <div className="container mx-auto px-8">
                    <Link href="/" className="inline-flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.4em] text-ink/30 font-bold mb-16 hover:text-rolex-gold transition-colors group">
                        <ArrowLeft size={16} weight="thin" className="group-hover:-translate-x-2 transition-transform" />
                        RETOUR AU DOMAINE
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-5">
                            <span className="font-sans text-[12px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">HÉBERGEMENT // II</span>
                            <h1 className="text-7xl md:text-[100px] font-serif text-ink mb-14 italic leading-[0.85] tracking-tighter">La Chambre <br /><span className="text-rolex-green">Belledonne.</span></h1>
                            <p className="text-3xl font-serif text-ink italic leading-relaxed mb-16 opacity-70">
                                "Une suite d'élégance suspendue, logée au cœur de la demeure originelle de 1903."
                            </p>

                            <div className="pt-16 border-t border-ink/5 max-w-sm">
                                <div className="flex justify-between items-end mb-12">
                                    <span className="text-6xl font-serif italic text-ink">75€</span>
                                    <span className="font-sans text-[11px] uppercase tracking-widest text-ink/30 font-bold mb-3">PAR NUITÉE</span>
                                </div>
                                <button className="rolex-button w-full uppercase text-[11px] tracking-[0.4em] shadow-3xl">
                                    RÉSERVER LA SUITE
                                </button>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-7"
                        >
                            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.3)] border-[12px] border-white rotate-[1deg]">
                                <Image src="/photos/chalet/chalet (4).jpg" alt="Chambre Belledonne" fill className="object-cover" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-40 bg-white border-y border-ink/5">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">

                        {/* Icons Bar */}
                        <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-6 gap-16 mb-40 border-b border-ink/5 pb-32 text-center">
                            {features.map((f, i) => (
                                <div key={i} className="flex flex-col items-center gap-8 group">
                                    <div className="text-rolex-gold transition-transform group-hover:scale-110 duration-500">{f.icon}</div>
                                    <div>
                                        <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink font-bold mb-3">{f.label}</h4>
                                        <p className="font-serif italic text-xl text-rolex-green">{f.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-8">
                            <article className="font-serif text-3xl italic text-ink/80 leading-[1.6] space-y-16 max-w-4xl">
                                <p>
                                    Située au premier étage du chalet historique, la suite Belledonne est une ode à la clarté. Ses fenêtres centenaires cadrent les sommets comme des tableaux de maîtres, changeant au gré des saisons.
                                </p>
                                <div className="h-px w-32 bg-rolex-gold" />
                                <p className="text-2xl">
                                    Nous avons conservé le parquet d'origine et la pierre apparente pour préserver l'âme du lieu, tout en intégrant discrètement les technologies du futur. C'est ici que l'histoire rencontre l'innovation.
                                </p>
                            </article>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="p-14 bg-paper border border-ink/5 shadow-2xl relative">
                                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-rolex-gold/30" />
                                <h4 className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-gold font-bold mb-12">PRIVILÈGES</h4>
                                <ul className="space-y-8 font-serif italic text-2xl text-ink/80">
                                    <li className="flex items-start gap-4">
                                        <CheckCircle size={24} weight="thin" className="text-rolex-green shrink-0 mt-1" />
                                        Petit-déjeuner local servi en terrasse
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle size={24} weight="thin" className="text-rolex-green shrink-0 mt-1" />
                                        Accès au bassin biologique filtré
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle size={24} weight="thin" className="text-rolex-green shrink-0 mt-1" />
                                        Jardin panoramique de 1300m²
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle size={24} weight="thin" className="text-rolex-green shrink-0 mt-1" />
                                        Parking privé avec borne de recharge
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ChambrePage;
