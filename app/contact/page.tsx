"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
    PaperPlaneTilt, Phone, EnvelopeSimple, MapPin,
    Clock, Question, InstagramLogo, FacebookLogo
} from "@phosphor-icons/react";

const faq = [
    { q: "L'ACCUEIL", a: "Nous vous accueillons personnellement entre 17h00 et 21h00. Une arrivée autonome est possible sur demande." },
    { q: "LA TABLE", a: "Le petit-déjeuner bio est inclus pour la Suite Belledonne. Pour le Studio, il peut être servi sur demande." },
    { q: "QUIÉTUDE", a: "Afin de garantir le silence absolu à tous nos hôtes, le domaine n'est malheureusement pas adapté aux compagnons à quatre pattes." },
];

const ContactPage = () => {
    return (
        <main className="bg-paper min-h-screen selection:bg-rolex-green selection:text-paper">
            <Navbar isLightBackground />

            <section className="pt-48 pb-40">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">

                        {/* Header */}
                        <div className="lg:col-span-12 mb-32 border-b border-ink/5 pb-24">
                            <span className="font-sans text-[12px] uppercase tracking-[0.6em] text-rolex-gold font-bold mb-10 block">NOUS CONTACTER</span>
                            <h1 className="text-7xl md:text-[130px] font-serif text-ink italic leading-[0.8] tracking-tighter mb-12">Ouvrir <br /><span className="text-rolex-green">le dialogue.</span></h1>
                        </div>

                        <div className="lg:col-span-7">
                            <form className="space-y-20">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                    <div className="space-y-6">
                                        <label className="font-sans text-[11px] uppercase tracking-[0.4em] text-rolex-gold font-bold">VOTRE NOM</label>
                                        <input type="text" className="w-full bg-transparent border-b border-ink/10 py-6 font-serif italic text-2xl focus:outline-none focus:border-rolex-green transition-colors text-ink" placeholder="Arthur de Rozan" />
                                    </div>
                                    <div className="space-y-6">
                                        <label className="font-sans text-[11px] uppercase tracking-[0.4em] text-rolex-gold font-bold">ADRESSE MAIL</label>
                                        <input type="email" className="w-full bg-transparent border-b border-ink/10 py-6 font-serif italic text-2xl focus:outline-none focus:border-rolex-green transition-colors text-ink" placeholder="contact@domaine.fr" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <label className="font-sans text-[11px] uppercase tracking-[0.4em] text-rolex-gold font-bold">OBJET DE L'ESCALE</label>
                                    <select className="w-full bg-transparent border-b border-ink/10 py-6 font-serif italic text-2xl focus:outline-none focus:border-rolex-green transition-colors appearance-none text-ink">
                                        <option>Réservation Studio Éco-chalet</option>
                                        <option>Réservation Suite Belledonne</option>
                                        <option>Demande d'informations</option>
                                    </select>
                                </div>

                                <div className="space-y-6">
                                    <label className="font-sans text-[11px] uppercase tracking-[0.4em] text-rolex-gold font-bold">MESSAGE</label>
                                    <textarea rows={6} className="w-full bg-transparent border-b border-ink/10 py-6 font-serif italic text-2xl focus:outline-none focus:border-rolex-green transition-colors text-ink leading-relaxed" placeholder="Comment pouvons-nous rendre votre séjour inoubliable ?"></textarea>
                                </div>

                                <button className="rolex-button uppercase text-[12px] tracking-[0.4em] flex items-center gap-6 group">
                                    ENVOYER LE MESSAGE —
                                    <PaperPlaneTilt size={18} weight="thin" className="group-hover:translate-x-2 transition-transform duration-500" />
                                </button>
                            </form>
                        </div>

                        <div className="lg:col-span-1"></div>

                        {/* Info Side */}
                        <div className="lg:col-span-4 space-y-32">
                            <div className="space-y-16">
                                <div className="flex flex-col gap-6">
                                    <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-gold font-bold">LE DOMAINE</span>
                                    <p className="font-serif text-3xl italic text-ink leading-relaxed">
                                        38700 La Tronche<br />Alpes Françaises
                                    </p>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-gold font-bold">CONVERSER</span>
                                    <p className="font-serif text-3xl italic text-rolex-green underline decoration-rolex-gold/30">+33 (0)6 XX XX XX XX</p>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-rolex-gold font-bold">SOCIAL</span>
                                    <div className="flex gap-12 text-[12px] uppercase tracking-[0.4em] font-bold text-ink">
                                        <Link href="#" className="hover:text-rolex-green transition-colors">INSTAGRAM</Link>
                                        <Link href="#" className="hover:text-rolex-green transition-colors">FACEBOOK</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Minimal FAQ Overlay */}
                            <div className="pt-32 border-t border-ink/5 space-y-16">
                                <h4 className="font-sans text-[11px] uppercase tracking-[0.6em] text-ink/20 font-bold italic">QUELQUES RÉPONSES</h4>
                                {faq.map((item, idx) => (
                                    <div key={idx} className="space-y-6 group">
                                        <h5 className="font-serif text-2xl italic text-ink group-hover:text-rolex-green transition-colors">{item.q}</h5>
                                        <p className="font-serif text-lg italic text-ink/50 leading-relaxed font-light">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ContactPage;
